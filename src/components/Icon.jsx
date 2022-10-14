import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiJavascript,
    SiMongodb,
    SiElixir,
    SiGraphql,
    SiSocketdotio,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiLinkedin,
} from 'react-icons/si'
import {
    GiBee,
    GiGamepad
} from 'react-icons/gi'
import {
    HiSun,
    HiMoon,
    HiOutlineMail
} from 'react-icons/hi'

const icons = {
    'sun': <HiSun id="sun" />,
    'moon': <HiMoon id="moon" />,
    'react': <SiReact id="react" />,
    'typescript': <SiTypescript id="typescript" />,
    'node': <SiNodedotjs id="node" />,
    'javascript': <SiJavascript id="javascript" />,
    'mongodb': <SiMongodb id="mongodb" />,
    'html5': <SiHtml5 id="html5" />,
    'css3': <SiCss3 id="css3" />,
    'elixir': <SiElixir id="elixir" />,
    'graphql': <SiGraphql id="graphql" />,
    'websockets': <SiSocketdotio id="websockets" />,
    'games': <GiGamepad id="games" />,
    'bees': <GiBee id="bees" />,
    'github': <SiGithub id="github" />,
    'email': <HiOutlineMail id="email" />,
    'linkedin': <SiLinkedin id="linkedin" />
}

export function Icon({ icon, name }) {
    return (
        <>
            {icons[icon]} {name && name}
        </>
    )
}