const Navigation = ({ allGames }) => {
  return <ul>{"" + allGames}</ul>;
};

Navigation.getInitialProps = async function() {
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const value = values[index];
      return value;
    });
    return data;
  })(require.context("../pages/games", true, /\.mdx$/));

  return {
    allGames: posts
  };
};

export default Navigation;
