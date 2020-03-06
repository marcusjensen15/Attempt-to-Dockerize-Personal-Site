import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  const headerStyle = {
    textAlign: 'center',
    paddingTop: '3%',
    fontSize: '3vh',
    backgroundColor: '#F4F4F4',
    fontFamily: 'Ariel',
    fontColor: '#373737',
    textDecoration: 'none'
  }

  const noUnderline ={
    textDecoration: 'none'

  }

  const hrStyle = {
    marginTop: "2%",


  }

  return(
    <div style={headerStyle}>
      <Link style ={noUnderline} to='/about'> About</Link> |
        <Link style ={noUnderline} to='/resume'> Resumé</Link> |
          <Link style ={noUnderline} to='/'> Home</Link> |
          <Link style ={noUnderline} to='/codingblog'> Coding Blog</Link>



          <div style={hrStyle}><hr/></div>
        </div>
      );
    }
