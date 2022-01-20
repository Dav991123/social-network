import { useContext } from 'react';
import { TranslationContext } from '../context/translationContext';

const useTranslation = () => {
    const translations = useContext(TranslationContext);
    return key => Object.keys(translations).length && translations[key] ? translations[key] : key;
}

export default useTranslation;