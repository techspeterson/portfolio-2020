import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Projects.module.css";
import Link from "../Components/Link";
import projects from "./projectList";
import CaptionedImage from "../Components/CaptionedImage";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

class Projects extends React.Component {
  state = {
    activeTab: "werewolf"
  }

  switchTab = (tab) => (event) => {
    this.setState({ activeTab: tab });
  }

  tabStyle = (tab) => {
    const { palette } = this.props;

    if (tab === this.state.activeTab) {
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

  renderTab = () => {
    const { activeTab } = this.state;
    const project = projects.find(project => project.id === activeTab)
    return <div className={styles.content}>
      {project.image && <CaptionedImage image={project.image} caption={project.name} />}
      {project.tabContent}
      <div className={styles.links}>
        {project.site && <Link href={project.site}>View site <FontAwesomeIcon icon="external-link-square-alt" /></Link>}
        {project.repo && <Link href={project.repo}>View GitHub repository <FontAwesomeIcon icon="external-link-square-alt" /></Link>}
      </div>
    </div>
  }

  renderList = () => {
    return projects.map(project => {
      return <li onClick={this.switchTab(project.id)} style={this.tabStyle(project.id)}>
        {project.name}
      </li>
    })
  }

  render() {
    const { palette } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.topBar} style={{ color: palette.darkVibrant, borderColor: palette.vibrant }}>
          <FontAwesomeIcon icon="reply" />
          <FontAwesomeIcon icon="reply-all" />
          <FontAwesomeIcon icon="reply" flip="horizontal" />
          <FontAwesomeIcon icon="times" className={styles.greyedOut} />
          <FontAwesomeIcon icon="trash-alt" className={styles.greyedOut} />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="print" />
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.list} style={{ borderColor: palette.vibrant }}>
            <ul>
              {this.renderList()}
            </ul>
          </div>
          {this.renderTab()}
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(Projects);