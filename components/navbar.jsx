import Link from "next/link";

const Navigation = () => {
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
      return {
        slug,
        meta
      };
    });
  })(require.context("../pages/games", true, /\.mdx$/));

  return (
    <ul>
      <Link href={"/"}>
        <a>home</a>
      </Link>
      {games.map(game => (
        <li key={game.slug}>
          <Link href={"/games/" + game.slug}>
            <a>{game.meta.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
