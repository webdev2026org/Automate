import { useState } from "react";
import "../../styles/styles.css";

const LoginSignUpModal = (props) => {
  const [activeTab, setActiveTab] = useState("login");

  // 🔹 handler method
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginClose = () => {
        props.onLoginClose()
    }

  // 🔹 class generator (keeps JSX clean)
  const getTabClasses = (tab) => {
    const base = "w-1/2 py-3 text-center";

    if (tab === "login") {
      return `${base} rounded-tl-3xl ${
        activeTab === "login"
          ? "LoginSignUpModal-activeTab rounded-tl-3xl border-r-2"
          : "LoginSignUpModal-inActiveTab"
      }`;
    }

    return `${base} rounded-tr-3xl ${
      activeTab === "signup"
        ? "LoginSignUpModal-activeTab rounded-tl-3xl border-l-2 "
        : "LoginSignUpModal-inActiveTab"
    }`;
  };

  return (
    <div className="LoginSignUpModal">
        <div className="LoginSignUpModal-colose-container">
        <span 
        className="LoginSignUpModal-close"
        onClick={handleLoginClose}
        >&times;
        </span>
        </div>
      <div className="LoginSignUpModal-content">
        {/* Tabs */}
        <div className="LoginSignUpModal-tabs">
          <button
            onClick={() => handleTabChange("login")}
            className={getTabClasses("login")}
          >
            Login
          </button>

          <button
            onClick={() => handleTabChange("signup")}
            className={getTabClasses("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <div className="LoginSignUpModal-form">
          <input
            type="text"
            placeholder="Username"
            className="LoginSignUpModal-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="LoginSignUpModal-input"
          />

          {activeTab === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="LoginSignUpModal-input"
            />
          )}

          <button className="LoginSignUpModal-button">
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpModal;