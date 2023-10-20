// ** Images imports
import bg from "../../assets/images/background_photo_desktop.jpg";
import Playlist from "../../components/playlist";

// ** Components imports
import SearchBox from "../../components/searchbox";
import TracksCard from "../../components/trackListCard";

const HomePage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <SearchBox />
        <div className="flex flex-col md:flex-row justify-around p-20 ">
          <div className="m-[12px]">
            <TracksCard />
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
