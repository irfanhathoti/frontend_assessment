import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/userReducer'

//creating context  its one of the hook in react
export const AppContext = createContext()

// main api 
const API = 'https://panorbit.in/api/users.json'


// initial state 
const initialState = {
    isLoading: false,
    isError: false,
    users: [],
}

//App Provider its Provide the state in global and its taking childer(App component)

export const AppProvider = ({ children }) => {

    // useReducer one of the hook in react its taking to paramete one is reducer
    //and another is initial state

    const [state, dispatch] = useReducer(reducer, initialState)


    //methode to dispacthing the actions

    const getUsers = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await axios.get(url);
            const users = await response.data.users;
            dispatch({ type: "SET_API_DATA", payload: users })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    //when component is mount the api is called and fetch the data 

    useEffect(() => {
        getUsers(API) //passing the api url
    }, [])
    //and returning the value 
    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )

}

//costom hook

export const useUserContext = () => {
    return useContext(AppContext)
}