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
            <img src="logo_prayatan.png" className="about-logo" alt=""/>
        </Grid>
        <Grid item xs={12} sm={7}>
            <p className="about-history">Founded in 2010 founders of Prayatan Society for Social Upliftment resolved to speak in one voice, a voice of change with an aim to reform the livelihood of those that are deprived. The  founding members hence, embarked upon a journey of defining pathways  for the underprivileged, with a beautiful dream to overcome barriers of social structural inequality. The glaring truth that the less privileged need help to resolve basic livelihood requirements like food, shelter and education had to be tackled head on.<br/><br/>
The founders were passionate about fighting problems of injustice, on domestic fronts and at workplaces, that obstructed the growth of those that were deserving. They wanted to bring about a change, with the cooperative efforts of family and friends, aspiring for a happier and healthier livelihood for the underprivileged. They wanted this voice to resonate loud enough to enable patterns which would define a better world, they  invited then and invite now people to extend support towards this mission 
</p>
        </Grid>
      </Grid>     
    </div>
  );
}
