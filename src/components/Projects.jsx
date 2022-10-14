import { Project } from "./Project"
import "../styles/components/projects.sass"

export function Projects({ content }) {
  return (
    <section id="projects" className="flex column align-center">
      <header>
        <h2 id="projects-title">{content["title"]}</h2>
      </header>
      <div id="projects-container" className="justify-center">
        {content["projects"].map((project, i) => (
          <Project
            title={project["title"]}
            imgUrl={project["imgUrl"]}
            tech={project["tech"]}
            text={project["text"]}
            githubUrl={project["githubUrl"]}
            liveUrl={project["liveUrl"]}
            liveText={content["liveText"]}
            key={`project-${i}`}
          />
        ))}
      </div>
      <a href="https://github.com/marcosvag" target="_blank" id="see-more" className="button">
        {content["more"]}
      </a>
    </section>
  );
}