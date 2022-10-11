import "./App.css";
import Routing from "./routes/Routing";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { useContext } from "react";
import { contentCreate } from "./context/reducer/UseReducer";
function App() {
  const data = useContext(contentCreate);
  const positionFixed = data.state.menuToggle || data.state.teamPop;

  return (
    <div
      className="App"
      style={{
        position: data.state.menuToggle ? "fixed" : "",
      }}
    >
      {data.state.teamPop ? null : <Header />}

      <Routing />

      {/* <Footer /> */}
      {data.state.teamPop ? null : <Footer />}
    </div>
  );
}

export default App;
