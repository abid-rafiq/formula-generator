import './App.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Content from './components/content/content';
import ProductContent from './components/content/product-content';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Content>
        <ProductContent />
      </Content>
      <Footer></Footer>
    </>
  );
}

export default App;
