import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddUser from "../../addUser/AddUser";
import Users from "../../users/Users";
import UpdateUser from "../../updateUser/UpdateUser";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AddUser />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => {
          return fetch(`http://localhost:5000/users`);
        },
      },
      {
        path: "/users/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);
