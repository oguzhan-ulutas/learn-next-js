import { useEffect, useState } from "react";

const EffectUse = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("post")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.length
        ? items.map((item) => {
            return <pre>{JSON.stringify(item)}</pre>;
          })
        : null}

      <h1>{windowWidth}</h1>
    </>
  );
};

export default EffectUse;
