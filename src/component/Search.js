function Search(props) {
  return (
    <input
      type="input"
      placeholder="Search.."
      className="search"
      value={props.seacrh}
      onChange={(event) => props.setSearch(event.target.value)}
    />
  );
}

export default Search;
