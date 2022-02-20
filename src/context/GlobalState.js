import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import AppReducer from "./AppReducer";

const initialState = {
  news: []
}

//creamos el contexto
export const GlobalContext = createContext(initialState);


//creamos el Provider Component
export const GlobalProvider = ({ children }) => {

    //Inicializamos el reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    //Función que nos traé los personajes de ricky morty
    const getNews = async () => {
      const res = await axios.get("https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=W9mR8NdBnMrA5dzU0cpDQGPZF5w91u4p");

      //dispachamos la acción que hará que cambie el estado de los personajes
      dispatch({
        type: "GET_NEWS",
        payload: res.data.results,
      });
    };
  
    return (
      <GlobalContext.Provider
      //pasamos los valores del provider
        value={{
          news: state.news,
          getNews,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };