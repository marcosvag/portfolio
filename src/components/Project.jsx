import { Icon } from './Icon'

export function Project({ title, imgUrl, tech, text, githubUrl, liveUrl, liveText }) {
    // #161515  #0c0b0b #2a2828
    return (
        <div className="flex column align-center project-card-container">
            <h3>{title}</h3>
            <div className="image-container">
                <img
                    src={imgUrl}
                    alt=""
                />
            </div>
            <ul className="tools-list flex align-center justify-center">
                {
                    tech.map(tec => <Icon icon={tec} key={tec} />)
                }
            </ul>
            <span className="project-description-container flex align-center  column">

                <p className="project-description">{text}</p></span>
            <span className="project-links flex align-center justify-center">
                <a href={githubUrl} target="_blank">
                    <Icon icon="github" />
                </a>
                <a href={liveUrl} target="_blank" className="see-live"> {liveText} </a>
            </span>
        </div>

    )
}