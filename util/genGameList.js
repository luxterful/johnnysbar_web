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
      meta,
      slug
    };
  });
})(require.context("../pages/games", true, /\.mdx$/));

export default games;
