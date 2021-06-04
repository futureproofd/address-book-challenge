import { createContext } from 'react';

export interface AddressBookContextProvider {
  users: RandomUser[];
  userDetailState?: [RandomUser | undefined, React.Dispatch<React.SetStateAction<RandomUser | undefined>>];
}

export default createContext<AddressBookContextProvider>({
  users: []
});
