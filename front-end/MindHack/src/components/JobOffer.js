import React from "react";
import Card from 'react-bootstrap/Card';
import {colors} from "@mui/material";

export default function JobOffer(props) {
    return (
        <Card style={{ width:"18rem", padding:"20px", position:"center", borderRadius:"20px", border: '1px solid black'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>

            </Card.Body>
        </Card>
    )
}
