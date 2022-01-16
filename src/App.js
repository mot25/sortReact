import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [arrPost, setarrPost] = useState([
    { id: 1, title: "bvdfv", description: "bertbr" },
    { id: 3, title: "arewbewrtber", description: "zreweghwrertbr" },
    { id: 2, title: "rvdrtberwbfv", description: "wertewrtwrt" },
  ]);
  const [zeroArr, setzeroArr] = useState([...arrPost]);

  const [selectInput, setselectInput] = useState("");
  let collatore = new Intl.Collator("en-EN");
  const sort = (e) => {
    let sortE = e.target.value;
    // console.log("sortE", sortE);
    if (sortE == "id") {
      console.log("id");
      return setarrPost([...arrPost].sort((a, b) => b.id - a.id));
    }
    if (sortE == "title" || sortE == "description") {
      console.log(sortE);
      return setarrPost(
        [...arrPost].sort((a, b) => collatore.compare(a[sortE], b[sortE]))
      );
    }
    if (sortE == "all") {
      console.log("all");
      return setarrPost(zeroArr);
    }
  };
  /*
    let arrNumber = [5, 4, 1, 6, 2, 7];
  const test1 = [...arrNumber].sort((a, b) => b - a).map((i) => i * 10);
  const test2 = [...arrNumber].sort((a, b) => a - b).map((i) => i * 10);
  console.log("arrNumber", arrNumber);
  console.log("test1", test1);
  console.log("test2", test2);
  let arrText = ["abc", "cba", "cba", "vaerve", "vca", "ver"];
  const test3 = [...arrText].sort((a, b) => a - b);
  console.log("arrText", arrText);
  console.log("test3", test3);

  const letter = "йцукенгшщзфывапрёолдячсмитьбю".split("");
  const collatore = new Intl.Collator("ru-RU");
  console.log(letter.sort(collatore.compare));

  const people = [
    {
      name: "брукерукр",
      lastName: "Hughes",
      DOB: "07/07/1978",
      department: "Development",
      salary: "45000",
    },
    {
      name: "укерукер",
      lastName: "Gonzalez",
      DOB: "03/24/1985",
      department: "Office Management",
      salary: "49000",
    },
    {
      name: "aуерукеруккр",
      lastName: "Garrett",
      DOB: "09/04/1985",
      department: "Development",
      salary: "39000",
    },
  ];
  console.log(people);
  const users = [
    { name: "бафыкфукб", age: 45655, lastName: "уруе5оору" },
    { name: "церкуе", age: 43645545555, lastName: "онкеоке" },
    { name: "аыауерукрефыкфукб", age: 55555555, lastName: "ноукннокено" },
  ];
  console.log("users", users);
  let res = [...users].sort((a, b) =>
    collatore.compare(a.lastName, b.lastName)
  );
  console.log("users", res);
  people.sort((a, b) => collatore.compare(a.lastName, b.lastName));
  console.log(people);
 */
  return (
    <div className="App">
      <select
        onChange={(e) => {
          setselectInput(e.target.value);
          sort(e);
        }}
      >
        <option value="all">all</option>
        <option value="id">id</option>
        <option value="title">title</option>
        <option value="description">description</option>
      </select>
      <Post arr={arrPost} />
    </div>
  );
}

export default App;
