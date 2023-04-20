import React from "react";
import {Typography} from '@mui/material';


export default function Homepage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#F7F7F7',
        }}>
            <Typography variant="h1" style={{
                fontWeight: 700,
                fontSize: '3rem',
                marginBottom: '1rem',
            }}>
                Welcome to Mind Hack
            </Typography>
            <Typography variant="h2" style={{
                fontWeight: 400,
                fontSize: '1.5rem',
                textAlign: 'center',
            }}>
                Find your next career opportunity today.
            </Typography>
        </div>
    );
}