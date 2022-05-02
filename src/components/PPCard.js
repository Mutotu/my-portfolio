const PPCard = (props) => {
  return (
    <div className={`${props.url}`}>
      <h3>{props.title}</h3>
      <p>{props.story}</p>

      <div className='project-more-info'>
        <a className='btn btn-default btn-border' href='#'>
          More
        </a>
      </div>
    </div>
  );
};

export default PPCard;
