import React from "react";
import CardsHeader from "./CardsHeader";
import CardsMain from "./CardsMain";
import Footer from "./Footer";
import PropTypes from "prop-types";

class Cards extends React.Component {
  render() {

    const { 
      userData,
      changePreview, 
      handleOptionChange, 
      handleCollapsable, 
      collapsablesId, 
      handleReset 
    } = this.props;

    return (
      <React.Fragment>
        <div className="cards-wrapper">
          <div className="cards__main-wrapper">
            <CardsHeader
            />
            <CardsMain
              userData={userData}
              changePreview={changePreview}
              handleOptionChange={handleOptionChange}
              handleCollapsable={handleCollapsable}
              collapsablesId={collapsablesId}
              handleReset={handleReset}
            />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Cards.propTypes = {
  userData: PropTypes.object.isRequired,
  changePreview: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string.isRequired, 
  handleReset: PropTypes.func.isRequired
};

export default Cards;
