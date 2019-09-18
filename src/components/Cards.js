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
      handleReset,
      updateImage,
      isImageDefault,
      getUrl,
      cardUrl
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
              isImageDefault={isImageDefault}
              updateImage={updateImage}
              getUrl={getUrl}
              cardUrl={cardUrl}
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
  collapsablesId: PropTypes.string, 
  handleReset: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  isImageDefault: PropTypes.bool.isRequired,
  getUrl: PropTypes.func.isRequired,
  cardUrl: PropTypes.string
};

export default Cards;
