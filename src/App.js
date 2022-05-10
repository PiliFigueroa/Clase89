import './App.css';
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Titulo } from './components/Titulo/Titulo'
import { Boton } from './components/Boton/Boton'

function App() {

  const bienvenidos = "Hola Mundo"
  const nombre = "Pilar Figueroa"
  const handleClick = () => console.log("Has dado click")
  const styles = {
    backgroundColor: "blue",
    padding: "10px 20px",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }

  return (
    <>
      {/* JSX */}
      <Navbar />
      <Titulo welcome={bienvenidos} name={nombre} />
      <Boton handleClick={handleClick} texto="Dame Click!" styles={styles} />
      {/* <Boton handleClick={handleClick} texto="Segundo boton"/> */}
      <Footer />
    </>
  );
}

export default App;