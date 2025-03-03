export const getFirstAndLastDate = (
  dates: { date?: string }[],
): { startDate: string; endDate?: string } => {
  if (!dates.length) {
    return { startDate: '' };
  }

  const startDate = dates[0].date ?? '';

  if (dates.length === 1) {
    return { startDate };
  }

  const endDate = dates[dates.length - 1].date ?? '';

  return { startDate, endDate };
};
