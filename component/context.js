import React, { useEffect, useState } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function ContextProvider({children}) {
    const [data, setData] = useState([]);

    useEffect(() => {
		setData(dataJson)
    }, [data]);

    function likeBtn(itemId) {
        const newList = dataJson.map(item => {
            if (item.id === itemId) {
                console.log(item.like);
                return {
                    ...item,
                    like: item.like ++,
                }
            }
            return item;
        });
        setData(newList);
    }

    if (!data.length) return null;

    return(
        <Context.Provider value={{data, likeBtn}}>{children}</Context.Provider>
    )
}
export  { ContextProvider, Context }
