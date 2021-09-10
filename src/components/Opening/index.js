import "./styles.css";

const Opening = ({ handleStudents }) => {
  return (
    <div className="opening">
      <div className="opening__box">
        <h1>Torneio Tribruxo</h1>
        <p>Clique no botão para encontrar os feiticeiros</p>
        <button onClick={handleStudents}>Começar!</button>
      </div>
    </div>
  );
};

export default Opening;
