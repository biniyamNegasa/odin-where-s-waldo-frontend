import { useEffect, useState } from "react";
import { BASE_URL } from "../data";

const usePostTimer = (name = "", imageName = "") => {
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/timers/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            image_name: imageName,
          }),
        });
        const data = await response.json();
        setTimer(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [name, imageName]);

  return { timer, loading, error };
};

export default usePostTimer;
