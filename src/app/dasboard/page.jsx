import React from "react";

const Dashboard = async () => {
  const res = await fetch("http://nextjsconnectwp.local/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query NewQuery {
  posts {
    nodes {
      slug
      title
    }
  }
}
      `,
    }),
  });
  const json = await res.json();
  const data = json.data.posts.nodes;
  console.log(data[0].title);
  return <div>{data[0].title}</div>;
};

export default Dashboard;
