// calculate one day duration in milliseconds
// milliseconds in one second * seconds in one minute * minutes in one hour * hours in one day
const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
// multiply one day duration in milliseconds by 30 to get allowed password age period = 30 days
const ALLOWED_PASSWORD_AGE = ONE_DAY_IN_MS * 30;

export const checkIsPasswordOld = (createdAt: string, allowedTermInMs = ALLOWED_PASSWORD_AGE) => {
  const currentDateTimestamp = new Date().getTime();
  const creationDateTimestamp = new Date(createdAt).getTime();

  return (currentDateTimestamp - creationDateTimestamp) >= allowedTermInMs;
};
