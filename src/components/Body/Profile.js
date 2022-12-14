import React from "react";
import classes from './Profile.module.css';
import share from '../../Assets/shareLogo.svg';
import share1 from '../../Assets/shareLogo1.svg';

const Profile = () => {
  return(
    <div 
      className={classes.profile}
      >
      <img src="https://avatars.githubusercontent.com/u/108002096?v=4" id="profile__img" alt="profile_photo"/>
      <img className={classes.img} src={share} alt='share'/>
      <img className={classes.img768} src={share1} alt='share'/>
      <h1 id="twitter">evansaizik</h1>
      <h1 id="slack">Evans Isaiah</h1>
    </div>
  )
};

export default Profile;