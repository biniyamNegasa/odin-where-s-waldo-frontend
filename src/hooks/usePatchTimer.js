import { useEffect, useState } from "react";
import { BASE_URL } from "../data";

const usePatchTimer = (id) => {
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id === null) {
      setTimer(null);
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/timers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
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
  }, [id]);

  return { timer, loading, error };
};

export default usePatchTimer;
