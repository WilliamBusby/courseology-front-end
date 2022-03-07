import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Main from "./containers/Main/Main";
import tempData from "./assets/tempData";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Main coursesArr={tempData} />
    </div>
  );
}

export default App;
