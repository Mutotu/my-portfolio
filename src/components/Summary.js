import { Col, Row, Container } from "react-bootstrap";
import SummaryCard from "./SummaryCard";
import developerSvg from "../images/developerdesign.svg";
import responsiveSvg from "../images/responsivedesign.svg";
import innovativeSvg from "../images/innovativesolutions.svg";
import passionSvg from "../images/passion.svg";

const Summary = () => {
  const features = [
    {
      img: developerSvg,
      title: "Development and Design",
      text: "I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.",
    },
    {
      img: responsiveSvg,
      title: "Responsive Layouts",
      text: "Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.",
    },
    {
      img: innovativeSvg,
      title: "Ideas and Solutions",
      text: "There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.",
    },
    {
      img: passionSvg,
      title: "Passion and Dedication",
      text: "With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.",
    },
  ];

  return (
    <div className='summary'>
      <Container fluid>
        {features.map((feature, id) => (
          <SummaryCard
            key={id}
            img={feature.img}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </Container>
    </div>
  );
};

export default Summary;
