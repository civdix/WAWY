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
    ]);

    return <RouterProvider router={router} />;
  } catch (e) {
    console.error("Error in App Component:", e);
  }
}

export default App;
