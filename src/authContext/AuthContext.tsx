import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { ActionType, AuthReducer } from "./AuthReducer";
import { UserOutput } from "./AuthActions";

export interface AuthState {
  user: UserOutput | null | undefined; // replace 'any' with the actual type of user
  isFetching: boolean;
  error: boolean;
}

// interface AuthContextProps {
//   state: AuthState;
//   dispatch: Dispatch<ActionType>; // Replace 'any' with the actual type of your actions
// }

const userFromLocalStorage = localStorage.getItem("user");
const INITIAL_STATE = {
  user: (userFromLocalStorage !== null
    ? JSON.parse(userFromLocalStorage)
    : null) as UserOutput | null | undefined,
  isFetching: false,
  error: false,
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
