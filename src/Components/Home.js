import React, { useEffect } from "react";
import Countdown from "react-countdown";

import "./Home.css";
import Img2 from "../Components/imgs/image1.gif";
import Img3 from "../Components/imgs/image2.gif";
import Img4 from "../Components/imgs/image3.gif";
import Img5 from "../Components/imgs/image4.gif";

import Imggif from "../Components/imgs/imageGif.gif";

import Mintbtn from "./mintbtn";

export default function Home() {
  const Completionist = () => <Mintbtn />;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span>
          <h3 className="BtnDiv text-center">
            {/* STARTING SOON <br /> */}
            <div className="row">
              <div className="col-6 col-sm-3">
                <h2>{days}</h2>
                <h6>DAYS</h6>
              </div>
              <div className="col-6 col-sm-3">
                <h2>{hours}</h2>
                <h6>HOURS</h6>
              </div>
              <div className="col-6 col-sm-3">
                <h2>{minutes}</h2>
                <h6>Minutes</h6>
              </div>
              <div className="col-6 col-sm-3">
                <h2>{seconds}</h2>
                <h6>SECONDS</h6>
              </div>
            </div>
          </h3>
        </span>
      );
    }
  };

  let i = 0;
  useEffect(() => {
    setInterval(function () {
      //   console.log(i);
      document.getElementsByClassName("Home")[0].style.backgroundPositionX =
        i + "px";
      i += 1;
    }, 30);
  });

  return (
    <div className="Home">
      <div className="container-fluid navbg">
        <nav className="navbar container navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h4 className="mb-0">Baby Doodle Apes</h4>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ">
                {/* <li className="nav-item">
                  <a className="nav-link NavBtn" aria-current="page" href="/">
                    Home
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link NavBtn" href="#About">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link NavBtn" href="#Roadmap">
                    Road Map
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link NavBtn" href="#Team">
                    Team
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link NavBtn" href="#FAQ">
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="social-buttons text-center">
                <span className="neo-button px-2">
                  <a href="https://discord.gg/babydoodleapes" target="_blank">
                    <i className="buttons fab fa-discord  NavBtn"></i>
                  </a>
                </span>
                <span className="neo-button px-2">
                  <a href="https://twitter.com/babydoodleapes" target="_blank">
                    <i className="fab fa-twitter NavBtn"></i>
                  </a>
                </span>
                <span className="neo-button px-2">
                  <a
                    href="https://www.instagram.com/babydoodleapes/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram NavBtn"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="container ">
        <div className="row  ">
          <div className="col-12 ">
            <img
              src={Img4}
              className="rounded mx-auto d-block Imgs"
              style={{ border: "none" }}
              alt="..."
            ></img>
            {/* <br /> */}
            {/* <button type="button" className="MainButton btn d-block mx-auto">
              Open Sea
            </button> */}
            {/* 
            <Countdown
              date={new Date(0).setUTCSeconds(1646395200)}
              renderer={renderer}
            /> */}
            <div className="BtnDiv">
              <a href="https://opensea.io/collection/babydoodleapesofficial">
                <h3 className="text-white text-center d-block w-100">
                  <small> SOLD OUT</small>
                  <br />
                  VIEW ON OPENSEA
                </h3>
              </a>
            </div>
            <br></br>
          </div>
        </div>
      </div>

      <div className="container">
        <a id="About"></a>
        <div className="row RowTwo py-5 align-items-center">
          <div className="col-12 col-md-6">
            <img className="mx-100 d-block  ImgBorder" src={Imggif}></img>
          </div>
          <div className="col-12 col-md-6">
            <h1>Baby Doodle Apes</h1>
            <p>
              Baby Doodle Apes supports artists, musicians, actors and writers
              to pursue their dreams, by providing a source of passive income.
            </p>
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,Roadmap>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="container py-5">
        <a id="Roadmap"></a>
        <h2 className="text-center pb-5 ">ROADMAP</h2>
        <div className="main-timeline">
          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-one icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Stage 1: A Creative Community</h5>
              <p className="description">
                Using our creative design style, we’ll be bringing together a
                community of people that are committed to the creative arts. Our
                first stage of development will look to bring together a group
                of people with similar values as ourselves, and use them to
                create a positive future for creatives. By bringing together a
                group of like-minded people, we want to encourage community-wide
                communication and networking
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-two icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Step 2: Mint and Reveal</h5>
              <p className="description">
                Our collection of Baby Doodle Apes contains a wide variety of
                traits and rarity. Everybody will be given a chance at minting
                one of our NFTs at the same time, with no whitelist available at
                all. Reveal will happen straight after, meaning that you won't
                have to wait to determine the rarity or visuals of your unique
                NFT.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-three icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Step 3: A Creative Future</h5>
              <p className="description">
                In order to show our appreciation to the creative arts, we’ll be
                donating a portion of mint sales to relevant charities. It’s our
                way of supporting an ideal future, and showing our appreciation
                for something that is criminally undervalued. A further section
                of our mint profits will go into a community-governed DAO, that
                will invest in projects that support the creative arts. This
                will allow our community to have their say on the positive
                impact that they want to make.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="icon"></div>
            <div className="date-content">
              <div className="date-outer">
                <span className="date">
                  <i className="fas fa-dice-four icons"></i>
                </span>
              </div>
            </div>
            <div className="timeline-content">
              <h5 className="title ">Step 4: More Projects</h5>
              <p className="description">
                We’ll continue to show our appreciation for the creative arts
                for the foreseeable future, and we hope you’ll be on this
                journey with up. 100% of after market revenue will go towards
                creating new NFT projects. These projects will be built with the
                input of our community, and developed using the talents of
                people within our ranks. Any profits will go straight into the
                same fund, and used to keep funding important creative ventures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<Team>>>>>>>>>>>>>>>>>>>>>>>>>>>>></Team> */}

      <div className="container py-5">
        <a id="Team"></a>
        <h1 className="text-center">TEAM</h1>
        <div className="row ">
          <div className="col-12 col-md-3 pt-4">
            <img
              src={Img2}
              className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
              alt="..."
            ></img>
            <h3 className="text-center pt-3">Nicolas</h3>
            <h6 className="text-center ">Owner </h6>
          </div>
          <div className="col-12 col-md-3 pt-4">
            <img
              src={Img5}
              className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
              alt="..."
            ></img>
            <h3 className="text-center pt-3">Manuel</h3>
            <h6 className="text-center ">Co Owner</h6>
          </div>
          <div className="col-12 col-md-3 pt-4">
            <img
              src={Img4}
              className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
              alt="..."
            ></img>
            <h3 className="text-center pt-3">Leon</h3>
            <h6 className="text-center ">Community Moderator</h6>
          </div>
          <div className="col-12 col-md-3 py-4">
            <a href="https://www.linkedin.com/in/sabirpro/">
              <img
                src={Img3}
                className=" mx-auto d-block TeamImgs TeamImg ImgBorder"
                alt="..."
              ></img>
              <h3 className="text-center pt-3">SabirPro</h3>
              <h6 className="text-center ">DEVELOPER</h6>
            </a>
          </div>
        </div>
        {/* <img src={Img2} className="img-fluid" alt="Responsive image"></img> */}
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<faqs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></faqs> */}
      <a id="FAQ"></a>
      <div className="container px-5 pb-5">
        <div className="row">
          <div className="col-md-offset-3 col-md-12">
            <h3 className="text-center pt-5">Frequently Asked Questions</h3>
            <br />
            <br />

            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4 className="panel-title">
                    <a
                      className="Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      When can I mint?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className="panel-collapse collapse in"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="panel-body text-white">March 4th</div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Is it true that you get 1 free?!
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="panel-body text-white ">
                    Yes, your first mint is free then 0.02 eth if you want more.
                    There are many benefits if you mint 2+ !
                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I get whitelisted?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="panel-body text-white">
                    Everyone is worth the same and everyone can mint at the same
                    price, so no whitelist is needed for this project.
                  </div>
                  <br />
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFour">
                  <h4 className="panel-title">
                    <a
                      className="collapsed Sec"
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What’s the supply?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseFour"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingFour"
                >
                  <div className="panel-body text-white">
                    3333 UNIQUE Baby Doodle Apes living on the Ethereum
                    Blockchain
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer py-3">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <a className="px-4" href="https://twitter.com/babydoodleapes">
              <i className="fab fa-twitter Ficons"></i>
            </a>
          </div>
          <div className="row mx-1">
            <a className="px-4" href="https://discord.gg/babydoodleapes">
              <i className="fab fa-discord Ficons"></i>
            </a>
          </div>
          <div className="row">
            <a
              className="px-4"
              href="https://www.instagram.com/babydoodleapes/"
            >
              <i className="fab fa-instagram Ficons"></i>
            </a>
          </div>
        </div>
        <p className="px-4 text-center  text-white mb-0 ">
          Copyright © Baby Doodle Apes 2022.
        </p>
      </div>
    </div>
  );
}
