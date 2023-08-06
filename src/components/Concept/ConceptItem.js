import "./ConceptItem.css";

function ConceptItem(props) {
  const title = props.title;
  const image = props.image;
  const description = props.description;

  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

export default ConceptItem;
