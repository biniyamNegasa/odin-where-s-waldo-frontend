import { useEffect, useState } from "react";
import { BASE_URL } from "../data";

const useGetLeaderboard = (imageName) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/leaderboard/${imageName}`,
        );
        const data = await response.json();
        setLeaderboard(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [imageName]);

  return { leaderboard, loading, error };
};

export default useGetLeaderboard;
