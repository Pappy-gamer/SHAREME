import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { feedQuery, searchQuery } from "../utils/data";
import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  console.log(pins);

  if (loading) return <Spinner message="we are adding" />;
  console.log(pins);

  if (!pins?.length)
    return (
      <h1 className=" text-center mt-9 font-bold">
        No pins available under this category
      </h1>
    );

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { client } from "../client";
// import { feedQuery, searchQuery } from "../utils/data";
// import MasonryLayout from "./MasonryLayout";
// import Spinner from "./Spinner";

// const Feed = () => {
//   const [pins, setPins] = useState();
//   const [loading, setLoading] = useState(false);
//   const { categoryId } = useParams();

//   useEffect(() => {
//     if (categoryId) {
//       setLoading(true);
//       const query = searchQuery(categoryId);
//       client.fetch(query).then((data) => {
//         setPins(data);
//         setLoading(false);
//       });
//     } else {
//       setLoading(true);

//       client.fetch(feedQuery).then((data) => {
//         setPins(data);
//         setLoading(false);
//       });
//     }
//   }, [categoryId]);
//   const ideaName = categoryId || "new";

//   if (loading) {
//     return (
//       <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
//     );
//   }
//   return <div>{pins && <MasonryLayout pins={pins} />}</div>;
// };

// export default Feed;
