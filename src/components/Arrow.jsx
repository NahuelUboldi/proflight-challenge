import arrow from '../assets/images/arrow.svg';
function Arrow({ direction, activeLogo, setActiveLogo, listOfLogos }) {
  const handleArrowClick = (direction) => {
    let newActiveLogo = activeLogo;
    if (direction === 'left') {
      newActiveLogo =
        newActiveLogo - 1 >= 0
          ? newActiveLogo - 1
          : listOfLogos[listOfLogos.length - 1];
    } else {
      newActiveLogo =
        newActiveLogo + 1 <= listOfLogos[listOfLogos.length - 1]
          ? newActiveLogo + 1
          : listOfLogos[0];
    }
    setActiveLogo(newActiveLogo);
  };
  return (
    <div className='arrow' onClick={() => handleArrowClick(direction)}>
      <img src={arrow} alt='arrow image' className={direction} />
    </div>
  );
}

export default Arrow;
