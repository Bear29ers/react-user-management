import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser>(null);
  const value = useMemo(() => ({ loginUser, setLoginUser }), [loginUser]);

  return (
    <LoginUserContext.Provider value={value}>
      {children}
    </LoginUserContext.Provider>
  );
};
