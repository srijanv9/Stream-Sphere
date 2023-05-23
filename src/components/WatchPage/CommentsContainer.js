import React from "react";

const commentsData = [
  {
    name: "Srijan Verma",
    text: "this is my comment",
    replies: [
      {
        name: "Srijan Verma",
        text: "this is my comment",
        replies: [
          {
            name: "Srijan Verma",
            text: "this is my comment",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Srijan Verma",
    text: "this is my comment",
    replies: [],
  },
  {
    name: "Srijan Verma",
    text: "this is my comment",
    replies: [
      {
        name: "Srijan Verma",
        text: "this is my comment",
        replies: [],
      },
      {
        name: "Srijan Verma",
        text: "this is my comment",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex flex-row bg-gray-100 rounded-lg m-1">
      <img
        className="w-8 h-8"
        alt="xyz"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQtMu0O5J_hGBy4F-LCcffppZpw-PSrQ1xsTbpQDWCSfvqNxq_GxCHaGRnHVBeAxqYCA&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
