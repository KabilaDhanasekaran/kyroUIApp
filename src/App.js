import { createTheme } from "@mui/material/styles";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import LeftSidebar from "./scenes/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import Content from "./scenes/content";

const theme = createTheme({
  root: {
    backgroundColor: "#f8f8f8"
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
    fontSize: 12,
    h3: {
      fontSize: 16,
      textTransform: 'capitalize'
    },
    subtitle1: {
      fontSize: 10,
      textTransform: 'capitalize'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <ProSidebarProvider>
          <LeftSidebar />
        </ProSidebarProvider>
        <main className="content">
          <Topbar />
          <Content />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
