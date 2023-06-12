import { createBrowserRouter } from "react-router-dom";

import Nav_admin from "./components/Nav-admin";
import Nav_about from "./components/Nav_about";
import Nav_home from "./components/Nav_home";
import Dashboard from "./layout/Dashboard";
import Root from "./layout/Root";

import Card from "./components/Card";
import Users from "./components/Users";
import Weather from "./components/Weather";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Nav_home />,
      },
      {
        path: "about",
        element: <Nav_about />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin",
        element: <Nav_admin />,
      },
      {
        path: "user",
        element: <Users />,

        children: [
          {
            path: ":id",
            element: <Card />,
          },
        ],
      },
      {
        path: ":id",
        element: <Card />,
      },
      // {
      //   path: "users",
      //   element: <Users />,
      // },
      {
        path: "weather",
        element: <Weather />,
      },
    ],
  },
]);
//       <Route path="/" element={<Root />}>
//         <Route path="home" element={<Nav_home />}></Route>
//         <Route path="about" element={<Nav_about />}></Route>
//       </Route>
//       {/* <Route path="/" element={<Dashboard />}>
//         <Route path="home" element={<Nav_home />}></Route>
//         <Route path="about" element={<Nav_about />}></Route>
//       </Route> */}
//     </>
//   )
// );
export default route;
