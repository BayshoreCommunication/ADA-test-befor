import React from "react";
import "./button.css";

interface AnimateButtonProps {
  text: string;
  url: string;
}

const MainButton: React.FC<AnimateButtonProps> = ({ text, url }) => {
  return (
    <div>
      <a href={url} className="button">
        {text}
      </a>
    </div>
  );
};

export default MainButton;
