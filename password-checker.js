function password_is_valid(password) {
  // tr
  if (password == "") {
    throw new Error("password cannot be empty");
  }
  if (!/[A-Z]/.test(password)) {
    throw new Error("password should contain at least one uppercase character");
  }
  if (!/[a-z]/.test(password)) {
    throw new Error("password should contain at least one lowercase character");
  }
  if (!/[0-9]/.test(password)) {
    throw new Error("password should contain at least one numeric character");
  }
  if (password.length < 9) {
    throw new Error("password should be longer than eight characters");
  }
  // } catch (error) {
  //   console.log(error);
  // }
}
//console.log(password_is_valid("A1asd"));
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
