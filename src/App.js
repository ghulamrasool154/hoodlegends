import "./App.css";
import Routing from "./routes/Routing";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { useContext } from "react";
import { contentCreate } from "./context/reducer/UseReducer";
function App() {
  const data = useContext(contentCreate);

  return (
    <div
      className="App"
      // style={{
      //   overflow: data.state.menuToggle ? "hidden" : null,
      // }}
    >
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
