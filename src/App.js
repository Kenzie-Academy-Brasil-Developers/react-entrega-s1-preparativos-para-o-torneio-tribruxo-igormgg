import { useEffect, useState } from "react";
import "./App.css";
import Opening from "./components/Opening";
import Student from "./components/Student";

function App() {
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [showOpening, setShowOpening] = useState(true);

  // const houseGryffindor = students.filter((std) => std.house === "Gryffindor");

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  });

  // const houses = students.map((std) => std.house);
  // console.log(houses);

  const handleStudents = () => {
    setShowStudents(!showStudents);
    setShowOpening(!showOpening);
  };

  return (
    <div className="App">
      <body id="body">
        <main>
          {/* {students.map((std) => {
              return (
                <>
                  {std.house === "Gryffindor" ? <div>{std.name}</div> : null}
                  <div>{std.name}</div>
                  <div>{std.house}</div>
                  <div>{std.gender}</div>
                </>
              );
            })} */}
          {showStudents && (
            <Student students={students} handleStudents={handleStudents} />
          )}
          {showOpening && <Opening handleStudents={handleStudents} />}
          {/* <button onClick={() => setShowStudents(!showStudents)}>clique</button> */}
        </main>
      </body>
    </div>
  );
}

export default App;
