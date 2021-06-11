import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GeneralLayout } from "./components/layout/GeneralLayout.component";

// Additional Routes, such as a fallback 404 page could be provided here
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route>
            <GeneralLayout />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
