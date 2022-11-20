import "./TimeLine.css";

function TimeLine() {
  const timeLineCommonClassName = "time-line__strip";
  const TIME_LINE_BLOCKS_DATA = [
    {
      uniqueStripClass: "time-line__strip_type_contrast",
      inlineText: "1 неделя",
      capture: "Back-end",
      id: 1,
    },
    {
      uniqueStripClass: "time-line__strip_type_smoothed",
      inlineText: "4 недели",
      capture: "Front-end",
      id: 2,
    },
  ];

  const timeLineBlocksMarkup = TIME_LINE_BLOCKS_DATA.map((item) => (
    <div key={item.id}>
      <div className={`${timeLineCommonClassName} ${item.uniqueStripClass}`}>
        <p  className="time-line__text">
          {item.inlineText}
        </p>
      </div>
      <p className="time-line__text time-line__text_type_capture">
        {item.capture}
      </p>
    </div>
  ));

  return <section className="time-line">{timeLineBlocksMarkup}</section>;
}

export default TimeLine;
