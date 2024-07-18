import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Fragment } from 'react';

import Alert from './components/Alert';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContextProvider from './context';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Provider store={store}>
                                        <ContextProvider>
                                            <Layout>
                                                <Page />
                                                <Loading />
                                                <Alert />
                                            </Layout>
                                        </ContextProvider>
                                    </Provider>
                                }
                            />
                        );
                    })}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
