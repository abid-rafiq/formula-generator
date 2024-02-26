import * as React from 'react';
import './tag.css';


function Tag({ data, onValueChange }) {

    const onKeyUp = (event) => {
        if (!isNaN(event.target.textContent)) {
            onValueChange(event.target.textContent)
        }
      }

    return (
        <div contentEditable={"false"} className='fmg__tag'>
          <span className='fmg__tag-text'>{data.name}</span>
          <span contentEditable={"true"} onKeyUp={onKeyUp} className='fmg__tag-variable'>{data.value}</span>
        </div>
    )
}

export default Tag;
