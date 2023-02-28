const searchIcon = require("../icons/icon_search.svg").default;

const SearchField = () => {
  return (
    <div className="flex flex-auto items-center mx-[60px] bg-light-blue  rounded-lg px-4 py-3 gap-x-2">
      <div>
        <img src={searchIcon} alt="search-icon" className="text-blue-color" />
      </div>
      <input
        type="search"
        placeholder="Search essentials, groceries and more..."
        className="w-full  bg-light-blue outline-none text-sm text-grey-color"
      />
    </div>
  );
};

export default SearchField;
