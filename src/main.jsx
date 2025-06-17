import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import App from "./App";
import "./index.css";
import BarChart from "./page/bar/BarChart";
import Calendar from "./page/calendar/Calendar";
import Dashboard from "./page/dashboard/Dashboard";
import Faq from "./page/faq/Faq";
import Form from "./page/form/Form";
import LineChart from "./page/line/LineChart";
import PieChart from "./page/pie/PieChart";
import Team from "./page/team/Team";

import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Contacts from "./page/contacts/Contacts";
import Invoices from "./page/invoices/Invoices";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bar" element={<BarChart />} />
        <Route path="/pie" element={<PieChart />} />
        <Route path="/line" element={<LineChart />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
