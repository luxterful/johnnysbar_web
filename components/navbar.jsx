import Link from "next/link";
import { withRouter } from "next/router";
import games from "../util/genGameList";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = ({ router }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Johnnys' Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/*games.map((game, index) => (
              <Nav.Link key={index}>
                <Link href={game.path}>
                  <a className={router.asPath === game.path ? "active" : ""}>
                    {game.meta.title}
                  </a>
                </Link>
              </Nav.Link>
            ))*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(Navigation);
