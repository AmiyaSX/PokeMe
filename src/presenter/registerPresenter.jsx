import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { auth } from "../model/firebaseModel";
import { createUserWithEmailAndPassword } from "firebase/auth";
import RegisterView from "../views/registerView";

const RegisterPresenter = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const formatErrorMessage = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "This email is already in use. Please login or use a different email.";
      case "auth/invalid-email":
        return "The email address is invalid. Please enter a valid email.";
      case "auth/operation-not-allowed":
        return "Registration is currently not allowed. Please try again later.";
      case "auth/weak-password":
        return "The password is too weak. Please enter a stronger password.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registered user:", userCredential.user);
      setIsRegistered(true);
      setTimeout(() => {
        window.location.hash = "#/login";
      }, 1500);
    } catch (error) {
      setError(formatErrorMessage(error));
      setIsRegistered(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterView
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      handleRegister={handleRegister}
      error={error}
      isLoading={isLoading}
      isRegistered={isRegistered}
    />
  );
});

export default RegisterPresenter;
