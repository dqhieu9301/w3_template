import './App.css';
import Header from './components/header';
import Slider from './components/content/slider';
import ContentOne from './components/content/content_one';
import ContentTwo from './components/content/content_two';
import ContenThree from './components/content/content_three';
import Information from './components/content/content_information';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ContentOne />
      <ContentTwo />
      <ContenThree />
      <Information />
    </div>
  );
}

export default App;
