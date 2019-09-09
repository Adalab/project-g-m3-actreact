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
        linkedin: 'jaksjaks',
        github: '',
        image: defaultImage
      }
    
  }
  render() {
    return <Cards state = {this.state} />;
  }
}

export default App;
