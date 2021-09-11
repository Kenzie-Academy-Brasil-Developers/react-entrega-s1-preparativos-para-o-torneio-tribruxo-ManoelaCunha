import "./styles.css";

const PageInitial = ({ studentsList, getRandom, handleClick }) => {
  return (
    <div className="container-initial">
      <h1>Torneio Tribuxo</h1>
      <p className="text-initial">
        Clique no botão para encontar os feiticeiros!
      </p>
      <button
        className="btn-one"
        onClick={() => {
          getRandom(studentsList);
          handleClick();
        }}
      >
        Começar
      </button>
    </div>
  );
};

export default PageInitial;
