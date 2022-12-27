import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../assets/GoogleLogo.png";
import Search from "../components/Search";
import Response from "../response";
import { useStateValue } from "../StateProvider";
import "../styles/SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";

function SearchResultsPage() {
  const [{ term }] = useStateValue();

  // >>>> Live API Call
  const { data } = useGoogleSearch(term);
  console.log(data);

  // >>> Mock data for software development purposes only
  // const data = Response;
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img src={GoogleLogo} alt="" className="searchPage__logo" />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="#">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="#">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="#">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="#">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="#">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="#">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="#">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="#">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result" key={item?.cacheId}>
              <div className="searchPage__resultText">
                <a href={item.link}>{item.displayLink}▽</a>
                <a href={item.link} className="searchPage__resultTitle">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
              <div className="searchPage__resultImage">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0].src && (
                      <img
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                        className="searchPage__resultImage"
                      />
                    )}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
