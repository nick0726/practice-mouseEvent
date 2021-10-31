import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div id="nav-container">
      <div className="box top">
        <div className="title">
          <img src="" alt="logo"></img>
          <Link to="/test">Title</Link>
        </div>
        <div className="auth">
          <span>Login</span>
          <span>Join</span>
        </div>
      </div>
      <div className="box-bottom">
        <div className="bottom b1">
          <div>
            <Link to="/">MainPage</Link>
          </div>
          <div>
            <Link to="/canvas">Canvas</Link>
          </div>
          <div>
            <Link to="/drag">Drag</Link>
          </div>
          <div>
            <Link to="/dragndrop">DND</Link>
          </div>
          <div>
            <Link to="/resize">Resize</Link>
          </div>
          <div>
            <Link to="/rotate">Rotate</Link>
          </div>
        </div>
        <div className="bottom b2">
          <div>
            <Link to="/test1">test1</Link>
          </div>
          <div>
            <Link to="/test2">test2</Link>
          </div>
          <div>
            <Link to="/test3">test3</Link>
          </div>
          <div>
            <Link to="/test4">test4</Link>
          </div>
          <div>
            <Link to="/test5">test5</Link>
          </div>
          <div>
            <Link to="/test6">test6</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
