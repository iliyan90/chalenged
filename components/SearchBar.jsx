import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import "../styles/searchBar.css";
import { BsBag } from "react-icons/bs";
const SearchBar = () => {
  const { filtered, setSearch, search, data } = useContext(ApiContext);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  let result = [];
    const filtCat = (array) =>{
      for (let i = 0; i < array.length; i++) {
        let exist = false;
        for (let j = 0; j < result.length; j++) {
          if(array[i].category === result[j]){
            exist = true;
            break;
          }
        }
        if(!exist){
          result.push(array[i].category)
        }
      }
    }
    
    filtCat(data);
    const handleSelect = (e) =>{
      e.preventDefault();
      setSearch(e.target.value === 'All Categories' ? " " : e.target.value )
    } 
    result.unshift('All Categories')
  return (
    <div className="search-bar">
      <img src="./backgroundImg.png" alt="bgImage" className="bg-image" />
      <div className="input-method">
        <BsBag className="search-bag" />
        <input
          type="text"
          // value={search}
          placeholder="Title, companies, expertice or benefits"
          onChange={handleSearch}
          className="search-input"
        ></input>
        <select className="search-select" name='category' id='category' value={search} onChange={handleSelect}>
          {
            result.map((item, i) =>{
              return (
                <option key={i} value={item}  label={item}>{item}</option>
                )
            })
          }
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
