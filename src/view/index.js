import React, { Suspense, useState } from 'react';
import App from './app';
import { Provider, useDispatch } from 'react-redux';
import store from '../stateManagement/store';
import Loading from '../view/components/loading';
import { BrowserRouter } from 'react-router-dom';
import { TranslationContext } from '../context/translationContext';

const AppWrapper = () => {
    const [translations, setTranslations] = useState({});

    return (
        <TranslationContext.Provider value={translations}>
            <Provider store={store}>
                <BrowserRouter>
                    <Suspense fallback={<Loading/>}>
                        <App/>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        </TranslationContext.Provider>
    );
};

export default AppWrapper;
