import React from 'react'
import './Portfolio.css'
//import IMG1 from '../../assets/reactWebsite.png'
// import YoutubeImg from '../../assets/portfolio2.jpg'
const Portfolio = () => {
  const data = [{
    id: 1,
    image: 'https://cdn.dribbble.com/users/1785039/screenshots/8805473/media/c4e5b8aa218996f2a2009ad6f0382438.png',
    title: 'Youtube Clone',
    demo: 'https://youtube-clone-ten-khaki.vercel.app/',
    github: 'https://github.com/colite1/'
  },{
    id: 2,
    image: 'https://www.fossmint.com/wp-content/uploads/2020/07/Best-Cross-Platform-Note-Taking-Apps.png',
    title: 'Quick Notes',
    demo: 'https://sticky-notes-gamma.vercel.app/',
    github: 'https://github.com/colite1/'
  },{
    id: 3,
    image: 'https://cdn.dribbble.com/users/472201/screenshots/15993980/media/b30b0cd6a97b703a2a5d722223a036be.jpg?compress=1&resize=800x600&vertical=top',
    title: 'React Website',
    demo: 'https://react-app-mu-sandy.vercel.app/',
    github: 'https://github.com/colite1/'
  }
]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,demo,github})=>{
            return(
              <article className='portfolio__item' key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                  <a href={github} className='btn'  rel="noopener noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary'  rel="noopener noreferrer" target='_blank'>View Demo</a>
                  </div>
              </article>
            )
          })
        }       
      </div>
    </section>
  )
}

export default Portfolio