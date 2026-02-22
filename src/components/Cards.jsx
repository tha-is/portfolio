  import { useEffect, useState } from 'react'

function BotaoIcone({ link, value }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="btn-portfolio me-1"
    >
      <i className={`bi ${hover ? "bi-toggle-on" : "bi-toggle-off"}`}></i> {value}</a>
  );
}

export default function Cards() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/tha-is/starred")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
<div className="row row-cols-1 row-cols-md-2">
  {repos.map((repo) => (
    <div key={repo.id} className="col p-2"> 
      <div className="card rounded-0 p-3" style={{
        background:"#F4EEE0",
        minHeight: "600px"
        }}>
        
        <div className="mb-3" style={{textTransform: "uppercase",
          fontWeight:"bolder"
        }}>{repo.name}</div>
        <div className="card-body p-0" >
          <img src="src/assets/post.png" alt="imagem padrão de post" className='img-fluid' />
          <p className='card-text mb-2'>{repo.description}
          </p>
          </div>
          <nav>
          <BotaoIcone link={repo.homepage} value="LIVE"/>
          <BotaoIcone link={repo.html_url} value="CODE"/>
        </nav>
        </div>
      </div>
  ))}
</div>
  )
}