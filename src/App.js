import React from "react";
import useStatusResponse from "./statuscode";

export default function App() {
  const data1 = [{ name: "Andre the Giant" }, { name: "Betty Boop" }];

  useStatusResponse(204, { errorMessage: "Hi Mom!" });
  return (
    <div>
      <ListMapper data={data1} />
    </div>
  );
}

const ListMapper = ({ data }) => (
  <ol>
    {data.map((x) => (
      <li>{x.name}</li>
    ))}
  </ol>
);
