import React, { useEffect, useState } from "react";
import UserSummary from "./UserSummary";
import "./User.css";

export const User = () => {
  const [userData, setUserData] = useState([]);
  const [isNavigate, setIsNAvigate] = useState(false);
  useEffect(() => {
    getUserInfo();
  }, []);

  const navigateToSecondScreen = () => {
    setIsNAvigate(true);
  };

  const getUserInfo = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();

    const loadedData = [];

    data.map((user) => {
      loadedData.push({
        score: user.score,
        name: user.show.name,
        summary: user.show.summary,
      });
    });

    setUserData(loadedData);
  };

  return (
    <ul>
      {userData.map((user) => {
        return (
          <>
            <main className="main_div">
              {!isNavigate && (
                <ul>
                  <h1>Name: - {user.name}</h1>
                  <ul className="list_data">
                    <p>Score {user.score} </p>
                    <button className="btn" onClick={navigateToSecondScreen}>
                      Show
                    </button>
                  </ul>
                </ul>
              )}
            </main>
            <main>{isNavigate && <UserSummary></UserSummary>}</main>
          </>
        );
      })}
    </ul>
  );
};

export default User;
