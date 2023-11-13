"use client";

import { useState } from "react";
import Input from "../Layouts/input";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../Assets/Images/login.png";
import "../Assets/CSS/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <Image src={Avatar} width={180} height={180} />
      <Input type="text" text="Username" stateChanger={setUsername} />
      <Input type="password" text="Password" stateChanger={setPassword} />
      <div className="login-button">
        <button>Login</button>
      </div>
      <div className="signup-link">
        <p>
          Don't have an account?{" "}
          <Link href="/signup">Click here to signup</Link>
        </p>
      </div>
    </div>
  );
}
