import discography from '../assets/discography.png'
import snake from '../assets/snake.png'
import tahoejesse from '../assets/tahoejesse.png'
import fit from '../assets/fit.png'

import css from '../assets/techIcons/css.png'
import html from '../assets/techIcons/html.png'
import javascript from '../assets/techIcons/javascript.png'
import python from '../assets/techIcons/python.png'
import express from '../assets/techIcons/expressJS.png'
import node from '../assets/techIcons/nodeJS.png'
import mongo from '../assets/techIcons/mongoDB.png'
import docker from '../assets/techIcons/docker.png'
import django from '../assets/techIcons/django.png'
import react from '../assets/techIcons/react.png'

export const projectData = [
  {
    title: 'Discography', 
    description: 'A Django/SQL database developed with Docker. Discography is an application for documenting one\'s favorite albums and their impressions of it.', 
    image: discography, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/discography', 
    deploymentLink: 'https://discography-django.herokuapp.com/',
    techStack: [{name: 'Python', image: python}, {name: 'Django', image: django}, {name: 'Docker', image: docker}, {name: 'Node', image: node}, {name:'CSS', image: css}, {name: 'HTML', image: html}]
  },
  {
    title: 'Fit', 
    description: 'A diet/exercise planner built as a group project. Users can CRUD exercises and goals, as well as access a third-party api for detailed recipies and nutrition.', 
    image: fit, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/Fit-app-front-end', 
    deploymentLink: 'https://fit-planner.netlify.app/',    
    techStack: [{name: 'React', image: react},{name: 'MongoDB', image: mongo}, {name: 'Express', image: express}, {name: 'Node', image: node}, {name: 'JavaScript', image: javascript}, {name: 'CSS', image: css}, {name: 'HTML', image: html}]
  },
  {
    title: 'TahoeJesse', 
    description: 'TahoeJesse is a client portal and task management app for my property management service, made to aid customer correspondence. Clients can log in with google Oauth and will be redirected to their profile page, where they can add tasks they\'d like to have done at their vacation home.', 
    image: tahoejesse, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/TahoeJesse', 
    deploymentLink: 'https://tahoe-jesse.fly.dev/profiles/633e075349132f57e5a52c74',    
    techStack: [{name: 'MongoDB', image: mongo}, {name: 'Express', image: express}, {name: 'Node', image: node}, {name: 'JavaScript', image: javascript}, {name: 'CSS', image: css}, {name: 'HTML', image: html}]
  },
  {
    title: 'Snake', 
    description: 'A re-creation of a mobile classic! This version of snake is written with HTML, CSS, and JavaScript.', 
    image: snake, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/snake', 
    deploymentLink: 'https://jesses-snake.netlify.app/',
    techStack: [{name: 'JavaScript', image: javascript}, {name: 'CSS', image: css}, {name: 'HTML', image: html}]
  },
]