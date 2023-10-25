const Playlist = (props) => {
  const [playlistName, setPlaylistName] = useState(props.playlistName);

  const handleNameChange = (event) => {
    setPlaylistName(event.target.value);
    props.onNameChange(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      props.onSave();
    }
  };

  const handleClick = (event) => {
    event.target.setSelectionRange(0, event.target.value.length);
  };

  return (
    <div className="Playlist">
      <input
        id="Playlist-name"
        placeholder="Enter a playlist name"
        value={playlistName}
        onChange={handleNameChange}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
      />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <a className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </a>
    </div>
  );
};

export default Playlist;
