import React from 'react';
import GridItem from '../GridItem';

function Grid(props) {
  let { pins } = props;
  return (
    <>
      <div className="heading">
        <span className="text">Encontre sua próxima</span>

        <div className="wrapper">
          {pins.map((pin, key) => {
            return (
              <div key={key} className="offset">
                <h2
                  className="text animate-before"
                  style={{
                    color: pin.color,
                  }}
                >
                  {pin.description}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid-container">
        {pins.map((pin, key) => {
          return <GridItem key={key} imageItems={pin.imageItems} />;
        })}
      </div>
    </>
  );
}

export default Grid;
