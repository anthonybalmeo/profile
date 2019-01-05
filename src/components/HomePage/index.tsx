import React, { Component } from 'react';
// import axios from 'axios'

class HomePage extends Component {
  // RUN AUTHENTICATION
  // componentDidMount() {
  //     axios.get('#')
  //     .then(data => {
  //       console.log(data)
  //     })
  //     .catch(error => {
  //       throw(error);
  //     });
  // }

  /*
  DOCUMENTATION LINKEDIN: https://developer.linkedin.com/docs/oauth2
  - Idea is to get the authURL with the client id hit and given the redirect, it will populate me an authorization code
  from there I can send a post to accessToken with authorization code provided by the authURL

  ex: return URI url: http://localhost:3000/?code=AQTkQsYdmnnF8T3mhHChSFlBERpswDBWpBS6WaW-bXuV0CmGtRkPFM7GYlj2fP_2nf7JkJz1up0Enbtpj2oByCPrYa7ruUqbGrZGpqb8xl4exKCLVjOL4tCVbF_Lbk1R_PPxCbNZnAUznMXe-ZkuZBurpXpyjOnG8dAX8n6FAy5aAP3SJsXyZ3HWKEPu8g&state=randomState


  Ex:
  ---
  https://www.linkedin.com/oauth/v2/accessToken

  POST /oauth/v2/accessToken HTTP/1.1
  Host: www.linkedin.com
  Content-Type: application/x-www-form-urlencoded

  grant_type=authorization_code&code=987654321&redirect_uri=https%3A%2F%2Fwww.myapp.com%2Fauth%2Flinkedin&client_id=123456789&client_secret=shhdonottell
  ---

  Was thinking of storing access token to state via redux such that it doesnt have to authenticate multiple times

  From Here I can access the basic profile endpoint
  EX: https://api.linkedin.com/v1/people/~

  */

  render() {
    const authorizationUrl = 'https://www.linkedin.com/oauth/v2/authorization'
    const clientID = '86rfkjikdgdp86'
    const clientSecret = '86rfkjikdgdp86'
    const redirectUri = 'http://localhost:3000/'
    const linkedInResponseType = 'code'
    const LinkedInstate ='randomState'
    const linkedInScope = 'r_basicprofile'
    const authURL = `${authorizationUrl}?response_type=${linkedInResponseType}&client_id=${clientID}&redirect_uri=${redirectUri}&state=${LinkedInstate}&scope=${linkedInScope}`;

    return (
      <React.Fragment>
        <p>HOME PAGE</p>
        <a href={authURL}>LINK</a>
      </React.Fragment>
    );
  }
}

export default HomePage;
