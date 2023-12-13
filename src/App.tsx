import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation();

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center">
        {'Hallo Welt! '}{t('title')}
      </h1>
    </div>
  )
}

export default App
