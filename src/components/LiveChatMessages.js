import React from "react";

export const LiveChatMessages = ({ name, message }) => {
  return (
    <>
      <div className="flex items-center p-1">
        <img
          className="h-8"
          alt="profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQtMu0O5J_hGBy4F-LCcffppZpw-PSrQ1xsTbpQDWCSfvqNxq_GxCHaGRnHVBeAxqYCA&usqp=CAU"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
      </div>
    </>
  );
};
