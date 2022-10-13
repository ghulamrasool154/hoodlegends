import React, { useEffect, useState } from "react";
import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t5.png";
import t6 from "../../assets/images/t6.png";
import t7 from "../../assets/images/t7.png";
import t8 from "../../assets/images/t8.png";
import t9 from "../../assets/images/t9.png";
import "./SectionTeam.css";
const SectionTeam = () => {
  const teamApi = [
    {
      id: 1,
      name: "Haris Hussain",
      desc: "Highly knowledgeable with both traditional businesses and blockchain ecosystems. Successful track record in start-up and experienced in marketing, e-commerce, distribution as well as creative direction.",
      designation: "FOUNDER & CEO",
      linkedUrl: "https://www.linkedin.com/in/qazi-haris-hussain/",
      img: t1,
    },
    {
      id: 2,
      name: "Babar Ali",
      desc: "Top of his class and successful in many startups, Babar possesses skills in blockchain and business development. He is a master of growth, strategic connections and international expansion.",
      designation: "CO-FOUNDER",
      linkedUrl: "https://www.linkedin.com/in/babar110/",
      img: t2,
    },
    {
      id: 3,
      name: "Aslihan Sarigül",
      desc: "Gifted in terms of creative thinking and has the ability brew up great ideas on her feet. Experienced with broad fields of study in arts and sociology with experience in photography, design and illustration.",
      designation: "CONCEPT DEVELOPER",
      linkedUrl: "https://www.linkedin.com/in/asl%C4%B1han-s-109569109/",
      img: t3,
    },
    {
      id: 4,
      name: "David Tunold",
      desc: "Experienced with sales and management and an aspiring musician with an original style of his own. David is skilled in building connections and has an eye to seek out talent.",
      designation: "TALENT MANAGER",
      linkedUrl: "https://www.linkedin.com/in/david-tunold-a5b362225/",
      img: t4,
    },
    {
      id: 5,
      name: "Mohsin Bashir",
      desc: "Accounting, finance and research, Mohsin is power packed with skills. He is a master of bookkeeping and is always trying to explore and learn new ways to improve his talent.",
      designation: "ACCOUNTS & FINANCE",
      linkedUrl: "https://www.linkedin.com/in/mohsin-bashir/",
      img: t5,
    },
    {
      id: 6,
      name: "James Ooi",
      desc: "James is very social and enthusiastic about crypto and blockchain technology. He loves to talk about new ideas to be able to connect with the community and has a keen interest in the future of metaverse",
      designation: "COMMUNITY MANAGER",
      linkedUrl: "https://www.linkedin.com/in/james-ooi-1bb677177/",
      img: t6,
    },
    {
      id: 7,
      name: "Shruti Kohli",
      desc: "Passionate and enthusiast aptly define her. She has an extensive experience in the telecom and digital sector addressing tax, regulatory and business structure issues. She loves the emerging world of crypto.",
      designation: "PARTNERSHIP ADVISOR",
      linkedUrl: "https://www.linkedin.com/in/shruti-kohli-35377b52/",
      img: t7,
    },
    {
      id: 8,
      name: "Karin Veri",
      desc: "Passionate about all things digital and their social-political impact on the civil society. She is also an experienced arts and theatre producer, with a vast international network of artists and creators.",
      designation: "PARTNERSHIP ADVISOR",
      linkedUrl: "https://www.linkedin.com/in/karinaverigina/",
      img: t8,
    },
    {
      id: 9,
      name: "Valerie Leroy",
      desc: "She has great industry insight and a problem-solving approach. Valerie has leadership skills and knows how to get the job done. Her skills and talent make her prepared to deal with any outcome on her feet.",
      designation: "BUSINESS ADVISOR",
      linkedUrl: "https://www.linkedin.com/in/leroyvalerie/",
      img: t9,
    },
  ];

  const [teamPopup, setTeamPop] = useState(false);
  const [popTeamData, setPopTeamData] = useState({});
  const [oneDataShow, setoneDataShow] = useState();
  const [onClass, setOneClass] = useState(false);

  let classADD = `section4item2`;
  const handlePop = (element) => {
    let oneDataShow = teamApi.find((oneitem) => oneitem.id === element);
    setPopTeamData(oneDataShow);
    setTeamPop(!teamPopup);
    let traget = document.getElementsByClassName("section4item2");
    // console.log(traget);
    // if (oneDataShow) {
    //   //   //setOneClass(!onClass);
    // }

    classADD += `${oneDataShow.id}`;

    traget += classADD;
    console.log(classADD);
    // {`section4item2  teamno${element.id}

    if (teamPopup) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  useEffect(() => {
    let oneDataShow = teamApi[0];
    setPopTeamData(oneDataShow);
  }, []);
  return (
    <>
      <div className="section section4">
        <div className="sectionWrapper">
          <div className="sectionSmallTitle">MEET THE TEAM</div>
          <div className="sectionBigTitle">Ready to change the world</div>
          <div className="section3text">
            A super diverse team of talented people known to get things done. We
            have people from all around the globe with a common goal, to make
            Web 3.0 accessible to all.
          </div>

          <div className="section4itemsWrapper web__view ">
            {teamApi.map((element) => {
              return (
                <span key={element.id}>
                  <div
                    className={`section4item2  ${classADD}`}
                    key={element.id}
                    onClick={() => handlePop(element.id)}
                  >
                    <div className="section4itemImage section4itemImage4">
                      <img alt="" src={element.img} />
                    </div>
                    <div className="section4itemName">{element.name}</div>
                    <div className="section4itemHint">
                      {element.designation}
                    </div>
                  </div>
                  {element.id === 4 ? <br /> : null}
                </span>
              );
            })}

            {teamPopup && (
              <React.Fragment>
                {/* <div class="__popup__bg__position __popup__bg__gradient"></div> */}
                <div className={"teamOverlay"}>
                  <div className="teamOverlayOuter">
                    <div className="teamOverlayModal">
                      <div
                        className="teamOverlayModalCross"
                        onClick={handlePop}
                      >
                        <i class="fa-solid fa-x"></i>
                      </div>
                      <div className="teamOverlayModalLeft">
                        <img alt="" src={popTeamData.img} />
                      </div>
                      <div className="teamOverlayModalRight">
                        <div className="teamOverlayModalRight1">
                          {popTeamData.name}
                        </div>
                        <div className="teamOverlayModalRight2">
                          {popTeamData.designation}
                        </div>
                        <div className="teamOverlayModalRight3">
                          {popTeamData.desc}
                        </div>
                        <a
                          target="_blank"
                          href={popTeamData.linkedUrl}
                          className="teamOverlayModalRight4"
                          rel="noopener noreferrer"
                        >
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTeam;
