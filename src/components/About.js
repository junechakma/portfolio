const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h3 className="year">20</h3>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Faruk Miah </h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
              "With a distinguished career in Further Education, I am an MBE-awarded ICT lecturer and education leader. My expertise extends to improving academic standards, leading OFSTED inspections, and fostering a culture of ambition. Internationally, I've developed strategies in South Asia and the Middle East, collaborating with prestigious organizations. Recognized for contributions, I received the 'Inspiring Leader' award from the London Borough of Tower Hamlets Council in 2023."
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="img/cv/1.jpg" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
              <img src="img/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
