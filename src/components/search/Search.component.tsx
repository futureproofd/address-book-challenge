import { useContext, useState } from "react";
import Downshift from "downshift";
import styled from "styled-components";
import Context, {
  AddressBookContextProvider,
} from "../../context/AddressBookContext";
import { useHistory } from "react-router";

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid slategray;
`;

const DropDownItem = styled("div")<{ highlighted: boolean }>`
  border-bottom: 1px solid lightgray;
  background: ${(props) => (props.highlighted ? "#d4dbf6" : "white")};
  cursor: pointer;
  padding: 1rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
`;

const SearchStyle = styled.div`
  position: relative;
  margin-bottom: 18px;

  input {
    width: 100%;
    background: white;
    padding: 5px;
    border-radius: 2px;
    border: 1px solid slategray;
    font-size: 1rem;
  }
`;

const Search = () => {
  const { users, userDetailState }: AddressBookContextProvider =
    useContext(Context);

  const history = useHistory();
  const [results, setResults] = useState<RandomUser[]>();

  const handleInput = (e: any) => {
    if (e) e.preventDefault();

    if (e.target.value.length > 1) {
      setResults(() =>
        users?.filter((each) => each.name.first.indexOf(e.target.value) > -1)
      );
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (e: any) => {
    userDetailState?.[1](e);
    history.push("/details");
  };

  return (
    <SearchStyle>
      <Downshift
        onChange={handleResultClick}
        itemToString={(item) => (item === null ? "" : item.name.first)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
        }) => (
          <div>
            <input
              {...getInputProps({
                type: "search",
                placeholder: "Search by first name",
                id: "search",

                onChange: (e) => {
                  e.persist();
                  handleInput(e);
                },
              })}
            />
            {results && isOpen && (
              <DropDown>
                {results.map((item, index) => (
                  <DropDownItem
                    {...getItemProps({ item, index, key: item.email })}
                    highlighted={index === highlightedIndex}
                  >
                    {`${item.name.first} ${item.name.last}`}
                  </DropDownItem>
                ))}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
    </SearchStyle>
  );
};

export default Search;
