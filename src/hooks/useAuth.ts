import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);

  return auth?.accessToken && auth?.user ? true : false;
};

export default useAuth;
