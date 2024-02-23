import { useState, useEffect } from "react";

export type UseLastUpdate = {
  loading: boolean;
  error: string | null;
  lastUpdate: string;
};

const lastUpdateEndpoint = "/api/lastupdate";

const useLastUpdate = (): UseLastUpdate => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(lastUpdateEndpoint); // Replace with your actual API endpoint
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setLastUpdate(data.lastUpdate);
      } catch (error: any) {
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return { loading, error, lastUpdate };
};

export default useLastUpdate;
