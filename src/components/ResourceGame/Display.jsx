import React from 'react';

function Display({
  gold,
  wood,
  stone,
  water,
  limitGold,
  limitWood,
  limitStone,
  limitWater,
}) {
  return (
    <div className='display-container d-flex space-btw'>
      <div className='display-item'>
        GOLD: {gold} / {limitGold}
      </div>
      <div className='display-item'>
        WOOD: {wood} / {limitWood}
      </div>
      <div className='display-item'>
        STONE: {stone}/ {limitStone}
      </div>
      <div className='display-item'>
        WATER: {water}/ {limitWater}
      </div>
    </div>
  );
}

export default Display;
