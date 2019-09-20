
const validateForm = (userdata) => {
  const fields = userdata;
  let errors = {};
  let formIsValid = true;

  if (!fields.name) {
    formIsValid = false;
    errors.name = "*Por favor, introduce tu nombre.";
  }

  if (typeof fields.name !== "undefined") {
    if (!fields.name.match(/^[a-zA-Z ]*$/)) {
      formIsValid = false;
      errors.name = "*Este campo no admite caracteres especiales.";
    }
  }

  if (!fields.job) {
    formIsValid = false;
    errors.job = "*Por favor, introduce tu puesto de trabajo.";
  }

  if (typeof fields.job !== "undefined") {
    if (!fields.job.match(/^[a-zA-Z-@#$%&]*$/)) {
      formIsValid = false;
      errors.job = "*Este campo no admite caracteres especiales.";
    }
  }

  if (typeof fields.email !== "undefined") {
    if (!fields.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      formIsValid = false;
      errors.email = "*Por favor, introduce un email válido.";
    }
  }

  if (!fields.email) {
    formIsValid = false;
    errors.email = "*Por favor, introduce tu email.";
  }

  if (!fields.linkedin) {
    formIsValid = false;
    errors.linkedin = "*Por favor, introduce un usuario de LinkedIn.";
  }

  if (typeof fields.linkedin !== "undefined") {
    if (!fields.linkedin.match(/^[a-zA-Z0-9-@ ]*$/)) {
      formIsValid = false;
      errors.linkedin = "*Este campo no admite caracteres especiales.";
    }
  }

  if (!fields.github) {
    formIsValid = false;
    errors.github = "*Por favor, introduce un usuario de GitHub.";
  }

  if (typeof fields.github !== "undefined") {
    if (!fields.github.match(/^[a-zA-Z0-9-@ ]*$/)) {
      formIsValid = false;
      errors.github = "*Este campo no admite caracteres especiales.";
    }
  }
  return { errors, formIsValid };
};

export { validateForm };
