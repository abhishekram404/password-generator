import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import GeneratorForm from "./components/GeneratorForm";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <GeneratorForm />
    </Box>
  );
}

export default App;
