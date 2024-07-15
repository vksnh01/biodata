import React from "react";
import college from "../../IMG/utu.jpg";
import eduData from "./EducationData";

function Education() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(eduData);
  }, []);
  return (
    <div className="home-main-div">
      <div className="left-section">
        <img className="clg" src={college} alt="" />
      </div>
      <div className="education-section">
        <h1 className="title">Education - section</h1>
        {data.map((elem) => {
          return (
            <>
              <div className="education-card">
                <h2 className="tf">{elem.university}</h2>
                <h2 className="tt">{elem.status}</h2>
                <h3 className="tz">{elem.course}
                </h3>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
