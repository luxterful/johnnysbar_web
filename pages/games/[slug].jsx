import Navbar from "../../components/navbar";
import { Container } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../../util/client";

export async function getStaticPaths() {
  const games = await client.getEntries();

  // Get the paths we want to pre-render based on posts
  const paths = games.items.map(game => ({
    params: { slug: game.fields.slug }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const games = await client.getEntries({
    content_type: "game",
    "fields.slug": params.slug
  });

  return {
    props: {
      game: games.items[0]
    }
  };
}

const index = ({ game }) => {
  return (
    <div>
      <Navbar />
      <Container>{documentToReactComponents(game.fields.text)}</Container>
    </div>
  );
};

export default index;
