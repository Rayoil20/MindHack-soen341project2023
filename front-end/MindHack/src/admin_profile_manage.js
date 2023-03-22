import React from "react";
import {Card} from "@mui/material";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";


export default function Admin_Manage(props) {

    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <Card style={{padding:"20px", radius:"25px", display: "flex", flexWrap: "wrap" }}>
            <Card style={{width:"18rem", padding:"15px", position:"center", backgroundColor:"grey"}}>
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
                                                    <button type="button" className="btn btn-primary">Delete this profile</button>
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

            {/*    must be deleted, just a test   */}
                <Card style={{width:"18rem", padding:"15px", position:"center", backgroundColor:"grey"}}>
                    <MDBContainer className="py-5 h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol lg="6" className="mb-4 mb-lg-0">
                                <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                                    <MDBRow className="g-0">
                                        <MDBCol md="4" className="gradient-custom text-center text-white"
                                                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>

                                            <MDBCardText>Sophie Hajjar</MDBCardText>
                                            <MDBIcon far icon="edit mb-5" />
                                        </MDBCol>
                                        <MDBCol md="8">
                                            <MDBCardBody className="p-4">
                                                <MDBTypography tag="h6">Software Engineering</MDBTypography>
                                                <hr className="mt-0 mb-4" />
                                                <MDBRow className="pt-1">
                                                    <MDBCol size="6" className="mb-3">
                                                        <MDBTypography tag="h6">Email</MDBTypography>
                                                        <MDBCardText className="text-muted">sophieHajjar@example.com</MDBCardText>
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
                                                        <button type="button" className="btn btn-primary">Delete this profile</button>
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

            </Card>
        </section>
    )


}