import { Divider, Input } from 'antd';
import { useState } from 'react';


// Iteration 5
function Search(props) {
    //console.log(props)

    const [searchInput, setSearchInput] = useState("")

    const handleSearcher = (event) => {
    setSearchInput(event.target.value)
    props.filterFood(event.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleSearcher} />
    </>
  );
}

export default Search;