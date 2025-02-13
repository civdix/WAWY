import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  try {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            {" "}
            <Home />
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
