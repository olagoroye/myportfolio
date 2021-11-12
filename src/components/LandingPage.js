import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid classname='landing-grid'>
                   <Cell col={12}> 
                     <img 
                       src='https://i.etsystatic.com/16136317/r/il/90e75f/2243649271/il_1588xN.2243649271_4u6t.jpg'
                        alt='queen'
                        className='queen-img'                   
                       /> 
                       <div className='banner-text'>
                           <h1>Full Stack Web Developer</h1>
                           <hr/>
                           <p>HTML | CSS| Ruby | NodeJs | Express | MySQL | Ruby on Rails | Javascript | React-Redux </p>

                           {/* linkedin */}
                           <div className='social-links'>
                               <a href="https://www.linkedin.com/in/olusola-olagoroye-97446811/" rel='noopener noreferrer' target="_blank">
                                   <i className= "fa fa-linkedin-square" aria-hidden='true' />
                               </a>         

                            {/* github */}
                               <a href="https://github.com/olagoroye" rel='noopener noreferrer' target="_blank">
                                   <i className= "fa fa-github-square" aria-hidden='true' />
                               </a>
                               {/* gitlab */}
                               <a href="https://gitlab.com/olusola_olagoroye" rel='noopener noreferrer' target="_blank">
                                   <i className= "fa fa-gitlab" aria-hidden='true' />
                               </a>

                                {/* freecodecamp */}
                                <a href="http://google.com" rel='noopener noreferrer' target="_blank">
                                   <i className= "fa fa-free-code-camp" aria-hidden='true' />
                               </a>
                               {/* youtube */}
                               <a href="http://google.com" rel='noopener noreferrer' target="_blank">
                                   <i className= "fa fa-youtube-square" aria-hidden='true' />
                               </a>                                                           
                           </div>
                        </div>                  
                    </Cell>
                </Grid> 
            </div>
        )
    }
}
export default LandingPage;