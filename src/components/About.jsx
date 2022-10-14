import { Icon } from './Icon'
import '../styles/components/about.sass'

export function About({ content }) {
  return (
    <section id="about" className="flex align-center column">
      <header><h2 id="about-title">{content["title"]}</h2></header>
      <div>
        {content["info"].map((text, i) =>
          <p className="about-info" key={i}>
            {text}
          </p>)
        }
      </div>
      <div id="about-icons" className="flex column justify-center">
        <div id="confident">
          <h3>{content["topics"]["confident"]}</h3>
          <ul className="tech-list flex justify-center">
            <li className="flex align-center justify-center column">
              <Icon
                icon="react"
                name="React"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="typescript"
                name="TypeScript"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="node"
                name="NodeJs"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="javascript"
                name="JavaScript"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="html5"
                name="HTML5"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="css3"
                name="CSS3"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="mongodb"
                name="MongoDb"
              />
            </li>
          </ul>
        </div>
        <div id="studying">
          <h3>{content["topics"]["studying"]}</h3>
          <ul className="tech-list flex justify-center">
            <li className="flex align-center justify-center column">
              <Icon
                icon="elixir"
                name="Elixir"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="websockets"
                name="WebSockets"
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="graphql"
                name="GraphQl"
              />
            </li>
          </ul>
        </div>
        <div id="interest">
          <h3>{content["topics"]["interest"]["text"]}</h3>
          <ul className="tech-list flex justify-center">
            <li className="flex align-center justify-center column">
              <Icon
                icon="bees"
                name={content["topics"]["interest"]["itemsText"][1]}
              />
            </li>
            <li className="flex align-center justify-center column">
              <Icon
                icon="games"
                name={content["topics"]["interest"]["itemsText"][0]}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}