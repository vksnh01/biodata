import React, { useEffect } from "react";
import profilePhoto from "../IMG/29772405754.png";
function Home() {
  const date = new Date();
  let hrs = date.getHours();
  let greet = "";
  // hrs > 12 ? (hrs -= 12) : (hrs = hrs);
  if (hrs > 0 && hrs <= 12) {
    greet = "good morning";
  } else if (hrs > 12 && hrs <= 16) {
    greet = "good Afternoon";
  } else {
    greet = "good Evening";
  }

  return (
    <div className="home-main-div">
      <div className="left-section same">
        <img src={profilePhoto} alt="profile Photo" />
      </div>
      <div className="right-section same">
        <p>
          <strong>{greet} Guys, </strong> my name is Vikrant sharma.I am belongs
          to saharanpur uttar pradesh.I have complete my bachlor's degree from
          ccsu university.now i'm pursuing in PG course. I'm preparing for a
          better developer.
          <br />I am confident that I will definitely become a good employee in
          the future and will give my full contributionto improve my organization and To work in an organization where I can learn and nuture my skills for the betterment of the organization as well as myself
        </p>
      </div>
    </div>
  );
}

export default Home;
