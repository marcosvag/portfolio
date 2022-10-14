import { useState, useEffect } from "react"
import {
  Nav,
  Home,
  About,
  Projects,
  Contact,
  Footer
} from "./components"
import text from "./text"

import "./styles/global.sass"

function App() {

  const [language, setLanguage] = useState("en")
  const [theme, setTheme] = useState("")

  useEffect(() => {
    document.body.classList = theme
  }, [theme])

  return (
    <>
      <Nav
        navItem={text["content"][language]["nav"]}
        currentTheme={theme}
        onChangeLanguage={(nextLanguage) => setLanguage(nextLanguage)}
        onChangeTheme={(themeMode) => setTheme(themeMode)}
      />
      <main>
        <Home
          content={text["content"][language]["homeSection"]}
          language={language}
        />
        <About
          content={text["content"][language]["aboutSection"]}
        />
        <Projects
          content={text["content"][language]["projectsSection"]}
        />
        <Contact
          content={text["content"][language]["contactSection"]} />
      </main>
      <Footer />
    </>
  )
}

export default App