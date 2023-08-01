import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    dispatch({ type: "LOGOUT", payload: { user: null } });
    localStorage.clear();
  };
  return logout;
};
