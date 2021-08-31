import "./style.css";

const Card = ({ children }) => {
  return (
    <div>
      <span className="container">{children}</span>
    </div>
  );
};

export default Card;
