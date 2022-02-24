export const parseDate = (dateString: string): string => {
  const [year, month, day]: number[] = dateString
    .split('T')
    .slice(0, 1)[0]
    .split('-')
    .map((elem) => Number(elem));
  const date: string = new Date(year, month, day).toLocaleDateString('en-US', {
    month: 'long',
  });
  const res: string = `Updated ${day} ${date.slice(0, 3)}`;
  return res;
};
