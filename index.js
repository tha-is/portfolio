const repositories = document.getElementById("projects-content");

function getAPIGitHubProjects() {
    fetch('https://api.github.com/users/tha-is/starred')
    .then(async res => {
        if( !res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map( item => {
            let project = document.createElement('div');
            project.classList.add('p-1', 'border', 'border-light');
            project.innerHTML = `
    <div class="title"><a href="${item.git_url}" target="_blank">${item.name}</a></div>
            <span class="date-update">${ Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
            <div class="description">${item.description}</div>
    
      <span>${ item.language}</span>
            `

            repositories.appendChild(project);
        })
    })
}

getAPIGitHubProjects()