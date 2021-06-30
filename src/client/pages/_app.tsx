import App, { AppInitialProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { AppState, wrapper } from '../redux/store';
import { Store } from '@reduxjs/toolkit';
import NProgress from 'nprogress';
import Router from 'next/router';
import { Navigation } from '../app/components/navigation';

interface MyAppProps extends AppInitialProps {
  pageProps: {
    store: Store<AppState>;
  };
}
class NextApp extends App<MyAppProps> {
  public static getInitialProps = wrapper.getInitialAppProps(
    (store) => async ({ Component, ctx }) => {
      const { getInitialProps } = Component;
      const initialProps =
        getInitialProps && (await getInitialProps({ ...ctx, store }));

      return {
        pageProps: {
          ...initialProps,
          pathname: ctx.pathname,
        },
      };
    },
  );

  componentDidMount() {
    NProgress.configure({ showSpinner: false });
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', () => NProgress.start());
    Router.events.off('routeChangeComplete', () => NProgress.done());
    Router.events.off('routeChangeError', () => NProgress.done());
  }

  render() {
    const { Component, pageProps, router } = this.props;
    console.log(this.props);
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Next-Antd-Scaffold</title>
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/ico"
          />
        </Head>
        <GlobalStyle />
        <Navigation />
        <div className="main">
          <Component {...pageProps} router={router} />
        </div>
      </>
    );
  }
}

export default wrapper.withRedux(NextApp);

const GlobalStyle = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: #303030;
    position: fixed;
    z-index: 999999999999;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`;
