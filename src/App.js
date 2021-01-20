import { useEffect, useRef, useState } from 'react';
import './App.scss';

const WORLD_WIDTH = 32;
const WORLD_HEIGHT = 24;
const DIRECTION = {
  UP: 0,
  DOWN: 1,
  RIGHT: 2,
  LEFT: 3,
};
const DELAY = 50;
const SNAKES = [4, 3, 2, 1, 0];
const FOODS = [];

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [snakes, setSnakes] = useState(SNAKES);
  const [foods, setFoods] = useState(FOODS);
  const [lose, setLose] = useState(false);
  const [eat, setEat] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const directionRef = useRef();
  const disableEventRef = useRef();

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
  };

  const generateRandomFoods = () => {
    const newFoods = [];

    do {
      let newFood = getRandomInt(0, WORLD_WIDTH * WORLD_HEIGHT);

      if (snakes.indexOf(newFood) === -1 && newFoods.indexOf(newFood) === -1) {
        newFoods.push(newFood);
      }
    } while(newFoods.length < 3);

    setFoods(newFoods);
  }

  const generateFoods = (currentSnakes, currentFoods) => {
    let newFood = 0;

    do {
      newFood = getRandomInt(0, WORLD_WIDTH * WORLD_HEIGHT);
    } while (currentSnakes.indexOf(newFood) !== -1 || currentFoods.indexOf(newFood) !== -1);

    const newFoods = [...currentFoods];

    newFoods.push(newFood);

    setFoods(newFoods);
  };

  const move = () => {
    if (lose) {
      return;
    }

    let newSnakes = [...snakes];
    let head = newSnakes[0];

    switch(directionRef.current) {
      case DIRECTION.RIGHT:
        if ((head + 1) % WORLD_WIDTH === 0) {
          head -= WORLD_WIDTH - 1;
        } else {
          head++;
        }

        break;
      case DIRECTION.LEFT:
        if (head % WORLD_WIDTH === 0) {
          head += WORLD_WIDTH - 1;
        } else {
          head--;
        }

        break;
      case DIRECTION.UP:
        if (head < WORLD_WIDTH) {
          head += (WORLD_HEIGHT - 1) * WORLD_WIDTH;
        } else {
          head -= WORLD_WIDTH;
        }

        break;
      case DIRECTION.DOWN:
        if (head >= WORLD_WIDTH * (WORLD_HEIGHT - 1)) {
          head -= WORLD_WIDTH * (WORLD_HEIGHT - 1);
        } else {
          head += WORLD_WIDTH;
        }

        break;
      default:
        break;
    }

    if (snakes.indexOf(head) !== -1) {
      if (eat > highestScore) {
        setHighestScore(eat);
      }

      setLose(true);

      return;
    }

    const eatenFoodIndex = foods.indexOf(head);

    if (eatenFoodIndex !== -1) {
      newSnakes = [head].concat(newSnakes);

      let newFoods = [...foods];
      newFoods.splice(eatenFoodIndex, 1);

      generateFoods(newSnakes, newFoods);

      setEat(eat + 1);
    } else {
      newSnakes = [head].concat(newSnakes.slice(0, newSnakes.length - 1));
    }

    setSnakes(newSnakes);
  };

  const findFood = () => {
    if (disableEventRef.current) {
      return;
    }

    const food = foods[0];
    const head = snakes[0];
   
    const headHorizontalIndex = head % WORLD_WIDTH;
    const foodHorizontalIndex = food % WORLD_WIDTH;

    let newDirection = null;

    if (headHorizontalIndex < foodHorizontalIndex) {
      if (directionRef.current === DIRECTION.LEFT) {
        newDirection = DIRECTION.UP;
      } else {
        newDirection = DIRECTION.RIGHT;
      }
    } else if (headHorizontalIndex > foodHorizontalIndex) {
      if (directionRef.current === DIRECTION.RIGHT) {
        newDirection = DIRECTION.UP;
      } else {
        newDirection = DIRECTION.LEFT;
      }
    } else {
      const headVerticalIndex = Math.ceil(head / WORLD_HEIGHT);
      const foodVerticalIndex = Math.ceil(food / WORLD_HEIGHT);
  
      if (headVerticalIndex < foodVerticalIndex) {
        if (directionRef.current === DIRECTION.UP) {
          newDirection = DIRECTION.RIGHT;
        } else {
          newDirection = DIRECTION.DOWN;
        }
      } else if (headVerticalIndex > foodVerticalIndex) {
        if (directionRef.current === DIRECTION.DOWN) {
          newDirection = DIRECTION.RIGHT;
        } else {
          newDirection = DIRECTION.UP;
        }
      }
    }

    let newHead = null;

    switch (newDirection) {
      case DIRECTION.RIGHT:
        if ((head + 1) % WORLD_WIDTH === 0) {
          newHead = head - (WORLD_WIDTH - 1);
        } else {
          newHead = head + 1;
        }

        break;
      case DIRECTION.LEFT:
        if (head % WORLD_WIDTH === 0) {
          newHead = head + (WORLD_WIDTH - 1);
        } else {
          newHead = head - 1;
        }

        break;
      case DIRECTION.UP:
        if (head < WORLD_WIDTH) {
          newHead = head + ((WORLD_HEIGHT - 1) * WORLD_WIDTH);
        } else {
          newHead = head - WORLD_WIDTH;
        }

        break;
      case DIRECTION.DOWN:
        if (head >= WORLD_WIDTH * (WORLD_HEIGHT - 1)) {
          newHead = head - (WORLD_WIDTH * (WORLD_HEIGHT - 1));
        } else {
          newHead = head + WORLD_WIDTH;
        }

        break;
      default:
        break;
    }

    if (newHead === null) {
      return;
    }

    if (snakes.indexOf(newHead) !== -1) {
      return;
    }

    directionRef.current = newDirection;
  };

  const keydownHandler = (e) => {
    if (disableEventRef.current) {
      return;
    }

    switch (e.code) {
      case 'ArrowRight':
        if (directionRef.current === DIRECTION.LEFT) {
          return;
        }

        directionRef.current = DIRECTION.RIGHT;

        break;
      case 'ArrowLeft':
        if (directionRef.current === DIRECTION.RIGHT) {
          return;
        }

        directionRef.current = DIRECTION.LEFT;

        break;
      case 'ArrowUp':
        if (directionRef === DIRECTION.DOWN) {
          return;
        }

        directionRef.current = DIRECTION.UP;

        break;
      case 'ArrowDown':
        if (directionRef.current === DIRECTION.UP) {
          return;
        }

        directionRef.current = DIRECTION.DOWN;

        break;
      default:
        break;
    }

    disableEventRef.current = true;

    setTimeout(() => {
      disableEventRef.current = false;
    }, DELAY);
  };

  useEffect(() => {
    directionRef.current = DIRECTION.RIGHT;
    disableEventRef.current = false;

    generateRandomFoods();

    document.addEventListener('keydown', keydownHandler);
  }, []);

  useInterval(() => {
    findFood();
    move();
  }, DELAY);

  const renderWorld = () => {
    const rows = [];

    for (let i = 0, ii = WORLD_HEIGHT; i < ii; i++) {
      const cols = [];

      for (let j = 0, jj = WORLD_WIDTH; j < jj; j++) {
        const index = i * WORLD_WIDTH + j;
        let cellClassName = '';

        if (snakes.indexOf(index) !== -1) {
          cellClassName = ' snake';
        } else if (foods.indexOf(index) !== -1) {
          cellClassName = ' food';
        }

        cols.push(
          <div key={`cell-${i}-${j}`} className={`w-cell${cellClassName}`}></div>
        );
      }

      rows.push(
        <div key={`row-${i}`} className="w-row">{cols}</div>
      );
    }

    return (
      <div className="world">{rows}</div>
    );
  };

  const playAgainHandler = () => {
    setSnakes(SNAKES);
    generateRandomFoods();
    setLose(false);
    setEat(0);
    directionRef.current = DIRECTION.RIGHT;
  };

  return (
    <div className="app">
      <div className="world-container">
        {renderWorld()}
        <div className="info">
          <span>react-snake</span>
          <br />
          <span>-----</span>
          <br />
          <span>highest score: {highestScore}</span>
          <br />
          <span>-----</span>
          <br />
          <span>food eaten: {eat}</span>
          <br />
          <span>snake's size: {snakes.length}</span>
          {
            lose && (
              <>
                <br />
                <span>-----</span>
                <br />
                <span>lose, </span>
                <span className="play-again" onClick={playAgainHandler}>play again</span>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
