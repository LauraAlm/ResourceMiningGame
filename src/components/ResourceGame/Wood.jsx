import React from 'react';

function Wood({ wood, setWood, limitWood }) {
  return (
    <div
      className='card'
      onClick={() => {
        if (wood + 1 <= limitWood) {
          setWood(wood + 1);
        }
      }}
    >
      <img
        src='https://waxel.net/wp-content/uploads/2022/01/m_oak_wood.png'
        alt='Wood pixel art'
        className='item-img'
      />
      <h5>When clicked - gives 1 wood</h5>
    </div>
  );
}

export default Wood;
