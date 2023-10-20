const SearchBox = () => {
  return (
    <div className="w-full h-[200px] flex flex-col justify-center items-center text-black">
      <input
        type="text"
        placeholder="Search any song"
        className="w-[200px] h-[50px] rounded pl-[8px] "
      />
      <button className="pl-[40px] pr-[40px] pt-[8px] pb-[8px] bg-[#221555] text-white text-xl mt-10 rounded-full outline-none hover:bg-[#5E35CB]">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
