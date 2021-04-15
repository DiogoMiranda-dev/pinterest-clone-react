import React, { useEffect } from 'react';

export default function GridItem({ item }) {
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

  useEffect(() => {
    setupAnimationCycle({
      timePerScreen: 3000, // ms
      exitDelay: 200 * 7, // ms
    });
  }, []);

  return (
    <>
      {item}
     {/*  {item.items.forEach((item, key) => {
        let { urls } = item[key];
        console.log(urls.regular);
        <div className="column animate-before">
          <div
            key={key}
            className="item"
            style={{
              backgroundImage: `url(${urls?.regular}) `,
            }}
          >
          </div>
        </div>;
      })} */}
    </>
  );
}
