import { render as rtlRender, screen } from "@testing-library/react";
import { getMockRandomUserData } from "../../../mockData/mockRandomUserData";
import Context, {
  AddressBookContextProvider,
} from "../../../../context/AddressBookContext";
import { AddressBookDetails } from "../../../../components/addressBook/details/AddressBookDetails.view";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const history = createMemoryHistory();

// Model to mock for random user data response API.
const randomUserDataRes = getMockRandomUserData();
// Mock push function
history.push = jest.fn();

const user = randomUserDataRes.results![0];
// Provide context values.
const contextValue: any = {
  users: randomUserDataRes.results,
  userDetailState: [user, () => {}],
};

const app = (
  <Router history={history}>
    <Context.Provider value={contextValue}>
      <AddressBookDetails />
    </Context.Provider>
  </Router>
);

describe("AddressBookDetails view", () => {
  it("Renders detail view with RandomUserData", () => {
    rtlRender(app);
    const { name, phone } = user;

    const userName = `${name.title}. ${name.first} ${name.last}`;

    const detailUserPhoto = screen.getByAltText("Headshot");
    expect(detailUserPhoto).toBeInstanceOf(HTMLElement);

    const detailUserName = screen.getByText(userName);
    expect(detailUserName).toBeInstanceOf(HTMLElement);

    const detailUserPhone = screen.getByText(phone);
    expect(detailUserPhone).toBeInstanceOf(HTMLElement);
  });

  it("Navigates back to home route '/'", () => {
    const { debug } = rtlRender(app);

    const backButton = screen.getByText(/go back/i);

    userEvent.click(backButton);
    debug();

    expect(history.push).toHaveBeenCalledWith("/");
  });
});
