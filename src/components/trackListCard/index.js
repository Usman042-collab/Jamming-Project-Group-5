import { useState } from "react";
// import Playlist from "../playlist";
import "./index.css";
import Track from "./Track";
const TracksCard = (props) => {
  const [users, setUsers] = useState([
    "Track 1",
    "Track 2",
    "Track 3",
    "Track 4",
    "Track 5",
  ]);
  const [selectedUser, setSelectedUser] = useState("");
  const [secondDivUsers, setSecondDivUsers] = useState([]);

  const handleAddUser = (userToAdd) => {
    if (userToAdd && !secondDivUsers.includes(userToAdd)) {
      setSecondDivUsers([...secondDivUsers, userToAdd]);
    }
  };
  // console.log(selectedUser);
  const handleRemoveUser = (userToRemove) => {
    const updatedUserList = secondDivUsers.filter(
      (user) => user !== userToRemove
    );
    setSecondDivUsers(updatedUserList);
  };
  return (
    <div className="text-white rounded ">
      <div className="grid grid-cols-2 gap-5">
        <div className="mx-3 bg-[#211555] p-5">
          <h2 className="text-2xl font-bold">Search Results</h2>
          <div>
            <div className="TrackList">
              {props.search.map((track) => {
                return (
                  <Track
                    trackid={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    addButton={handleAddUser}
                    removeButton={handleRemoveUser}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-[#211555] p-5">
          <div>
            <div className="bg-[#211555] text-white rounded">
              <h2 className="text-2xl font-bold">Playlist</h2>
              <div>
                <ul>
                  {secondDivUsers.map((user, index) => (
                    <li
                      key={index}
                      className="my-3 flex items-center justify-between border-b border-grey"
                    >
                      {user}

                      <button
                        className="bg-transparent-500 px-3 ms-2 py-1 rounded-md"
                        onClick={() => handleRemoveUser(user)}
                      >
                        -
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TracksCard;
