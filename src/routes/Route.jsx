import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BuyTicket from "../pages/BuyTicket";
import DrinksMenu from "../pages/DrinksMenu";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import DetailsFloorPlan from "../pages/DetailsFloorPlan";
import Event from "../pages/Event";
import ReserveTable from "../pages/ReserveTable";
import CheckoutParties from "../pages/CheckoutParties";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/buy-ticket",
    element: <BuyTicket />,
  },
  {
    path: "/drinks-menu",
    element: <DrinksMenu />,
  },
  {
    path: "/floor-plan",
    element: <DetailsFloorPlan />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/reserve-table",
    element: <ReserveTable />,
  },
  {
    path: "/checkout-parties",
    element: <CheckoutParties />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
