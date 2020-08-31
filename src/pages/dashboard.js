import React from "react";
function dashboard({ me }) {
  return <div> {me.name} ,your dashboard</div>;
}

export const getServerSideProps = async ({ req, res }) => {
  const response = await fetch("http://localhost:3000/api/users/2");
  let user

  if (!response.ok) {
    res.writeHead(302, { Location: "/" });
    res.end();
  } else {
    const data = await response.json();

    if (data) {
      user = data;
    } else {
      res.writeHead(302, { Location: "/" });
      res.end();
    }
  }

  // if (!req.headers.cookie) {
  //   res.writeHead(302, { Location: "/" });
  //   res.end();
  // } else {
  //   return {
  //     props: {},
  //   };
  // }

  return {
    props: { me: user },
  };
};

export default dashboard;
