import React, {useState } from "react";
import { user as admin, members, images } from "../../Constants/constants";
import { NavLink, useParams } from "react-router-dom";
import "./Message.css";
import MainHeader from "../pop-ups/MainHeader";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import Data from "../../Constants/msg.json";
const Message = () => {
  const [status, setStatus] = useState("online");
  const { user } = useParams();
  function sendMessage(e) {
    let msg = document.querySelector("#help").value;
    let messageArea = document.querySelector(".messages");
    let text = document.createElement("div");
    text.innerHTML = `<div class="right msg">
    <h5 style='color:var(--primary)'>${admin}</h5>
    <p style='font-style:italic'>${msg}</p>
  </div>`;
    messageArea.appendChild(text);
    setStatus("sent");
    setTimeout(() => setStatus("online"),1000);
  }
  return (
    <div className="message dashboard">
      <MainHeader title={"Messenger"}>Client Messages details</MainHeader>
      <main>
        <div className="users">
          <ul>
            {members.map((data, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/Messages/${data.name}`}>
                    <div className="user" style={{ "--i": index + 1 }}>
                      <img src={images[index]} height={40} alt={data.name} />
                      <div className="user-details">
                        <h3>{data.name}</h3>
                        <p>{data.post}</p>
                      </div>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {user !== undefined && (
          <div className="message-area">
            <div className="message-header">
              <div className="header-text">
                <span className="icon">{<EmailIcon />}</span> <h3>Messenger</h3>
              </div>
              <div className="user-info">
                <span id="status">{status}</span>
              </div>
            </div>
            <div className="messages">
              <div className="left msg">
                <h5 style={{ color: "var(--primary)" }}>{user}</h5>
                <p style={{ fontStyle: "italic" }}>hy</p>
              </div>
              <div className="right msg">
                <h5 style={{ color: "var(--primary)" }}>{admin}</h5>
                <p style={{ fontStyle: "italic" }}>hello</p>
              </div>
              {Data.map((msg) => { 
               return  msg[user]["msg-user"].map((data,index) => {
                  return (
                    <div key={index} className="left msg">
                      <h5 style={{ color: "var(--primary)" }}>
                        {msg[user]["name"]}
                      </h5>
                      <p style={{ fontStyle: "italic" }}>{data}</p>
                    </div>
                  );
                });
              })}
              <div className="input-area">
                <select id="help">
                  <optgroup label="help">
                    <option value="how can i help you">
                      how can i help you
                    </option>
                    <option value="Are you satisfy our services">
                      are you satisfy our services
                    </option>
                  </optgroup>
                </select>
                <span className="icon" onClick={(e) => sendMessage(e)}>
                  {<SendIcon />}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Message;
