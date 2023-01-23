import React from "react";
import Header from "../components/Header/Header";
import AddNewGame from "../components/AddNewGame/AddNewGame";
import { UserProvider } from '@auth0/nextjs-auth0/client';


function addGame(){

  
    return (
      <>
        <Header></Header>
        <AddNewGame></AddNewGame>
      </>
    );
}

export default addGame