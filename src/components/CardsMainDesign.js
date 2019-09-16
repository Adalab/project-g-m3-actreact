import React from "react";
import PropTypes from "prop-types";

class CardsMainDesign extends React.Component {
  render() {
    const {
      collapsablesId,
      handleCollapsable,
      palette,
      handleOptionChange,
    } = this.props

    return (
      <fieldset className="design">
        <div id="design" className={`container containerMother-js ${collapsablesId === 'design' ? 'open' : '' }`}>
          <div className="design-title__container containerClick-js" data-id="design" onClick={handleCollapsable}>
            <h2 className="desing__title">Diseña</h2>
          </div>
          <div className="colors__container rollContainer-js">
            <p className="design__subtitle">Colores</p>
            <div className="color__group">
              <div className="op1__container">
                <label htmlFor="colorsop1" className="colors__row">
                  <input
                    className="input1"
                    id="colorsop1"
                    type="radio"
                    value="1"
                    name="colors"
                    checked={palette === 1}
                    onChange ={handleOptionChange}
                    
                  />
                  <ul className="colors__list">
                    <li
                      className="list__item blue1"
                      style={{ backgroundColor: "#114e4e" }}
                    >
                      #114e4e
                    </li>
                    <li
                      className="list__item blue2"
                      style={{ backgroundColor: "#438792" }}
                    >
                      #438792
                    </li>
                    <li
                      className="list__item blue3"
                      style={{ backgroundColor: "#a2deaf" }}
                    >
                      #a2deaf
                    </li>
                  </ul>
                </label>
              </div>
              <div className="op2__container">
                <label htmlFor="colorsop2" className="colors__row">
                  <input
                    className="input2"
                    id="colorsop2"
                    type="radio"
                    value="2"
                    name="colors"
                    checked={palette === 2}
                    onChange= {handleOptionChange}
                  />
                  <ul className="colors__list">
                    <li
                      className="list__item red1"
                      style={{ backgroundColor: "#420101" }}
                    >
                      #420101
                    </li>
                    <li
                      className="list__item red2"
                      style={{ backgroundColor: "#bd1010" }}
                    >
                      #bd1010
                    </li>
                    <li
                      className="list__item red3"
                      style={{ backgroundColor: "#e95626" }}
                    >
                      #e95626
                    </li>
                  </ul>
                </label>
              </div>
              <div className="op3__container">
                <label htmlFor="colorsop3" className="colors__row">
                  <input
                    className="input3"
                    id="colorsop3"
                    type="radio"
                    value= "3"
                    name="colors"
                    checked={palette === 3}
                    onChange= {handleOptionChange}
                  />
                  <ul className="colors__list">
                    <li
                      className="list__item green1"
                      style={{ backgroundColor: "#3e5b65" }}
                    >
                      #3e5b65
                    </li>
                    <li
                      className="list__item green2"
                      style={{ backgroundColor: "#eab052" }}
                    >
                      #eab052
                    </li>
                    <li
                      className="list__item green3"
                      style={{ backgroundColor: "#a0c0cf" }}
                    >
                      #a0c0cf
                    </li>
                  </ul>
                </label>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

CardsMainDesign.propTypes = {
  palette: PropTypes.number.isRequired,
  handleOptionChange: PropTypes.func,
  handleCollapsable: PropTypes.func.isRequired,
  collapsablesId: PropTypes.string.isRequired
}

export default CardsMainDesign;
