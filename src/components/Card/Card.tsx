import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
interface ICardProps {
  title: string;
  url: string;
  summary: string;
  createdAt: string;
  id: string;
}

const Card: React.FC<ICardProps> = (props) => {
  const { title, url, summary, createdAt, id } = props;

  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__created card__created--time">
        {createdAt} by
        <span className="card__created card__created--author"> admin</span>
      </p>

      <div className="card__body">
        <img src={url} alt="" className="card__image" />

        <div className="card__content">
          <p className="card__summary">{summary}</p>
          <Link to={`/details/${id}`}>
            <button className="card__read-button">read more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
