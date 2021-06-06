import { useEffect, useState } from "react";

/**
 * Calls an API endpoint via fetch for a given URL after the component has mounted
 * 
 * @param url the API endpoint to call
 * @returns JSON results and loading indicator
 */
export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    setIsLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(result => {
        mounted && setData(result);
      })
      .catch((err) => err)
      .finally(() => {
        mounted && setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [url]);


  return { data, setData, isLoading };
};
