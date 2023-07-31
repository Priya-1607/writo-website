import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
function LoginForm(props) {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };
//new change

  return (
    <div className="popup">
      <div className="popup-inner">
        {/* <button> */}
        <AiOutlineClose className="close" onClick={props.toggle} />
        {/* </button> */}
        <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title">Sign in</h2>

                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>

                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>

                <input type="submit" value="Login" className="btn solid" />

                <p className="social-text">Or Sign in with social platforms</p>

                {/* // social media links */}
                <div class="social-media">
                  <a href="/">
                    <FcGoogle class="social-icon" />
                  </a>
                  <a href="/">
                    <BsTwitter class="social-icon" />
                  </a>
                  <a href="/">
                    <GrLinkedinOption class="social-icon" />
                  </a>
                  <a href="/">
                    <BsInstagram class="social-icon" />
                  </a>
                </div>
              </form>

              <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>

                {/* // sign up inputs */}
                <div class="input-field">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <i class="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                  <i class="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>

                <input type="submit" className="btn" value="Sign up" />

                <p className="social-text">Or Sign up with social platforms</p>

                {/* // social media links */}
                <div class="social-media">
                  <a href="/">
                    <FcGoogle class="social-icon" />
                  </a>
                  <a href="/">
                    <BsTwitter class="social-icon" />
                  </a>
                  <a href="/">
                    <GrLinkedinOption class="social-icon" />
                  </a>
                  <a href="/">
                    <BsInstagram class="social-icon" />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Lorem ipsum dolor...</p>
                <button className="btn transparent" onClick={toggleMode}>
                  Sign up
                </button>
              </div>
              <img src="./assets/log.svg" className="image" alt="" />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Lorem ipsum dolor...</p>
                <button className="btn transparent" onClick={toggleMode}>
                  Sign in
                </button>
              </div>
              <img src="./assets/register.svg" className="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm;
