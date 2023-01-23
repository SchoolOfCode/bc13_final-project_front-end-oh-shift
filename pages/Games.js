import React from "react";
import Header from "../components/Header/Header";
import Pagination from '../components/Footer/footer';
import FilterBar from "../components/FilterBar/FilterBar.js"
// import Gamecard from "../components/Gamecard/gamecard";
function Games(){
/* 

*/
    return (
      <>
        <Header></Header>
        <FilterBar></FilterBar>
        <Pagination></Pagination>
      </>
    );
}

export default Games
