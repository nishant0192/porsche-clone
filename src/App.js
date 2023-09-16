import "./App.css";
import Caraousel from "./components/Caraousel";
import Grids from "./components/Grids";
import Navbar from "./components/Navbar";
// import logo from "./logo.png";

function App() {
  return (
    <>
      <Navbar />
      <Caraousel />
      <h2 style={{marginTop:'5rem', fontSize:'3rem' , marginLeft:'5rem'}}>Models</h2>
      <Grids />
      <h2 style={{marginTop:'5rem', fontSize:'3rem' , marginLeft:'5rem'}}>Find a Porsche near you</h2>
    </>
  );
}

export default App;
