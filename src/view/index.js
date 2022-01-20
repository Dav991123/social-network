import React, { Suspense, useState } from 'react';
import App from './app';
import Loading from '../view/components/loading';
import { BrowserRouter } from 'react-router-dom';
import { TranslationContext } from '../context/translationContext';

const AppWrapper = () => {
    const [ translations, setTranslations ] = useState({});

    return (
        <TranslationContext.Provider value={translations}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </TranslationContext.Provider>
    )
};

export default AppWrapper;