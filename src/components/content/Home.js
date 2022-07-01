import { useState } from "react";
import { persons } from "../../data/personaj";
import { BasicChips } from "./BasicChips";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="a d-flex flex-row justify-content-between"
      >
        <div className="a-child-text">
          <h1>
            Train like <span className="under">...</span>
          </h1>
          <h2>
            We spend countless hours on the internet looking for training
            programs and recommendations from people we look up to. Browse our
            ever-expanding database below.
            <strong>Don't waste your time searching, better go train.</strong>
          </h2>
        </div>
        <div className="a-child-img">
          {persons.slice(0, 16).map((person) => (
            <div key={person.name}>
              <img src={person.icon} className="first" />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="main-section"
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="main-child-text">Train like ...</div>
          <div className="main-child-inf">
            {persons.map((person) => (
              <div key={person.name} className="first-div">
                <Link to={`/person/${person.name}`.replace(/ /g, "")}>
                  <img src={person.icon} className="sec" />
                </Link>
                <div
                  key={person.id}
                  className="person-name d-flex justify-content-center"
                >
                  {person.name}
                </div>
                <div className="material-fix">
                  <BasicChips positions={person.position} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
