import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactSVG } from 'react-svg'

import styles from "./Projects.module.css";
import Link from "../Components/Link";
import { H2, H3 } from "../Components/Headers";
import ListItem from "../Components/ListItem";
import projects from "./projectList";
import FullsizeImage from "../Components/FullsizeImage";

function mapStateToProps(state) {
  return {
    palette: state.palette
  }
}

function Projects(props) {
  const [activeTab, setActiveTab] = useState(projects[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(projects);
  const { palette } = props;

  useEffect(() => {
    const st = searchTerm.toLowerCase()
    const filteredProjects = projects.filter(project => {
      return (project.name.toLowerCase().includes(st)
        || project.techs.some(tech => {
          return (tech.label.toLowerCase().includes(st)
            || tech.id.includes(st));
        }));
    });
    setSearchResults(filteredProjects);
    if (filteredProjects.length && !filteredProjects.find(project => project.id === activeTab)) {
      setActiveTab(filteredProjects[0].id)
    }
  }, [searchTerm, activeTab])

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

  const renderTechIcons = (project) => {
    return (
      <div>
        {project.techs.map(tech => {
          if (tech.faicon) {
            return <FontAwesomeIcon icon={["fab", tech.faicon]} className={styles.icon} color={palette.vibrant} key={tech.id} title={tech.label} />
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
              key={tech.id}
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
      <H3>{project.purpose} {project.institution ? "(" + project.institution + ")" : ""}</H3>
      {renderTechIcons(project)}
      {project.tabContent}
      <ul className={styles.links}>
        {project.site && <li><Link href={project.site} target="_blank">View site <FontAwesomeIcon icon="external-link-square-alt" /></Link></li>}
        {project.repo && <li><Link href={project.repo} target="_blank">GitHub repository <FontAwesomeIcon icon="external-link-square-alt" /></Link></li>}
      </ul>
    </div>
  }

  const renderList = () => {
    return searchResults.map(project => {
      return <ListItem key={project.id} onClick={switchTab(project.id)} style={tabStyle(project.id)}>
        {project.name}
      </ListItem>
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar} style={{ color: palette.darkVibrant, borderColor: palette.vibrant }}>
        <FontAwesomeIcon icon="arrow-left" />
        <FontAwesomeIcon icon="arrow-right" />
        <input
          type="text"
          value="C:\Users\techspeterson\Documents\Projects"
          style={{ color: palette.muted, borderColor: palette.darkVibrant, flexGrow: 1 }}
          className={styles.addressbox + " " + styles.textbox}
          readOnly
        />
        <div className={styles.searchbox}>
          <FontAwesomeIcon icon="search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search Projects"
            style={{ color: palette.muted, borderColor: palette.darkVibrant }}
            className={styles.searchboxInner + " " + styles.textbox}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

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