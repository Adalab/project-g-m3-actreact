import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import Cards from './components/Cards';
import { Route, Switch } from 'react-router-dom';
import { defaultData } from './data/defaultData';
import { sendInfo } from './services/sendInfo';
import { validateForm } from './data/validateForm';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsablesId: 'design',
      userData: defaultData,
      isImageDefault: true,
      isSend: false,
      errors: {}
    };

    this.changePreview = this.changePreview.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.handleCollapsable = this.handleCollapsable.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.updateImage = this.updateImage.bind(this)
    this.getUrl = this.getUrl.bind(this)
    this.validation = this.validation.bind(this)
  }

  getUrl(event) {
    event.preventDefault();
    if (this.validation(this.state.userData)) {
      this.setState({
        isSend: true,
        collapsablesId: 'share'
      });
      sendInfo(this.state.userData)
        .then(data => {
          this.setState({
            cardUrl: data.cardURL,
            isSend: false
          });
        });
    }
  }

  validation(userdata) {
    const newValidation = validateForm(userdata);
    const {
      errors,
      formIsValid
    } = newValidation;

    this.setState({
      errors: errors,
      collapsablesId: 'fill'
    })
    return formIsValid;
  };

  updateImage(img) {
    this.setState(prevState => {
      const newUserData = {
        ...prevState.userData,
        photo: img
      }
      localStorage.setItem('lsUserData', JSON.stringify(newUserData));
      return {
        userData: newUserData,
        isImageDefault: false,
        cardUrl: ''
      }
    });
  }

  handleReset() {
    this.setState({
      userData: defaultData,
      cardUrl: '',
      isSend: false
    });
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
        },
        cardUrl: ''
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
        userData: newUserData,
        cardUrl: ''
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
      <div className="app">
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
            cardUrl={this.state.cardUrl}
            isSend={this.state.isSend}
            errors={this.state.errors}
          />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
