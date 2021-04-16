import React, { useEffect } from 'react';
import ImageItems from '../ImageItems';

export default function GridItem(props) {
  let { imageItems } = props;

  const load = (event) => {
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
    setupAnimationCycle({
      timePerScreen: 3000, // ms
      exitDelay: 300 * 7, // ms
    });
  };

  // Executa o código para exibir o efeito de classes
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="grid">
      {imageItems.map((item, key) => {
        return <ImageItems key={key} item={item.img} />;
      })}
    </div>
  );
}
