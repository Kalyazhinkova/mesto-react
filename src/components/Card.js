function Card ({card}) {

  // function handleClick() {
  //   props.onCardClick(props.card);
  // }
  const {name, link, likes} = card;

  return (
    <>
    <article className="element">
      <img className="element__image" alt={`Фотография. ${name}`} src={link}/>
      <button className="element__trash" type="button"></button>
      <div className="element__print">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-group">
          <button className="element__like" type="button"></button>
          <p className="element__counter">{likes.length}</p>
        </div>
      </div>
    </article>
  </>
  );
}

export default Card;