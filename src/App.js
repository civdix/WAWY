import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CremationPlanner from "./components/CremationPlanner";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
function App() {
  try {
    const router = createBrowserRouter([
      {
        path: "/SFLandingPage",
        element: (
          <>
            {" "}
            <CremationPlanner />
          </>
        ),
      },
      {
        path: "/",
        element: (
          <>
            {" "}
            <Home />
          </>
        ),
      },
      {
        path: "/About",
        element: (
          <>
            {" "}
            <About />
          </>
        ),
      },
      {
        path: "/SignUp",
        element: (
          <>
            {" "}
            <SignUp />
          </>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <>
            {" "}
            <Dashboard />
          </>
        ),
      },
      {
        path: "/ContactUs",
        element: (
          <>
            {" "}
            <ContactUs />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <ErrorPage />
          </>
        ),
      },
    ]);

    return <RouterProvider router={router} />;
  } catch (e) {
    console.error("Error in App Component:", e);
  }
}

export default App;
