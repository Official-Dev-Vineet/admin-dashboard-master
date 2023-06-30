import React from "react";
import "./Customer.css";
import MainHeader from "../pop-ups/MainHeader";
import { members, images } from "../../Constants/constants";
import { NavLink, useParams } from "react-router-dom";
import User from "./user/User";
const Customer = () => {
  const { user } = useParams();
  return (
    <div className="customer dashboard">
      <MainHeader title="Customer"> Clients Analytics </MainHeader>
      <main>
        <div className="users">
          <ul>
            {members.map((data, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/Customers/${data.name}`}>
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
        <div>{user !== undefined ? <User /> : ""}</div>
      </main>
    </div>
  );
};

export default Customer;
