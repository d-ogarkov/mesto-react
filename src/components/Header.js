import logo from '../images/header-logo.svg';

export default function Header() {
  return (
    <header className="header">
      <a className="link" href="/"><img className="header__logo" src={logo} alt="Mesto Russia" lang="en" /></a>
    </header>
  );
}
