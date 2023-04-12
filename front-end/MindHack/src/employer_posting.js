import './jobs.css'; // import the stylesheet
import React, { useState } from 'react';

function employer_posting({ onPost }) {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newJob = {
            id: Date.now(),
            title: jobTitle,
            description: jobDescription,
            location: jobLocation,
        };
        onPost(newJob);
        setJobTitle('');
        setJobDescription('');
        setJobLocation('');
    };
    const handlepost = (event) => {
        event.preventDefault();
        const newJob = {
            id: Math.random(),
            title: jobTitle,
            description: jobDescription,
            location: jobLocation,
        };
        onPost(newJob);
        setJobTitle('');
        setJobDescription('');
        setJobLocation('');
    };
    return (
        <div className="posting-box">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Job Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={jobTitle}
                        onChange={(event) => setJobTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Job Description:</label>
                    <textarea
                        id="description"
                        value={jobDescription}
                        onChange={(event) => setJobDescription(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="location">Job Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={jobLocation}
                        onChange={(event) => setJobLocation(event.target.value)}
                    />
                </div>
                <button type="submit">Post Job</button>
            </form>
        </div>
    );
}

export default employer_posting;
