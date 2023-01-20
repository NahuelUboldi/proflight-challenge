import logo from '../assets/images/proflight.svg';

function LogoCard({ extraClass }) {
  return (
    <article className={`logo-card ${extraClass}`}>
      <img src={logo} alt='proflight logo' width='100px' />
    </article>
  );
}

export default LogoCard;
