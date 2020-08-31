import React from "react";
import { useRouter } from "next/router";
function Blog({ param }) {
  const router = useRouter();

  return (
    <>
      {router.isFallback ? (
        <p>loading</p>
      ) : (
        <div>
          This is individual pages
          <br />
          {param}
        </div>
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  //get id from datbase

  //then

  const paths = [{ params: { blogId: "1" } }, { params: { blogId: "2" } }];

  return {
    paths: paths.slice(0,1),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  return {
    props: { param: params.blogId },
  };
};

export default Blog;
