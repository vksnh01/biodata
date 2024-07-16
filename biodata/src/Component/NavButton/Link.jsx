import React from "react";
import ss1 from "../IMG/ss1.jpg";
import ss2 from "../IMG/ss2.jpg";
import ss3 from "../IMG/ss3.jpg";
import ss4 from "../IMG/ss4.jpg";

function Link() {
  return (
    <div className="link-main-div">
    <h1 className="title" style={{"margin":"20px 0px"}}>Projects Links</h1>
      <div className="link-card">
        <a href="https://helpinghandngo.netlify.app" target="_blank">
          <img src={ss1} alt="" />{" "}
        </a>
      </div>
      <div className="link-card">
        <a href="https://genraleventform.netlify.app/" target="_blank">
          <img src={ss2} alt="" />{" "}
        </a>
      </div>
      <div className="link-card">
        <a href="https://vikrantsharmagmv.netlify.app/" target="_blank">
          <img src={ss3} alt="" />{" "}
        </a>
      </div>
      <div className="link-card">
        <a href="https://main--deepakvikrantsharmabothproject.netlify.app/" target="_blank">
          <img src={ss4} alt="" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Link;
