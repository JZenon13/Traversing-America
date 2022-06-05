import Search from "./Search";

const Header = ({ search, setSearch }) => {
  return (
    <div>
      <h1 className="travelAmerica">Traversing America</h1>
      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Header;
