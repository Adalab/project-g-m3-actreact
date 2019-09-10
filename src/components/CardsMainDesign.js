import React from "react";
import PropTypes from 'prop-types';

class CardsMainDesign extends React.Component {
  render() {
    return (
      <fieldset className="design">
        <div className="container containerMother-js open">
          <div className="design-title__container containerClick-js">
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
                    checked={this.props.userData.palette === 1}
                    onChange ={this.props.handleOptionChange}
                    
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
                    checked={this.props.userData.palette === 2}
                    onChange= {this.props.handleOptionChange}
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
                    checked={this.props.userData.palette === 3}
                    onChange= {this.props.handleOptionChange}
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
  userData: PropTypes.shape({
    palette: PropTypes.number.isRequired
  }),
  handleOptionChange: PropTypes.func
}

export default CardsMainDesign;
