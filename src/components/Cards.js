import React from "react";
import CardsHeader from "./CardsHeader";
import CardsMain from "./CardsMain";
import Footer from "./Footer";
import PropTypes from "prop-types";

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards__main-wrapper">
          <CardsHeader           
          />
          <CardsMain 
          userData = {this.props.userData} 
          changePreview = {this.props.changePreview}
          handleOptionChange = {this.props.handleOptionChange}/>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

Cards.propTypes = {
  userData: PropTypes.object.isRequired,
  changePreview: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired
};

export default Cards;
