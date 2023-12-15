import { useTranslation } from "react-i18next"

import { Header } from "./components";

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen text-primary-light dark:bg-[#121212] dark:text-primary-dark">
      <Header />
      <h1 className="text-3xl font-bold text-center dark:text-white">
        {'Hallo Welt! '}{t('title')}
      </h1>
    </div>
  )
}

export default App
