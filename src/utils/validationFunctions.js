const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PHONE_REGEX = /^01[0-2,5]{1}[0-9]{8}$/;

export const validateName = (name, type) => {
  if (name.trim() === "") {
    return `${type} is required`;
  }
  if (name.length < 3) {
    return `${type} must be at least 3 characters`;
  }
  return "";
};

export const validateEmail = (email) => {
  if (email.trim() === "") {
    return "Email is required";
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email) ? "" : "Email is not valid";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword.trim() === "") {
    return "Confirm password is required";
  }
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  return "";
};

export const validatePassword = (password) => {
  if (password.trim() === "") {
    return "Password is required";
  }
  if (!PASSWORD_REGEX.test(password)) {
    return "Password must contain at least 8 characters, including UPPER/lowercase letters, numbers and at least 1 special character";
  }
  return "";
};
export const validatePhone = (phone) => {
  if (phone.trim() === "") {
    return "Phone number is required";
  }
  if (!PHONE_REGEX.test(phone)) {
    return "Phone number is not valid";
  }
  return "";
};
