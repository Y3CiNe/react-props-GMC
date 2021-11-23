import React, { Component } from "react";
import "./App.css";
import User from "./profile/components/Profile";
import Myimage from "./profile/img.jpg";
const user = {
  fullName: "Yacine Ben Hmida",
  bio:
    "Yacine Ben Hmida : Born in 1998 in Tunisia , Yacine has been a computer genius from a young age, designing his first programs as a teenager. At 18, he entered the prestigious Harvard University, and it was there, in 2004, that he created the website The Facebook.",
  profession: "Developer",
  image: Myimage,
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <User x={user} />
      </div>
    );
  }
}
export default App;


