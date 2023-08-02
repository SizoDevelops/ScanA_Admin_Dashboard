export const validate = values => {
    const errors = {};

    // School name
    if (!values.school_name) {
      errors.school_name = 'Field Required';
    } else if (!/[\w]+\s[\w]+\s[\w]+/g.test(values.school_name.trim())) {
      errors.school_name = 'Incorrect name format';
    }

    // School Email
    if (!values.school_email) {
      errors.school_email = 'Field Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.school_email.trim())) {
      errors.school_email = 'Invalid school email address';
    }

    // School Number
    if (!values.school_number) {
        errors.school_number = 'Field Required';
      } else if (!/^\+?\d{2}\s?\d{2}\s?\d{3}\s?\d{4}$/gm.test(values.school_number.trim())) {
        errors.school_number = 'Incorrect number format';
      }
    
    // School Address

    if (!values.school_address.line_one) {
        errors.line_one = 'Field Required';
    } 

    if (!values.school_address.line_two) {
        errors.line_two = 'Field Required';
    } 

    // Province
    if (!values.school_address.province) {
        errors.province = 'Field Required';
    }
    // City
    if (!values.school_address.city) {
        errors.city = 'Field Required';
    }
    // Zip Code
    if (!values.school_address.zip_code) {
        errors.zip_code= 'Field Required';
    } else if (!/^\d{4,5}$/gm.test(values.school_address.zip_code.trim())) {
        errors.zip_code = "Zip Code should be a number"
    }

    if (!values.school_admin.admin_name) {
        errors.admin_name = 'Field Required';
      } else if (!/[\w]+\s[\w]+\s?[\w]+?/g.test(values.school_admin.admin_name.trim())) {
        errors.admin_name = 'Incorrect name format';
      }

    if (!values.school_admin.admin_email) {
        errors.admin_email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.school_admin.admin_email.trim())) {
        errors.admin_email = 'Invalid admin email address';
      }
  
    if (!values.password) {
        errors.password = 'Field Field Required';
      }
      else if(values.password.includes(" ")){
        errors.password = "Password Should Not Contain Spaces"
      } else if(values.password.length < 8){
        errors.password = "Password should have at least 8 charecters"
      } else if(!/^(?=.*[0-9]).+$/.test(values.password)){
        errors.password = "Must have at least one number"
      } else if(!/^(?=.*[A-Z]).+$/.test(values.password)){
        errors.password = "Password must contain atleast 1 uppercase letter"
      }
    if(!values.confirm_password){
        errors.confirm_password = "Field Field Required"
    }else if(values.confirm_password != values.password){
        errors.confirm_password = "Passwords do not match"
    }
    return errors;
  };
