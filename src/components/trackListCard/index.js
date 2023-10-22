import './index.css';
const TracksCard = (props) => {
  return (
    <div className="bg-[#211555] w-[400px] min-h-[500px] text-white rounded">
      <h2 className="text-2xl font-bold">Search Results</h2>
      <div className="TrackList">
        
      {props.search.map((track) => {
        return(
        <div className="Track"  key={track.id}>
      <h3>{track.name}</h3>
      <p>{track.artist} | <span>{track.album}</span></p>
      </div>
        );
      })
      } 
      </div>
    </div>
  );
};
export default TracksCard;
