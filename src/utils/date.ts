const formatNumber = (number: number) => {
  return ('0' + number).slice(-2);
};

export const formatDate = (utcDate: string) => {
  if (!utcDate) return '現在';
  const date = new Date(utcDate);

  date.setUTCHours(date.getUTCHours() + 9);

  const year = date.getUTCFullYear();
  const month = formatNumber(date.getUTCMonth() + 1);
  const day = formatNumber(date.getUTCDate());

  return `${year}-${month}-${day}`;
};
