import React from "react";
import Header from "../components/Header/Header";
import Pagination from '../components/Footer/footer';
import Display from "../components/Display/display";
// import Gamecard from "../components/Gamecard/gamecard";
function Games(){
/* 

*/
    return (
      <>
        <Header></Header>
        <Display></Display>
        {/* <Gamecard></Gamecard>
        <Gamecard></Gamecard>
        <Gamecard></Gamecard> */}
        <Pagination></Pagination>
      </>
    );
}

export default Games