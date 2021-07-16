import React, { useState } from "react";
import "./Pqrs.scss";
import plus from "../../../assets/img/common/plus.svg";
export const Pqrs = () => {
  const [messages, setMessages] = useState(data);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && message.trim().length > 0) {
      // Enviar primero el mensaje a la api, si esta reponde indicando que el mensaje se guardo
      // en la base de datos de forma exitosa entonces ejecutar lo siguiente, de lo contrario no ejecutar.
      const newMessage = {
        id: 1,
        name: "Juan Jose",
        email: "usuario@adas.com",
        description: message,
        user_id: 1,
        admin_id: 1,
        status: 0,
        created_at: "2021-07-05T13:54:33.174Z",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleClick = () => {
    if (message.trim().length > 0) {
      // Enviar primero el mensaje a la api, si esta reponde indicando que el mensaje se guardo
      // en la base de datos de forma exitosa entonces ejecutar lo siguiente, de lo contrario no ejecutar.
      const newMessage = {
        id: 1,
        name: "Juan Jose",
        email: "usuario@adas.com",
        description: message,
        user_id: 1,
        admin_id: 1,
        status: 0,
        created_at: "2021-07-05T13:54:33.174Z",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const messageAdminStyles = "col-span-9 lg:col-span-7 col-start-4 lg:col-start-6 message bg-green-200";
  const messageUserStyles = "col-span-9 lg:col-span-7 message bg-gray-200";
  return (
    <div className="h-full relative">
      <div className="flex pt-5 pb-8 gap-10">
        <input placeholder="Busqueda" onChange={(e) => handleChange(e)} className="custom-input w-full i-max-w-1" />
        <button className="btn btn-1 i-w-1" variant="contained">
          Buscar
        </button>
      </div>
      <div className="messages-container grid grid-cols-12">
        <div className="line-top"></div>
        <div className="col-span-4 recents">
          <div className="message bg-green-200 w-full">
            Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
            fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur laboris
            incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud dolore.
          </div>
          <div className="message bg-green-200 w-full">
            Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
            fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur laboris
            incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud dolore.
          </div>
          <div className="message bg-green-200 w-full">
            Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
            fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur laboris
            incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud dolore.
          </div>
        </div>
        <div className="col-span-8 chat">
          <div className="chat-body">
            <div className="chat-body-content">
              {messages.map((row, index) => (
                <div key={index} className="grid grid-cols-12">
                  <div className={row.admin_id !== 0 ? messageAdminStyles : messageUserStyles}>{row.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-input">
            <input
              value={message}
              placeholder="Busqueda"
              onChange={(e) => handleChange(e)}
              onKeyPress={handleKeyPress}
              className="custom-input w-full"
            />
            <div className="btn-submit" onClick={handleClick}>
              <img src={plus} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    name: "Juan Jose",
    email: "usuario@adas.com",
    description: `Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
    fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur
    laboris incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud
    dolore.`,
    user_id: 1,
    admin_id: 0,
    status: 0,
    created_at: "2021-07-05T13:54:33.174Z",
  },
  {
    id: 1,
    name: "Juan Jose",
    email: "usuario@adas.com",
    description: `Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
    fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur
    laboris incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud
    dolore.`,
    user_id: 1,
    admin_id: 0,
    status: 0,
    created_at: "2021-07-05T13:54:33.174Z",
  },
  {
    id: 1,
    name: "Juan Jose",
    email: "usuario@adas.com",
    description: `Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
    fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur
    laboris incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud
    dolore.`,
    user_id: 1,
    admin_id: 1,
    status: 0,
    created_at: "2021-07-05T13:54:33.174Z",
  },
  {
    id: 1,
    name: "Juan Jose",
    email: "usuario@adas.com",
    description: `Reprehenderit ipsum exercitation laboris velit minim nostrud in voluptate aliqua qui occaecat pariatur
    fugiat. Anim enim amet do nisi laborum cupidatat. Voluptate qui cillum velit ea dolor consectetur
    laboris incididunt aute elit quis consequat. Consequat consectetur non voluptate pariatur enim nostrud
    dolore.`,
    user_id: 1,
    admin_id: 0,
    status: 0,
    created_at: "2021-07-05T13:54:33.174Z",
  },
];
