import React from "react";
import { connect } from "react-redux";
import Link from "../Components/Link";

function mapStateToProps(state) {
  return {
    bgInfo: state.bgInfo
  }
}

function Credits(props) {
  const { bgInfo } = props;

  return (
    <div style={{ padding: "10px" }}>
      &copy; Tessa Peterson 2020<br />
        Built in React<br />
      <Link href={bgInfo.url}>Randomly generated desktop background</Link> by <Link href={bgInfo.author.url}>{bgInfo.author.name}</Link> on <Link href="https://unsplash.com/">Unsplash</Link>
    </div>
  );
}

export default connect(mapStateToProps)(Credits);