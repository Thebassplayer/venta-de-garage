"use client";
import { useState, useEffect } from "react";
import {
  getDataAsObject,
  getTableTitles,
} from "@/Utils/googleSheets/dataManipulation";

export type GoogleSheetData = string[];

export type ApiResponse = string[][];

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
      const getData = async (): Promise<ApiResponse> => {
        const res = await fetch("api/sheets");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        return res.json();
      };
      try {
        const data: ApiResponse = await getData();
        const rows: Record<string, string>[] = [];
        const rawRows: string[][] = data || [[]];
        const headers: string[] = rawRows.shift() || [];

        for (const row of rawRows) {
          const rowData = row.reduce<Record<string, string>>(
            (acc, cell, index) => {
              acc[headers[index]] = cell;
              return acc;
            },
            {}
          );

          rows.push(rowData);
        }

        setTableTitles(headers);
        setTableData(rows);
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
