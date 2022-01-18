import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-row-4 text-center items-center bg-orange-400"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/menu" className="p-4">
        Menu
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
    </div>
  );
};

export default DropDown;
