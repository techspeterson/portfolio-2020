import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

class Contact extends React.Component {
  render() {
    const { palette } = this.props;
    return (
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="techspeterson"
          borderColor={palette.vibrant}
          linkColor={palette.vibrant}
          options={{ tweetLimit: 20 }}
          placeholder={<FontAwesomeIcon icon="atom" color={palette.vibrant} spin />}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Contact);