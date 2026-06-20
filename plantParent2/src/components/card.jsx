const Flashcard = (props) => {
  const handleFlipCard = () => {
    props.setIsFlipped(!props.isFlipped);
  };

  const difficultyClass = props.difficulty ? `difficulty-${props.difficulty}` : "";

  return (
    <div className={`Card ${difficultyClass} ${props.isFlipped ? "flipped" : ""}`} onClick={handleFlipCard}>
      <div className="card-inner">
        <div className={`front ${props.isFlipped ? "hidden" : ""}`}>
          {props.image && <img className="Front-Picture" src={props.image} alt="front" />}
          <p>{props.question}</p>
        </div>
        <div className={`back ${props.isFlipped ? "" : "hidden"}`}>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;