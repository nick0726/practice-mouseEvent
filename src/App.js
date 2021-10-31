import "./App.css";
import Canvas from "./pages/Canvas";
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import Drag from "./pages/Drag";
import DragnDrop from "./pages/DragnDrop";
import Resize from "./pages/Resize";
import Test from "./pages/Test";
import Rotate from "./pages/Rotate";
import Test1 from "./components/test/Test1";
import Test2 from "./components/test/Test2";
import Test3 from "./components/test/Test3";
import Test4 from "./components/test/Test4";
import Test5 from "./components/test/Test5";
import Test6 from "./components/test/Test6";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact={true} path="/">
          <MainPage />
        </Route>
        <Route path="/canvas">
          <Canvas />
        </Route>
        <Route path="/drag">
          <Drag />
        </Route>
        <Route path="/dragndrop">
          <DragnDrop />
        </Route>
        <Route path="/resize">
          <Resize />
        </Route>
        <Route path="/rotate">
          <Rotate />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/test1">
          <div className="page-title">
            <span>test1</span>
            <Test1 />
          </div>
        </Route>
        <Route path="/test2">
          <div className="page-title">
            <span>test2</span>

            <Test2 />
          </div>
        </Route>
        <Route path="/test3">
          <div className="page-title">
            <span>test3</span>
            <Test3 />
          </div>
        </Route>
        <Route path="/test4">
          <div className="page-title">
            <span>test4</span>
            <Test4 />
          </div>
        </Route>
        <Route path="/test5">
          <div className="page-title">
            <span>test5</span>
            <Test5 />
          </div>
        </Route>
        <Route path="/test6">
          <div className="page-title">
            <span>test6</span>
            <Test6 />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
