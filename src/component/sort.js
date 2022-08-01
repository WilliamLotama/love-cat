
function Sort(props) {
  
    return (

      <select class="form-select select mt-2" style={{height: "30px"}} onChange={(e) => props.setSort(e.target.value)} value={props.sort}>
        <option value="asc" className="select text-center" selected >A-Z</option>
        <option value="desc" className="select text-center">Z-A</option>
      </select>
    
    );
  }
  
  export default Sort;
  