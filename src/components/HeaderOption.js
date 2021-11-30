import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, title, Icon, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__avatar" src={user?.photoUrl}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
      {!avatar && <h3 className="headerOption__title">{title}</h3>}
    </div>
  );
}

export default HeaderOption;
