import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import { GoTools } from "react-icons/go"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Ucosmos from "../images/companies/ucosmos-logo.webp"
import DePC from "../images/companies/DePC-logo.jpg"
import AgroPro from "../images/companies/AgroPro-logo.jpg"
import Telecentro from "../images/companies/Telecentro-logo.png"

import Hashme from "../images/projects/hashme-logo.png"
import Demedis from "../images/projects/demedis-logo.png"
import Ushuaia from "../images/projects/masushuaia-logo.png"
import MJM from "../images/projects/MJM-logo.png"
import AgroProApp from "../images/projects/AgroPro-logo.jpg"
import Tplay from "../images/projects/Tplay-logo.png"

const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  min-height: 46rem;
  width: 100vw;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`

const SectionTitle = styled.h2`
  color: #00343d;
  margin: 0 auto;
  max-width: 30rem;
  padding-top: 5rem;
  text-align: center;
`

const SectionSubtitle = styled.p`
  color: #00343d;
  padding: 2rem 0.5rem 0;
  text-align: center;
`

const CallToAction = styled.span`
  color: #65C9FF;
  cursor: pointer;
  font-weight: 550;
`

const ProjectsList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem auto;
  max-width: 70rem;
`
const Project = styled.div`
  align-items: center;
  border: 1px solid #e6ecf8;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: 460px;
  justify-content: space-around;
  margin: 1rem;
  max-width: 21rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
`

const ProjectImg = styled.div`
  align-items: center;
  display: flex;
  height: 105px;
  justify-content: center;
  margin-bottom: 2rem;
  width: 240px;
  @media (min-width: 1024px) {
    width: 162px;
  }
`

const ProjectDescription = styled.ul`
  align-items: center;
  color: #00343d;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 130px;
  justify-content: center;
  list-style: none;
`

const ProjectLink = styled.p`
  color: ${props => (props.disabled ? "#65C9FFaa" : "#65C9FF")};
  font-size: 14px;
  font-weight: 550;
  margin-top: 2rem;
  text-align: center;
  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "auto")};
  }
`

const Divider = styled.div`
  background-color: #e6ecf8;
  height: 1px;
  width: 100vw;
`

const CompaniesList = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 55rem;
  padding: 5rem 1rem 15rem;
`

const Company = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  width: 200px;
  @media (min-width: 968px) {
    margin: 1rem;
  }
`

const About = ({ location: { pathname } }) => {
  return (
    <Layout location={pathname}>
      <SEO title="About" />
      <Container>
        <Wrapper>
          <SectionTitle>My Work</SectionTitle>
          <SectionSubtitle>
            Here a few projects i've worked on in the past. Want to see more?
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <CallToAction> Contact me</CallToAction>
            </Link>
          </SectionSubtitle>
          <ProjectsList>
            <Project>
              <ProjectImg>
                <img
                  alt="Tplay"
                  src={Tplay}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile, Web, Android TV, Tizen, WebOS & VIDAA OS application's using Vue.js and Cordova.</li>
                <li>
                  Node for Backend, auth and cloud functions, Grafana Faro, Google Analytics.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://telecentro.com.ar/"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#65C9FF" }}
                >
                  www.telecentro.com.ar
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="AgroPro"
                  src={AgroProApp}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile & Web application's using React Native and ReactJs.</li>
                <li>
                  PostgreSQL, MongoDB & GraphQL for database, Laravel, Node and Python for Backend, auth and cloud functions.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://agropro.ag"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#65C9FF" }}
                >
                  www.agropro.ag
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="MJM"
                  src={MJM}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile application using React Native and Laravel.</li>
                <li>
                  MariaDB for database, Laravel for dashboard, auth and cloud functions.
                </li>
              </ProjectDescription>
              <ProjectLink disabled>
                In development <GoTools />{" "}
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="+Ushuaia"
                  src={Ushuaia}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile application's using React Native and Laravel.</li>
                <li>
                  MariaDB for database, Laravel for dashboard, auth and cloud functions.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://masushuaia.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#65C9FF" }}
                >
                  www.masushuaia.com
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="Hashme"
                  src={Hashme}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile application using React Native and Node.js.</li>
                <li>
                  Connection to Facebook SDK's for Instagram metrics, with MongoDB for database, Claudinary for storage and deployed on
                  AWS.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.hashme.com"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#65C9FF" }}
                >
                  www.hashme.com
                </a>
              </ProjectLink>
            </Project>
            <Project>
              <ProjectImg>
                <img
                  alt="Demedis"
                  src={Demedis}
                  style={{ margin: 0, maxHeight: 105 }}
                />
              </ProjectImg>
              <ProjectDescription>
                <li>Mobile application's using React Native and Laravel.</li>
                <li>
                  Firebase Kit and MySQL for Real time database, Laravel for dashboard, auth and cloud functions.
                </li>
              </ProjectDescription>
              <ProjectLink>
                <a
                  href="https://www.demedis.io"
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "#65C9FF" }}
                >
                  www.demedis.io
                </a>
              </ProjectLink>
            </Project>
          </ProjectsList>
        </Wrapper>
        <Divider />
        <Wrapper>
          <SectionTitle>
            I'm proud to have collaborated with some awesome companies:
          </SectionTitle>
          <CompaniesList>
            <Company>
              <img
                alt="Telecentro"
                src={Telecentro}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="AgroPro"
                src={AgroPro}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="DePC Suite"
                src={DePC}
                style={{ margin: 0, maxHeight: 125 }}
              />
            </Company>
            <Company>
              <img
                alt="Ucomos"
                src={Ucosmos}
                style={{ margin: 0, height: 125 }}
              />
            </Company>
          </CompaniesList>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default About
