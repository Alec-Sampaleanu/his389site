import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'

export default function MyNavbar() {
    return (<Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
            <Link href="/">Protest in Latin America</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Navbar.Text className="ms-2">
                    <Link href="/about">About</Link>
                </Navbar.Text>
                <NavDropdown title="Committees" id="collasible-nav-dropdown" className="ms-2">
                    <NavDropdown.Item>
                        <Link href="/committees/women">Women in Latin America</Link>
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>

        <style jsx global>{`
          a {
            text-decoration: none;
            color: #000000;
          }

          a:visited {
            text-decoration: none;
            color: #000000;
          }

          a:link {
            text-decoration: none;
            color: #000000;
          }
        `}
        </style>
    </Navbar>)
}