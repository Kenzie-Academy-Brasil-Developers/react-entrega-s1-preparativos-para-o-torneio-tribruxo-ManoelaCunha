import "./styles.css";

const StudentCard = ({ student: { name, house, image } }) => {
  return (
    <div className="card">
      <div className="container-img">
        <img
          src={image}
          alt={name}
          style={
            house === "Gryffindor"
              ? { border: "2px solid red", boxShadow: "0 0 0.5em red" }
              : house === "Slytherin"
              ? { border: "2px solid green", boxShadow: "0 0 0.5em green" }
              : house === "Ravenclaw"
              ? { border: "2px solid blue", boxShadow: "0 0 0.5em blue" }
              : { border: "2px solid yellow", boxShadow: "0 0 0.5em yellow" }
          }
        ></img>
      </div>

      <div className="container-text">
        <h2>{name}</h2>
        <p
          className="text"
          style={
            house === "Gryffindor"
              ? { color: "red" }
              : house === "Slytherin"
              ? { color: "green" }
              : house === "Ravenclaw"
              ? { color: "blue" }
              : { color: "yellow" }
          }
        >
          {house}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
