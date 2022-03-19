export const AuthActionCreators = {
    setUser: (username) => ({type: "SET_AUTH", payload: username}),
    setLocation: (value) => ({type: 'SET_LOCATION', payload: value})
}