import GlobalStyles from "styles/GlobalStyles";

// Lessons
//import Lesson_06 from "lessons/Lesson_06/Lesson_06";
//import Lesson_07 from "lessons/Lesson_07/Lesson_07";
//import Lesson_08 from "lessons/Lesson_08/Lesson_08";
//import Lesson_09 from "lessons/Lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";

// Homeworks
//import Homework_06 from "homeworks/Homework_06/Homework_06";
//import Homework_08 from "homeworks/Homework_08/Homework_08";
//import Homework_09 from "homeworks/Homework_09/Homework_09";

import "./App.css";



function App() {
  return (
    <div className="app">
      <GlobalStyles />
      {/* Lessons */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/*<Lesson_08 /> */}
      {/*<Lesson_09 /> */}
      <Lesson_10 /> 
      {/* Homeworks */}
      {/*<Homework_08 />*/}
      {/* <Homework_09 /> */}
    </div>
  );
}

export default App;
