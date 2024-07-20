import clsx from "clsx";
import { useState } from "react";
import styles from "./Main.module.scss";
import Chat from "./chat/Chat";
import { useQuery } from "@tanstack/react-query";
import chatService from "@/services/chat-service/chat.service";

const Main = () => {
  const { data } = useQuery({
    queryKey: ["chats"],
    queryFn: () => chatService.getAllChat(),
  });
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const vremDataChats: any[] = [];
  const item = {
    avatar: "https://avatars.githubusercontent.com/u/108341880?v=4",
    name: "John Doe",
    messages: [
      ...Array(40).fill(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ),
    ],
  };
  for (let i = 1; i < 20; i++) {
    vremDataChats.push({ ...item, id: i });
  }

  return (
    <div className={styles.main}>
      {data?.length ? (
        <div
          className={clsx(styles.chats, {
            [styles.selectChat]: selectedChat,
          })}
        >
          {data.map((chat, i) => (
            <div
              key={i}
              className={clsx(styles.chatsChat, {
                [styles.active]: i + 1 === selectedChat?.id,
              })}
              onClick={() => setSelectedChat(chat)}
            >
              <div className={styles.containerAvatar}>
                <img src={chat.img} alt={chat.name} />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{chat.name}</div>
                <div className={styles.lastMessage}>
                  {/* {chat.messages[chat.messages.length - 1].content} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={clsx(styles.noChat, {
            [styles.selectChat]: !selectedChat,
          })}
        >
          No chats
        </div>
      )}
      {selectedChat ? (
        <Chat {...selectedChat} closeChat={() => setSelectedChat(null)} />
      ) : (
        <div
          className={clsx(styles.noChat, {
            [styles.selectChat]: !selectedChat,
          })}
        >
          No chat selected
        </div>
      )}
    </div>
  );
};

export default Main;
