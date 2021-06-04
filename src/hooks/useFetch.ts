import { useEffect, useState } from "react";

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
