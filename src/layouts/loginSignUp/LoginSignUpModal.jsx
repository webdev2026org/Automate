import { useState, useRef, useEffect } from "react";
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
  const errorTimeoutRef = useRef(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    resetUser();
    resetErrorData();
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

  const triggerErrorReset = () => {
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current); // ✅ prevent stacking
    }

    errorTimeoutRef.current = setTimeout(() => {
      resetErrorData();
    }, 3000);
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

    // ======================
    // 🔥 1. VALIDATION
    // ======================
    if (!inValidate("username", username)) {
      errors.usernameError = "Invalid username";
    }

    if (!inValidate("password", password)) {
      errors.passwordError = "Invalid password";
    }

    if (activeTab === "signup") {
      if (!inValidate("email", email)) {
        errors.emailError = "Invalid email";
      }

      if (password !== confirmPassword) {
        errors.confirmPasswordError = "Passwords do not match";
      }
    }

    // 🚨 STOP if validation fails
    const hasValidationError = Object.values(errors).some(Boolean);

    if (hasValidationError) {
      setErrorData(errors);
      triggerErrorReset(); // ✅ controlled timeout
      return;
    }

    try {
      // ======================
      // 🔥 2. FETCH USER
      // ======================
      const users = await apiService.get("login-user-data", {
        params: { username },
      });

      // ======================
      // 🔐 LOGIN FLOW
      // ======================
      if (activeTab === "login") {
        if (!users.length) {
          setErrorData({ ...errors, apiError: "User not found. Please signup." });
          triggerErrorReset();
          return;
        }

        if (users[0].password !== password) {
          setErrorData({ ...errors, apiError: "Incorrect password." });
          triggerErrorReset();
          return;
        }

        return handleSuccess(username, "login");
      }

      // ======================
      // 🆕 SIGNUP FLOW
      // ======================
      if (activeTab === "signup") {
        if (users.length > 0) {
          setErrorData({
            ...errors,
            apiError: "User already exists. Please login...",
          });
          triggerErrorReset();
          return;
        }

        await apiService.post("signup-user-data", {
          body: { username, email, password },
        });

        return handleSuccess(username, "signup");
      }

    } catch (err) {
      setErrorData({
        ...errors,
        apiError: "Something went wrong. Try again.",
      });
      triggerErrorReset();
    }
  };

  const handleSuccess = (username, type) => {
    const userData = `${username}:${type}`; // ❗ no password
    const encoded = btoa(userData);

    localStorage.setItem("userData", JSON.stringify(encoded));

    props.setUserDetails(userData);
    setUser(userData);

    navigate("/products");
  };

  const resetErrorData = () => {
    setErrorData({
      usernameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      apiError: "",
    });
  };

  const resetUser = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

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

  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="LoginSignUpModal">
      <div className="LoginSignUpModal-colose-container">
        <span className="LoginSignUpModal-close" onClick={handleLoginClose}>
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

          {errorData.usernameError !== "" && (
            <span className="text-red-600">{errorData.usernameError}</span>
          )}

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
              {errorData.emailError !== "" && (
                <span className="text-red-600">{errorData.emailError}</span>
              )}
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

          {errorData.passwordError !== "" && (
            <span className="text-red-600">{errorData.passwordError}</span>
          )}

          {activeTab === "signup" && (
            <>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="LoginSignUpModal-input"
              />
              {errorData.confirmPasswordError !== "" && (
                <span className="text-red-600">
                  {errorData.confirmPasswordError}
                </span>
              )}
            </>
          )}

          {errorData.apiError !== "" && (
            <span className="text-red-600">{errorData.apiError}</span>
          )}

          <button className="LoginSignUpModal-button" onClick={handleSubmit}>
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpModal;
