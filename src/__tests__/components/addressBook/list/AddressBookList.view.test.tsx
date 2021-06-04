import { render as rtlRender, screen } from "@testing-library/react";
import { getMockRandomUserData } from "../../../mockData/mockRandomUserData";
import Context from "../../../../context/AddressBookContext";
import { AddressBookList } from "../../../../components/addressBook/list/AddressBookList.view";
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
      <AddressBookList />
    </Context.Provider>
  </Router>
);

describe("AddressBookList view", () => {
  it("Renders table rows for RandomUserData", () => {
    rtlRender(app);

    const userName = `${randomUserDataRes.results?.[0]?.name.title}. ${randomUserDataRes.results?.[0]?.name.first} ${randomUserDataRes.results?.[0]?.name.last}`;

    const rowLink = screen.getByText(userName);
    expect(rowLink).toBeInstanceOf(HTMLElement);
  });

  it("Routes to /details on row click", () => {
    rtlRender(app);

    const userName = `${randomUserDataRes.results?.[0]?.name.title}. ${randomUserDataRes.results?.[0]?.name.first} ${randomUserDataRes.results?.[0]?.name.last}`;

    const rowLink = screen.getByText(userName);

    userEvent.click(rowLink);

    expect(history.push).toHaveBeenCalledWith("/details");
  });
});
