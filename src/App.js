import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import Cards from "./components/Cards";
import { Route, Switch } from 'react-router-dom';
import {defaultData} from './components/defaultData';
import {sendInfo} from './services/sendInfo';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsablesId: 'design',
      userData: defaultData,
      isImageDefault: true
    };

    this.changePreview = this.changePreview.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleCollapsable = this.handleCollapsable.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.updateImage = this.updateImage.bind(this)
    this.getUrl = this.getUrl.bind(this)
    
  }

  getUrl(event){
    event.preventDefault()
    sendInfo(this.state.userData)
    .then (data => {
      console.log(data)
      this.setState({
        cardUrl: data.cardURL,
      });
    });
  }

  updateImage(img) {
   this.setState(prevState => {
      const newUserData = {
          ...prevState.userData,
          photo: img
        }
      localStorage.setItem('lsUserData', JSON.stringify(newUserData));
     return {
      userData: newUserData,
      isImageDefault: false
     
     }
   });
 }

  handleReset() {
    this.setState({userData: defaultData});
    localStorage.removeItem('lsUserData');
  }

  handleCollapsable(event) {
    const newCollapsablesId = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
      if (newCollapsablesId === prevState.collapsablesId) {
        return {
          collapsablesId: null
        }
      } else {
        return {
          collapsablesId: newCollapsablesId
        }
      }
    })
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  handleOptionChange(event) {
    const value = parseInt(event.currentTarget.value);
    this.setState(prevState => {
      const newPalette = {
        ...prevState.userData,
        palette: value
      };

      localStorage.setItem('lsUserData', JSON.stringify(newPalette));

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
      const newUserData = {
        ...prevState.userData,
        [id]: value
      };
      localStorage.setItem('lsUserData', JSON.stringify(newUserData));
      return {
        userData: newUserData
      };


    });
  }

  getLocalStorage() {
    const ls = JSON.parse(localStorage.getItem('lsUserData'));
    if (ls !== null) {
      this.setState({
        userData: ls
      });
    }
  }

  render() {
    return (
    // 
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/cards" render={() => <Cards
        userData={this.state.userData}
        changePreview={this.changePreview}
        handleOptionChange={this.handleOptionChange}
        handleCollapsable={this.handleCollapsable}
        collapsablesId={this.state.collapsablesId}
        handleReset={this.handleReset}
        isImageDefault={this.state.isImageDefault}
        updateImage={this.updateImage}
        getUrl={this.getUrl}
      />} 
      />
    </Switch>
    );
  }
}

export default App;
