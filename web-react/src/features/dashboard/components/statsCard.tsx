import './StatsCard.css';

type CardProps = {
  title: string;
  value: string | number;
};

const Card = ({ title, value }: CardProps) => {
  return (
    <div className="custom-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default Card;

