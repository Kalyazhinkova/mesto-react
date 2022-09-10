function Card (props) {

  const {card, onClick}= props;

  return (
    <>
    <article className="element">
      <img className="element__image" alt={`Фотография. ${card.name}`} src={card.link} onClick={() => {onClick(card);}}/>
      <button className="element__trash" type="button"></button>
      <div className="element__print">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button"></button>
          <p className="element__counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  </>
  );
}

export default Card;