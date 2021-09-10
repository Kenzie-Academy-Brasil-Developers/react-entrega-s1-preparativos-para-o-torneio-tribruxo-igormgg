import Card from "../Card";
import "./styles.css";

const Student = ({ students, handleStudents }) => {
  return (
    <div className="cards">
      <div className="cards__box">
        {students.map((std, index) => (
          <Card key={index} student={std} />
        ))}
      </div>
      <button onClick={handleStudents}>Tentar Novamente</button>
    </div>
  );
};

export default Student;
