import React from "react";
import "./App.scss";
// import Landing from './components/Landing';
import Cards from "./components/Cards";
import defaultImage from "./components/DefaultImage"


class App extends React.Component {
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
      };
    
      this.changePreview = this.changePreview.bind(this)
  }

  changePreview(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState( {
      [id] : value
    }
    )
    ;
  }
  render() {
    return <Cards 
    state = {this.state} 
    changePreview = {this.changePreview}/>;
  }
}

export default App;
