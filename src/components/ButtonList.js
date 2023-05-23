import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button className="bg-black py-2 px-5 m-2 rounded-lg" name="Trending" />
      <Button name="JavaScript" />
      <Button name="C++" />
      <Button name="React" />
      <Button name="DSA" />
      <Button name="OOP" />
      <Button name="HTML" />
      <Button name="CSS" />
      <Button name="Java" />
      <Button name="Git" />
      <Button name="Adobe XD" />
      <Button name="Figma" />
    </div>
  );
};

export default ButtonList;
