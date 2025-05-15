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
            project.innerHTML = `
    <div class="p-1 text-bg-light rounded-1">
    <div class="bg-dark rounded-1 text-light title"><a href="${item.git_url}" target="_blank">${item.name}</a></div>
            <span class="date-update">${ Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</span>
            <div class="description">${item.description}</div>
    
      <span class="badge text-bg-dark language">${ item.language}</span>
      </div>
            `

            repositories.appendChild(project);
        })
    })
}

getAPIGitHubProjects()

function getAPIGitHubCommits() {
    fetch('https://api.github.com/repos/tha-is/portfolio/commits')
    .then(async res => {
        if(!res.ok) {
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map( item => {
            let commit = document.createElement('div');
            commit.innerHTML = `
            <div class="p-1 text-bg-light rounded-1>${item.committer}</div>`
        })
    })
}

getAPIGitHubCommits()