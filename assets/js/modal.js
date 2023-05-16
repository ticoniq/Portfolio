import projectsData from './projects-data.js';
import { generateProjectPopUps } from './generate-html-utils.js';

const modal = document.querySelector('#modal');
const projectCards = document.querySelector('#project-cards');

const handleModalOpen = (id) => {
  const selectedProject = projectsData.find((project) => project.id === id);
  const html = generateProjectPopUps(selectedProject);
  modal.innerHTML = html;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

const handleModalClose = () => {
  modal.innerHTML = '';
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
};

projectCards.addEventListener('click', (e) => {
  e.preventDefault();

  const { id } = e.target;
  if (id.startsWith('open-project-popup-')) {
    const projectId = id.split('-')[3];
    handleModalOpen(projectId);
  }
});

modal.addEventListener('click', handleModalClose);
