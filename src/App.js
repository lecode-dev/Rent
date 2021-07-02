import "./App.css";
import Menu from "./components/menu";
import carro_1 from "./acess/images/carro_1.png";
import image_7 from "./acess/images/image_7.png";
import Pe from "./components/pe";

function App() {
  return (
    <div className="App">
      <Menu /> 
      <img
        src={carro_1}
        style={{
          width: "1920px",
          height: "1028px",
          left: "0px",
          top: "52px",
        }}
      />
      <img
        src={image_7}
        style={{
          width: "794px",
          height: "351px",
          left: "565px",
          top: "1167px",
        }}
      />
      <footer> <Pe/></footer>
    </div>
  );
}

export default App;
