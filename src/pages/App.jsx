import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Footer from '../components/Footer';
import unsplash from '../api/unsplash';

import './App.css';

function App() {
  const [pins, setNewPins] = useState([]);

  useEffect(() => {
    const getImages = (term) => {
      return unsplash.get(
        'https://api.unsplash.com/search/photos?per_page=30',
        {
          params: {
            query: term,
          },
        }
      );
    };

    function getDescription(name) {
      switch (name) {
        case 'food and drink':
          return 'ideia para uma jantar especial';
        case 'dubai':
          return 'ideia para um viagem';
        case 'sports':
          return 'atividade para práticar';
        case 'beach':
          return 'ideia para ir a praia';
        default:
          break;
      }
    }

    function getColor(name) {
      switch (name) {
        case 'food and drink':
          return 'rgb(194, 139, 0)';
        case 'dubai':
          return 'rgb(224, 111, 5)';
        case 'sports':
          return 'rgb(97, 140, 123)';
        case 'beach':
          return 'rgb(0, 118, 211)';
        default:
          break;
      }
    }
    const getNewPins = () => {
      let promises = [];
      let pinData = [];

      let pins = ['food and drink', 'dubai', 'sports', 'beach'];

      pins.forEach((pinTerm, index) => {
        promises.push(
          getImages(pinTerm).then((res) => {
            let results = res.data.results;
            let items = [];
            items.push({ img: results.slice(0, 5) });
            items.push({ img: results.slice(5, 10) });
            items.push({ img: results.slice(10, 15) });
            items.push({ img: results.slice(15, 20) });
            items.push({ img: results.slice(20, 25) });
            items.push({ img: results.slice(25, 30) });
            items.push({ img: results.slice(0, 5) });
            pinData.push({
              row: index,
              name: pinTerm,
              description: getDescription(pinTerm),
              color:  getColor(pinTerm),
              imageItems: items,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setNewPins(pinData);
      });
    };

    getNewPins();
  }, []);

  return (
    <>
      <div>
        <Header />

        <Grid pins={pins} />
      </div>
      <Footer />
    </>
  );
}

export default App;
