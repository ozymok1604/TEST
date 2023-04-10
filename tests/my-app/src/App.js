import logo from "./logo.svg";
import "./App.css";
import { MainComponent } from "./components/main-component";
import { SideMenuComponent } from "./components/side-menu";
import { Users } from "./pages/Users/Users";

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
