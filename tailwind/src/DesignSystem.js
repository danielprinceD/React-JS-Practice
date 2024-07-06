import React, { useState } from "react";

const DesignSystem = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={"h-screen " + (dark ? "dark" : "")}>
      <div className="container mx-auto h-64 dark:bg-black dark:text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
        quidem! Porro mollitia minus, nulla maiores iste repudiandae quos
        distinctio impedit voluptatibus, blanditiis reprehenderit molestiae
        magni? Nisi sunt accusantium tenetur molestiae!
      </div>
      <button onClick={() => setDark(!dark)}>Dark</button>
    </div>
  );
};

export default DesignSystem;
