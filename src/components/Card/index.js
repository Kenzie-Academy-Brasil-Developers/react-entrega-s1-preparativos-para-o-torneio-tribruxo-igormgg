import "./styles.css";

const Card = ({ student: { name, house, image } }) => {
  return (
    <div className="all_cards">
      {house === "Gryffindor" ? (
        <div className="gryffindor_card">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p id="griffindor_houseName">{house}</p>
        </div>
      ) : null}
      {house === "Slytherin" ? (
        <div className="slytherin_card">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p id="slytherin_houseName">{house}</p>
        </div>
      ) : null}
      {house === "Ravenclaw" ? (
        <div className="ravenclaw_card">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p id="ravenclaw_houseName">{house}</p>
        </div>
      ) : null}
      {house === "Hufflepuff" ? (
        <div className="hufflepuff_card">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p id="hufflepuff_houseName">{house}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
