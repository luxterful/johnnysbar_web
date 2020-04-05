import { Card, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import Navbar from "../components/navbar";
import client from "../util/client";

export async function getStaticProps() {
  const games = await client.getEntries();

  return {
    props: {
      games: games.items
    }
  };
}

const index = ({ games }) => {
  return (
    <div className="custom-index-pagewrapper">
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
        <div className="custom-shadow" />
      </div>
      <Container className="custom-container">
        <Row className="justify-content-md-center custom-landing-headline">
          <Col md="auto">
            <h1>Trinkspiele</h1>
          </Col>
        </Row>
        <Row>
          {games.map((game, index) => (
            <Link href={"games/" + game.fields.slug} key={index}>
              <Col md={4}>
                <Card className="custom-card shadow-sm">
                  <div
                    className="custom-card-img"
                    style={{
                      backgroundImage: `url(${game.fields.headerImage?.fields
                        .file.url || "/images/games.jpg"})`
                    }}
                  ></div>

                  <Card.Body>
                    <Card.Title>{game.fields.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
      <div className="custom-footer">
        <Container className="custom-footer-container">
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>{" "}
          - copyright Johnnys' Bar 2020
        </Container>
      </div>
    </div>
  );
};

export default index;
