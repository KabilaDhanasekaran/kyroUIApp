import { Box, Button, Avatar, Typography, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const currentDate = new Date();

const Topbar = () => {
    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box display="inline-block" >
            <Typography variant="h3">Good Morning, Kabila</Typography>
            {/* use momentJs */}
            <Typography variant="subtitle1">{currentDate.getDate() + ' , '+ currentDate.getFullYear()}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Button variant="contained" color="error" size="small" startIcon={<AddIcon />}>
                Add Project
            </Button>

            <Button 
                variant="text" 
                startIcon={<Avatar sx={{ width: 32, height: 32 }}>K</Avatar>}
                endIcon={<ArrowDropDownIcon />}>
                <Grid container direction="column" alignItems="start" >
                    <Grid item>
                        <Typography variant="h3">Kabila D</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">Senior Consultant</Typography>
                    </Grid>
                </Grid>
            </Button>
        </Box>
    </Box>
    )
}

export default Topbar;