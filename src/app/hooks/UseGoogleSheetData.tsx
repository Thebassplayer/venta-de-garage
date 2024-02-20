import { useState, useEffect } from "react";

export type UseGoogleSheetData = {
  loading: boolean;
  error: string | null;
  tableTitles: string[];
  tableData: Record<string, string>[];
};

const useGoogleSheetData = (): UseGoogleSheetData => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tableTitles, setTableTitles] = useState<string[]>([]);
  const [tableData, setTableData] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/googlesheet");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setTableTitles(data.tableTitles);
        setTableData(data.tableData);
      } catch (error: any) {
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, tableTitles, tableData };
};

export default useGoogleSheetData;
