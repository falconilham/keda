import 'antd/dist/reset.css';
import { Layout } from 'antd'
import { Navigation, Header, Pricing, About, Contact } from './Components';
import './App.css';
import image1 from './assets/blueShape1.png'

function App() {
  return (
    <Layout style={styles.container}>
      <Navigation />
      <Header />
      <About />
      <Pricing />
      <Contact />
    </Layout>
  );
}

const styles = {
  container: {
    padding: '1rem 1rem',
    backgroundImage: `url(${image1})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '100vh',
    backgroundPosition: 'left bottom'
  }
}

export default App;
