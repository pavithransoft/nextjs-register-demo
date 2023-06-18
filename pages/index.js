import { useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Link from "next/link";
import RegisterFormValidation from "@/components/RegisterFormValidation";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const CheckAgreeRef = useRef();

  const [registerErrors, setRegisterErrors] = useState({});

  function eyeClickNew() {
    setVisible(!visible);
  }

  const eyeIconNew = visible ? (
    <FaEye onClick={eyeClickNew} className="eye-icon" />
  ) : (
    <FaEyeSlash onClick={eyeClickNew} className="eye-icon" />
  );

  const passwordInputType = visible ? "text" : "password";

  function eyeClickConfirm() {
    setVisibleConfirm(!visibleConfirm);
  }

  const eyeIconConfirm = visibleConfirm ? (
    <FaEye onClick={eyeClickConfirm} className="eye-icon" />
  ) : (
    <FaEyeSlash onClick={eyeClickConfirm} className="eye-icon" />
  );

  const passwordInputTypeConfirm = visibleConfirm ? "text" : "password";

  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;
    const enteredConfirmPassword = confirmPasswordRef.current.value;
    const enteredCheckAgree = CheckAgreeRef.current.checked;

    setRegisterErrors(
      RegisterFormValidation(
        enteredUsername,
        enteredEmail,
        enteredNewPassword,
        enteredConfirmPassword,
        enteredCheckAgree
      )
    );

    console.log(
      enteredUsername,
      enteredEmail,
      enteredNewPassword,
      enteredConfirmPassword,
      enteredCheckAgree
    );

    // usernameRef.current.value = "";
    // emailRef.current.value = "";
    // newPasswordRef.current.value = "";
    // confirmPasswordRef.current.value = "";
    // CheckAgreeRef.current.checked = "";
  }

  return (
    <div className="screen">
      <div className="split-screen">
        <h1>Next Register</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              autoFocus
              minLength={8}
              maxLength={20}
              // required
              ref={usernameRef}
              className={
                registerErrors.enteredUsername ? "invalid-input peer" : ""
              }
            />
            {registerErrors.enteredUsername && (
              <span>{registerErrors.enteredUsername}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              autoFocus
              maxLength={100}
              // required
              ref={emailRef}
              className={
                registerErrors.enteredEmail ? "invalid-input peer" : ""
              }
            />
            {registerErrors.enteredEmail && (
              <span>{registerErrors.enteredEmail}</span>
            )}
          </div>
          <div className="password-layer">
            <div className="relative">
              <label htmlFor="new-password">New Password</label>
              <input
                type={passwordInputType}
                id="new-password"
                placeholder="************"
                autoFocus
                minLength={8}
                maxLength={12}
                // min={8}
                // max={12}
                // required
                ref={newPasswordRef}
                className={
                  registerErrors.enteredNewPassword ? "invalid-input peer" : ""
                }
              />
              {eyeIconNew}
              {registerErrors.enteredNewPassword && (
                <span className="error-span">
                  {registerErrors.enteredNewPassword}
                </span>
              )}
            </div>
            <div className="relative">
              <label htmlFor="confirm">Confirm Password</label>
              <input
                type={passwordInputTypeConfirm}
                id="confirm-password"
                placeholder="************"
                autoFocus
                minLength={8}
                maxLength={12}
                // required
                ref={confirmPasswordRef}
                className={
                  registerErrors.enteredConfirmPassword
                    ? "invalid-input peer"
                    : ""
                }
              />
              {eyeIconConfirm}
              {registerErrors.enteredConfirmPassword && (
                <span className="error-span">
                  {registerErrors.enteredConfirmPassword}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-1">
            <input
              type="checkbox"
              id="checkbox"
              className={
                registerErrors.enteredCheckAgree
                  ? "checkbox accent-green-600"
                  : "checkbox"
              }
              ref={CheckAgreeRef}
            />
            <p>
              By creating an account, you agree
              <Link href="">Terms & Conditions</Link>and
              <Link href="">Privacy Policy</Link>.
            </p>
          </div>
          {registerErrors.enteredCheckAgree && (
            <span>{registerErrors.enteredCheckAgree}</span>
          )}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
