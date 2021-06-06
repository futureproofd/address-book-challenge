export const sortAlphabetically = (a: RandomUser, b: RandomUser) => {
  if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
    return -1;
  }
  if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
    return 1;
  }
  return 0;
};