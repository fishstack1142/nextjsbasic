import React from "react";
function Blog({ param }) {
  return (
    <>
      <div>
        This is individual pages
        <br />
        {param}
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  //get id from datbase

  //then

  const paths = [{ params: { blogId: "1" } }, { params: { blogId: "2" } }];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {

    console.log(params)
  return {
    props: { param: params.blogId },
  };
};

export default Blog;
