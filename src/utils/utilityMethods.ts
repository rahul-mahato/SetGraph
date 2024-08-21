export const getCurrentFormattedDate = (): string => {
  // Step 1: Get the current timestamp
  const now: number = Date.now();

  // Step 2: Create a Date object
  const date: Date = new Date(now);

  // Step 3: Extract the day, month, and year
  let day: number | string = date.getDate();
  let month: number | string = date.getMonth() + 1; // Months are zero-based, so add 1
  const year: number = date.getFullYear();

  // Step 4: Format day and month with leading zeros if necessary
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  // Step 5: Combine into desired format
  return `${day}/${month}/${year}`;
};
