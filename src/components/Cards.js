import React from "react";
import CardsHeader from "./CardsHeader";
import CardsMain from "./CardsMain";
import Footer from "./Footer";

class Cards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="cards__main-wrapper">
          <CardsHeader           
          />
          <CardsMain 
          state = {this.props.state} 
          selected={this.props.state.selectedOption}
          changePreview = {this.props.changePreview}
          handleOptionChange = {this.props.handleOptionChange}/>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Cards;
