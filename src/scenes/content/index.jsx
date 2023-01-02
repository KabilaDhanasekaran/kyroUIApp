import { Grid } from "@mui/material";
import Form from "../form";

const Content = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
              <Form />
            </Grid>
            <Grid item xs={4}>
              <div>Hello</div>
            </Grid>
        </Grid>
    )
}

export default Content;