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

export function findArticleBySlug(targetSlug: string, data: string[][]) {
  return (
    data.slice(1).find(article => article[article.length - 1] === targetSlug) ||
    null
  );
}

export function articleArraytoObject(titles: string[], articleArray: string[]) {
  return titles.reduce((acc: any, title, index) => {
    acc[title] = articleArray[index];
    return acc;
  }, {});
}
