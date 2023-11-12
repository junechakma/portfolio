import { Fragment, useEffect, useState } from "react";
import { filter_hashtag } from "../utilits";
import Counter from "./Counter";

const counts = [
  { name: "Trainings", value: 219 },
  { name: "Written Book", value: 48 },
  { name: "Listeners", value: 527 },
  { name: "Own Projects", value: 12 },
];

const skills = [
  { name: "Strategic Planning", value: 90, icon: "img/svg/figma.svg" },
  { name: "Strategic Vision", value: "80", icon: "img/svg/Ae.svg" },
  { name: "Critical Thinking", value: "85", icon: "img/svg/photoshop.svg" },
  { name: "Interpersonal Communication", value: "95", icon: "img/svg/Xd.svg" },
  { name: "Authenticity", value: "90", icon: "img/svg/illustrator.svg" },
];

const experiences = [
  {
    company: "London Borough of Tower Hamlets",
    designation: "Principal/Head of Idea Store ",
    time: "Aug 2022 - Present",
  },
  {
    company: "Idea Store",
    designation: "Programme Area Manager",
    time: "Jul 2010 - Jul 2022 ",
  },
  
  {
    company: "Leeds City College",
    designation: "Head of CentreHead of Centre",
    time: "Sep 2001 - Jul 2010",
  },
];

const educations = [
  {
    institution: "Leeds Beckett University",
    certificate: "B.A. (Hons) Management Administration",
    time: "1993 -1999 ",
  },
  {
    institution: "University of Leeds",
    certificate: "Education, Adult and Continuing Education and Teaching",
    time: "1992 - 1994",
  },
  {
    institution: "National Youth AgencyNational Youth Agency",
    certificate: "Youth & Community Work, Youth & Community",
    time: "1992 - 1994",
  },
  
  
];


const ExpertAreas = () => {
  const [activeTab, setActiveTab] = useState(1);
  const activeContentTab = (value) => (activeTab == value ? "current" : "");

  useEffect(() => {
    filter_hashtag();
  }, [activeTab]);

  return (
    <Fragment>
      <div className="orido_tm_section">
        <div className="orido_tm_informations">
          <div className="container">
            <div className="informations_inner">
              <div className="left">
                <div className="orido_tm_main_title">
                  <h3>
                    <span>
                      My expert
                      <br />
                      areas
                    </span>
                  </h3>
                </div>
                <div className="text">
                  <p>
                  With a wealth of experience in Further Education, I specialize in leadership and management, particularly in Information and Communications Technologies. Recognized with an MBE for my contributions, I've led successful OFSTED inspections and received the "Inspiring Leader" award in 2023.Proficient in international strategy development, I've collaborated with organizations like the British Council."
                  </p>
                  <p>
                   Beyond education, I'm passionate about global humanitarian causes, exemplified by my project "JustSmiles.
                  </p>
                </div>
                {/* <div className="orido_tm_boxed_button">
                  <a href="#">
                    My Resume{" "}
                    <img className="svg" src="img/svg/paper.svg" alt="" />
                  </a>
                </div> */}
              </div>
              <div className="right">
                <div className="filter">
                  <ul>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(1)}`}
                        onClick={() => setActiveTab(1)}
                        data-tab="tab_1"
                      >
                        <span>Skills</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(2)}`}
                        onClick={() => setActiveTab(2)}
                        data-tab="tab_2"
                      >
                        <span>Experience</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        className={`c-pointer ${activeContentTab(3)}`}
                        onClick={() => setActiveTab(3)}
                        data-tab="tab_3"
                      >
                        <span>Education</span>{" "}
                        <img
                          className="svg"
                          src="img/svg/top-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                  <span className="ccc" />
                </div>
                <div className="content">
                  <div id="tab_1" className={`wrapper ${activeContentTab(1)}`}>
                    <div className="skillbox">
                      <ul>
                        {skills.map((skill, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <span className="icon">
                                <span className="in">
                                  <img
                                    className="svg"
                                    src={skill.icon}
                                    alt=""
                                  />
                                </span>
                              </span>
                              <p className="name">
                                {skill.name} <span>({skill.value}%)</span>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_2" className={`wrapper ${activeContentTab(2)}`}>
                    <div className="timelinebox">
                      <ul>
                        {experiences.map((experience, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{experience.time}</span>
                                <span className="company">
                                  {experience.company}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{experience.designation}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div id="tab_3" className={`wrapper ${activeContentTab(3)}`}>
                    <div className="timelinebox">
                      <ul>
                        {educations.map((education, i) => (
                          <li key={i}>
                            <div className="list_inner">
                              <div className="time">
                                <span className="year">{education.time}</span>
                                <span className="company">
                                  {education.institution}
                                </span>
                              </div>
                              <div className="job">
                                <h3>
                                  <span>{education.certificate}</span>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /INFORMATIONS */}
      {/* COUNTER */}
      {/* <div className="orido_tm_section">
        <div className="orido_tm_counter">
          <div className="container">
            <div className="counter_list">
              <ul>
                {counts.map((count, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <h3>
                        <Counter end={count.value} />
                      </h3>
                      <span className="title">{count.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
export default ExpertAreas;
