import store from '@/redux/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/global.css';
import { Layout } from '@/components/layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
