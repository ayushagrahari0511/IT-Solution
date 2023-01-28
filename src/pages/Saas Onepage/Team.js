import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";
import TeamBox from "../../components/Shared/TeamBox";

class Team extends Component {
  state = {
    candidates: [
      {
        id: 1,
        image: "./praveen_kumar.jpeg",
        name: "Praveen Kumar",
        designation: "Flutter Developer",
        salary: "2300",
        link: "",
      },
      {
        id: 2,
        image: "./praveen_bhargava.jpeg",
        name: "Praveen Bhargava",
        designation: "Software Tester",
        salary: "1950",
        link: "",
      },
      {
        id: 3,
        image: "./anshul_nayak.jpeg",
        name: "Anshul Nayak",
        designation: "Software Tester",
        salary: "2540",
        link: "",
      },
      {
        id: 4,
        image: "./chirag_dugar.jpeg",
        name: "Chirag Dugar ",
        designation: "Software Developer",
        salary: "2190",
        link: "",
      },

      // {
      //   id: 5,
      //   image: "./nikhil_ramrakhyani.jpeg",
      //   name: "Nikhil Ramrakhyani",
      //   designation: "Full-Stack Web Developer",
      //   salary: "2190",
      //   link: "",
      // },
      // {
      //   id: 6,
      //   image: "./sahil_agarwal.jpeg",
      //   name: "Sahil Agarwal",
      //   designation: "Flutter Developer",
      //   salary: "2190",
      //   link: "",
      // },
      // {
      //   id: 5,
      //   image: "./arpit_gupta.jpeg",
      //   name: "Arpit Gupta",
      //   designation: "Software Developer",
      //   salary: "2190",
      //   link: "",
      // },
      // {
      //   id: 5,
      //   image: "./raj_singh.jpeg",
      //   name: "Raj Singh",
      //   designation: "UI/UX Designer",
      //   salary: "2190",
      //   link: "",
      // },
      // {
      //   id: 5,
      //   image: "./rohan_singh.jpeg",
      //   name: "Rohan Singh",
      //   designation: "ASP.NET Developer",
      //   salary: "2190",
      //   link: "",
      // },

    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Mind Power"
              description="Meet our team who deliver futuristic tech solutions to every business."
            />

            <Row>
              {/* teambox */}
              <TeamBox candidates={this.state.candidates} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Team;
