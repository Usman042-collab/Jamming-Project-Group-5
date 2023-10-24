const Track = (props) => {
  const { name, artist, album, addButton } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="Track">
        <h3>{name}</h3>
        <p>
          {artist} | <span>{album}</span>
        </p>
      </div>

      <div>
        <button
          className="bg-transparent-500 px-3 ms-2 py-1 rounded-md"
          onClick={() => addButton(name)}
        >
          +
        </button>
      </div>
    </div>
  );
};
