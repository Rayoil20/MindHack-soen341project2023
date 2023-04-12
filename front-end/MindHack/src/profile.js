import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import {Card} from "@mui/material";
import Link from "@mui/material/Link";
import Edit_Profile from "./edit_profile";
import {Route, Routes} from "react-router-dom";

export default function PersonalProfile() {
    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <Card style={{width:"18rem", padding:"15px", position:"center"}}>
             <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>

                                    <MDBCardText>Ryan Kattoura</MDBCardText>
                                    <MDBIcon far icon="edit mb-5" />
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Computer Engineering</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Email</MDBTypography>
                                                <MDBCardText className="text-muted">ryanKattoura@example.com</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Phone</MDBTypography>
                                                <MDBCardText className="text-muted">123 456 789</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">School</MDBTypography>
                                                <MDBCardText className="text-muted">Concordia University</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">CV</MDBTypography>
                                                <MDBCardText className="text-muted">CV.pdf</MDBCardText>
                                                <button type="button" className="btn btn-primary">Upload your cv</button>
                                                <Link href="/edit_profile">
                                                    <button type="button" className="btn btn-primary">Edit Profile</button>
                                                </Link>

                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </Card>
        </section>
    );
}