import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/4.jpg"
            style={{ backgroundImage: 'url("img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>
            Faruk Miah MBE highly commended at Mayor of London’s Adult Learning Awards 2023</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Issued by Mayor of London (Greater London Authority)
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              Faruk Miah MBE, Head of Idea Store Learning at LBTH, was the winner of the highly commended award in the category of Inspirational Professional in Adult Education at last night’s Mayor of London’s Adult Learning Awards 2023. Idea Store Learning offers over 900 courses for residents of Tower Hamlets to improve their skills for employment or learn just for fun.

            </p>
            <p>
              The Mayor of London’s Adult Learning Awards aims to recognise inspirational Londoners and excellent London-based providers for their contributions to adult learning in the capital.
            </p>
            <p>
              Faruk Miah said "I am humbled and honoured to be recognised as one of the inspirational professionals in the Adult Education sector at the Mayor of London's Adult Learning Awards 2023.
            </p>
            <p>
              2023 has been a fantastic year, having overseen a very good OFSTED inspection at the beginning of the year, winning the Inspirational Leader at the LBTH staff awards in July and now this recognition makes me super happy and proud to realise that leaders at London Borough of Tower Hamlets Council and Greater London Authority recognise the work I have done over the past 12 months and believe in my vision and direction of travel for Idea Store Learning."
            </p>
            <p>
              The awards were established last year by the Mayor of London Sadiq Khan as part of his commitment to improve skills in London and the ‘Skills Roadmap for London’ strategy.
            </p>
            <p>
              A judging panel, made up of representatives from London’s skills sector including AELP chair Nicky Hay, City Lit principal Mark Malcomson, and last year’s award winner Ghazal Mottaghi, then met virtually in September to agree on the winners and highly commended finalists.
            </p>
            <p>
              The Mayor of London is responsible for the £320 million per year adult education budget for the capital after taking over in the devolved budget in 2019.
            </p>
            <p>
              aruk attended last nights awards ceremony at the new City Hall in Royal Docks along with Cllr Maium Talukdar, Deputy Mayor and Cabinet Member for Education, Youth and Lifelong Learning.
            </p>

          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Issued by </span>
                <span> Mayor of London</span>
              </li>
              <li>
                <span className="first">Associated with</span>
                <span>
                  <a href="#">London Borough of Tower Hamlets</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>Nov 2023</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/1.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/2.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/3.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;
