import { Col } from "react-bootstrap";

const SummaryCard = (props) => {
  return (
    <div className='summary-block'>
      <div>
        <img className='img-responsive' src={props.img} alt='img' />
      </div>

      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
