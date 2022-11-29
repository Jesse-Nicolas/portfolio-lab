import discography from '../assets/discography.png'
import snake from '../assets/snake.png'
import tahoejesse from '../assets/tahoejesse.png'

import css from '../assets/techIcons/css.png'
import html from '../assets/techIcons/html.png'
import javascript from '../assets/techIcons/javascript.png'
import python from '../assets/techIcons/python.png'
import react from '../assets/techIcons/react.png'
import express from '../assets/techIcons/expressJS.png'
import node from '../assets/techIcons/nodeJS.png'
import mongo from '../assets/techIcons/mongoDB.png'
import docker from '../assets/techIcons/docker.png'
import django from '../assets/techIcons/django.png'

export const projectData = [
  {
    title: 'Discography', 
    description: 'A Django/SQL database developed with Docker. Discography is an application for documenting one\'s favorite albums and their impressions of it.', 
    image: discography, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/discography', 
    deploymentLink: 'https://discography-django.herokuapp.com/',
    techStack: [python, django, docker, node, css, html]
  },
  {
    title: 'TahoeJesse', 
    description: 'TahoeJesse is a client portal and task management app for my property management service, made to aid customer correspondence. Clients can log in with google Oauth and will be redirected to their profile page, where they can add tasks they\'d like to have done at their vacation home.', 
    image: tahoejesse, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/TahoeJesse', 
    deploymentLink: 'https://tahoe-jesse.fly.dev/profiles/633e075349132f57e5a52c74',    
    techStack: [mongo, express, node, javascript, css, html]
  },
  {
    title: 'Snake', 
    description: 'A re-creation of a mobile classic! This version of snake is written with HTML, CSS, and JavaScript.', 
    image: snake, 
    repositoryLink: 'https://github.com/Jesse-Nicolas/snake', 
    deploymentLink: 'https://jesses-snake.netlify.app/',
    techStack: [mongo, express, node, javascript, css, html]
  },
]