import { Routes, Route } from "react-router-dom";
import { People } from "./components/content/People";
import { Home } from "./components/content/Home";
import "./App.css";
import { NavigationBar } from "./NavigationBar";
import { Person } from "./components/content/Person";
import { BrowserRouter } from "react-router-dom";
import { persons } from "../src/data/personaj";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <div className="background px-3">
        <Routes>
          <Route
            exact
            path="/person/:id"
            element={<Person persons={persons} />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/people" element={<People />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
