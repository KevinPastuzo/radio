import './App.css';
import './estilo.css'
import img0 from  "./img/rey_atanagildo.png";
import img1 from  "./img/rey_ataulfo.png";
import img2 from  "./img/rey_ervigio.png";

function App() {
  let nombres=["akko","godku","nara"];
 
  return (
    <div className="contenedor">
      <div className="caja">
        <img src={img0}/>
        <div className="nombres">{nombres[0]}</div>
      </div>
      <div className="caja">
        <img src={img1}/>
        <div className="nombres">{nombres[1]}</div>
      </div>
      <div className="caja">
        <img src={img2}/>
        <div className="nombres">{nombres[2]}</div>
      </div>
      
    </div>
  );
}

export default App;
