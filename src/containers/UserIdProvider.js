import React, { useEffect, useRef, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserIdContext = createContext();

function UserIdProvider({ children }) {
  const userIdRef = useRef(localStorage.getItem("userId") ?? uuidv4());

  useEffect(() => {
    localStorage.setItem("userId", userIdRef.current);
  }, []);

  return <UserIdContext.Provider value={userIdRef.current}>{children}</UserIdContext.Provider>;
}

export default UserIdProvider;
