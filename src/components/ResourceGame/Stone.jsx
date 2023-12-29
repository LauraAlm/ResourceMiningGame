import React from 'react';

function Stone({ stone, setStone, limitStone }) {
  return (
    <div
      className='card'
      onClick={() => {
        if (stone + 1 <= limitStone) {
          setStone(stone + 1);
        }
      }}
    >
      <img
        src='https://static.vecteezy.com/system/resources/previews/019/527/056/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-rock-free-png.png'
        alt='Stone pixel art'
        className='item-img'
      />
      <h5>When clicked - gives 1 stone</h5>
    </div>
  );
}

export default Stone;
