import React, { useEffect } from 'react';
import { ChakraProvider, Flex, Box, List } from '@chakra-ui/react'
import './App.css';
import Home from './Pages/Home';
import Notification from './Pages/Notification';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Discover from './Pages/Discover';
import Message from './Pages/Message';
import Bookmarks from './Pages/Bookmarks';
import ListPage from './Pages/List';
import Profile from './Pages/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/discover",
    element: <Discover/>,
  },
  {
    path: "/message",
    element: <Message/>,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks/>,
  },
  {
    path: "/list",
    element: <ListPage/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/:user_name",
    element: <Profile />
  }
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
