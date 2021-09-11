import "./App.css";
import { useEffect, useState } from "react";
import Students from "./components/Students";
import PageInitial from "./components/PageInitial";

function App() {
  const [studentsList, setStudentsList] = useState([]);

  const [studentsRandom, setStudentsRandom] = useState([]);

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudentsList(response))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const getRandom = (array) => {
    const copyArr = array.slice();

    for (let i = 0; i < copyArr.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[random]] = [copyArr[random], copyArr[i]];
    }

    return filterStudentHouse(copyArr);
  };

  const filterStudentHouse = (firstArr) => {
    const secondArr = firstArr.filter(
      (item) => item.house !== firstArr[0].house
    );

    const thirdArr = secondArr.filter(
      (item) => item.house !== secondArr[0].house
    );

    return setStudentsRandom([
      ...studentsRandom,
      firstArr[0],
      secondArr[0],
      thirdArr[0],
    ]);
  };

  return (
    <div className="App">
      <div className="App-content">
        {isShow ? (
          <PageInitial
            studentsList={studentsList}
            getRandom={getRandom}
            handleClick={handleClick}
          />
        ) : (
          <Students
            studentsRandom={studentsRandom}
            setStudentsRandom={setStudentsRandom}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
