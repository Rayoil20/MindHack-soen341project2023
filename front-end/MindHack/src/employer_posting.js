import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Employer_Post() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Job Offer Creation
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Job Title"
                        name="Job Title"
                        label="Job Title"
                        fullWidth
                        autoComplete="job-title"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Company"
                        name="Company"
                        label="Company"
                        fullWidth
                        autoComplete="company"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Work Arrangement"
                        name="Work Arrangement"
                        label="Work Arrangement"
                        fullWidth
                        autoComplete="Work-Arrangement"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Location"
                        name="Location"
                        label="Location"
                        fullWidth
                        autoComplete="location"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="FullTime/PartTime"
                        name="FullTime/PartTime"
                        label="Full Time / Part Time"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="Compensation"
                        name="Compensation"
                        label="Compensation"
                        fullWidth
                        autoComplete="compensation"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="Required Skills"
                        name="Required Skills"
                        label="Required Skills"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} style={{height:"50"}}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}