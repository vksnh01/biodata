import React, { useEffect } from "react";
import profilePhoto from "../IMG/29772405754.png";
import { FaFileDownload } from "react-icons/fa";
import dwn from "../IMG/VikrantSharmaResumeUpdate.pdf";

function Home() {
  const date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let greet = "";
  console.log(hrs);
  // hrs > 12 ? (hrs -= 12) : (hrs = hrs);
  if (hrs > 0 && hrs < 12) {
    greet = "good morning";
  } else if (hrs >= 12 && hrs <= 16) {
    greet = "good Afternoon";
  } else {
    greet = "good Evening";
  }

  return (
    <div className="home-main-div">
      <div className="download-section">
        <a href={dwn} target="_blank" download>
          <FaFileDownload className="down" />
        </a>
      </div>
      <div className="left-section same">
        <img src={profilePhoto} alt="profile Photo" />
      </div>
      <div className="right-section same">
        <p>
          <span>
            <strong style={{"fontSize":"24px"}}>{greet} Guys, </strong> My name is Vikrant Sharma. I'm
            belongs to Uttar Pardesh Saharanpur. I have completed my graduation
            from CCSU and now pursuing PG from Uttrakhand Technical University
            Dehradun.
          </span>
          I'm preparing for a better developer.
          <br />I am confident that I will definitely become a good employee in
          the future and will give my full contributionto improve my
          organization and To work in an organization where I can learn and
          nuture my skills for the betterment of the organization as well as
          myself
        </p>
      </div>
    </div>
  );
}

export default Home;
