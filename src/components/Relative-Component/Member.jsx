import { members } from "../../Constants/constants";
import BuildIcon from "@mui/icons-material/Build";
import "./member.css";
import { images } from "../../Constants/constants";
import { Link } from "react-router-dom";
const Member = () => {
  return (
    <div className="table">
      <div className="table-header">
        <h2>member's performance</h2>{" "}
        <span className="icon">{<BuildIcon />}</span>
      </div>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th>id</th>
            <th>Profile</th>
            <th>personal info</th>
            <th>contribution</th>
          </tr>
        </thead>
        <tbody>
          {members.map((data, index) => {
            return (
              <tr className="table-data" key={index}>
                <td>{data?.id}</td>
                <td>
                  <img src={images[index]} alt="user" />
                </td>
                <td>
                  <h5>
                    <Link to={`/Customers/${data?.name}`}>{data?.name}</Link>
                  </h5>
                  <p className="data">
                    {data?.post}, {data?.country}
                  </p>
                </td>
                <td>${data.contribution}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Member;
