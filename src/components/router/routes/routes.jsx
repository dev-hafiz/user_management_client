import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddUser from "../../addUser/AddUser";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AddUser />,
      },
    ],
  },
]);
