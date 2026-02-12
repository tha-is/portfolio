# Portfolio — Layout Responsivo para Desenvolvedores

<div align="center">
  <img src="./Tela.png" alt="Prévia do Portfólio" width="700px"/>
  <br><br>

  🔗 <a href="tha-is.github.io/portfolio/" target="_blank">
  <img src="https://img.shields.io/badge/Abrir%20no-GitHub%20Pages-24292e?style=for-the-badge&logo=github&logoColor=white" alt="Abrir no GitHub Pages" />
  </a>
</div>

Um layout moderno, limpo e totalmente personalizável para **desenvolvedores web** exibirem seus projetos, currículo e formas de contato.  
Ideal para quem quer destacar o próprio trabalho com uma estética profissional e fácil de editar.

---

## 🖥️ Tecnologias utilizadas

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![React](https://img.shields.io/badge/react%20os-0088CC?style=for-the-badge&logo=reactos&logoColor=white)

</div>

---

## 🧭 Funcionalidades

- Exibição automática de projetos via **API do GitHub**
- Design minimalista e responsivo.

---

## ⚙️ Como utilizar

Clone este repositório:
```bash
git clone https://github.com/tha-is/portfolio-layout.git
```

💡 Dica: utilize a paleta e o header já incluídos para manter a harmonia visual.

<div align="center"> <img src="./styles/_Color Hunt Palette.png" width="200"/> <img src="./paleta.png" width="600"/> </div>

---

## 🤖 API GitHub — Exibir projetos automaticamente

O layout utiliza a API pública do GitHub para exibir repositórios em tempo real.

Por padrão:
```bash
https://api.github.com/users/tha-is/starred
```
Para usar com o seu perfil, substitua:
```bash
https://api.github.com/users/{SEU_USER_DO_GITHUB}/starred
```
Ou, para listar todos os seus repositórios:
```bash
https://api.github.com/users/{SEU_USER_DO_GITHUB}/repos
```
Exemplo prático:
```js
fetch("https://api.github.com/users/{SEU_USER_DO_GITHUB}/repos")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📚 **Materiais de referência**

- 🎨 [Paleta de cores - Color Hunt](https://colorhunt.co/palette/f6f6f6ffbb91ff8e6e515070)
- 🧠 [Personalizar README](https://www.youtube.com/watch?v=TsaLQAetPLU)
- 🖋️ [Awesome Badges](https://dev.to/envoy_/150-badges-for-github-pnk)
- 🪶 [Header - Canva](https://www.canva.com/design/DAG3CwALaNw/TSZux-wVFY6RkBH6PgyfBQ/edit)
- 🧩 [Box-shadow & Buttons - Get CSS Scan](https://getcssscan.com/)
- 🅰️ [Google Fonts](https://fonts.google.com/)

---

## 📬 Contato

W/ 💜 by [Thais](https://github.com/tha-is)

Se quiser trocar ideias ou colaborar, entre em contato!
📧 [LinkedIn](https://www.linkedin.com/in/tha-is-costa/)

### ⭐ Contribuições

Sinta-se à vontade para abrir um Pull Request ou sugerir melhorias.
Se este projeto te ajudou, deixe uma ⭐ no repositório — isso apoia o desenvolvimento.