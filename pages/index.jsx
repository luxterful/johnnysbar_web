import games from "../util/genGameList";
import { Card, Row, Col } from "react-bootstrap";
import Link from "next/link";

const index = ({ router }) => {
  return (
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
  );
};

export default index;
