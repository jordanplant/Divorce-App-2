import React, {useState} from "react";
import "../styles/months.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";




function Months({appToMonths}) {
  const [data, setData] = useState('');

  let importData = appToMonths
  return (
    <div className="container">
      <div className="box">
      <p id="january">appToMonths</p>
      <p id="january">{appToMonths}</p>
      </div>

      <div className="box">
        <p id="january">January</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="february">February</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="march">March</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />  
        </div>
      </div>
      <div className="box">
        <p id="april">April</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="may">May</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="june">June</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="july">July</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="august">August</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="september">September</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="october">October</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="november">November</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
      <div className="box">
        <p id="december"> December</p>
        <div className="iconsContainer">
        <FontAwesomeIcon className="binIcon" icon={faTrashAlt} />
        <FontAwesomeIcon className="penIcon" icon={faPen} />
        </div>
      </div>
    </div>
  );
}
export default Months;
