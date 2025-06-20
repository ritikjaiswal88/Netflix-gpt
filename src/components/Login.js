import Header from "./Header";
import { useRef, useState } from "react";
import { CheckValidationData } from "../utils/validation";
import { useNavigate} from "react-router-dom";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVETAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handelButtonClick = () => {

    const message = CheckValidationData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        //updating profile -  
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVETAR
        }).then(() => {
          const { uid, email, displayName ,photoURL } = auth.currentUser;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message)
        });

        navigate("/browse")
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  };

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header/>
      <div className="absolute">
        <div className="h-lvh w-lvw overflow-hidden ">
          <div className="h-lvh w-lvw bg-black opacity-50 absolute z-0"></div>
          <img
            className="z-0 size-[120%]"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
          />
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white rounded justify-center align-center"
      >
        <h1 className="font-bold text-3xl mb-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email addresh"
          className="py-2 my-2  w-full rounded bg-stone-700 bg-opacity-25 border-[1px] border-stone-500 "
        ></input>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Your Name"
            className="py-2 my-2  w-full rounded bg-stone-700 bg-opacity-25 border-[1px] border-stone-500 "
          ></input>
        )}
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="py-2 my-2 w-full rounded  bg-stone-700 bg-opacity-25 border-[1px] border-stone-500"
        ></input>
        <p className="text-red-500 font-bold p-2">{erroMessage}</p>
        <button
          className="bg-[#E50914] py-2 my-2 w-full rounded"
          onClick={handelButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center">Forgot password?</p>
        {isSignInForm ? (
          <p className="py-4">
            New to Netflix?{" "}
            <a className="cursor-pointer font-bold" onClick={toggleSignInform}>
              Sign up now.
            </a>
          </p>
        ) : (
          <p className="py-4">
            Alredy Registread
            <a className="cursor-pointer font-bold" onClick={toggleSignInform}>
              Sign in now.
            </a>
          </p>
        )}
      </form>
      {isSignInForm ? "Sign In" : "Sign Up"}
    </>
  );
};
export default Login;
