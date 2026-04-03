import { useState } from "react";
import "../../styles/styles.css";
import { useNavigate } from "react-router-dom";

const LoginSignUpModal = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginClose = () => {
    props.onLoginClose();
  };

  // 🔹 handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
  const { username, password, confirmPassword } = formData;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  if (activeTab === "signup") {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  }

  const userData = `${username}${password}${activeTab}`;
  const userDataHash = btoa(userData); // simple encoding for demo

  // 🔹 Save to localStorage
  localStorage.setItem("userData", JSON.stringify(userDataHash));

  // 🔹 Update parent state
  props.setUserDetails(userData);

  // 🔹 Navigate to products page
  navigate("/products");
};

  const getTabClasses = (tab) => {
    const base = "w-1/2 py-3 text-center";

    if (tab === "login") {
      return `${base} ${
        activeTab === "login"
          ? "LoginSignUpModal-activeTab border-r-2"
          : "LoginSignUpModal-inActiveTab"
      }`;
    }

    return `${base} ${
      activeTab === "signup"
        ? "LoginSignUpModal-activeTab border-l-2"
        : "LoginSignUpModal-inActiveTab"
    }`;
  };

  return (
    <div className="LoginSignUpModal">
      <div className="LoginSignUpModal-colose-container">
        <span
          className="LoginSignUpModal-close"
          onClick={handleLoginClose}
        >
          &times;
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
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="LoginSignUpModal-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="LoginSignUpModal-input"
          />

          {activeTab === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="LoginSignUpModal-input"
            />
          )}

          <button
            className="LoginSignUpModal-button"
            onClick={handleSubmit}
          >
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpModal;