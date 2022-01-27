import { AppBar, Typography, Container, IconButton } from "@mui/material/";
import { Sync } from "@mui/icons-material/";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <AppBar sx={{ py: 2 }} position="static">
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">Password generator</Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;
