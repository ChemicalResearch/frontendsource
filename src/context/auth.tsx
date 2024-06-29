import { FC, ReactNode, createContext, useContext, useEffect, useMemo, useReducer } from 'react';

type User = {
    name: string;
    phone: string;
    employee_id: string;
    role: string;
    email: string;
    plant: string;
    loginSuccessFlag: "Y" | "N";
    errorMsg: string | null;
}

type AuthData = {
    isLoading: boolean;
    isAuth: boolean;
    user: User | null;
    signIn: (user: User) => Promise<void>;
    signOut: () => Promise<void>;
    signUp: (user: User) => Promise<void>;
}

type State = {
    isLoading: boolean;
    isAuth: boolean;
    user: User | null;
}

type Action =
    | { type: 'RESTORE', user: User | null, }
    | { type: 'SIGN_IN', user: User }
    | { type: 'SIGN_OUT' };

export const AuthContext = createContext<AuthData>({} as AuthData);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(
        (prevState: State, action: Action) => {
            switch (action.type) {
                case 'RESTORE':
                    return {
                        ...prevState,
                        user: action.user,
                        isAuth: Boolean(action.user),
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        isAuth: true,
                        user: action.user
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isAuth: false,
                        isSignout: true
                    };
            }
        },
        {
            isLoading: true,
            isAuth: false,
            user: null
        }
    );

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let user;

            try {
                user = localStorage.getItem("user");
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE', user: user ? JSON.parse(user) : null });
        };

        bootstrapAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            user: state.user,
            isLoading: state.isLoading,
            isAuth: state.isAuth,
            signIn: async (user: User) => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({ type: 'SIGN_IN', user });
            },
            signOut: async () => {
                localStorage.removeItem("user");
                dispatch({ type: 'SIGN_OUT' })
            },
            signUp: async (user: User) => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({ type: 'SIGN_IN', user });
            },
        }),
        [state.user, state.isLoading, state.isAuth]
    );
    return (
        <AuthContext.Provider value={{ ...authContext }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);