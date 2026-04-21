import { useState } from "react";
import "../../styles/styles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { inValidate } from "../../utils/validate";
import apiService from "../../utils/apiService";

const LoginSignUpModal = (props) => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorData, setErrorData] = useState({
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    apiError: "",
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

  const handleSubmit = async () => {
    const { username, email, password, confirmPassword } = formData;

    let errors = {
      usernameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      apiError: "",
    };

    if (!inValidate("username", username)) {
      errors.usernameError = "Username must be 3–20 characters and can only contain letters, numbers, and underscores."
    }

    if (activeTab === "signup" && !inValidate("email", email)) {
      errors.emailError = "Please enter a valid email address."
    }

    if (!inValidate("password", password)) {
      errors.passwordError = "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
    }

    if (activeTab === "signup") {
      if (password !== confirmPassword) {
        errors.confirmPasswordError = "Password doesn't match !!"
      }
    }

    try {
      const formattedResponse = await apiService.get("login-user-data", { params: { username } });

       console.log("API response for userdata :", formattedResponse);
      if (formattedResponse.length === 0) {
        errors.apiError = "User doesn't exist, please Sign up.";
      } else if (formattedResponse[0].password !== password) {
        errors.apiError = "Password doesn't match, please try with correct password.";
      }

    } catch (error) {
      errors.apiError = "Something went wrong ! please try again."
    }

    setErrorData(errors);

    const hasError =
      errors.usernameError ||
      errors.emailError ||
      errors.passwordError ||
      errors.confirmPasswordError ||
      errors.apiError;

    if (hasError) {
      setTimeout(() => {
        resetErrorData();
      }, 3000);

      return;
    }

    const userData = `${username}${password}${activeTab}`;
    const userDataHash = btoa(userData); // simple encoding for demo

    // 🔹 Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userDataHash));

    // 🔹 Update parent state
    props.setUserDetails(userData);
    setUser(userData); // Update context  

    // 🔹 Navigate to products page
    navigate("/products");

  };

  const resetErrorData = () => {
    setErrorData({
      usernameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      apiError: "",
    })
  }

  const getTabClasses = (tab) => {
    const base = "w-1/2 py-3 text-center";

    if (tab === "login") {
      return `${base} ${activeTab === "login"
        ? "LoginSignUpModal-activeTab border-r-2"
        : "LoginSignUpModal-inActiveTab"
        }`;
    }

    return `${base} ${activeTab === "signup"
      ? "LoginSignUpModal-activeTab rounded-tl-3xl border-l-2"
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

          {errorData.usernameError !== "" && <span className="text-red-600">{errorData.usernameError}</span>}

          {activeTab === "signup" && (
            <>
              <input
                type="text"
                name="email"
                placeholder="Type your email"
                value={formData.email}
                onChange={handleChange}
                className="LoginSignUpModal-input"
              />
              {errorData.emailError !== "" && <span className="text-red-600">{errorData.emailError}</span>}
            </>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="LoginSignUpModal-input"
          />

          {errorData.passwordError !== "" && <span className="text-red-600">{errorData.passwordError}</span>}

          {activeTab === "signup" && (<>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="LoginSignUpModal-input"
            />
            {errorData.confirmPasswordError !== "" && <span className="text-red-600">{errorData.confirmPasswordError}</span>}
          </>
          )}

          {errorData.apiError !== "" && <span className="text-red-600">{errorData.apiError}</span>}

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