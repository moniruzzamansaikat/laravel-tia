import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link, router } from "@inertiajs/react";
import React from "react";
import toast from "react-hot-toast";

const AdminNavbar = () => {
    const handleLogout = () => {
        router.post('/admin/logout', {}, {
            onSuccess: () => {
                toast.success('You are logged out');
            },
            onError: () => {
                toast.error('Logout failed. Please try again.');
            }
        });
    };  

    
    return (
        <Navbar expand="lg" className="admin-navbar">
            <Container fluid>
                <Form className="d-flex admin-navbar__search">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Profile" id="profile-dropdown" align="end">
                            <NavDropdown.Item as={Link} href="/profile">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogout}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar;
