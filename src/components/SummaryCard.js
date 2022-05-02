import { Col } from "react-bootstrap";

const SummaryCard = (props) => {
  return (
    <Col className='summary-block'>
      <Col className='row'>
        <div>
          <img className='img-responsive' src={props.img} alt='img' />
        </div>
      </Col>

      <Col>
        <div>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </Col>
    </Col>
  );
};

export default SummaryCard;
