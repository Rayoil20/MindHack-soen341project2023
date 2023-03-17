import React from "react"
import Card from 'react-bootstrap/Card';
import JobOffer from "./components/JobOffer";

export default function Jobs(props) {

    return (
        <div>
            <JobOffer title={"Software Engineering Intern"} subtitle={"Summer 2023"} text={"Web design experience required"}></JobOffer>
            <JobOffer title={"Computer Engineering Intern"} subtitle={"Fall 2023"} text={"Arduino coding and building experience required"}></JobOffer>

        </div>
    )


}