import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {

    let fontclrchanger={
        color: 'white',
    }
    

    return (
        <div >
            <Navbar bg="" expand="lg">
            <Navbar.Brand href="/" style={fontclrchanger}>Encryptor.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/message-encrypt" style={fontclrchanger}>Encrypt</Nav.Link>
                <Nav.Link href="/message-decrypt" style={fontclrchanger}>Decrypt</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
