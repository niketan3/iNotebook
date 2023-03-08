import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [btn, setbtn] = useState(false)
  const hist = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      // If the user is not logged in then dont show the home page
    } else {
      setbtn(true);
    }
    // Navbar();
  }, [btn, hist]);
  const logoutuser = () => {
    localStorage.removeItem('token');
    setbtn(false);
    hist('/login');
  }
  const loginuser = () => {
    hist('/login')
  }
  const signUp=()=>{
    hist('/signup');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {btn ? (
              <button
                className="btn btn-outline-success mx-2 my-2 my-sm-0"
                type="submit"
                onClick={logoutuser}
              >
                {" "}Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-success mx-2 my-2 my-sm-0"
                type="submit"
                onClick={loginuser}
              >
                {" "}
                Login
              </button>
            )}
            <button
              className="btn btn-outline-success mx-2 my-2 my-sm-0"
              type="submit"
              onClick={signUp}
            >
              SignUp
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
