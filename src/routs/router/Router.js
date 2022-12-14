import Main from "../../layot/Main";
import Apoinment from "../../pages/Apoinments/Apoinment/Apoinment";
import Dashbord from "../../pages/Dashbords/Dasbord/Dashbord";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Sinup from "../../pages/Sinup/Sinup";
import Privaterouts from "../PrivateRouts/Privaterouts";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/apointment",
        element: <Apoinment></Apoinment>
      },
      {
        path: "/singup",
        element: <Sinup></Sinup>
      }
    ]
  },
  {
    path: "/dashbord",
    element: (
      <Privaterouts>
        <Dashbord></Dashbord>
      </Privaterouts>
    )
  }
]);

export default router;
