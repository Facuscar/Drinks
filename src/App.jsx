import { Container } from 'react-bootstrap';
import DrinksForm from '../components/Form';
import { CategoryProvider } from '../context/CategoryProvider';

function App() {

  return (
    <CategoryProvider>
      <header className="py-5">
        <h1>Drinks!</h1>
      </header>

      <Container className='mt-5'>
        <DrinksForm />
      </Container>
    </CategoryProvider>
  )
}

export default App
