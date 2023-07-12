import { createContext } from "react";
import { useState } from "react";

export const HmsContext = createContext();
function HmsProvider(props) {
  const [aboutLink, setAboutLink] = useState("#about");
  return (
    <HmsContext.Provider value={{ aboutLink, setAboutLink }}>
      {props.children}
    </HmsContext.Provider>
  );
}

export default HmsProvider;
