(() => {
  const { profile, publications, experiences = [] } = window.homepage;
  const makeElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };
  const makeLink = (text, url, className) => {
    const link = makeElement("a", className, text);
    link.href = url;
    return link;
  };

  document.title = profile.name;
  document.querySelector(".site-name").textContent = profile.name;
  document.querySelector("#profile-name").textContent = profile.name;
  document.querySelector(".site-footer span").textContent = `${profile.name} · Seoul National University`;
  const portrait = document.querySelector("#portrait");
  portrait.src = profile.portrait;
  portrait.alt = profile.name;

  profile.bio.forEach(parts => {
    const paragraph = makeElement("p");
    parts.forEach(part => paragraph.append(
      typeof part === "string" ? document.createTextNode(part) : makeLink(part.text, part.url)
    ));
    document.querySelector("#biography").append(paragraph);
  });
  profile.links.forEach(link => {
    document.querySelector("#profile-links").append(makeLink(link.label, link.url));
  });

  publications.forEach(paper => {
    const article = makeElement("article", "publication");
    const title = makeElement("h3");
    title.append(makeLink(paper.title, paper.links[0].url));
    const authors = makeElement("p", "authors");
    paper.authors.forEach((name, index) => {
      if (index) authors.append(document.createTextNode(", "));
      authors.append(name === profile.name ? makeElement("strong", "", name) : document.createTextNode(name));
    });
    const venue = makeElement("p", "venue", paper.venue);
    if (paper.status) venue.append(makeElement("span", "status", ` · ${paper.status}`));
    article.append(title, authors, venue);
    if (paper.award) {
      const award = makeElement("p", "award");
      award.append(makeLink(paper.award, paper.awardUrl));
      article.append(award);
    }
    const links = makeElement("div", "paper-links");
    paper.links.forEach(link => links.append(makeLink(link.label, link.url)));
    article.append(links);
    document.querySelector("#publication-list").append(article);
  });

  experiences.forEach(experience => {
    const item = makeElement("li", "timeline-item");
    if (experience.date) item.append(makeElement("span", "timeline-date", experience.date));
    const card = makeElement("article", "timeline-card");
    card.append(makeElement("h3", "timeline-title", experience.title));
    const institution = makeElement("p", "timeline-institution");
    institution.append(experience.url
      ? makeLink(experience.institution, experience.url)
      : document.createTextNode(experience.institution));
    card.append(institution);
    if (experience.description) {
      card.append(makeElement("p", "timeline-description", experience.description));
    }
    item.append(card);
    document.querySelector("#experience-list").append(item);
  });
})();
