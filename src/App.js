import logoIcon from "./assets/images/logo_transparent_background_icon.png";
import logo from "./assets/images/white_logo_transparent_background.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoIcon} className="App-logo" alt="logo" />
        <div>
          <img
            src={logo}
            className="logo"
            alt="logo for Freeborg Web Designs"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
