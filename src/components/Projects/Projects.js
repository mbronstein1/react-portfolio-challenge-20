import React from "react";
import './Projects.css';
import couchPotato from '../../assets/images/Couch-Potato-screenshot.png';
import cocktailConcierge from '../../assets/images/Cocktail-concierge-screenshot.jpg';
import weatherDashboard from '../../assets/images/Weather-dashboard-screenshot.jpg';
import codingQuiz from '../../assets/images/code-quiz-screenshot.jpg';
import passwordGenerator from '../../assets/images/Password-Generator.jpg';
import hauntedHouse from '../../assets/images/project-3-landing-page-screenshot.png';
import backgroundGenerator from '../../assets/images/Background-generator-screenshot.png';
import testEcommerceSite from '../../assets/images/Test-Ecommerce-Site-Screenshot.png';

export default function Projects() {
    const projectData = [
        {
            id: 1,
            title: 'Full Moon Manor',
            type: 'React/GraphQL/MongoDB/Mongoose',
            img: hauntedHouse,
            liveLink: "https://secret-river-41082.herokuapp.com/",
            gitHubLink: "https://github.com/jmruiz96/Full-Moon-Manor"
        },
        {
            id: 2,
            title: 'Couch Potato',
            type: 'MVC: Handlebars/Express/MySQL/Sequelize',
            img: couchPotato,
            liveLink: "https://infinite-river-93616.herokuapp.com/",
            gitHubLink: "https://github.com/mbronstein1/Couch-Potato"
        },
        {
            id: 3,
            title: 'Cocktail Concierge',
            type: 'HTML/CSS/JS/APIs',
            img: cocktailConcierge,
            liveLink: "https://tyleresselman.github.io/cocktail-concierge-project-1/index.html",
            gitHubLink: "https://github.com/tyleresselman/cocktail-concierge-project-1"
        },
        {
            id: 4,
            title: 'Weather Dashboard',
            type: 'HTML/CSS/JS/OpenWeather API',
            img: weatherDashboard,
            liveLink: "https://mbronstein1.github.io/Weather-Dashboard",
            gitHubLink: "https://github.com/mbronstein1/Weather-Dashboard"
        },
        {
            id: 5,
            title: 'Coding Quiz',
            type: 'HTML/CSS/JavaScript',
            img: codingQuiz,
            liveLink: "https://mbronstein1.github.io/Code-Quiz",
            gitHubLink: "https://github.com/mbronstein1/Code-Quiz"
        },
        {
            id: 6,
            title: 'Random Password Generator',
            type: 'JavaScript',
            img: passwordGenerator,
            liveLink: "https://mbronstein1.github.io/Random-Password-Generator",
            gitHubLink: "https://github.com/mbronstein1/Random-Password-Generator"
        },
        {
            id: 7,
            title: 'Background Generator',
            type: 'HTML/CSS/JavaScript',
            img: backgroundGenerator,
            liveLink: "https://background-generator-1.vercel.app/",
            gitHubLink: "https://github.com/mbronstein1/background-generator-1"
        },
        {
            id: 8,
            title: 'Test Ecommerce Site',
            type: 'NextJS, Stripe API, Sanity Studio',
            img: testEcommerceSite,
            liveLink: "https://e-commerce-sample-site.vercel.app/",
            gitHubLink: "https://github.com/mbronstein1/e-commerce-sample-site"
        }
    ];
    return (
        <div className='d-flex justify-content-around flex-wrap'>
            {projectData.map(project => {
                return (
                    <div className='projects' style={{ backgroundImage: `url(${project.img})` }} key={`${project.title}-${project.id}`}>
                        <div className='d-flex justify-content-center text-container'>
                            <a href={project.liveLink} target='_blank' rel="noreferrer"><h4>{project.title}</h4></a>
                            <a href={project.gitHubLink} target='_blank' rel="noreferrer"><i className="fa-brands fa-github fa-2xl"></i></a>
                        </div>
                        <div>
                            <p className='project-type-text'>{project.type}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}