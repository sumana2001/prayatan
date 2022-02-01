import React from "react";
import "../../App.css";
import Grid from "@material-ui/core/Grid";

export default function about() {
  return (
    <div id="about">
      <blockquote>
        A sense of concern for others gives our lives meaning ; it is the root
        of all human happiness. <br />
        -Dalai Lama
      </blockquote>
      <h1 className="heading">About Us</h1>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5}>
          <img
            src={require("../../assets/logo.png").default}
            className="about-logo"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <p className="about-history"  style={{textAlign:"left"}}>
            Founded in 2010 founders of Prayatan Society for Social Upliftment
            resolved to speak in one voice, a voice of change with an aim to
            reform the livelihood of those that are deprived. The founding
            members hence, embarked upon a journey of defining pathways for the
            underprivileged, with a beautiful dream to overcome barriers of
            social structural inequality. The glaring truth that the less
            privileged need help to resolve basic livelihood requirements like
            food, shelter and education had to be tackled head on.
            <br />
            <br />
            The founders were passionate about fighting problems of injustice,
            on domestic fronts and at workplaces, that obstructed the growth of
            those that were deserving. They wanted to bring about a change, with
            the cooperative efforts of family and friends, aspiring for a
            happier and healthier livelihood for the underprivileged. They
            wanted this voice to resonate loud enough to enable patterns which
            would define a better world, they invited then and invite now people
            to extend support towards this mission
          </p>
        </Grid>
      </Grid>
      <div className="deck">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
        <div className="card-space">
          <div className="card">
            <div className="face front">
              <h1 className="faceh1">VISION</h1>
            </div>
            <div className="face back">
              <p className="facep">
                A nourished, educated and content neighbourhood living in mutual
                respect and in harmony with nature with specialized emphasis on
                empowerment of women and children to ensure protection of basic
                human rights.
              </p>
            </div>
          </div>
        </div>
        </Grid>
        <Grid item xs={12} sm={6}>
        <div className="card-space">
          <div className="card">
            <div className="face front">
              <h1 className="faceh1">Mission</h1>
            </div>
            <div className="face back">
              <p className="facep2">
                Prayatan through its continuous effort, aims to fulfill the
                following socio-economic agendas-
                <ul>
                  <li>
                    To promote inclusion of physically disabled people to the
                    mainstream of life
                  </li>
                  <li>
                    Women Empowerment through education, training and skills
                    upgradation
                  </li>
                  <li>
                    To promote education in weaker sections of the society
                  </li>
                  <li>Natural Resource Management and Conservation</li>
                  <li>Synergic integrations of various development efforts</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        </Grid>
        </Grid>
      </div>
    </div>
  );
}
