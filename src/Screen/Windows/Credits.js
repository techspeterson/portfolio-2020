import React from "react";
import { connect } from "react-redux";
import Window from "../Window/Window";

function mapStateToProps(state) {
  return {
    bgInfo: state.bgInfo,
    palette: state.palette
  }
}

class Credits extends React.Component {
  render() {
    const { bgInfo, palette } = this.props;

    return (
      <Window title={this.props.title}>
        &copy; Tessa Peterson 2020<br />
        Desktop background by <a href={bgInfo.url} style={{ color: palette.vibrant }}>{bgInfo.author}</a> on <a href="https://unsplash.com/" style={{ color: palette.vibrant }}>Unsplash</a> (randomly generated with <a href="https://picsum.photos/" style={{ color: palette.vibrant }}>Lorem Picsum</a>)
      </Window>
    );
  }
}

export default connect(mapStateToProps)(Credits);