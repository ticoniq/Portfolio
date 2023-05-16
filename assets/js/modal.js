import projectsData from './projects-data.js';
import { generateProjectPopUps } from './generate-html-utils.js';

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const projectCards = document.querySelector('#project-cards');

const handleModalOpen = (id) => {
  const selectedProject = projectsData.find((project) => project.id === id);
  const html = generateProjectPopUps(selectedProject);
  modal.innerHTML = html;
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

const handleModalClose = () => {
  modal.innerHTML = '';
  modal.style.display = 'none';
  overlay.style.display = 'none';
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

overlay.addEventListener('click', () => {
  handleModalClose();
});
