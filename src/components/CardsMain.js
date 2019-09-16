import React from "react";
import CardsMainCardPreview from "./CardsMainCardPreview";
import CardsMainDesign from "./CardsMainDesign";
import CardsMainFill from "./CardsMainFill";
import CardsMainShare from "./CardsMainShare";
import PropTypes from "prop-types";


class CardsMain extends React.Component {


  render() {
    const {
      userData,
      handleOptionChange,
      handleCollapsable,
      collapsablesId,
      changePreview,

    } = this.props;

    return (
      <main className="cards__main">
        <form
          className="form__all-sections form__section-fill"
          onSubmit="writeUrl()"
        >
          <CardsMainCardPreview
            userData={userData} />

          <div className="form__wrapper">
            <CardsMainDesign
              handleOptionChange={handleOptionChange}
              handleCollapsable={handleCollapsable}
              collapsablesId={collapsablesId}
              palette={userData.palette}
            />

            <CardsMainFill
              changePreview={changePreview}
              handleCollapsable={handleCollapsable}
              collapsablesId={collapsablesId}
              userData={userData}
            />

            <CardsMainShare
              handleCollapsable={handleCollapsable}
              collapsablesId={collapsablesId}
              userData={userData}
            />


          </div>
        </form>
      </main>
    );
  }
}

CardsMain.propTypes = {
  userData: PropTypes.object.isRequired,
  changePreview: PropTypes.func.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string.isRequired
};

export default CardsMain;
