import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/language-selector';

function App() {
  const { t } = useTranslation();
  const {line1,line2} = t("description", {author: "Ridhwan Athaullah"});

  return (
    <div className='Container'>
      <img src="/src/assets/react.svg" alt="Welcome Logo" style={{ width: 64, height: 64, marginBottom: 12, marginTop: 8 }} />
      <LanguageSelector />
      <h1>{t("greetings")}</h1>
      <div style={{ color: '#6366f1', fontWeight: 500, fontSize: '1.1rem', marginBottom: 8, marginTop: -8, textAlign: 'center' }}>
        {t('subtitle', 'Your multilingual experience starts here!')}
      </div>
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
