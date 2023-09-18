import store from '@/redux/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/global.css';
import { Layout } from '@/components/layout';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    weight: 'variable',
    subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout font={montserrat}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
