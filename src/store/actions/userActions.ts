import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();

export const createUser = (email: string, password: string) => {
  return async (dispatch: any) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);
        localStorage.setItem("isLoggedIn", "true");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("errorCode", errorCode);
        console.log("errorMessage", errorMessage);

        // ..
      });
  };
};

export const signIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("isLoggedIn", "true");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
};
