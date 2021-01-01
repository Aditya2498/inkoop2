import "./App.css";
import { Header } from "./Components/Header";
import { Container } from "react-bootstrap";
import {Products} from "./Components/Products.jsx";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
        <Products/>
      </Container>
    </>
  );
}

export default App;
