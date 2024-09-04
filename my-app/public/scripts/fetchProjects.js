"use strict";
fetch('./projects.json')
    .then(res => res.json())
    .then(data => {
    const projects = data.projects;
    const projectList = document.querySelector('.project-list');
    if (!projectList)
        return;
    projectList.innerHTML = '';
    projects.forEach((project) => {
        const projectElement = document.createElement('li');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <p>Technologies: ${project.technologies}</p>
            `;
        projectList.appendChild(projectElement);
    });
})
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
