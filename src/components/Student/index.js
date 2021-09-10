import { useState } from "react";
import Card from "../Card";
import "./styles.css";

const Student = ({ students, handleStudents }) => {
  const random5 = () => Math.floor(Math.random() * 5);
  const random3 = () => Math.floor(Math.random() * 3);

  let gryffindorWitches = students.filter((std) => std.house === "Gryffindor");

  let slytherinWitches = students.filter((std) => std.house === "Slytherin");

  let huffleRavenWitches = students.filter(
    (std) => std.house === "Ravenclaw" || std.house === "Hufflepuff"
  );

  const triWitches = () => {
    const output = [];
    output.push(gryffindorWitches[random5()]);
    output.push(slytherinWitches[random3()]);
    output.push(huffleRavenWitches[random3()]);
    return output;
  };

  const [witches, setWitches] = useState(triWitches());

  const addWitches = () => {
    setWitches(triWitches);
  };

  return (
    <div className="cards">
      <div className="cards__box">
        {witches.map((std, index) => (
          <Card key={index} student={std} />
        ))}
      </div>
      <button onClick={addWitches}>Tentar Novamente</button>
    </div>
  );
};

export default Student;
