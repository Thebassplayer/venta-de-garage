// Define a generic type for the row data
type RowData<T> = Record<string, T>;

export function getTableTitles<T>(arrayOfRows: T[][]) {
  return arrayOfRows[0];
}

export function getDataAsObject<T>(arrayOfRows: T[][]) {
  const titles = arrayOfRows[0];
  const data = arrayOfRows.slice(1);
  return data.map((row: T[]) => {
    return titles.reduce((acc: RowData<T>, title, index) => {
      acc[title as string] = row[index];
      return acc;
    }, {} as RowData<T>);
  });
}
