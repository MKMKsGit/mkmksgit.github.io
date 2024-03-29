import { Box } from "@mui/material";
import { Navbar } from "components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export { Layout };
