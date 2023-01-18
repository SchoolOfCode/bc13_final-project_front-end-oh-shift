import React from "react";
import Header from "../components/Header/Header";
import Pagination from '../components/Footer/footer';
import Display from "../components/Display/display";
import FilterBar from "../components/FilterBar/filterBar";
// import Gamecard from "../components/Gamecard/gamecard";
function Games(){
/* 

*/
    return (
      <>
        <Header></Header>
        <FilterBar></FilterBar>
        {/* <Display></Display> */}
        <Pagination></Pagination>
      </>
    );
}

export default Games