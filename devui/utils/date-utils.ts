import { format, isDate, parse, parseISO } from 'date-fns';

export function isValidDate(date: Date): boolean {
  return isDate(date) && !isNaN(date.getTime());
}

export function parseDate(date: any, pattern?: string): Date {
  if (!date) {
    return null;
  }

  if (isDate(date)) {
    return date;
  }
  const parsedDate = pattern ? parse(date, pattern, new Date())
    : parseISO(date);
  return isValidDate(parsedDate) ? parsedDate : new Date(date);
}

export function formatDate(date: Date, pattern = 'y-MM-dd HH:mm:ss'): string {
  return isValidDate(date) ? format(date, pattern) : '';
}
