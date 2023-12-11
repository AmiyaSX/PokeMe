import { createHashRouter, RouterProvider } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Login from "./loginPresenter";
import Register from "./registerPresenter";
import Home from "./homePresenter";
import Test from "./testPresenter";
import Result from "./testResultPresenter";
import Start from "./startPresenter";
import History from "./historyPresenter";
import TopBar from "../views/components/topbar";
import React, { useEffect, useState } from "react";
export default observer(function ReactRoot(props) {
  const [notOnStartPage, setNotOnStartPage] = useState(window.location.hash!=="");
  useEffect(() => {
    const handleHashChange = () => {
      setNotOnStartPage(window.location.hash!=="");
      
    };
    window.addEventListener("hashchange", handleHashChange);
  }, []);
  function makeRouter(model) {
    return createHashRouter([
      { path: "/", element: <Start model={model} /> },
      { path: "/login", element: <Login model={model} /> },
      { path: "/register", element: <Register model={model} /> },
      { path: "/home", element: <Home model={model} /> },
      { path: "/test", element: <Test model={model} /> },
      { path: "/results", element: <Result model={model} /> },
      { path: "/history", element: <History model={model} /> },
    ]);
  }
  function App(props) {
    return (
      <div>
        {
          notOnStartPage && (
            <TopBar />
          )
        }
        <RouterProvider router={makeRouter(props.model)} />
      </div>
    );
  }
  return <App model={props.model}></App>;
});
