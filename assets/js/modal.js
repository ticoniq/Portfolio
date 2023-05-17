import projectsData from './projects-data.js';
import { generateProjectPopUps, generateTechnologyTags } from './generate-html-utils.js';

const projectCards = document.querySelector('#project');
const modal = document.querySelector('#modal');

const handleModalOpen = (id) => {
  const selectedProject = projectsData.find((project) => project.id === id);
  const html = generateProjectPopUps(selectedProject);
  modal.innerHTML = html;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

projectCards.addEventListener('click', (e) => {
  e.preventDefault();

  const { id } = e.target;
  if (id.startsWith('open-project-popup-')) {
    const projectId = id.split('-')[3];
    handleModalOpen(projectId);
  }
});

modal.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'close-modal-popup') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

let output = '';
for (let i = 0; i < projectsData.length; i += 1) {
  output += `
    <div class="card grid">
      <div class="img">
        <img src="${projectsData[i].featuredImage}" alt="Portfolio" />
      </div>
      <div class="card-body">
        <h2>${projectsData[i].name}</h2>
        <ul class="details">
            <li>
              <a href="#">${projectsData[i].role}<i class="fa fa-circle"></i></a>
            </li>
            <li>
              <a href="#">${projectsData[i].platform} <i class="fa fa-circle"></i></a>
            </li>
            <li><a href="#">${projectsData[i].year}</a></li>
          </ul>
        <p>${projectsData[i].description}</p>
        <ul class="tags">
          ${generateTechnologyTags(projectsData[i].technologies)}
        </ul>
        <button id="open-project-popup-${projectsData[i].id}" class="btn btn-outline btn-hover mt-15 btn-pressed">
          See Project
        </button>
      </div>
    </div>
  `;
}
document.querySelector('#project').innerHTML = output;

// Close modal if backdrop is click
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
};
