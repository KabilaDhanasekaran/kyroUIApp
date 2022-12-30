import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import LeftSidebar from "./scenes/global/Sidebar";

const theme = createTheme({
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
          <LeftSidebar />
        <main className="content">
          <Topbar />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
