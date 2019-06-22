import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import postsData from "../../../data-config/timeline.data.json";

//this function replaces dates with sentences which are later displayed.
const dateToText = (date, index) => {
  let localTitles = showData(postsData)[1];
  return localTitles[index];
};

const showData = data => {
  let localDates = [],
    localTitles = [];

  for (let i = 0; i < data["posts"].length; i++) {
    localDates.push(data["posts"][i].date);
    localTitles.push(data["posts"][i].title);
  }
  let titlesAndDates = [localDates, localTitles];
  return titlesAndDates;
};

export default props => {
  return (
    <HorizontalTimeline
      styles={{
        background: "#f5f5f5",
        foreground: "#4caf50",
        outline: "#dfdfdf"
      }}
      index={props.index}
      indexClick={props.indexClick}
      values={showData(postsData)[0]}
      getLabel={dateToText}
    />
  );
};
