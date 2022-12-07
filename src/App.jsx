import { Container } from 'react-bootstrap';
import DrinksForm from '../components/Form';
import DrinkList from '../components/DrinkList';
import { CategoryProvider } from '../context/CategoryProvider';
import { DrinksProvider } from '../context/DrinkProvider';

function App() {

  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drinks!</h1>
        </header>

        <Container className='mt-5'>
          <DrinksForm />
          <DrinkList />
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  )
}

export default App
