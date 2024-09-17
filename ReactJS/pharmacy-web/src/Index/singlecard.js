let Singlecard = (props) => {
      return (
        <div className="card ">
            <div className="icons"> 
                <i className="fa-brands fa-square-facebook"></i>
                <i className="ms-2 fa-brands fa-square-instagram"></i>
                <i className="ms-2 fa-brands fa-youtube"></i>
            </div>
            <img src={props.data.src} alt="..."/>
            <div className="card-body p-2">
                <h5 className="card-title">{props.data.title} </h5>
                <p className="card-text">{props.data.description} </p>
            </div>
        </div>
      );
    }

export default Singlecard;