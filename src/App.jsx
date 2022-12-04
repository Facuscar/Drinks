import { Container } from 'react-bootstrap';
import DrinksForm from '../components/Form';

function App() {

  return (
    <>
      <header className="py-5">
        <h1>Drinks!</h1>
      </header>

      <Container className='mt-5'>
        <DrinksForm />
      </Container>
    </>
  )
}

export default App
