import Navbar from "../components/navbar";
import Content from "../components/content";
import ReactMD from "react-markdown";
import matter from "gray-matter";

const Index = props => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <Content />
      {props.allBlogs.map(game => (
        <ReactMD source={game.content} />
      ))}
    </div>
  );
};

Index.getInitialProps = async function() {
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const value = values[index];
      return matter(value.default);
    });
    return data;
  })(require.context("../games", true, /\.md$/));

  return {
    allBlogs: posts
  };
};

export default Index;
