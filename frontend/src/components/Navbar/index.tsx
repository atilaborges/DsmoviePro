import { ReactComponent as GitIcon } from 'assets/img/git.svg';
import './styles.css';

function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/atilaborges/DsmoviePro">
            <div className="dsmovie-contact-container">
              <GitIcon />
              <p className="dsmovie-contact-link">/DevSuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;