import { createContext, useState } from "react";

export const Authenticated = createContext();

export const CheckAuth = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [avatar, setAvatar] = useState("");
  const storeToken = (token) => {
    const exists = localStorage.getItem("token");
    if (exists) {
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
    } else {
      localStorage.setItem("token", token);
    }
  };

  const doLogin = async (payload) => {
    try {
      console.log(payload);
      setAvatar(payload.username.split("")[0]);
      const headers = new Headers();
      headers.append("data", JSON.stringify(payload));
      const response = await fetch("http://localhost:3000/users/checkauth", {
        method: "POST",
        headers: headers,
      });

      if (response.ok) {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    doLogin,
    authenticated,
    setAuthenticated,
    storeToken,
    avatar,
    setAvatar,
  };

  return (
    <Authenticated.Provider value={values}>
      {props.children}
    </Authenticated.Provider>
  );
};

CheckAuth.propTypes;
