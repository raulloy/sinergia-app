import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, diagnostic: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function DiagnosticScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, diagnostic }, dispatch] = useReducer(reducer, {
    diagnostic: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/diagnoses/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === diagnostic._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...diagnostic, quantity },
    });
    navigate('/instructions');
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="diagnostic-container">
      <Row>
        <Col lg={5} className="diagnostic-img-container">
          <img
            className="img-large"
            src={diagnostic.image}
            alt={diagnostic.name}
          ></img>
        </Col>
        <Col lg={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{diagnostic.name}</title>
              </Helmet>
              <h1>{diagnostic.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>Categoría : {diagnostic.category}</ListGroup.Item>
            <ListGroup.Item>
              Descripción:
              <p>{diagnostic.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Duración:</Col>
                    <Col>{diagnostic.duration}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Estatus:</Col>
                    <Col>
                      {diagnostic.availability > 0 ? (
                        <Badge bg="success">Disponible</Badge>
                      ) : (
                        <Badge bg="danger">No disponible</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {diagnostic.availability > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        onClick={addToCartHandler}
                        variant="outline-secondary"
                      >
                        Indicaciones
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default DiagnosticScreen;
