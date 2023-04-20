import './jobs.css'; // import the stylesheet
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import Container from "@mui/material/Container";
import { FormLabel } from '@mui/material';
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

function Employer_posting({ onPost }) {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [jobSalary, setJobSalary] = useState('');
    const [jobType, setJobType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const request = {
            method: "POST",
            headers: {'Content-Type': 'application/json', 'authorization': cookies.token},
            body: JSON.stringify({
                "title": jobTitle,
                "description": jobDescription,
                "location": jobLocation,
                "salary": jobSalary,
                "type": jobType
            })
        }
        // Here you can add your code to post the job
        let res = await fetch("http://localhost:5000/job", request);

        navigate("/job");
    };

    return (
        <Container className="pt-5 pb-5">
            <div className="pt-lg-5">Post a new Job</div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextField
                    label="Job Title"
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)}
                />
                <TextField
                    label="Job Description"
                    value={jobDescription}
                    onChange={(event) => setJobDescription(event.target.value)}
                    multiline
                    rows={4}
                />
                <TextField
                    label="Job Location"
                    value={jobLocation}
                    onChange={(event) => setJobLocation(event.target.value)}
                />
                <TextField
                    label="Job Salary"
                    value={jobSalary}
                    onChange={(event) => setJobSalary(event.target.value)}
                    type="number"
                />
                <FormControl>
                    <InputLabel id="job-type-label">Job Type</InputLabel>
                    <Select
                        labelId="job-type-label"
                        value={jobType}
                        onChange={(event) => setJobType(event.target.value)}
                    >
                        <MenuItem value="Full-time">Full-time</MenuItem>
                        <MenuItem value="Part-time">Part-time</MenuItem>
                        <MenuItem value="Freelance">Freelance</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type="submit">
                    Post Job
                </Button>
            </form>
        </Container>

    );
}

export default Employer_posting;