// ** Images imports
import { useState } from "react";
import bg from "../../assets/images/background_photo_desktop.jpg";
import Playlist from "../../components/playlist";

// ** Components imports
import SearchBox from "../../components/searchbox";
import TracksCard from "../../components/trackListCard";

// ** API imports
import Spotify from "../../features/spotifyApi";

const HomePage = () => {
  // ** States
  const [searchResults, setSearchResults] = useState([]);
  searchResults && console.log(searchResults, "songs");

  const search = (text) => {
    Spotify.search(text).then(setSearchResults);
  };
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <SearchBox search={search} />
        <div className="flex flex-col justify-around md:flex-row md:justify-center items-center  ">
          <div className="m-[12px]">
            <TracksCard search={searchResults}/>
          </div>
          <div className="m-[12px]">
            <Playlist />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
