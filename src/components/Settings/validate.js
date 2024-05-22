export const validate = (values) => {
    const errors = {};

    if(!values.title){
        errors.title = "Required"
    } else if (values.title.length > 3 || /[\d\W]/g.test(values.title)){
        errors.title = "Incorrect format e.g (MRS)"
    }

    if(!values.initial){
        errors.initial = "Required"
    } else if(/[\d\s]/g.test(values.initial)){
        errors.initial = "Invalid Initials"
    }
    if(!values.first_name){
        errors.first_name = "Required"
    }else if(/[\d]/g.test(values.first_name)){
        errors.first_name = "Invalid Name"
    }
    if(!values.last_name){
        errors.last_name = "Required"
    }else if(/[\d]/g.test(values.last_name)){
        errors.last_name = "Invalid Name"
    }
    if(!values.email){
        errors.email = "Required"
    } else if(!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm.test(values.email)){
        errors.email = "Invalid Email Address"
    }
if(!values.position){
    errors.position = "Required"
}else if(/[\d]/g.test(values.position)){
    errors.position = "Invalid Position Must Be Letters Only"
}
if(/[\D]/g.test(values.persal)){
    errors.persal = "Invalid Persal"
}

//  Validate Update Company
    return errors;
}