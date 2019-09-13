import React from "react";
import "./App.scss";
// import Landing from './components/Landing';
import Cards from "./components/Cards";
import defaultImage from "./components/DefaultImage";



class App extends React.Component {
  constructor(props){
    super(props);

      this.state = {
        collapsablesId : '',

        userData : {
          palette: 1,
          name: '',
          position: '',
          email: '',
          telf: '',
          linkedin: '',
          github: '',
          image: defaultImage
        }
      };
    
      this.changePreview = this.changePreview.bind(this)
      this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleCollapsable(){
    if

  }
  
  handleOptionChange(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState(prevState => {
      return {
        userData: {
          ...prevState.userData,
          palette: value
        }
      };
     });
  }

  changePreview(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState(prevState => {
      return {
        userData: {
          ...prevState.userData,
          [id] : value
        }
      };
     });
  }
  
  render() {
    return <Cards 
    userData = {this.state.userData} 
    changePreview = {this.changePreview}
    handleOptionChange = {this.handleOptionChange}
    handleCollapsable = {this.handleCollapsable}
    />;
  }
}

export default App;
