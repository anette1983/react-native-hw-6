// import db from "../../firebase/config";
// import { auth } from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authStateChange, updateUserProfile } from "./authSlice";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      // const {user} = await createUserWithEmailAndPassword(auth, email, password);
      await createUserWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: login,
        // avatar: photo,
      });

      // const {
      //   uid,
      //   displayName,
      //   email: emailBase,
      //   avatar: photoUrlBase,
      // } = auth.currentUser;
      const { uid, displayName } = auth.currentUser;
      console.log("uid, displayName :>> ", uid, displayName);
      const userProfile = {
        userId: uid,
        login: displayName,
        // email: emailBase,
        //  avatar: photoUrlBase,
      };

      dispatch(updateUserProfile(userProfile));
      return user;
    } catch (error) {
      console.log("error :>> ", error);
      console.log("error.message :>> ", error.message);
    }
  };
export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user :>> ", user);
    } catch (error) {
      console.log("error :>> ", error);
      console.log("error.message :>> ", error.message);
    }
  };
export const authSignOutUser = () => async (dispatch, getState) => {};

export const authStateChangeUser = () => async (dispatch, state) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userProfile = {
        userId: user.uid,
        // login: user.displayName,
        // email: user.email,
        // avatar: user.photoURL,
      };

      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userProfile));
    }
  });
};
