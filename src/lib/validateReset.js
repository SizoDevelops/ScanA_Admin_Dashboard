export const validate = (values) => {
    const errors = {};
    try {
      if (!values.password) {
        errors.password = "Field Required";
      } else if (values.password.includes(" ")) {
        errors.password = "Password Should Not Contain Spaces";
      } else if (values.password.length < 8) {
        errors.password = "Password should have at least 8 charecters";
      } else if (!/^(?=.*[0-9]).+$/.test(values.password)) {
        errors.password = "Must have at least one number";
      } else if (!/^(?=.*[A-Z]).+$/.test(values.password)) {
        errors.password = "Password must contain atleast 1 uppercase letter";
      }
      if (!values.confirm_password) {
        errors.confirm_password = "Field Required";
      } else if (values.confirm_password != values.password) {
        errors.confirm_password = "Passwords do not match";
      }
      return errors;
    } catch (error) {
      console.log(error);
    }
  };
  