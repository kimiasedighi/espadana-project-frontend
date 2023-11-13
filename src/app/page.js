"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "./Assets/Images/logo.png";
import "./Assets/CSS/panel.css";

export default function Panel() {
  const router = useRouter();
  return (
    <div className="landing-container">
      <Image src={Logo} width={350} height={350} />
      <h1>Unlock Your Financial Potential</h1>
      <p>
        Welcome to the Investment Panel, your gateway to intelligent investing.
        Explore opportunities and watch your wealth grow.
      </p>
      <div className="cta-button">
        <button type="button" onClick={() => router.push('/login')}>Get Started</button>
      </div>
    </div>
  );
}
