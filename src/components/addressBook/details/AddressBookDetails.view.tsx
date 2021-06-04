import { SetStateAction, useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Context, {
  AddressBookContextProvider,
} from "../../../context/AddressBookContext";
import { EmptyResults } from "../../empty/EmptyResults.component";

const SCardContainer = styled.div`
  position: relative;
  padding: 20px 0;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 2px 3px rgba(96, 96, 96, 0.5);
  overflow: hidden;
  text-align: center;
  z-index: 5;

  img {
    position: relative;
    background: #fff;
    padding: 5px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 30px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

const SCardDetails = styled.div`
  /* Large name */
  h1 {
    color: #3a3b3d;
    font-size: 2rem;
    margin: 5px;
    text-transform: capitalize;
  }

  /* Name label small */
  h2 {
    color: #999;
    font-size: 18px;
    margin: 0;
  }
`;

const SCardNavButton = styled.button`
  background-color: #282c34;
  border: 0;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  align-items: center;
  padding: 0 3em;
  margin: 16px;
  text-decoration: none;
  text-align: center;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover,
  &:active {
    background-color: #637393;
    color: white;
  }
`;

export const AddressBookDetails = () => {
  const history = useHistory();
  const { userDetailState }: AddressBookContextProvider = useContext(Context);
  const user = (userDetailState?.[0] as RandomUser) || undefined;

  const setRandomUser = userDetailState?.[1] as React.Dispatch<
    SetStateAction<RandomUser | undefined>
  >;

  const handleGoBack = () => {
    setRandomUser(undefined);
    history.push("/");
  };

  return user ? (
    <>
      <SCardContainer>
        <img src={user.picture.large} alt="Headshot" />
        <SCardDetails>
          <h2>Name</h2>
          <h1>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</h1>
          <h2>Phone</h2>
          <h1>{user.phone}</h1>
        </SCardDetails>
      </SCardContainer>
      <SCardNavButton onClick={handleGoBack}>Go Back</SCardNavButton>
    </>
  ) : (
    <>
      <EmptyResults />
      <SCardNavButton onClick={handleGoBack}>Go Back</SCardNavButton>
    </>
  );
};
