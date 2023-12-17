import { Header, Hero } from "./components";

function App() {
  return (
    <div
      className="
        min-h-screen 
        bg-light-scheme-surface text-light-scheme-on-surface
        dark:bg-dark-scheme-surface dark:text-dark-scheme-on-surface
      "
    >
      <Header />
      <Hero />
    </div>
  )
}

export default App
