import "./App.css";
import Navbar from "./components/Navbar";
import GeneratorForm from "./components/GeneratorForm";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <GeneratorForm />
    </Box>
  );
}

export default App;
