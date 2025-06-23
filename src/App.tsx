import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/language-selector';

function App() {
  const { t } = useTranslation();
  const {line1,line2} = t("description", {author: "Ridhwan Athaullah"});

  return (
    <div className='Container'>
      <LanguageSelector />
      <h1>{t("greetings")}</h1>

      <Trans
        i18nKey={line1}
        values={{ author: "Ridhwan Athaullah" }}
        components={{
          1: <b /> //basically bold
        }}
        />

      
      <p>{line2}</p>
    </div>
  )
}
 
export default App
