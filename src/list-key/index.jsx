import { useState } from "react";
import data from "./data.json";
export default function ListKey() {
  const [fruit, setFruit] = useState(data);

  return (
    <div>
      <h1>List fruit</h1>
      <ul>
        {fruit.map((item) => {
          return (
            <li key={item.id}>
              id : {item.id} - name : {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
