const generateTechnologyTags = (technologies) => {
  const html = technologies
    .map((technology) => `<li><a href="#">${technology}</a></li>`)
    .join('\n');
  return html;
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
    <button id="open-project-popup-${id}" class="btn btn-outline btn-hover mt-15 btn-pressed">
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
  const {
    name,
    role,
    platform,
    year,
    description,
    featuredImage,
    technologies,
    linkToLiveVersion,
    linkToSource,
  } = projectDetails;

  return `
    <div class="">
      <div id="modal-card" class="card">
        <div class="card-body">
          <h2>${name}</h2>
          <ul class="details">
            <li>
              <a href="#">${role}<i class="fa fa-circle"></i></a>
            </li>
            <li>
              <a href="#">${platform}<i class="fa fa-circle"></i></a>
            </li>
            <li><a href="#">${year}</a></li>
          </ul>
          <img src="${featuredImage}" alt="" />
        </div>
        <div class="grid">
          <p>
            ${description}
          </p>
          <div class="btnn">
            <ul class="tags">
               ${generateTechnologyTags(technologies)}
            </ul>
            <div class="btn-group">
              <a href="${linkToLiveVersion}" class="btn btn-outline">
                See live <i class="fa fa-circle"></i>
              </a>
              <a href="${linkToSource}" class="btn btn-outline">
                See source <i class="fab fa-github-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
};
