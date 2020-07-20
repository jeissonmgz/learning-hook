import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setstate({ data: data, loading: false, error: null });
        } else {
          console.log("It wasn´t called");
        }
      })
      .catch(() => {
        setstate({ data: null, loading: false, error: "No cargo la info" });
      });
  }, [url]);

  return state;
};
