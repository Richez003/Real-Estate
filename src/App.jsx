import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import './App.css'
import Companies from "../Components/Companies/companies";
import Residencies from "../Components/Residencies/Residencies";
import Value from "../Components/Value/Value";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header/>
      <Hero />
      </div>
   < Companies />
   <Residencies/>
   <Value/>
    </div>
  );
}

export default App;