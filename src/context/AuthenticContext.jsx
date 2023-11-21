import { createContext, useContext, useReducer } from "react";

const AuthenticContext = createContext();
const initialState = {
    user: null,
    authenticated: false,
}

function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, authenticated: true, user: action.payload }
        case 'logout':
            return { ...state, authenticated: false, user: null }
        default:
            throw new Error('[unknown action')
    }
}

function AuthenticProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, authenticated } = state;

    function logIn(user) {
        dispatch({ type: "login", payload: user })
    }
    function logOut() {
        dispatch({ type: "logout" })
    }

    return <AuthenticContext.Provider value={{ user, authenticated, logIn, logOut }}>{children}</AuthenticContext.Provider>
}

function useAuth() {
    const context = useContext(AuthenticContext)
    if (context === undefined) throw new Error('authentic conmtext was outside the AuthenticProvider')
    return context
}

export { AuthenticProvider, useAuth }