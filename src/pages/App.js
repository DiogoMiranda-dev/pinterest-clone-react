import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
/* import Grid from '../components/Grid'; */
import unsplash from '../api/unsplash';

import './App.css';

function App() {
  const [imagens, setImagens] = useState([]);

  const getImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos?per_page=30', {
      params: {
        query: term,
      },
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = ['ocean', 'Tokyo', 'dogs', 'girls']; //'Tokyo', 'dogs', 'girls'
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
      setImagens(pinData);
    });
  };

  /* Chama os registro de image da API */
  useEffect(() => {
    getNewPins();
  }, []);

  function enterScreen(index) {
    const headings = document.querySelectorAll('.heading .wrapper .text');
    const grids = document.querySelectorAll('.grid');
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    grid.classList.add('active');

    gridColumns.forEach((element) => {
      element.classList.remove('animate-before', 'animate-after');
    });

    heading.classList.remove('animate-before', 'animate-after');
  }

  function exitScreen(index, exitDelay) {
    const headings = document.querySelectorAll('.heading .wrapper .text');
    const grids = document.querySelectorAll('.grid');
    const grid = grids[index];
    const heading = headings[index];
    const gridColumns = grid.querySelectorAll('.column');

    gridColumns.forEach((element) => {
      element.classList.add('animate-after');
    });

    heading.classList.add('animate-after');

    setTimeout(() => {
      grid.classList.remove('active');
    }, exitDelay);
  }

  function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const grids = document.querySelectorAll('.grid');
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0;

    function nextCycle() {
      const currentIndex = nextIndex;

      enterScreen(currentIndex);

      setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

      nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
    }

    nextCycle();

    setInterval(nextCycle, cycleTime);
  }

  // Executa o código para exibir o efeito de classes
  useEffect(() => {
    setupAnimationCycle({
      timePerScreen: 3000, // ms
      exitDelay: 200 * 7, // ms
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="heading">
        <span className="text">Encontre sua próxima</span>

        <div className="wrapper">
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(0, 118, 211)',
              }}
            >
              ideia para uma jantar especial
            </h2>
          </div>
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(97, 140, 123)',
              }}
            >
              ideia de look de verão
            </h2>
          </div>
          <div className="offset">
            <h2
              className="text animate-before"
              style={{
                color: 'rgb(194, 139, 0)',
              }}
            >
              atividade para crianças
            </h2>
          </div>
          <div className="offset">
            <h2 className="text animate-before">
              Projeto do tipo faça você mesmo
            </h2>
          </div>
        </div>
      </div>

      <div className="grid-container">
       {/* Para ver o sistema funcionando comenta esse trecho abaixo, para visualizar o efeito */}
        {imagens.forEach((item) => {
          <div className="grid">
            {item.imageItems.forEach((imageItem, key) => {
              <div className="column animate-before">
                {imageItem.img.forEach((imgItem, key) => {
                  let { urls } = imgItem;
                  <div
                    key={key}
                    className="item"
                    style={{
                      backgroundImage: `url(${urls?.regular}) `,
                    }}
                  ></div>;
                })}
              </div>;
            })}
          </div>;
        })}

        {/* Para ver o sistema rodando basta descomentar o trecho abaixo e comentar o de cima */}
        {/*         <div className="grid">
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
        <div className="grid">
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="column animate-before">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
       */}
      </div>
    </div>
  );
}

export default App;
