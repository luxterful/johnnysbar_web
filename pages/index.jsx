import games from "../util/genGameList";
import { Card, Row, Col } from "react-bootstrap";

const index = ({ router }) => {
  return (
    <Row>
      {games.map((game, index) => (
        <Col>
          <Card key={index}>
            <Card.Body>
              <Card.Title>{game.meta.title}</Card.Title>
              <Card.Link href={game.path}>Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default index;
