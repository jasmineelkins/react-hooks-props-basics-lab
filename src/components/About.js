import React from "react";
import user from "../data/user";
import Links from "./Links";

function checkForBio(prop) {
  if (prop) {
    return <p>{prop}</p>;
  } else {
    return null;
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkForBio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
