export const isEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export const isPositiveDate = (value) => {
    const age = new Date() - new Date(value);
    return age > 0 ? true : false;
}

export const isSamePassword = (password, confirmPassword) => {
    return password === confirmPassword;
}



