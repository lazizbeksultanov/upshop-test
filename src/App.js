import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import "@material-tailwind/react/tailwind.css";
import Test from "./pages/Test";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Map from "./pages/Map/Map";
import Accept from "./pages/Accept/Accept";
import Accepted from "./pages/Accepted/Accepted";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/accept" component={Accept} />
          <Route exact path="/accepted" component={Accepted} />
          <Route exact path="/profile" component={Profile} />
        </BrowserRouter>
    </div>
  );
}

export default App;
