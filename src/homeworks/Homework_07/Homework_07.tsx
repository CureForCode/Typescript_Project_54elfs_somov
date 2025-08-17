import { useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
import "./styles.css";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const handleLike = () => setLike((prev) => prev + 3);       // В исходном файле Feedback.jsx из репозитория было три setLike подряд
  const handleDislike = () => setDislike((prev) => prev + 1);
  const handleReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="homework07_wrapper">
      <h1>Homework 07: Feedback</h1>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={handleLike}
        onDislike={handleDislike}
        onReset={handleReset}
      />
    </div>
  );
}

export default Homework_07;