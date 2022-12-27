import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "../styles/SearchBar.css";

function Search({ hideButtons = false }) {
  const [, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon />
      </div>

      <div
        className={`search__buttons ${hideButtons && "search__buttonHidden"}`}>
        <Button onClick={search} type="submit" variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
