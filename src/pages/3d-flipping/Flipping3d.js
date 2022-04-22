import React from "react";

const Flipping3d = () => {
  return (
    <div className="flipping-3d">
      <div className="card">
        <div className="card__content">
          <div className="card__front">
            <h3 className="card__title">The Fair</h3>
            <p className="card__subtitle">Time for some fun</p>
          </div>

          <div className="card__back">
            <p className="card__body">
              This would be some longer text that gives a description of the
              things from the other side I guess
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipping3d;
