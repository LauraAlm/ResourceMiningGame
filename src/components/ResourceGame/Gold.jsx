import React from 'react';

function Gold({ gold, setGold }) {
  return (
    <div
      className='card'
      onClick={() => {
        if (gold + 1 <= 100) {
          setGold(gold + 1);
        }
      }}
    >
      <img
        src='https://static.vecteezy.com/system/resources/previews/025/212/505/non_2x/an-8-bit-retro-styled-pixel-art-illustration-of-a-gold-crystal-free-png.png'
        alt='Gold pixel art'
        className='item-img'
      />
      <h5>When clicked - gives 1 gold</h5>
    </div>
  );
}

export default Gold;
