import React from "react";
import CardsHeader from "./CardsHeader";
import CardsMain from "./CardsMain";
import Footer from "./Footer";
import PropTypes from "prop-types";

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards-wrapper">
          <div className="cards__main-wrapper">
            <CardsHeader
            />
            <CardsMain
              userData={this.props.userData}
              changePreview={this.props.changePreview}
              handleOptionChange={this.props.handleOptionChange}
              handleCollapsable={this.props.handleCollapsable}
              collapsablesId={this.props.collapsablesId}
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
  collapsablesId: PropTypes.string.isRequired
};

export default Cards;
