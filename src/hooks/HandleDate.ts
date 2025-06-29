// you can delete this file if ur not using it
export const handleDate = (date: string) => {
  const format = new Date(date);
  const formatted = format.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return formatted;
};
