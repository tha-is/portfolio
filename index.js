const repositories = document.getElementById("projects-content");
const commits = document.getElementById("commits-content");

function getAPIGitHubProjects() {
    fetch('https://api.github.com/users/tha-is/starred')
    .then(async res => {
        if( !res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map( item => {
            let project = document.createElement('div');
            project.classList.add('p-1', 'col-7', 'border', 'border-light', 'mb-2');
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

/*getAPIGitHubProjects()

function getAPIGitHubCommits() {
    fetch('https://api.github.com/https://api.github.com/repos/tha-is/portfolio/commits/tha-is/commits')
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map( item => {
            let commit = document.createElement('div');
            commit.innerHTML = `
            <div class="p-1 rounded-1>${item.committer}</div>`
        })
    })
}

getAPIGitHubCommits()*/