import React from "react";
import tech from "../IMG/technical.avif";
import { skillData } from "./Education/EducationData";

function Skill() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(skillData);
  }, []);
  return (
    <div className="home-main-div">
      <div className="left-section">
        <img className="tech-img" src={tech} alt="" />
      </div>
      <div className="skill-section">
        <h1 className="title">Technical Skills</h1>
        {data.map((elem, ind) => {
          return (
            <>
              <div className="education-card" key={elem.ind}>
                <h1 className="tf">{elem.title}</h1>
                <h2 className="tt">{elem.content}</h2>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
