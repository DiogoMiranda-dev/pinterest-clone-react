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
