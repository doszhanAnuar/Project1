import React from "react";
import { Link } from "react-router-dom";
import { persons } from "../../data/personaj";
import { BasicChips } from "./BasicChips";

export const People = () => {
  return (
    <>
      <div className="main-container">
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "rgb(248, 242, 242)",
          }}
        >
          <div
            style={{
              width: "19%",
            }}
          >
            <div>
              <div className="nav-words">Actor</div>
            </div>
          </div>
          <div
            style={{
              width: "1%",
            }}
          ></div>
          <div
            style={{
              width: "80%",
            }}
            className="main-child-inf"
          >
            {persons.map((person) => (
              <div key={person.name} className="first-div">
                <Link to={`/person/${person.name}`}>
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
