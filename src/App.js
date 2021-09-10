import { useEffect, useState } from "react";
import "./App.css";
import Opening from "./components/Opening";
import Student from "./components/Student";

function App() {
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  });

  const handleStudents = () => {
    setShowStudents(!showStudents);
    setShowOpening(!showOpening);
  };

  return (
    <div className="App">
      <body id="body">
        <main>
          {showStudents && (
            <Student students={students} handleStudents={handleStudents} />
          )}
          {showOpening && <Opening handleStudents={handleStudents} />}
        </main>
      </body>
    </div>
  );
}

export default App;
