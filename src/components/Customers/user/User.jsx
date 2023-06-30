import {useParams } from "react-router-dom";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { images, members } from "../../../Constants/constants";

const User = () => {
  const { user } = useParams();
  const userDate = {
    Skew: "12-04-2020",
    Robert: "13-06-2019",
    jonathan: "25-04-2018",
    Saliva: "24-08-2018",
    Newton: "12-09-2021",
    Fredrick: "23-07-2020",
    Elli: "23-12-2019",
  };
  const userImage = {
    Skew: images[0],
    Robert: images[1],
    jonathan: images[2],
    Saliva: images[3],
    Newton: images[4],
    Fredrick: images[5],
    Elli: images[6],
  };
  return (
    <article className="user-details">
      <header>
        <h1>{user}</h1>
        <p>
          Member Since <span>{userDate[user]}</span>{" "}
        </p>
      </header>
      <div className="details">
        <div className="image">
          <img src={userImage[user]} alt={user} height={50} />
        </div>
        <div className="bio-data">
          {members.map((data, index) => {
            return data.name === user ? (
              <ul key={index}>
                <li>
                  <h3>Id</h3>
                  <span>{data.id}</span>{" "}
                </li>
                <li>
                  <h3>Name </h3>
                  <span>{data.name}</span>{" "}
                </li>
                <li>
                  <h3>Age</h3>
                  <span>{data.age}</span>{" "}
                </li>
                <li>
                  <h3>Post</h3>
                  <span>{data.post}</span>{" "}
                </li>
                <li>
                  <h3>
                    Contribution <small>(in this month)</small>
                  </h3>
                  <span>{data.contribution}</span>
                </li>
                <li>
                  <h3>Country</h3>
                  <span>{data.country}</span>{" "}
                </li>
              </ul>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="social">
        <ul>
          <li>
            <FacebookSharpIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
           <GitHubIcon />
          </li>
          <li>
            <PinterestIcon />
          </li>
          <li>
           <InstagramIcon />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default User;
