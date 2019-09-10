import React from "react";
import "./App.scss";
// import Landing from './components/Landing';
import Cards from "./components/Cards";
import defaultImage from "./components/DefaultImage";



class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        palette: 1,
        name: '',
        position: '',
        email: '',
        telf: '',
        linkedin: '',
        github: '',
        image: defaultImage
      };
    
      this.changePreview = this.changePreview.bind(this)
      this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState({
      palette: value
    });
  }

  changePreview(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState( {
      [id] : value
    });
  }
  render() {
    return <Cards 
    userData = {this.state} 
    changePreview = {this.changePreview}
    handleOptionChange = {this.handleOptionChange}
    />;
  }
}

export default App;
