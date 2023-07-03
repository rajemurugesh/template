import React from "react";
import "./App.css";
import Button from "@mui/material/Button";  
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            React JS Theme Customization
          </Typography>
          <Typography variant="h2" align="center" color="textSecondary">
            h2 Typography with secondary text colour
          </Typography>
          <br />
          <Typography variant="h3" align="center" color="textPrimary" paragraph>
            h3 Typography variant with primary text colour
          </Typography>
          <br />
          <Button variant="contained" color="primary">
            {" "}
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            {" "}
            Secondary
          </Button>
          {/* Since, color prop only takes primary and 
          secondary as values,we define other colors 
          in component's style */}
          <Button
            variant="contained"
            style={{ background: theme.palette.error.main }}
          >
            Error{" "}
          </Button>
          <Button
            variant="contained"
            style={{ background: theme.palette.warning.main }}
          >
            Warning{" "}
          </Button>
          <Button
            variant="contained"
            style={{ background: theme.palette.info.main }}
          >
            Info{" "}
          </Button>
          <Button
            variant="contained"
            style={{ background: theme.palette.success.main }}
          >
            Success{" "}
          </Button>

          <br />
          <br />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
