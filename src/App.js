import React from 'react';
import './App.css';
import { useState } from 'react';
import Display from './components/ResourceGame/Display';
import Gold from './components/ResourceGame/Gold';
import Wood from './components/ResourceGame/Wood';
import Stone from './components/ResourceGame/Stone';
import Water from './components/ResourceGame/Water';

function App() {
  const [gold, setGold] = useState(99);
  const [wood, setWood] = useState(99);
  const [stone, setStone] = useState(99);
  const [water, setWater] = useState(99);

  const [limitGold, setLimitGold] = useState(100);
  const [limitWood, setLimitWood] = useState(100);
  const [limitStone, setLimitStone] = useState(100);
  const [limitWater, setLimitWater] = useState(100);

  function increaseWoodLimit() {
    if (gold > 50 && water > 50 && stone >= 100) {
      setGold(gold - 50);
      setWater(water - 50);
      setStone(stone - 100);

      setLimitWood(limitWood + 100);
    }
    return;
  }

  function increaseStoneLimit() {
    if (gold > 50 && water > 50 && wood >= 100) {
      setGold(gold - 50);
      setWater(water - 50);
      setWood(wood - 100);

      setLimitStone(limitStone + 100);
    }
    return;
  }

  function increaseWaterLimit() {
    if (gold > 50 && wood > 50 && stone >= 100) {
      setGold(gold - 50);
      setWood(wood - 50);
      setStone(stone - 100);

      setLimitWater(limitWater + 100);
    }
    return;
  }

  return (
    <div className=''>
      <div>
        <Display
          gold={gold}
          wood={wood}
          stone={stone}
          water={water}
          limitGold={limitGold}
          limitWood={limitWood}
          limitStone={limitStone}
          limitWater={limitWater}
        />
      </div>

      <div className='d-flex f-direction-row'>
        <Gold gold={gold} setGold={setGold} />
        <Wood wood={wood} setWood={setWood} limitWood={limitWood} />
        <Stone stone={stone} setStone={setStone} limitStone={limitStone} />
        <Water water={water} setWater={setWater} limitWater={limitWater} />
      </div>

      <div className='d-flex'>
        <div className='limit-container' onClick={increaseWoodLimit}>
          <h3>Limit for wood +100</h3>
          <p>Price:</p>
          <p>100 stone/ 50 water/ 50 gold</p>
        </div>

        <div className='limit-container' onClick={increaseStoneLimit}>
          <h3>Limit for stone +100</h3>
          <p>Price:</p>
          <p>100 wood/ 50 water/ 50 gold</p>
        </div>

        <div className='limit-container' onClick={increaseWaterLimit}>
          <h3>Limit for water +100</h3>
          <p>Price:</p>
          <p>100 stone/ 50 wood/ 50 gold</p>
        </div>
      </div>
    </div>
  );
}

export default App;
