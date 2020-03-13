import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Contact.module.css";
import Link from "../Components/Link";
import ContactForm from "./ContactForm";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

class Contact extends React.Component {
  state = {
    activeTab: "email"
  }

  switchTab = (tab) => (event) => {
    this.setState({ activeTab: tab });
  }

  renderTab = () => {
    let tabContent;
    const { palette } = this.props;

    switch (this.state.activeTab) {
      case "email":
        tabContent = <div>
          <ContactForm />
        </div>
        break;
      case "links":
        tabContent = <ul className={styles.links}>
          <li><FontAwesomeIcon icon={["fab", "github"]} color={palette.darkVibrant} className={styles.linkIcon} /> <Link href="https://github.com/techspeterson" target="_blank">GitHub: techspeterson</Link></li>
          <li><FontAwesomeIcon icon={["fab", "linkedin"]} color={palette.darkVibrant} className={styles.linkIcon} /> <Link href="https://www.linkedin.com/in/tessa-peterson-3437b2125/" target="_blank">Tessa Peterson on LinkedIn</Link></li>
        </ul>
        break;
      case "twitter":
        tabContent = <TwitterTimelineEmbed
          sourceType="profile"
          screenName="techspeterson"
          borderColor={palette.vibrant}
          linkColor={palette.darkVibrant}
          options={{ tweetLimit: 20 }}
          placeholder={<FontAwesomeIcon icon="atom" color={palette.vibrant} spin />}
        />
        break;
      default:
        break;
    }

    return tabContent;
  }

  render() {
    const { palette } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.list} style={{ borderColor: palette.vibrant }}>
          <ul>
            <li onClick={this.switchTab("email")}>
              <FontAwesomeIcon icon="envelope" className={styles.listIcon} />
              Compose Email
              </li>
            <li onClick={this.switchTab("links")}>
              <FontAwesomeIcon icon="external-link-square-alt" className={styles.listIcon} />
              Links</li>
            <li onClick={this.switchTab("twitter")}>
              <FontAwesomeIcon icon={["fab", "twitter"]} className={styles.listIcon} />
              Twitter</li>
          </ul>
        </div>
        <div className={styles.content}>
          {this.renderTab()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Contact);