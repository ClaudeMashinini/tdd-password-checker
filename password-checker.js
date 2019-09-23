function password_is_valid(password) {
  criteria = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{9,}$)/;
  check = criteria.test(password);
  try {
    if (check == false) {
      throw new Error(
        "The password should contain at least one uppercase, one lowercase, a numeric character and be 9 characters or longer"
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function password_is_ok(password) {
  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
  ) {
    return true;
  } else if (
    /[0-9]/.test(password) &&
    password != "" &&
    /[a-z]/.test(password)
  ) {
    return true;
  } else if (password == "" || password.length < 9) {
    return false;
  } else if (
    /[A-Z]/.test(password) &&
    password.length > 8 &&
    /[0-9]/.test(password)
  ) {
    return true;
  }
  if (/[a-z]/.test(password) && password.length > 8 && /[0-9]/.test(password)) {
    return true;
  }
  if (/[A-Z]/.test(password) && password != "" && /[0-9]/.test(password)) {
    return true;
  }
}
module.exports = {
  pwdval: password_is_valid,
  pwok: password_is_ok
};
