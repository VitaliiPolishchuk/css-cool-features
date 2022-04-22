import React from "react";

const AdvancedCssHover = () => {
  return (
    <div className="advanced-css-hover">
      <div className="content">
        <h1 className="title">
          Really fun hover effects with transform-origin
        </h1>
        <a class="fancy-link" href="#">
          It works well with links
        </a>{" "}
        and even with{" "}
        <a class="fancy-link" href="#">
          short ones
        </a>{" "}
        too.
      </div>

      <div className="content content--buttons">
        <button className="button button-one">Lorem</button>
        <button className="button button-two">Quasi</button>
        <button className="button button-three">Nemotap</button>
      </div>

      <div style={{ marginBottom: "100vh" }} className="content content--card">
        <div className="card">
          <h3 className="card__title">Lorem ipsum dolor</h3>
          <p className="card__body">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCssHover;
