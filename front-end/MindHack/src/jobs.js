import React, {useEffect, useState} from 'react';
import './jobs.css';
import {set} from "mongoose";
import Button from "@mui/material/Button";
// import EmployerPosting from './employer_posting';

const exampleJobs = [
    {
        id: 1,
        title: 'React Developer',
        description: 'We are looking for an experienced React developer to join our team.',
        location: 'San Francisco, CA',
    },
    {
        id: 2,
        title: 'Node.js Developer',
        description: 'We are looking for a skilled Node.js developer to work on our backend systems.',
        location: 'New York, NY',
    },
    {
        id: 3,
        title: 'Full-stack Developer',
        description: 'We are looking for a versatile full-stack developer to work on various projects.',
        location: 'Remote',
    },
    {
        id: 4,
        title: 'Front-end Developer',
        description: 'We are seeking a talented front-end developer to join our team and help us build beautiful and responsive user interfaces.',
        location: 'Seattle, WA',
    },
    {
        id: 5,
        title: 'Software Engineer',
        description: 'We are hiring a software engineer to work on our core products and services.',
        location: 'Austin, TX',
    },
    {
        id: 6,
        title: 'Data Scientist',
        description: 'We are seeking a data scientist to join our team and help us make data-driven decisions.',
        location: 'Boston, MA',
    },
    {
        id: 7,
        title: 'Data Scientist',
        description: 'We are seeking a data scientist to join our team.',
        location: 'Austin, TX',
    },

    {
        id: 8,
        title: 'Front-end Developer',
        description: 'We are seeking a talented front-end developer to join our team and help us build beautiful and responsive user interfaces.',
        location: 'Remote',
    },

    {
        id: 9,
        title: 'Back-end Developer',
        description: 'We are seeking a talented back end developer.',
        location: 'Seattle, WA',
    },
    {
        id: 10,
        title: 'Data Scientist',
        description: 'We are seeking a data scientist to join our team.',
        location: 'Austin, TX',
    },

    {
        id: 11,
        title: 'Front-end Developer',
        description: 'We are seeking a talented front-end developer to join our team and help us build beautiful and responsive user interfaces.',
        location: 'Remote',
    },

    {
        id: 12,
        title: 'Back-end Developer',
        description: 'We are seeking a talented back end developer.',
        location: 'Seattle, WA',
    },
];

function JobOffer({ job }) {
    return (
        <div className="job">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.type}</p>
            <Button variant="contained">Apply</Button>
        </div>
    );
}

function JobList({ jobs }) {
    return (
        <div className="job-list">
            {jobs.map((job) => (
                <JobOffer key={job.id} job={job} />
            ))}
        </div>
    );
}

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleSearchChange} />
            <button onClick={() => onSearch(searchQuery)}>Search</button>
        </div>
    );
}


function App() {
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [everyJob,setEveryJob] = useState([]);

    const fetchJobs = async () =>{
        let res = await fetch('http://localhost:5000/job', {method: 'GET'});
        res = res.json();
        return res
    }

    useEffect(() => {
        fetchJobs().then(r => setFilteredJobs(r));
    }, []);

    const handleSearch = (query) => {
        fetchJobs().then(r => setEveryJob(r));
        const filtered = everyJob.filter((job) => {
            return (
                job.title.toLowerCase().includes(query.toLowerCase()) ||
                job.description.toLowerCase().includes(query.toLowerCase()) ||
                job.location.toLowerCase().includes(query.toLowerCase())
            );
        });
        setFilteredJobs(filtered);
    };

    const handleJobPost = (newJob) => {
        const newFilteredJobs = [...filteredJobs, newJob];
        setFilteredJobs(newFilteredJobs);
    };

    return (

        <div>
            <h1>Job Offers</h1>
            <SearchBar onSearch={handleSearch} />
            {filteredJobs.length > 0 ? (<JobList jobs={filteredJobs} />) : (<h1>No jobs have been found</h1>)}

            {/*<EmployerPosting onJobPost={handleJobPost} />*/}
        </div>

    );
}

export default App;

