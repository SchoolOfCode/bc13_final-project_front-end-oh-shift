import HomePage from "./HomePage.js"
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { DarkModeWrapper } from "../../pages/_app.js";
import { useState } from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';


function DarkModeFix({children}){
  const [darkMode, setDarkMode] = useState(false)
  return  <UserProvider> <DarkModeWrapper.Provider value={{darkMode,setDarkMode}}>{children}</DarkModeWrapper.Provider></UserProvider>

}
describe("View games button", () => {
    it("renders the View Games button", () => {
      render(<DarkModeFix>
        <HomePage />
      </DarkModeFix>);
      // check if all components are rendered
      expect(screen.getByText("View Games")).toBeInTheDocument();
    
    });
  });