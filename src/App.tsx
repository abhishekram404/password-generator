import React, { Suspense } from "react";
import "./App.css";

import { Box, Typography } from "@mui/material";
import Loading from "./components/Loading";
const Navbar = React.lazy(() => import("./components/Navbar"));
const GeneratorForm = React.lazy(() => import("./components/GeneratorForm"));

function App() {
  return (
    <Box>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <GeneratorForm />
      </Suspense>
    </Box>
  );
}

export default App;
