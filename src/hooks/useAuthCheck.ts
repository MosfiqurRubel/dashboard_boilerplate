import { useDispatch } from "react-redux";
import { userLoggedIn } from "@/features/auth/authSlice";
import { useEffect, useState } from "react";

export const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          }),
        );
      }
    }
    setAuthChecked(true);
    // setTimeout(() => {
    //   setAuthChecked(true);
    // }, 2000);
  }, [dispatch, setAuthChecked]);

  return authChecked;
};
