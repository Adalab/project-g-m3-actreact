import React from 'react';
import { Link } from 'react-router-dom';

class CardsHeader extends React.Component {
  render() {
    return (
      <header className="cards__header">
        <Link to="/">
          <div className="container">
            <h1 className="cards__header-title">Awesome Profile-Cards</h1>
            <div className="landing__header-logo"></div>
          </div>
        </Link>
      </header>
    );
  }
}

export default CardsHeader;