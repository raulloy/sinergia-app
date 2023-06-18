import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function InstructionsScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/diagnostic-form');
  };

  return (
    <div>
      <Helmet>
        <title>Instrucciones</title>
      </Helmet>
      <h1>Indicaciones antes de comenzar</h1>
      <Row>
        <Col md={12}>
          {cartItems.length === 0 ? (
            <MessageBox>
              No has seleccionado ningún diagnóstico.{'  '}
              <Link to="/">Ver diagnósticos</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center diagnostic-instructions">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link
                        to={`/diagnostic/${item.slug}`}
                        className="link-style"
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={5} className="diagnostic-instructions-item">
                      <strong>Indicaciones: </strong> {item.instructions}
                    </Col>
                    <Col md={2}>
                      <Button
                        onClick={checkoutHandler}
                        variant="outline-secondary"
                      >
                        Comenzar
                      </Button>
                    </Col>
                    <Col md={1}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </div>
  );
}
