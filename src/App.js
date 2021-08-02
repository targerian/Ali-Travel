import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import SignUp from "./components/pages/SignUp.js";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />

          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
