import games from "../util/genGameList";
import { Card, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import Navbar from "../components/navbar";

const index = ({ router }) => {
  return (
    <>
      <Navbar />
      <div className="custom-header">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h1>Johnnys' Bar</h1>
              <h4>Drinking game rules</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="custom-container">
        <Row className="justify-content-md-center custom-landing-headline">
          <Col md="auto">
            <h1>Trinkspiele</h1>
          </Col>
        </Row>
        <Row>
          {games.map((game, index) => (
            <Link href={game.path} key={index}>
              <Col md={4}>
                <Card className="custom-card shadow-sm">
                  <div
                    className="custom-card-img"
                    style={{
                      backgroundImage: `url(${game.meta.image || "/images/games.jpg"})`
                    }}
                  ></div>

                  <Card.Body>
                    <Card.Title>{game.meta.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default index;
