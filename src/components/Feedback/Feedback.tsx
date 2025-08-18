import Button from "../Button/Button";
import "./styles.css";

import {type FeedbackProps } from "./types";

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  onReset,
}: FeedbackProps) {
  return (
    <div className="feedback_wrapper">
      <div className="feedback_control">
        <div className="buttonwithcount_container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount_container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={onReset} />
    </div>
  );
}

export default Feedback;
