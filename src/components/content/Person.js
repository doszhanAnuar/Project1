import React from "react";
import { useParams } from "react-router-dom";
import { BasicChips } from "../../components/content/BasicChips";

export const Person = ({ persons }) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="dop d-flex flex-row justify-content-between"
      >
        {persons.map((person) => (
          <>
            {params.id === person.name.replace(/ /g, "") && (
              <>
                {" "}
                <div key={person.name} className="img-part">
                  <img
                    src={person.icon}
                    className="dop-img"
                    style={{ borderRadius: 100 }}
                  />
                </div>
                <div className="word-part" style={{ paddingTop: 16 }}>
                  <h1 className="dop-h1">{person.name}</h1>
                  <div className="material-fix1">
                    <BasicChips positions={person.position} />
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </>
  );
};
