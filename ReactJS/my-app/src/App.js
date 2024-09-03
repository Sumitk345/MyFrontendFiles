import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import Searchbar from './components/searchbar';
import Infocard from './components/infocard';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Searchbar/>
      <Cards/>
    </div>
  );
}

export default App;
