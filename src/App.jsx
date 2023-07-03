import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "modules/firebase";
import { currentUser } from "redux/modules/userInfo";
import Router from "shared/Router";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log("🚀 ~ file: App.jsx:14 ~ useEffect ~ user:", user);
      if (user !== null) {
        const { uid, displayName, photoURL, email } = user;
        dispatch(currentUser({ uid, displayName, photoURL, email }));
      } else {
      }
      return;
    });
  }, [dispatch]);

  return <Router />;
};

export default App;
