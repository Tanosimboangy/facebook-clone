import React, { useReducer } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function fetchReducer(data, action) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA':{
                return dataJson
            }
            case 'SET_NAME': {
                return { ...state, name: state.name = action.name }
            }
            default: {
                return state
            }
        }
    }, {
        name: '',
    })
    return [state, dispatch]
}

function ContextProvider({children}) {
    const [data, dispatch] = useReducer(fetchReducer, dataJson);
    const actions = {
        stateUnchanged: (user) => {
            if (user) {
                dispatch({ type: 'GETTING_DATA', payload: dataJson });
                } 
            },
        }
    return(
        <Context.Provider value={{data, actions, dispatch}}>{children}</Context.Provider>)}
export  { ContextProvider, Context }
