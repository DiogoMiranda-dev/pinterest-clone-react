import React from 'react';
import GridItem from '../GridItem';

function Grid({imagens}) {
  return (
    <>
      {imagens.forEach((item) => {
          <div className="grid">
            {item}
      {/* <GridItem items={item} /> */}
          </div>;
        })}
    </>
  );
}

export default Grid;
