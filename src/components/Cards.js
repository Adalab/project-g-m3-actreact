import React from "react";
import CardsHeader from "./CardsHeader";
import CardsMain from "./CardsMain";
import Footer from "./Footer";

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards__main-wrapper">
          <CardsHeader />
          <CardsMain />
        </div>
          <Footer />
      </React.Fragment>
    );
  }
}

export default Cards;
