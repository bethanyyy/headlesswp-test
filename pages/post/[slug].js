import React from "react";
import { fetcher } from "../../lib/fetcher";
import { ALL_POSTS_SLUGS, POST_BY_SLUG } from "../../lib/wordpress/api";

const Post = ({ postData }) => {
  const { title, content, date, featuredImage } = postData;
  console.log(postData);
  return (
    <div>
      <h3>{postData.title}</h3>
      <img src={featuredImage?.node.sourceUrl} />
      <p>{content}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetcher(ALL_POSTS_SLUGS);
  //   console.log(response.data.posts.nodes);
  const paths = response.data.posts.nodes.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  //   console.log(paths);

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const variables = {
    id: slug,
    idType: "SLUG",
  };
  const response = await fetcher(POST_BY_SLUG, { variables });
  const postData = response.data.post;

  console.log(postData);

  return {
    props: { postData },
  };
};

export default Post;
