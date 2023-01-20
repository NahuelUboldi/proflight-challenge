import { useState } from 'react';
import LogoCard from './LogoCard';
import Arrow from './Arrow';

function LogosSlider() {
  const [activeLogo, setActiveLogo] = useState(0);
  const listOfLogos = [0, 1, 2, 3];

  return (
    <div className='slider-container'>
      <Arrow
        direction='left'
        activeLogo={activeLogo}
        setActiveLogo={setActiveLogo}
        listOfLogos={listOfLogos}
      />
      {listOfLogos.map((logo) => (
        <LogoCard key={logo} extraClass={logo === activeLogo && 'active'} />
      ))}
      <Arrow
        direction='right'
        activeLogo={activeLogo}
        setActiveLogo={setActiveLogo}
        listOfLogos={listOfLogos}
      />
    </div>
  );
}

export default LogosSlider;
