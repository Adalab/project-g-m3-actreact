import React from "react";
import CardsMainCardPreview from "./CardsMainCardPreview";
import CardsMainDesign from "./CardsMainDesign";
import CardsMainFill from "./CardsMainFill";
import CardsMainShare from "./CardsMainShare";


class CardsMain extends React.Component {


  render() {
    return (
      <main className="cards__main">
        <form
          className="form__all-sections form__section-fill"
          onSubmit="writeUrl()"
        >
          <CardsMainCardPreview 
          userData={this.props.userData} />

          <div className="form__wrapper">
            <CardsMainDesign
              userData = {this.props.userData}  
              handleOptionChange = {this.props.handleOptionChange}
              handleCollapsable = {this.props.handleCollapsable}
              collapsablesId = {this.props.collapsablesId}
            />

            <CardsMainFill
              changePreview={this.props.changePreview} 
              handleCollapsable = {this.props.handleCollapsable}
              collapsablesId = {this.props.collapsablesId}
            />

            <CardsMainShare 
              handleCollapsable = {this.props.handleCollapsable}
              collapsablesId = {this.props.collapsablesId}
            />
          </div>
        </form>
      </main>
    );
  }
}

export default CardsMain;
