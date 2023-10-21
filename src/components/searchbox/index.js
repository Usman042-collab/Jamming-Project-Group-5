import { useState } from "react";

const SearchBox = ({ search }) => {
  // ** useStates
  const [searchText, setSearchText] = useState("");

  // ** function to get input text
  const handleSearchValue = (event) => {
    setSearchText(event.target.value);
  };

  // ** function to handle search
  const handleSearch = () => {
    search(searchText);
    console.log(searchText, "search text");
  };

  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-center text-black">
      <input
        type="text"
        placeholder="Search any song"
        className="w-[200px] h-[50px] rounded pl-[8px] "
        onChange={handleSearchValue}
      />
      <button
        onClick={handleSearch}
        className="pl-[40px] pr-[40px] pt-[8px] pb-[8px] bg-[#221555] text-white text-xl mt-10 rounded-full outline-none hover:bg-[#5E35CB]"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
