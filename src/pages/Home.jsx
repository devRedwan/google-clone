import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import GoogleLogo from "../assets/GoogleLogo.png";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="#">About</Link>
          <Link to="#">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="#">Gmail</Link>
          <Link to="#">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src={GoogleLogo} alt="" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
