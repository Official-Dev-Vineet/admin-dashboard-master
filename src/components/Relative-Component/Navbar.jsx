import  { useEffect, useState } from "react";
import { image } from "../../Constants/constants";
import { user } from "../../Constants/constants";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DiscountIcon from "@mui/icons-material/Discount";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
const Navbar = () => {
  const [msgCount, setMsgCount] = useState(5);
  const [isActive, setIsActive] = useState(false);
  let [isShow, setIsShow] = useState(false);
  function toggleFullScreen() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  useEffect(() => {
    isActive ? setMsgCount(0) : setMsgCount(5);
  },[isActive])
  return (
    <>
      <nav>
        <div className="left">
          <div className="logo">
            <h1>{user[0]}</h1>
          </div>
          <div className="title">
            <h1>Admin Dashboard</h1>
          </div>
          <div className="icons">
            <span
              title="Press F"
              className="icon"
              onClick={() => toggleFullScreen()}
            >
              {<FullscreenIcon />}
            </span>
          </div>
        </div>
        <div className="right">
          <div className="icons">
            <span
              className="icon"
              title={`${msgCount} notification`}
              onClick={() => {
                setIsActive((pre) => !pre);
              }}
            >
              {<NotificationsNoneIcon />}
              <span className="msg-count">{msgCount}</span>
            </span>
          </div>
          {isActive && (
            <div className="notification-panel">
              <ul>
                <li
                  onClick={() => {
                    setIsActive((pre) => !pre);
                  }}
                >
                  <span className="icon">{<EmojiEventsIcon />}</span>
                  <span>Jonathan wins last week UI/UX Prize Pool</span>{" "}
                </li>
                <li onClick={() => setIsActive((pre) => !pre)}>
                  <span className="icon">{<DiscountIcon />}</span>
                  <span>heavy discount on hosting on google cloud</span>
                </li>
                <li onClick={() => setIsActive((pre) => !pre)}>
                  <span className="icon">{<AccountCircleIcon />}</span>
                  <span>
                    <span style={{ color: "var(--warning)" }}>New</span> User
                    Added
                  </span>
                </li>
                <li onClick={() => setIsActive((pre) => !pre)}>
                  <span className="icon">{<ShoppingCartIcon />}</span>
                  <span style={{ color: "var(--warning)" }}>New</span> Order
                  Received
                </li>

                <li onClick={() => setIsActive((pre) => !pre)}>
                  <span className="icon">{<AdminPanelSettingsIcon />}</span>
                  <span>
                    <span style={{ color: "var(--warning)" }}>warning</span>{" "}
                    Account Action Required
                  </span>
                </li>
              </ul>
            </div>
          )}
          <div className="user-profile">
            <picture>
              <img src={image} alt={user} />
            </picture>
            <h2>{user}</h2>
          </div>
          <div className="icons toggle">
            <span
              className="icon"
              onClick={(e) => {
                setIsShow(!isShow);
                e.currentTarget.classList.toggle("rotate-180");
              }}
            >
              {<KeyboardArrowDownIcon />}
            </span>
          </div>
          {isShow && (
            <div className="controller-menu">
              <ul className="list-1">
                <li>
                  <Link to="/editProfile">Edit Profile</Link>
                </li>
                <li>
                  <Link to="/logOut">
                    Logout <span className="icon">{<LogoutIcon />}</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
