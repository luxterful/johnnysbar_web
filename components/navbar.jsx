import Link from "next/link";
import { withRouter } from "next/router";

const Navigation = ({ router }) => {
  const games = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    return keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const { meta } = values[index];
      const path = "/games/" + slug;
      return {
        path,
        meta
      };
    });
  })(require.context("../pages/games", true, /\.mdx$/));

  return (
    <ul className="sidebar">
      <Link href={"/"}>
        <a className={router.asPath === "/" ? "active" : ""}>home</a>
      </Link>
      {games.map(game => (
        <li key={game.path}>
          <Link href={game.path}>
            <a className={router.asPath === game.path ? "active" : ""}>
              {game.meta.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(Navigation);
