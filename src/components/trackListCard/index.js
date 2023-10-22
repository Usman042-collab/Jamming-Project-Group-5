import './index.css';
import Track from './Track';
const TracksCard = (props) => {
  return (
    <div className="bg-[#211555] w-[400px] min-h-[500px] text-white rounded">
      <h2 className="text-2xl font-bold">Search Results</h2>
      <div className="TrackList">
        
      {props.search.map((track) => {
        return(
          <Track trackid={track.id}
          name={track.name}
          artist={ track.artist}
          album={track.album}  />
        );
      })
      } 
      </div>
    </div>
  );
};
export default TracksCard;
