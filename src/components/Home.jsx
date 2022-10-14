import '../styles/components/home.sass'

export function Home({ content, language }) {
  const resumePath = `/resume-${language}.pdf`
  const fileName = `Marcos-Garcia-${language === 'pt' ? 'curriculo' : 'resume'}`

  return (
    <section id="home" className="flex align-center justify-center column">
      <header><h1 id="introduction">{content["introduction"][0]} <b className="name">Marcos</b>,<br />
        {content["introduction"][1]}<strong> {content["introduction"][2]}</strong>!</h1></header>
      <a href={resumePath} download={fileName}
        id="resume" className="button">{content["resume"]}</a>
    </section>
  )
}