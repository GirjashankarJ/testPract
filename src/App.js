import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CatFact from "./Pages/CatFact/CatFact";
import LoginPrac from "./Pages/Login/LoginPrac";
// import LoginPrac from "./LoginPrac";
import Mypost from "./Pages/PostList/Components/Mypost";
import PostListPract from "./Pages/PostList/PostListPract";
// import Rating from "./Rating";
import MyButton from "./Shared/Components/MyButton";
// import RatingWithClick from "./RatingWithClick";
// import Girja from "./Girja.js";
// import Test from "./Test.js";
// import CounterPrac from "./CounterPrac";
// import ButtonContainerPrac from "./ButtonContainerPrac";
// import PostListPract from "./PostListPract";
// import MyFormPrac from "./MyFormPrac";
// import ButtonsWithformPrac from "./ButtonsWithformPrac";
// import CatFact from "./CatFact";
// import APISquareCalculator from "./APISquareCalculator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts" element={<PostListPract />} />
        <Route path="/login" element={<LoginPrac />} />
        <Route path="/cat-fact" element={<CatFact />} />
        <Route path="/articles" element={<Navigate to={"/login"} />} />

        <Route path="/" element={<Navigate to={"/login"} />} />
      </Routes>
      {/* <LoginPrac /> */}

      {/* <PostListPract /> */}
      {/* <APISquareCalculator /> */}
      {/* <CatFact /> */}
      {/* <ButtonsWithformPrac />
      
      <MyFormPrac />
      <PostListPract />
      <MyButton label="Next" />
      <CounterPrac limit="8" />
      <ButtonContainerPrac />
      <Rating type="1" />
      <hr />
      <Rating type="2" />
      <hr />
      <Rating type="3" />
      <hr />
      <MyButton label="Home" type="active" />
      <MyButton label="New Post" />
      <RatingWithClick />
      <RatingWithClick />
      <RatingWithClick />
      <RatingWithClick />

      <Girja heading="I am 17 years old" body="Teacher" />
      <Test type="1" />
      <Test type="2" />
      <Girja heading="I am 58 years old" body="Student" /> */}
    </div>
  );
}

export default App;
