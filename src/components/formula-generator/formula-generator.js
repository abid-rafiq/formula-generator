
import React, { useRef, useState } from 'react';
import { useAutocompleteSuggestionsQuery } from '../../app/store/reducers/product/reducers';

import './formula-generator.css';
import Tag from '../tag/tag';
import { sample } from './formula-sample';

function FormulaGenerator() {

  const baseElement = useRef();
  const [focusIndex, setFocusIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [search, setSearchedText] = useState("");
  const [formulaObject, setFormulaObject] = useState([]);
  const { data, isLoading } = useAutocompleteSuggestionsQuery();
  const operands = ["+", "-", "*", "/", "%", "(", ")"];

  const onKeyUp = (event) => {
    const focusPointer = window.getSelection().focusOffset;
    setFocusIndex(focusPointer);
    const { keyCode, key } = event;

    setSearchedText(key);
    if ((keyCode > 64 && keyCode < 91)) { // Open Autocomplete suggestions
      setShowSuggestions(true);
    }

    if (operands.includes(key)) { // Add operand
      const newformulaObject = insertAt(formulaObject, focusIndex, {
        type: "operand",
        text: key,
      })
      setFormulaObject([...newformulaObject]);
    }

    /* if (key === "Backspace" && formulaObject[focusPointer-1]) {
      formulaObject.splice(focusPointer-1, 1)
      setTimeout(() => {
        setFormulaObject([...formulaObject]);
      }, 100);
    } */
  }

  const filterData = () => {
    if (search) {
      return data.filter(x => x.name.includes(search));
    }

    return data;
  }

  const selectTag = (data) => {
    const newformulaObject = insertAt(formulaObject, focusIndex, {
      type: "tag",
      data,
    })
    setFormulaObject([...newformulaObject]);
    setShowSuggestions(false);
  }

  const insertAt = (array, index, ...elementsArray) => {
    array.splice(index, index, ...elementsArray);
    return array;
  }

  const changeValue = (value, index) => {
    if (formulaObject[index].data && formulaObject[index].data.value) {
      formulaObject[index].data.value = value;
      setFormulaObject(formulaObject);
    }
  }

  const getExpression = () => {
    try {
      const expression = formulaObject.map(x => {
        if (x.type == "tag") {
          return x.data.value
        }
        if (x.type == "operand") {
          return x.text
        }
      })
      return eval(expression.join(""));
    } catch (error) {
      return 0
    }
  }


  return (
    <div className='fmg__container'>
      <div ref={baseElement} onKeyUp={onKeyUp} className='fmg__input-wrapper' contentEditable={"true"}>
        {formulaObject.map((formula, index) => {
          if (formula.type == 'tag') {
            return <Tag onValueChange={(value) => changeValue(value, index)} data={formula.data}></Tag>
          }

          if (formula.type == 'operand') {
            return formula.text
          }
        })}
      </div>

      <div className={`fmg__autocomplete-wrapper ${showSuggestions ? "fmg__autocomplete--open" : ""}`}>
        <ul>
          {data && filterData().map((suggestion, index) => (
            <li onClick={() => selectTag(suggestion)} key={`category_${index}`} data-value={suggestion.value}>{suggestion.name}</li>
          ))}
        </ul>
      </div>

      Evaluation: {getExpression()}
    </div>
  );
}

export default FormulaGenerator;
