import "./App.css";
import Routing from "./routes/Routing";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <Routing />

      <Footer />
    </div>
  );
}

export default App;
