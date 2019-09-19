import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import Cards from "./components/Cards";
import { Route, Switch } from 'react-router-dom';
import { defaultData } from './components/defaultData';
import { sendInfo } from './services/sendInfo';


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
    this.validateForm = this.validateForm.bind(this)

  }

  getUrl(event) {
    event.preventDefault();
    if (this.validateForm(this.state.userData)) {
      this.setState({
        isSend: true,
        collapsablesId: 'share'
      });
      sendInfo(this.state.userData)
        .then(data => {
          console.log(data)
          this.setState({
            cardUrl: data.cardURL,
            isSend: false
          });
        });
    }
  }

  validateForm(userdata) {
    const fields = userdata;
    let errors = {};
    let formIsValid = true; 

    console.log('holi');

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Por favor, introduce tu nombre.";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Este campo no admite caracteres especiales.";
      }
    }

    if (!fields["job"]) {
      formIsValid = false;
      errors["job"] = "*Por favor, introduce tu puesto de trabajo.";
    }

    if (typeof fields["job"] !== "undefined") {
      if (!fields["job"].match(/^[a-zA-Z-@#$%&]*$/)) {
        formIsValid = false;
        errors["job"] = "*Este campo no admite caracteres especiales.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Por favor, introduce tu email.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Por favor, introduce un email válido.";
      }
    }

    if (!fields["linkedin"]) {
      formIsValid = false;
      errors["linkedin"] = "*Por favor, introduce un usuario de LinkedIn.";
    }

    if (typeof fields["linkedin"] !== "undefined") {
      if (!fields["linkedin"].match(/^[a-zA-Z-@ ]*$/)) {
        formIsValid = false;
        errors["linkedin"] = "*Este campo no admite caracteres especiales.";
      }
    }

    if (!fields["github"]) {
      formIsValid = false;
      errors["github"] = "*Por favor, introduce un usuario de GitHub.";
    }

    if (typeof fields["github"] !== "undefined") {
      if (!fields["github"].match(/^[a-zA-Z-@ ]*$/)) {
        formIsValid = false;
        errors["github"] = "*Este campo no admite caracteres especiales.";
      }
    }
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
        isImageDefault: false

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
          cardUrl={this.state.cardUrl}
          isSend={this.state.isSend}
          errors={this.state.errors}
        />}
        />
      </Switch>
    );
  }
}

export default App;
