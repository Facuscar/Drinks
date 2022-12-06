import { useRef, useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';

const DrinksForm = () => {

    const nameRef = useRef();
    const categoryRef = useRef();

    const [alert, setAlert] = useState('');
    const { categories } = useCategories();

    const handleSubmit = (e) => {
        e.preventDefault();

        const search = {
            name: nameRef.current.value,
            categories: categoryRef.current.value,
        }

        if(Object.values(search).includes('')) {
            setAlert('All fields are required');
            return
        }

        setTimeout(() => {
            setAlert('');
        }, 3000);

    }

    return (
        <Form onSubmit={handleSubmit} >
            { alert && <Alert variant='danger'>{alert}</Alert> }
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='name'>Drink name</Form.Label>
                        <Form.Control type='text' placeholder='Tequila' name='name' id='name' ref={nameRef} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                        <Form.Label htmlFor='name'>Category name</Form.Label>
                        <Form.Select id='category' name='category' ref={categoryRef}>
                            <option value="">- Choose a category -</option>
                            { categories && categories.map(category => (
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='justify-content-end mt-4'>
                <Col md={3}>
                    <Button variant='danger' className='text-uppercase w-100' type='submit' >
                        Search Drinks
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default DrinksForm;