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
      handleReset,
      updateImage,
      isImageDefault,
      getUrl
    } = this.props;

    return (
      <main className="cards__main">
        <form
          className="form__all-sections form__section-fill"
          onSubmit={getUrl}
          // onSubmit="writeUrl()"
        >
          <CardsMainCardPreview
            userData={userData}
            handleReset={handleReset} />

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
              updateImage={updateImage}
              isImageDefault={isImageDefault}
            />

            <CardsMainShare
              handleCollapsable={handleCollapsable}
              collapsablesId={collapsablesId}
              userData={userData}
              getUrl={getUrl}
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
  collapsablesId: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  isImageDefault: PropTypes.bool.isRequired,
  getUrl: PropTypes.func.isRequired
};

export default CardsMain;
