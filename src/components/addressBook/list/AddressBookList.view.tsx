import React from "react";
import { useContext } from "react";
import Context, {
  AddressBookContextProvider,
} from "../../../context/AddressBookContext";
import { useHistory } from "react-router";
import { EmptyResults } from "../../empty/EmptyResults.component";
import { Table } from "../../table/Table.component";
import styled from "styled-components";
import Search from "../../search/Search.component";

const SUsersTableContainer = styled.div`
  overflow: auto;
  height: 500px;
  border: 1px solid darkgrey;
  border-spacing: 0px;
  border-radius: 2px;
`;

const SUsersTableLink = styled.span`
  color: #2b529a;
  cursor: pointer;
  overflow: hidden;
`;

export const AddressBookList = () => {
  const { users, userDetailState }: AddressBookContextProvider =
    useContext(Context);
  const history = useHistory();

  const handleTableRowClick = (user: RandomUser) => {
    return (event: React.MouseEvent) => {
      userDetailState?.[1](user);
      history.push("/details");
    };
  };

  const getTableData = (tableResults: RandomUser[]) => {
    return tableResults.map((user: RandomUser) => {
      const { name, email, location, dob, gender } = user;
      return [
        <SUsersTableLink
          role="presentation"
          className="-link "
          onClick={handleTableRowClick(user)}
        >
          <span>{`${name.title}. ${name.first} ${name.last}`}</span>
        </SUsersTableLink>,
        email,
        `${location.city}, ${location.state}`,
        dob.age,
        `${gender.charAt(0).toUpperCase()}${gender.slice(1)}`,
      ];
    });
  };

  return users ? (
    <>
      {users.length ? (
        <>
          <Search />
          <SUsersTableContainer>
            <Table
              tableHead={["Name", "Email", "Location", "Age", "Gender"]}
              tableData={getTableData(users)}
            />
          </SUsersTableContainer>
        </>
      ) : (
        <EmptyResults />
      )}
    </>
  ) : (
    <EmptyResults />
  );
};
