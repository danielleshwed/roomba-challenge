import React, {useState} from 'react';
import './Grid.css';

import {generateGrid} from '../../utils';

export const Grid = () => {
  const [roomba, setRoomba] = useState({
    x: 0,
    y: 0,
    rotation: 0,
    direction: {
      x: 1,
      y: 0,
    },
  });
  const grid = generateGrid(10, 10);

  const moveRoombaForward = () => {
    const newX = roomba.x + roomba.direction.x;
    const newY = roomba.y + roomba.direction.y;
    roomba.x = newX >= 0 && newX < 10 ? newX : roomba.x;
    roomba.y = newY >= 0 && newY < 10 ? newY : roomba.y;

    const newRoomba = Object.assign({}, roomba);

    setRoomba(newRoomba);
  };

  const turnRight = () => {
    if (roomba.direction.x === 1 && roomba.direction.y === 0) {
      roomba.direction.x = 0;
      roomba.direction.y = 1;
    } else if (roomba.direction.x === 0 && roomba.direction.y === 1) {
      roomba.direction.x = -1;
      roomba.direction.y = 0;
    } else if (roomba.direction.x === -1 && roomba.direction.y === 0) {
      roomba.direction.x = 0;
      roomba.direction.y = -1;
    } else if (roomba.direction.x === 0 && roomba.direction.y === -1) {
      roomba.direction.x = 1;
      roomba.direction.y = 0;
    }

    roomba.rotation = roomba.rotation === 270 ? 0 : roomba.rotation + 90;

    const newRoomba = Object.assign({}, roomba);

    setRoomba(newRoomba);
  };

  return (
    <>
      <div className="Grid">
        {grid.map((row, i) => {
          return (
            <div className="Column">
              {row.map((_, j) => {
                return (
                  <div className="Cell" id={`cell-${i}-${j}`}>
                    <div
                      className="Roomba"
                      id="roomba"
                      style={{
                        transform: `rotate(${roomba.rotation}deg)`,
                      }}
                    >
                      {roomba.x === i && roomba.y === j ? '👉' : ''}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <button onClick={moveRoombaForward}>More Forward</button>
      <button onClick={turnRight}>Turn Right</button>
    </>
  );
};
