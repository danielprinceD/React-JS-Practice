import React from "react";
import "./globals.css";
import Link from "next/link";
import Card from "./components/Card";
const Home = () => {
  return (
    <div>
      <h2>Hello</h2>
      <Link href={"/User"}>User</Link>
      <Card />
    </div>
  );
};

export default Home;
