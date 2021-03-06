import React, { useState } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Contact.module.css";
import Link from "../Components/Link";
import ListItem from "../Components/ListItem";
import ContactForm from "./ContactForm";
import resume from "../../assets/Tessa Peterson - Resume.pdf"

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function Contact(props) {
  const [activeTab, setActiveTab] = useState("email");
  const { palette } = props;

  const switchTab = (tab) => () => {
    setActiveTab(tab);
  }

  const tabStyle = (tab) => {
    if (tab === activeTab) {
      return {
        color: palette.darkVibrant,
        fontWeight: "bold",
        background: palette.lightVibrant
      }
    }
    else {
      return {
        color: palette.vibrant
      }
    }
  }

  const renderTab = () => {
    let tabContent;

    switch (activeTab) {
      case "email":
        tabContent = <div>
          <ContactForm />
        </div>
        break;
      case "links":
        tabContent = <ul className={styles.links}>
          <li><FontAwesomeIcon icon={["fab", "github"]} color={palette.darkVibrant} className={styles.linkIcon} /> <Link href="https://github.com/techspeterson" target="_blank">GitHub: techspeterson</Link></li>
          <li><FontAwesomeIcon icon={["fab", "linkedin"]} color={palette.darkVibrant} className={styles.linkIcon} /> <Link href="https://www.linkedin.com/in/tessa-peterson-3437b2125/" target="_blank">Tessa Peterson on LinkedIn</Link></li>
          <li><FontAwesomeIcon icon={["fab", "twitter"]} color={palette.darkVibrant} className={styles.linkIcon} /> <Link href="https://twitter.com/techspeterson" target="_blank">Twitter: @techspeterson</Link></li>
        </ul>
        break;
      case "twitter":
        tabContent = <div className={styles.contentBottom}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="techspeterson"
            borderColor={palette.vibrant}
            linkColor={palette.darkVibrant}
            options={{ tweetLimit: 20 }}
            placeholder={<FontAwesomeIcon icon="atom" color={palette.vibrant} className={styles.spinner} spin />}
          />
        </div>
        break;
      case "resume":
        tabContent = <ul className={styles.links}>
          <li><FontAwesomeIcon icon="file-code" color={palette.darkVibrant} className={styles.linkIcon} /> <Link href="https://techspeterson-resume.netlify.app/" target="_blank">Web version</Link></li>
          <li><FontAwesomeIcon icon="file-pdf" color={palette.darkVibrant} className={styles.linkIcon} /> <Link href={resume} target="_blank">PDF version</Link></li>
        </ul>
        break;
      default:
        break;
    }

    return tabContent;
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <ul>
          <ListItem onClick={switchTab("email")} style={tabStyle("email")}>
            <FontAwesomeIcon icon="envelope" className={styles.listIcon} />
              Compose Email
              </ListItem>
          <ListItem onClick={switchTab("links")} style={tabStyle("links")}>
            <FontAwesomeIcon icon="external-link-square-alt" className={styles.listIcon} />
              Links</ListItem>
          <ListItem onClick={switchTab("resume")} style={tabStyle("resume")}>
            <FontAwesomeIcon icon="file-alt" className={styles.listIcon} />
              Resume</ListItem>
          {/* <ListItem onClick={this.switchTab("twitter")} style={this.tabStyle("twitter")}>
              <FontAwesomeIcon icon={["fab", "twitter"]} className={styles.listIcon} />
              Twitter</ListItem> */}
        </ul>
      </div>
      <div className={styles.content} style={{ borderColor: palette.vibrant }}>
        <div className={styles.topBar} style={{ color: palette.darkVibrant, borderColor: palette.vibrant }}>
          <FontAwesomeIcon icon="reply" />
          <FontAwesomeIcon icon="reply-all" />
          <FontAwesomeIcon icon="reply" flip="horizontal" />
          <FontAwesomeIcon icon="times" className={styles.greyedOut} />
          <FontAwesomeIcon icon="trash-alt" className={styles.greyedOut} />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="print" />
        </div>
        {renderTab()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Contact);