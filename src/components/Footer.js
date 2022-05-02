import facebookSvg from "../images/facebook.svg";
import linkedinSvg from "../images/linkedin.svg";
import pinterestSvg from "../images/pinterest.svg";
import emailSvg from "../images/email.svg";
import FooterCard from "./FooterCard";

const Footer = () => {
  const images = [
    {
      img: facebookSvg,
    },
    {
      img: linkedinSvg,
    },
    {
      img: pinterestSvg,
    },
    {
      img: emailSvg,
    },
  ];
  return (
    <footer className='footer'>
      {images.map((image, id) => (
        <FooterCard key={id} img={image.img} />
      ))}

      <div className='personal-contact phone'>
        <h4>Phone: 123456789</h4>
      </div>

      <div className='personal-contact email-personal-contact'>
        <h4>Email: someoe@gmail.com</h4>
      </div>

      <div className='company-information'>
        <h3>XXXX</h3>
        <h4>Copyright &copy; 2022</h4>
        <h4>CA</h4>
      </div>
      <div className='home-footer'>
        <h4>
          <a href='#'>Home</a>
        </h4>
      </div>

      <div className='portfolio-footer'>
        <h4>
          <a href='#'>Portfolio</a>
        </h4>
        <ul>
          <li>
            <a href='#'>Project1</a>
          </li>
          <li>
            <a href='#'>Project2</a>
          </li>
          <li>
            <a href='#'>Project3</a>
          </li>
          <li>
            <a href='#'>See All</a>
          </li>
        </ul>
      </div>

      <div className='resume-footer'>
        <h4>
          <a href='#'>Resume</a>
        </h4>
        <ul>
          <li>
            <a href='#'>Download</a>
          </li>
        </ul>
      </div>
      <div className='contact-footer'>
        <h4>
          <a href='#'>Contact</a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
