import React from 'react';

export default function ImageItems(props) {
  let { item } = props;

  return (
    <div className="column animate-before">
      {item.map((element, key) => {
        let { urls } = element;
        return (
          <div
            key={key}
            className="item"
            style={{
              backgroundImage: `url(${urls?.regular}) `,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          ></div>
        );
      })}
    </div>
  );
}
