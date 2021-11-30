import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sets the user to the retrieved user | {} -> PAYLOAD
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        // Sets the user to 'null'
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* 1. Header */}
      <Header />

      {/* No User ? Login Page : Home Page */}
      {!user ? (
        <Login />
      ) : (
        // 2. App Body [Widgets]
        <div className="app__body">
          {/* 2.1 Sidebar */}
          <Sidebar />
          {/* 2.2 Feed */}
          <Feed />
          {/* 2.3 Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;

// https://linked-in-clone-8ccf3.web.app/
