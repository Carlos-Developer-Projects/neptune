import 'tailwindcss/tailwind.css';
import "../styles/index.scss";
import { Provider } from 'react-redux';
import { MoralisProvider } from "react-moralis";
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
 
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APP} serverUrl={process.env.NEXT_PUBLIC_URL}>
            <Component {...pageProps} />
      </MoralisProvider>
    </Provider>
  );
}

const makeStore = ()=>store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);   
