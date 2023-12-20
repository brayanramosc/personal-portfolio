import { Toaster } from "react-hot-toast";

import { About, Contact, Header, Hero } from "./components";

function App() {
  return (
    <div
      className="
        min-h-screen 
        bg-light-scheme-surface text-light-scheme-on-surface
        dark:bg-dark-scheme-surface dark:text-dark-scheme-on-surface
      "
    >
      <Toaster />
      <Header />
      <main className="px-10 pb-10">
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
