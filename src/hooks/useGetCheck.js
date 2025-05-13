import { useEffect, useState } from "react";
import { BASE_URL } from "../data";

const useGetCheck = (imageName, who, xcoord, ycoord) => {
  const [check, setCheck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (imageName === "" || who === "") {
          setCheck(null);
          setLoading(false);
          return;
        }
        const response = await fetch(
          `${BASE_URL}/api/check?name=${imageName}&who=${who}&coord=${xcoord},${ycoord}`,
        );
        const data = await response.json();
        setCheck(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [imageName, who, xcoord, ycoord]);

  return { check, loading, error };
};

export default useGetCheck;
