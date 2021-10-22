import React, { useEffect, useState } from "react";

export const UserSummary = (props) => {
  const [summaryData, setSummaryData] = useState([]);
  useEffect(() => {
    getUserInfo();
  }, []);

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

    setSummaryData(loadedData);
  };

  return (
    <ul>
      {summaryData.map((daata) => {
        return (
          <div>
            <header>
              <button style={{ padding: 20, margin: 20 }}>Book a ticket</button>
            </header>
            <h1 style={{ margin: 20 }}>{daata.summary}</h1>
          </div>
        );
      })}
    </ul>
  );
};

export default UserSummary;
