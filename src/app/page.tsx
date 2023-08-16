import { Grid } from "@mui/material";
import AboutPage from "./about";
import VerticalLinearStepper from "./projects";

export default function Page() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AboutPage />
      </Grid>
      <Grid item xs={12}>
        <VerticalLinearStepper />
      </Grid>
    </Grid>
  )
}
