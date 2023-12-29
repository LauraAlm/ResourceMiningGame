import React from 'react';

function Water({ water, setWater, limitWater }) {
  return (
    <div
      className='card'
      onClick={() => {
        if (water + 1 <= limitWater) {
          setWater(water + 1);
        }
      }}
    >
      <img
        src='https://png.pngtree.com/png-clipart/20230818/original/pngtree-water-drop-pixel-art-design-logo-water-leaf-leaf-vector-picture-image_11033010.png'
        alt='Water pixel art'
        className='item-img'
      />
      <h5>When clicked - gives 1 water</h5>
    </div>
  );
}

export default Water;
