import React, { useEffect, useState } from "react";
import { LiveChatMessages } from "./LiveChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateRandomChat, generateRandomName } from "../../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("APi polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomChat(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full border h-[460px] border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {/* <div className="border border-b-black pb-2 font-bold p-2">Top Chat</div> */}
        {/* <div> */}
        {chatMessages.map((c, i) => (
          <LiveChatMessages key={i} name={c.name} message={c.message} />
        ))}
        {/* </div> */}
      </div>
      <div className="border border-black w-full rounded-lg my-1 p-1">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("On form submit", liveMessage);
            dispatch(
              addMessage({
                name: "Srijan Verma",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="w-96 p-1"
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button className="bg-red-600 rounded-lg ml-2 px-2">Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
