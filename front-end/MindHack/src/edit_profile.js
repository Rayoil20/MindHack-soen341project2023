import * as React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export default function Edit_Profile() {
    return (
        <React.Fragment>
            <Card style={{padding:"20px"}}>
            <Typography variant="h6" gutterBottom>
                Edit Profile
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="university"
                        name="university"
                        label="University"
                        fullWidth
                        autoComplete="university"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="major"
                        name="major"
                        label="Major of Study"
                        fullWidth
                        autoComplete="major of study"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phone-number"
                        name="phone-number"
                        label="Phone Number"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Confirm changes are all correct"
                    />
                </Grid>
                <Button style={{color: "blue"}}>Sumbit Changes</Button>
            </Grid>
            </Card>
        </React.Fragment>
    );
}