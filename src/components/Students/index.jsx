import "./styles.css";
import StudentCard from "../StudentCard";

const Students = ({ studentsRandom, setStudentsRandom, handleClick }) => {
  return (
    <>
      <div className="container-card">
        {studentsRandom.map((item, index) => (
          <StudentCard key={index} student={item} />
        ))}
      </div>
      <button
        className="btn-two"
        onClick={() => {
          handleClick();
          setStudentsRandom([]);
        }}
      >
        Jogar Novamente
      </button>
    </>
  );
};

export default Students;
