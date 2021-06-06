import { render as rtlRender, screen } from "@testing-library/react";
import { getMockRandomUserData } from "../../mockData/mockRandomUserData";
import Context from "../../../context/AddressBookContext";
import Search from "../../../components/search/Search.component";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const history = createMemoryHistory();

// Model to mock for random user data response API.
const randomUserDataRes = getMockRandomUserData();
// Mock push function
history.push = jest.fn();
// Provide context values.
const contextValue = {
  users: randomUserDataRes.results || [],
};

// Compose mocks for render.
const app = (
  <Router history={history}>
    <Context.Provider value={contextValue}>
      <Search />
    </Context.Provider>
  </Router>
);

const userResult = `${randomUserDataRes.results?.[0]?.name.first} ${randomUserDataRes.results?.[0]?.name.last}`;

describe("Search component tests", () => {
  it("Returns 0 results on partial, 1 character search", () => {
    rtlRender(app);

    const searchInput = screen.getByRole(/search/i);
    // Type first letter
    userEvent.type(searchInput, "b");

    /**
     * The standard getBy methods throw an error when they can't find an element,
     * so if you want to make an assertion that an element is not present in the DOM,
     * you can use queryBy APIs instead:
     */
    expect(screen.queryByText(userResult)).toBeNull();
  });

  it("Returns 1 results on a query of 2 characters of first name", () => {
    rtlRender(app);

    const searchInput = screen.getByRole(/search/i);

    userEvent.type(searchInput, "br");

    expect(screen.getByText(userResult)).toBeTruthy();
  });

  it("Returns 1 results on a query of any 2 characters of first name", () => {
    rtlRender(app);

    const searchInput = screen.getByRole(/search/i);

    userEvent.type(searchInput, "ad");

    expect(screen.getByText(userResult)).toBeTruthy();
  });

  it("Routes to details view on search result click", () => {
    rtlRender(app);

    const searchInput = screen.getByRole(/search/i);

    userEvent.type(searchInput, "ad");

    const resultRow = screen.getByText(userResult);
    userEvent.click(resultRow);

    expect(history.push).toHaveBeenCalledWith("/details");
  });
});
