import React from 'react'
import {Card, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Link from 'next/link'

export default function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand className="ms-3" >
                <Link href="/" passHref>
                    <Card bg="light">
                        <Card.Text className="text-black mx-2" style={{ cursor: 'pointer' }}>
                            Protest in Latin America
                        </Card.Text>
                    </Card>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Text className="ms-3">
                        <Link href="/">Home</Link>
                    </Navbar.Text>
                    <Navbar.Text className="ms-3">
                        <Link href="/about">About</Link>
                    </Navbar.Text>
                    <NavDropdown title="Committees" id="collasible-nav-dropdown" className="ms-3">
                        <NavDropdown.Item>
                            <Link href="/committees/women">Women in Latin America</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link href="/committees/us-influence">US Influence</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link href="/committees/lgbtq">LGBTQ+ Activism</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link href="/committees/street-protests">Street Protests</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link href="/committees/race">Race in Latin America</Link>
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
        </Navbar>
    )
}