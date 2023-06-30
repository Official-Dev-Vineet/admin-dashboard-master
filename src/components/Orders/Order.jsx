import React, { useEffect, useState } from "react";
import MainHeader from "../pop-ups/MainHeader";
import "./Order.css";
import { order } from "../../Constants/constants";
import SettingsIcon from "@mui/icons-material/Settings";

const Order = () => {
  const [statusVal, setStatus] = useState("all");
  useEffect(() => {
    let status = document.querySelectorAll(".all");
    status.forEach((element, index) => {
      let text = element.textContent;
      element.classList.add(text);
    });
    status.forEach((element) => {
      element.parentElement.style.display = "none";
      if (element.classList.contains(statusVal)) {
        element.parentElement.style.display = "table-row";
      }
    });
    classListAdd();
  }, [statusVal]);

  function classListAdd() {
    const filter = document.querySelectorAll(".filter ul li");
    filter.forEach((ele) => {
      ele.onclick = (e) => {
        document
          .querySelector(".filter ul li.active")
          .classList.remove("active");
        e.currentTarget.classList.add("active");
      };
    });
  }
  return (
    <div className="order dashboard">
      <MainHeader title="Order">Order list of this month </MainHeader>
      <main>
        <div className="filter">
          <ul>
            <li onClick={() => setStatus("all")} className="active">
              All order{" "}
            </li>
            <li onClick={() => setStatus("dispatch")}>Dispatch</li>
            <li onClick={() => setStatus("pending")}>Pending</li>
            <li onClick={() => setStatus("completed")}>Completed</li>
          </ul>
          <div className="time">
            <input type="date" id="start" min="2022-01-01" />
            <span>To</span>
            <input type="date" id="end" max="2026-01-01" />
          </div>
        </div>
        <div className="order-details">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>address</th>
                <th>date</th>
                <th>price</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {order.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.Address}</td>
                    <td>{data.date}</td>
                    <td>${Math.round(Math.random() * 239 + 23)}</td>
                    <td className={`all`}>{data.status}</td>
                    <td>{<SettingsIcon />}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Order;
