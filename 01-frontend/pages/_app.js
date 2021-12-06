import 'tailwindcss/tailwind.css';
import "../styles/index.scss";
import { MoralisProvider } from "react-moralis";
//redux
// import { createWrapper } from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
// import store from '../redux/store';
 
function MyApp({ Component, pageProps }) {
  return (
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APP} serverUrl={process.env.NEXT_PUBLIC_URL}>
            <Component {...pageProps} />
      </MoralisProvider>
  );
}

export default MyApp;

// const makeStore = ()=>store;
// const wrapper = createWrapper(makeStore);

// export default wrapper.withRedux(MyApp);   
