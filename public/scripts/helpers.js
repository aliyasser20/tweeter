// Function that takes in date in ms and returns string of age ("15 mins ago")
export const ageCalc = (dateMs) => {
  const currentDate = new Date();
  const comparedDate = new Date(dateMs);

  const ageInMins = Math.abs(dateFns.differenceInMinutes(currentDate, comparedDate));
  const ageInHours = Math.abs(dateFns.differenceInHours(currentDate, comparedDate));
  const ageInDays = Math.abs(dateFns.differenceInDays(currentDate, comparedDate));
  const ageInMonths = Math.abs(dateFns.differenceInMonths(currentDate, comparedDate));
  const ageInYears = Math.abs(dateFns.differenceInYears(currentDate, comparedDate));

  // Age is less than 1 min
  if (!ageInMins) {
    return "less than a minute ago";
  }
  // Age is less than 1 hour => age in mins
  if (ageInMins < 60) {
    if (ageInMins === 1) {
      return `${ageInMins} minute ago`;
    }
    return `${ageInMins} minutes ago`;
  }
  // Age is less than 1 day => age in hours
  if (ageInHours < 24) {
    if (ageInHours === 1) {
      return `${ageInHours} hour ago`;
    }
    return `${ageInHours} hours ago`;
  }
  // Age is less than 1 month => age in days
  if (ageInDays < 31) {
    if (ageInDays === 1) {
      return `${ageInDays} day ago`;
    }
    return `${ageInDays} days ago`;
  }
  // Age is less than 1 year => age in months
  if (ageInMonths < 12) {
    if (ageInMonths === 1) {
      return `${ageInMonths} month ago`;
    }
    return `${ageInMonths} months ago`;
  }
  // Age is greater/equal to 1 year => age in years
  if (ageInYears === 1) {
    return `${ageInYears} year ago`;
  }
  return `${ageInYears} years ago`;
};