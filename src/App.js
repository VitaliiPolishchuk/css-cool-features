import AnimatedGradient from "./pages/animated-gradient/AnimatedGradient";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import AdvancedCssHover from "./pages/advanced-css-hover/AdvancedCssHover";
import PositionStickyPushOut from "./pages/position-sticky-pushing-out/PositionStickyPushOut";
import PositionStickyBottom from "./pages/position-sticky-hiding-bottom/PositionStickyBottom";
import Flipping3d from "./pages/3d-flipping/Flipping3d";
import ExpandingSearchBar from "./pages/expanding-search-bar/ExpandingSearchBar";
import SliceThroughEffect from "./pages/slice-through-effect/SliceThroughEffect";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/animated-gradient" component={AnimatedGradient} />
        <Route path="/advanced-hover" component={AdvancedCssHover} />
        <Route
          path="/position-sticky-push-out"
          component={PositionStickyPushOut}
        />
        <Route exact path="/" component={Home} />
        <Route
          path="/position-sticky-hiddin-bottom"
          component={PositionStickyBottom}
        />
        <Route path="/3d-flipping" component={Flipping3d} />
        <Route path="/expanding-search-bar" component={ExpandingSearchBar} />
        <Route path="/slice-through-effect" component={SliceThroughEffect} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
