import React, { useState, useEffect, Fragment } from "react";
import { useAsync } from 'react-async-hook';

// https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g


export function useAsyncHook(URI) {
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState("false");
  
    useEffect(() => {
      async function fetchResults() {
        try {
          setLoading("true");
          const response = await fetch(URI);
  
          const json = await response.json();
          // console.log(json);
          setResult(
            json.users.map(item => {
              console.log(item);
              return item;
            })
          );
        } catch (error) {
          setLoading("null");
        }
      }
  
    //uncomment if want to add a search parameter
    //   if (searchParam && searchParam !== "") {
    //     fetchBookList();
    //   }

    fetchResults();
        
    }, []);
  
    return [result, loading];
  }

