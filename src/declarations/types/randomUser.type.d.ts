/**
 * Types based on RandomUser API results
 * https://randomuser.me/documentation#results
 */

interface RandomUserResponse {
  results?: RandomUser[];
  info: RandomUserInfo;
}

interface RandomUserInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface RandomUser {
  gender: string;
  name: RandomUserName;
  location: RandomUserLocation;
  email: string;
  login: { [key: string]: any };
  dob: RandomUserDOB;
  registered: { [key: string]: any };
  phone: string;
  cell: string;
  id: { [key: string]: any };
  picture: RandomUserPicture;
  nat: string;
}

interface RandomUserName {
  title: string;
  first: string;
  last: string;
}

interface RandomUserLocation {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: { [key: string]: any };
  timezone: { [key: string]: any };
}

interface RandomUserDOB {
  date: string;
  age: number;
}

interface RandomUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}