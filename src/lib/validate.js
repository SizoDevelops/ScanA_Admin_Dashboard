export const validate = (values) => {
  const errors = {};

  // Company name
  try {
    if (!values.school_name) {
      errors.school_name = "Field Required";
    } else if (!/[\w]+\s[\w]+\s[\w]+/g.test(values.school_name.trim())) {
      errors.school_name = "Incorrect name format";
    }

    // Company Email
    if (!values.school_email) {
      errors.school_email = "Field Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.school_email.trim()
      )
    ) {
      errors.school_email = "Invalid Company email address";
    }

    // Company Emis
    if (!values.school_emis) {
      errors.school_emis = "Field Required";
    } else if (values.school_emis.replace(/\s/g, "").trim().match(/[\D]/g)) {
      errors.school_emis = "Number must be all digits.";
    }

    if (!values.school_number) {
      errors.school_number = "Field Required";
    } else if (values.school_number.replace(/\s/g, "").trim().length < 10) {
      errors.school_number = "Number must be at least 10 digits long.";
    } else if (
      !values.school_number
        .replace(/\s/g, "")
        .trim()
        .match(/^(\+\d{1,4}\s?)?(\d{1,4}\s?){1,14}$/)
    ) {
      errors.school_number = "Number must be all digits.";
    }

    // Company Address
    if (!values.school_address) {
      errors.school_address = {};
    } else {
      if (!values.school_address.line_one) {
        errors.school_address = {
          ...errors.school_address,
          line_one: "Field Required",
        };
      }

      // Province
      if (!values.school_address.province) {
        errors.school_address = {
          ...errors.school_address,
          province: "Field Required",
        };
      }
      // City
      if (!values.school_address.city) {
        errors.school_address = {
          ...errors.school_address,
          city: "Field Required",
        };
      }
      // Zip Code
      if (!values.school_address.zip_code) {
        errors.school_address = {
          ...errors.school_address,
          zip_code: "Field Required",
        };
      } else if (!/^\d{4,5}$/gm.test(values.school_address.zip_code.trim())) {
        errors.school_address = {
          ...errors.school_address,
          zip_code: "Zip Code should be a number",
        };
      }
    }

    if (!values.school_admin) {
      errors.school_admin = {};
    } else {
      if (!values.school_admin.admin_name) {
        errors.school_admin = {
          ...errors.school_admin,
          admin_name: "Field Required",
        };
      } else if (
        !/[\w]+\s[\w]+\s?[\w]+?/g.test(values.school_admin.admin_name.trim())
      ) {
        errors.school_admin.admin_name = "Incorrect name format";
        errors.school_admin = {
          ...errors.school_admin,
          admin_name: "Incorrect name format",
        };
      }

      if (!values.school_admin.admin_email) {
        errors.school_admin = {
          ...errors.school_admin,
          admin_email: "Field Required",
        };
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.school_admin.admin_email.trim()
        )
      ) {
        errors.school_admin = {
          ...errors.school_admin,
          admin_email: "Invalid admin email address",
        };
      }
    }

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
