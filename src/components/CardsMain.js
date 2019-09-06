import React from "react";
import CardsMainCardPreview from "./CardsMainCardPreview";
import CardsMainDesign from "./CardsMainDesign";
import CardsMainFill from "./CardsMainFill";
import CardsMainShare from "./CardsMainShare";
import defaultImage from "./DefaultImage"


class CardsMain extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        job: '',
        mail: '',
        phone: '',
        linkedin: '',
        github: '',
        image: defaultImage
      }
    
  }

  render() {
    return (
      <main className="cards__main">
        <form
          className="form__all-sections form__section-fill"
          onSubmit="writeUrl()"
        >
          <CardsMainCardPreview data = {this.state}/>

          <div className="form__wrapper">
            <CardsMainDesign />

            <CardsMainFill />

            <CardsMainShare />
          </div>
        </form>
      </main>
    );
  }
}

export default CardsMain;
