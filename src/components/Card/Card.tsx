import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <p className="card__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <p className="card__created card__created--time">
        March 10, 2022 by
        <span className="card__created card__created--author"> admin</span>
      </p>

      <div className="card__body">
        <img
          src="https://exerror.com/wp-content/uploads/2022/03/npm-ERR-code-UNABLE_TO_GET_ISSUER_CERT_LOCALLY-768x435.jpg"
          alt=""
          className="card__image"
        />

        <div className="card__content">
          <p className="card__summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde
            eaque hic ullam rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero unde eaque hic ullam rem. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero unde eaque hic ullam
            rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            unde eaque hic ullam rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vero unde eaque hic ullam rem. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero unde eaque hic ullam
            rem.
          </p>
          <button className="card__read-button">read more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
