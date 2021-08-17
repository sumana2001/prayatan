import React from 'react';
import Card from './teamCard';
import teamData from './teamData';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Main=styled.h1`
    color:white;
`
const Head=styled.h1`
    color:white;
`


function createCard(teamData)
{
  return (
    <Grid item lg={3} md={4} sm={6} xs={12} id="team">
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
      <Main>TEAM</Main>
      <Head>Board of directors</Head>
      <Grid lg={12} item container spacing={3} align='center'>
        {teamData.map(createCard)}
      </Grid>
    </div>
  );
}

export default team