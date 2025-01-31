import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for Signup
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const url = isLogin ? "http://localhost:8080/login" : "http://localhost:8080/signup";
      const data = isLogin ? { email, password } : { name, email, password };

      const response = await axios.post(url, data);

      if (response.data.message === (isLogin ? "Login successful" : "Signup successful")) {
        navigate(isLogin ? "/dashboard" : "/login");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(isLogin ? "Invalid email or password." : "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-white pt-[100px]">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-600 text-center mb-4">
            {isLogin ? "Sign in to continue" : "Join us today"}
          </p>

          {/* Google Sign-In */}
          <div className="flex justify-center mb-6">
            <button className="flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              <FaGoogle className="mr-2" />
              {isLogin ? "Continue with Google" : "Sign up with Google"}
            </button>
          </div>

          <div className="text-center text-gray-500 mb-6">
            {isLogin ? "or sign in with your email" : "or sign up with your email"}
          </div>

          {/* Display Error Message */}
          {errorMessage && <div className="mb-4 text-red-500 text-center">{errorMessage}</div>}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                className="absolute right-4 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg transition duration-300 shadow-md ${
                loading
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600"
              }`}
            >
              {loading ? (isLogin ? "Signing In..." : "Creating Account...") : isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <div className="text-center text-gray-600 mt-6">
            {isLogin ? "New here? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline "
            >
              {isLogin ? "Create an Account" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
