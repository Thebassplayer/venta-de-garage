"use client";
import { useState, useEffect } from "react";
import { getDataAsObject, getTableTitles } from "@/Utils/googleSheets";

type ApiResponse = string[][];

type UseGoogleSheetData = {
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
        const data: ApiResponse = await getData();
        const titles = getTableTitles(data);
        const rowData = getDataAsObject(data);

        setTableTitles(titles);
        setTableData(rowData);
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

const getData = async (): Promise<ApiResponse> => {
  const res = await fetch("http://localhost:3000/api/googleSheet");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default useGoogleSheetData;