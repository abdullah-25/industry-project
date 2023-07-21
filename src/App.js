import "./App.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SupportPage from "./pages/SupportPage/SupportPage";
import StartTour from "./pages/StartTour/StartTour";
import StartTour2 from "./pages/StartTour2/StartTour2";
import StartTour3 from "./pages/StartTour3/StartTour3";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/support/tour" element={<StartTour />} />
            <Route path="/support/tour/2" element={<StartTour2 />} />
            <Route path="/support/tour/3" element={<StartTour3 />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
