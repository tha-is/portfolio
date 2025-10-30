const repositories = document.getElementById("projects-content");

function getAPIGitHubProjects() {
    fetch('https://api.github.com/users/tha-is/starred')
    .then(async res => {
        if( !res.ok) throw new Error(res.status);

        const data = await res.json();

        // limpa antes de renderizar

        
        
        data.forEach((item, index) => {
            const project = document.createElement('div');
            project.classList.add('project-box');
            project.innerHTML = "";
            project.innerHTML = `<a href="${item.html_url}" target="_blank" title="${item.name}">
            <span>${index + 1}</span>
            </a>
            `;

            repositories.appendChild(project);
        });
        })
        .catch((error) => {
            console.error("Erro ao buscar repositórios:", error);
        });
    }
getAPIGitHubProjects();