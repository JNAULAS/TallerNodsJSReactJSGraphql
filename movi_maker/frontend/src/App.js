import './App.css';
import AddMovie from './components/AddMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/movies';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Header/>
      <Movies/>
      <AddMovie/>
      <Footer/>
      </QueryClientProvider>
    </>
  );
}

export default App;
