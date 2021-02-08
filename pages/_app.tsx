import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AppStateProvider } from '../utils/AppContext';

const MyApp = ({ Component, pageProps }) => {
  return (
		<AppStateProvider>
			<Component {...pageProps} />
		</AppStateProvider>
	)
}

export default MyApp
