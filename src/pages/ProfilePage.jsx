import React from 'react'
import stormchaser from '../assets/stormchaser.jpg'
const ProfilePage = () => {
  const skills = [ 
  {title: "Strom chaser", image: "https://upload.wikimedia.org/wikipedia/en/4/4a/Storm_Chasers_title_logo.jpg", repolink: " https://github.com/DavidSwider/Strom-Chaser", deployedlink: "https://strom-chaser.onrender.com"},
  {title: "Weather Database", image: "https://andrewmarsh.com/software/weather-data-web/web-weather-data.jpg", repolink: " https://github.com/DavidSwider/Strom-Chaser", deployedlink: "https://strom-chaser.onrender.com"},
  {title: "Weather API", image: "https://superdevresources.com/wp-content/uploads/2014/02/Weather-Api.jpg", repolink: " https://github.com/DavidSwider/Strom-Chaser", deployedlink: "https://strom-chaser.onrender.com"},
  {title: "Weathermation", image: "https://environdata.com.au/images/Software/Environdata-WeatherMation-Direct-Logo.png", repolink: " https://github.com/DavidSwider/Strom-Chaser", deployedlink: "https://strom-chaser.onrender.com"},
  {title: "Storm Data", image: "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/10/29/1351503135250/Every-hurricane-since-185-010.jpg", repolink: " https://github.com/DavidSwider/Strom-Chaser", deployedlink: "https://strom-chaser.onrender.com"},
  {title: "Rain or Shine", image: "https://dslv9ilpbe7p1.cloudfront.net/K8O0lvTUVm_nYfpyAPKtlw_store_logo_image.png", repolink: " https://github.com/DavidSwider/Strom-Chaser", deployedlink: "https://strom-chaser.onrender.com"}
  ]
  return (
    <div>
      <h1>Portfolio page</h1>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.title}</h3>
            <img src={skill.image} alt={skill.title} style={{ width: "200px", height: "150px", objectFit: "cover" }} />
            <p>
              <a href={skill.repolink} target="_blank" rel="noopener noreferrer">GitHub Repo</a> | 
              <a href={skill.deployedlink} target="_blank" rel="noopener noreferrer"> Live Demo</a>
            </p>
      </div>
        ))}
    </div>
    </div>
  )
}

export default ProfilePage
