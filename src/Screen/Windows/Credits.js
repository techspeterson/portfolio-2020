import React from "react";
import { connect } from "react-redux";
import Window from "../Window/Window";
import Link from "../Components/Link";

function mapStateToProps(state) {
  return {
    bgInfo: state.bgInfo
  }
}

class Credits extends React.Component {
  render() {
    const { bgInfo } = this.props;

    return (
      <Window title={this.props.title} style={{ width: "60%", height: "unset" }}>
        &copy; Tessa Peterson 2020<br />
        Built in React<br />
        Randomly generated desktop background by <Link href={bgInfo.url}>{bgInfo.author}</Link> on <Link href="https://unsplash.com/">Unsplash</Link>
      </Window>
    );
  }
}

export default connect(mapStateToProps)(Credits);