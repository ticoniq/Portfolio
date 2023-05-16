const generateTechnologyTags = (technologies) => {
  technologies
    .map((technology) => `<li><a href="#">${technology}</a></li>`)
    .join('\n');
};

const generateProjectCard = (projectDetails) => {
  const {
    id,
    name,
    role,
    platform,
    year,
    description,
    featuredImage,
    technologies,
  } = projectDetails;

  return `<div class="card grid">
  <div class="img">
    <img src="${featuredImage}" alt="Portfolio" />
  </div>
  <div class="card-body">
    <h2>${name}</h2>
    <ul class="details">
      <li>
        <a href="#">${role}<i class="fa fa-circle"></i></a>
      </li>
      <li>
        <a href="#">${platform} <i class="fa fa-circle"></i></a>
      </li>
      <li><a href="#">${year}</a></li>
    </ul>
    <p>
      ${description}
    </p>
    <ul class="tags">
      ${generateTechnologyTags(technologies)}
    </ul>
    <button class="btn btn-outline btn-hover mt-15 btn-pressed" onClick="() => nandleProjectCardClick(${id})">
      See Project
    </button>
  </div>
</div>`;
};

export const generateProjectCards = (projectsData) => {
  const html = projectsData
    .map((projectDetails) => generateProjectCard(projectDetails))
    .join('\n');
  return html;
};

// TODO: update the following function
export const generateProjectPopUps = (projectDetails) => {
  projectDetails = 4;
  return projectDetails;
};
