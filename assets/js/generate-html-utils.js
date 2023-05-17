export const generateTechnologyTags = (technologies) => {
  const html = technologies
    .map((technology) => `<li><a href="#">${technology}</a></li>`)
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
    descriptionlong,
    featuredImage,
    technologies,
    linkToLiveVersion,
    linkToSource,
  } = projectDetails;

  return `
    <div class="container">
      <div id="modal-card" class="card">
        <div class="card-body">
          <div class="card-header"> 
            <h2>${name}</h2>
            <i id="close-modal-popup" class="fas fa-times"></i>
          </div>
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
            ${descriptionlong}
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
