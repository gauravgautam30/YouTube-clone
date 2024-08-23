/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  //   console.log(chatMessage);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Live Chat Interval");
      // Fetch new messages from server
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: Math.random().toString(36).substring(2, 25),
        })
      );
      return () => {
        clearInterval(interval);
      };
    }, 2000);
  }, []);
  return (
    <>
      <h1 className=" border border-black rounded-lg">Live Chat</h1>
      <div className="ml-2 border border-black w-[400px] h-[400px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <div className="flex">
            <div>
              <img
                className="w-8 h-8"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              />
            </div>
            <div className="p-1 font-bold items-center text-center">
              {c.name}
            </div>
            <div className="p-1">{c.message}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default LiveChat;
