import React from "react";
// import { Link } from "react-router-dom";
import { SignIn } from "./SignIn";
import { OnlineGameForm } from "./GameComponents";

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <SignIn />
        {/*<Link to="/local">*/}
        {/*  <button type="button">Start local game</button>*/}
        {/*</Link>*/}
        <OnlineGameForm
          joinOnlineGame={this.props.joinOnlineGame}
          createOnlineGame={this.props.createOnlineGame}
        />
        <div className="how-to-play">
            <marquee>Chào mừng đến với giải SiêuViệt Ao làng mở rộng lần thứ 1 ! =))</marquee>
        </div>
      </div>
    );
  }
}

export default Welcome;
