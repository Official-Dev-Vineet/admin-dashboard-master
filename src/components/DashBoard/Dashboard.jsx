import MainHeader from "../pop-ups/MainHeader";
import MonthlyChanges from "../Relative-Component/MonthlyChanges";
import News from "../Relative-Component/News";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import VolumeUpSharpIcon from "@mui/icons-material/VolumeUpSharp";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";
import WifiSharpIcon from "@mui/icons-material/WifiSharp";
import StarIcon from "@mui/icons-material/StarSharp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  visitors,
  volume,
  files,
  mails,
  fileShares,
  network,
  returns,
  connections,
  ratings,
  achievement,
} from "../../Constants/constants";
import { useState } from "react";
import Member from "../Relative-Component/Member";
const Dashboard = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="dashboard">
      <MainHeader title="Dashboard">Welcome Back to your dashboard </MainHeader>
      <main>
        <section className="summary">
          <div className="admin-data">
            <div className="box">
              <span className="icon">{<PersonOutlineSharpIcon />}</span>
              <div className="data-details">
                <h4>{visitors}k</h4>
                <small>visitors</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<VolumeUpSharpIcon />}</span>
              <div className="data-details">
                <h4>{volume}%</h4>
                <small>volume</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<DescriptionSharpIcon />}</span>
              <div className="data-details">
                <h4>{files}+</h4>
                <small>files</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<MailOutlineSharpIcon />}</span>
              <div className="data-details">
                <h4>{mails}+</h4>
                <small>visitors</small>
              </div>
            </div>
          </div>
          <div className="admin-data">
            <div className="box">
              <span className="icon">{<ShareSharpIcon />}</span>
              <div className="data-details">
                <h4>{fileShares}</h4>
                <small>Share</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<ConnectWithoutContactIcon />}</span>
              <div className="data-details">
                <h4>{network}</h4>
                <small>network</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<WifiSharpIcon />}</span>
              <div className="data-details">
                <h4>{returns}+</h4>
                <small>returns</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<SignalCellularAltSharpIcon />}</span>
              <div className="data-details">
                <h4>{connections}+</h4>
                <small>connections</small>
              </div>
            </div>
          </div>
          <div className="rating">
            <div className="box">
              <span className="icon">{<StarIcon />}</span>
              <div className="data-details">
                <h4>{ratings}+</h4>
                <small>ratings received</small>
              </div>
            </div>
            <div className="box">
              <span className="icon">{<EmojiEventsIcon />}</span>
              <div className="data-details">
                <h4>{achievement}</h4>
                <small>achievement</small>
              </div>
            </div>
          </div>

          <div className="news-toggler">
            <h2 onClick={() => setToggler((pre) => !pre)}>
              {toggler ? "hide news" : "show news"}
            </h2>
            <div className="news-list">
              {toggler ? (
                <News />
              ) : (
                <p style={{ textAlign: "center" }}>hidden successfully</p>
              )}
            </div>
          </div>
        </section>
        <section className="member">
          <Member />
          <MonthlyChanges />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
