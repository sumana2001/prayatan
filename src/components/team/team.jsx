import React from 'react';
import Card from './teamCard';
import {teamData1, teamData2, teamData3} from './teamData';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Head=styled.h1`
    color:white;
`


function createCard(teamData)
{
  return (
    <Grid item lg={3} md={4} sm={6} xs={12} id="team" style={{margin:"0 auto"}}>
      <Card
        key={teamData.id}
        image={teamData.image}
        name={teamData.name}
        desc={teamData.desc}
      />
    </Grid>
  );
}

function team()
{
  return (
    <div className='team'>
      <h1 className="heading">Team</h1>
      <Head>Board of directors</Head>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData1.map(createCard)}
      </Grid>
      <Head>Permanent Member</Head>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData2.map(createCard)}
      </Grid>
      <Head>Volunteers</Head>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData3.map(createCard)}
      </Grid>
    </div>
  );
}

export default team