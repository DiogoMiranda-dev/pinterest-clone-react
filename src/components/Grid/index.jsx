import React from 'react';
import GridItem from '../GridItem';

function Grid(props) {
  let { pins } = props;
  return (
    <>
      <div className="heading">
        <span className="text">Encontre sua próxima</span>

        <div className="wrapper">
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(194, 139, 0)',
              }}
            >
              ideia para uma jantar especial
            </h2>
          </div>
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(223, 191, 12)',
              }}
            >
              ideia para um viagem
            </h2>
          </div>
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(97, 140, 123)',
              }}
            >
              atividade para práticar
            </h2>
          </div>
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(0, 118, 211)', 
              }}
            >
               ideia para ir a praia
             
            </h2>
          </div>
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
