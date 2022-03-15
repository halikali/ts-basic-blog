import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createUser, signIn } from "store/actions/userActions";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRepeatRef = useRef<HTMLInputElement>(null);

  const loginEmailRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);

  const signUphandler = (e: any) => {
    if (
      emailRef.current!.value &&
      passwordRef.current!.value &&
      passwordRepeatRef.current!.value
    ) {
      passwordRef.current!.value === passwordRepeatRef.current!.value &&
        dispatch(
          createUser(emailRef.current!.value, passwordRef.current!.value)
        );
      navigate("/create-post");
    }
  };

  const signInHandler = (e: any) => {
    if (loginEmailRef.current!.value && loginPasswordRef.current!.value) {
      dispatch(
        signIn(loginEmailRef.current!.value, loginPasswordRef.current!.value)
      );
      navigate("/create-post");
    }
  };

  return (
    <div className="row login">
      <form className="col-12 col-lg-4 form">
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password"> Password </label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="passwordRepeat">Password Repeat </label>
            <input
              type="password"
              id="passwordRepeat"
              ref={passwordRepeatRef}
            />
          </div>
        </div>

        <p className="button" onClick={(e) => signUphandler(e)}>
          Sign Up
        </p>
      </form>

      <form className="col-12 col-lg-4 form">
        <div className="inputs">
          <div className="input-wrapper">
            <label htmlFor="email">Email </label>
            <input type="email" id="email" ref={loginEmailRef} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password"> Password </label>
            <input type="password" id="password" ref={loginPasswordRef} />
          </div>
        </div>

        <p className="button" onClick={(e) => signInHandler(e)}>
          Sign In
        </p>
      </form>
    </div>
  );
};

export default Login;
