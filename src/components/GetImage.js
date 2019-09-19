import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class GetImage extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();
    
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click(); 
  }

  uploadImage(e){
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateImage(image);
  }

  getPreview(isDefault, photo) {
    return (!isDefault) ? {backgroundImage: `url(${photo})`} : {};
  }

  render() {
    const {
      isImageDefault, 
      photo
      } = this.props;

    return (
  
        <Fragment>
        <button 
          className="form__fieldset-add_img-button js__profile-trigger" 
          type="button"
          name="add_img" 
          onClick={this.handleFilePicker}
          >Añadir imagen
        </button>
        
        <input 
          type="file"
          ref={this.myFileField} 
          name="image"
          id="img-selector"
          className="hidden js__profile-upload-btn" 
          onChange={this.uploadImage} 
        />
        
        <div 
        className="form__fieldset-add_img-mini_container js__profile-preview"
        style={this.getPreview(isImageDefault, photo)}>
        </div>
       </Fragment>
    );
  }
}

GetImage.propTypes = {
  isImageDefault: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  updateImage: PropTypes.func.isRequired
};

export default GetImage;