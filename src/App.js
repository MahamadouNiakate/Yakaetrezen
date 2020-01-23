import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PremierePage from "./containers/PremierePage";
import Presentation from "./containers/Presentation";
import Qui from "./containers/Qui";
import Coach from "./containers/Coach";
import Video from "./containers/Video";
import Formation from "./containers/Formation";
import Lecture from "./containers/Lecture";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Contact from "./containers/Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
        <div>
          <Route exact path="/" component={PremierePage} />
          <Route exact path="/presentation" component={Presentation} />
          <Route path="/qui" component={Qui} />

          <Route path="/coach" component={Coach} />

          <Route path="/video" component={Video} />

          <Route path="/formation" component={Formation} />

          <Route path="/lecture" component={Lecture} />
          <Route path="/contact" component={Contact} />
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
