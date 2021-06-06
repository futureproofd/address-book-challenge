import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Context, {
  AddressBookContextProvider,
} from "../../context/AddressBookContext";
import { useFetch } from "../../hooks/useFetch";
import { componentRoutes } from "../../route/routes";
import { sortAlphabetically } from "../../utils/randomUserUtils";

const SAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  header {
    background-color: #282c34;
    box-shadow: 0 0px 8px 3px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: calc(10px + 2vmin);
    margin-bottom: 20px;
    padding: 20px;
    color: white;
  }

  main {
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    padding: 35px;
  }
`;

const USER_COUNT = "50";

export const GeneralLayout = () => {
  const [users, setUsers] = useState<RandomUser[]>([]);
  const [detailUser, setDetailUser] = useState<RandomUser>();

  const { data, isLoading } = useFetch(
    `https://randomuser.me/api/?results=${USER_COUNT}`
  );

  const addressBookContextData: AddressBookContextProvider = {
    users,
    userDetailState: [detailUser, setDetailUser],
  };

  // Get all component routes after data has been retrieved.
  const getComponentRoutes = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (users) {
      return (
        <Switch>
          {componentRoutes.map((route: { [key: string]: any }, key) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={key}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      );
    } else {
      return <div>No users found.</div>;
    }
  };

  // Set Users state after data (users) are fetched.
  useEffect(() => {
    if ((data as RandomUserResponse)?.results?.length) {
      setUsers(data.results.sort(sortAlphabetically));
    }
  }, [data]);

  return (
    <SAppContainer>
      <header>Address Book</header>
      <main>
        <Context.Provider value={addressBookContextData}>
          {getComponentRoutes()}
        </Context.Provider>
      </main>
    </SAppContainer>
  );
};
