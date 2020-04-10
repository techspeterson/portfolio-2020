import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactSVG } from 'react-svg'
import styles from "./Projects.module.css";
import Link from "../Components/Link";
import { H2, H3 } from "../Components/Headers"
import projects from "./projectList";
import FullsizeImage from "../Components/FullsizeImage";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function Projects(props) {
  // state = {
  //   activeTab: projects[0].id
  // }
  const [activeTab, setActiveTab] = useState(projects[0].id)
  const { palette } = props;

  const switchTab = (tab) => (event) => {
    // this.setState({ activeTab: tab });
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

  const renderTechIcons = (project) => {
    return (
      <div>
        {project.techs.map(tech => {
          if (tech.faicon) {
            return <FontAwesomeIcon icon={["fab", tech.faicon]} className={styles.icon} color={palette.vibrant} key={tech.faicon} title={tech.label} />
          }
          else {
            return <ReactSVG
              src={tech.svgicon}
              wrapper="span"
              beforeInjection={svg => {
                const path = svg.getElementsByTagName("path")[0]
                path.setAttribute("style", `fill: ${palette.vibrant}`);
                svg.classList.add(styles.iconSvg);
                svg.setAttribute("style", "height: 2em");
              }}
              className={styles.svgIcon}
              title={tech.label}
            />;
          }
        })}
      </div>
    )
  }

  const renderTab = () => {
    const project = projects.find(project => project.id === activeTab)
    return <div className={styles.content} style={{ borderColor: palette.vibrant }}>
      {project.image && <FullsizeImage image={project.image} thumb={project.thumb} alt={project.name} />}
      <H2>{project.name}</H2>
      <H3>{project.purpose}</H3>
      {renderTechIcons(project)}
      {project.tabContent}
      {project.site && <Link href={project.site}>View site <FontAwesomeIcon icon="external-link-square-alt" /></Link>}
      {project.repo && <Link href={project.repo}>GitHub repository <FontAwesomeIcon icon="external-link-square-alt" /></Link>}
    </div>
  }

  const renderList = () => {
    return projects.map(project => {
      return <li key={project.id} onClick={switchTab(project.id)} style={tabStyle(project.id)}>
        {project.name}
      </li>
    })
  }


  return (
    <div className={styles.container}>
      <div className={styles.topBar} style={{ color: palette.darkVibrant, borderColor: palette.vibrant }}>
        <FontAwesomeIcon icon="arrow-left" />
        <FontAwesomeIcon icon="arrow-right" />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.list}>
          <ul>
            {renderList()}
          </ul>
        </div>
        {renderTab()}
      </div>

    </div>
  );
}

export default connect(mapStateToProps)(Projects);