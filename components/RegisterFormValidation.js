export default function RegisterFormValidation(
  enteredUsername,
  enteredEmail,
  enteredNewPassword,
  enteredConfirmPassword,
  enteredCheckAgree
) {
  const registerErrors = {};

  const usernamePattern =
    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  const emailPattern =
    /^[a-z]{1}[a-z0-9._-]+[a-z]+@+\@?[a-z]{1}?.\@?[a-z]+\.?[a-z]{2,6}\.?[a-z]{2,6}$/;
  const passwordPattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~!@#$%^&*]).{8,12}$/;

  if (enteredUsername === "") {
    registerErrors.enteredUsername = (
      <p className="text-red-600">Username is required!</p>
    );
  } else if (!usernamePattern.test(enteredUsername)) {
    registerErrors.enteredUsername = (
      <p className="text-yellow-600">Please enter valid username!</p>
    );
  }

  if (enteredEmail === "") {
    registerErrors.enteredEmail = (
      <p className="text-red-600">Email is required!</p>
    );
  } else if (!emailPattern.test(enteredEmail)) {
    registerErrors.enteredEmail = (
      <p className="text-yellow-600">Please enter valid email!</p>
    );
  }

  if (enteredNewPassword === "") {
    registerErrors.enteredNewPassword = (
      <p className="text-red-600">Password is required!</p>
    );
  } else if (!passwordPattern.test(enteredNewPassword)) {
    registerErrors.enteredNewPassword = (
      <p className="text-yellow-600">Please enter valid password!</p>
    );
  }

  if (enteredConfirmPassword === "") {
    registerErrors.enteredConfirmPassword = (
      <p className="text-red-600">Confirm Password is required!</p>
    );
  } else if (enteredNewPassword != enteredConfirmPassword) {
    registerErrors.enteredConfirmPassword = (
      <p className="text-yellow-600">Please enter correct password!</p>
    );
  }

  if (enteredCheckAgree === false) {
    registerErrors.enteredCheckAgree = (
      <p className="text-red-600">Please accept our terms and conditions!</p>
    );
  }

  return registerErrors;
}
