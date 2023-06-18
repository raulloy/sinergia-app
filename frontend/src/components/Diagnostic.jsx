import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

const Diagnostic = (props) => {
  const navigate = useNavigate();
  const { diagnostic } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === diagnostic._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/diagnoses/${item._id}`);
    if (data.availability === 0) {
      window.alert('Lo sentimos, este diagnóstico no está disponible');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
    navigate(`/diagnostic/${diagnostic.slug}`);
  };

  return (
    <Card className="diagnostic">
      <Link to={`/diagnostic/${diagnostic.slug}`} className="link-style">
        <img
          src={diagnostic.image}
          className="card-img-top"
          alt={diagnostic.name}
        />
      </Link>
      <Card.Body className="diagnostic-info">
        <Link to={`/diagnostic/${diagnostic.slug}`} className="link-style">
          <Card.Title className="card-title">{diagnostic.name}</Card.Title>
        </Link>
        <Card.Text>{diagnostic.shortDescription}</Card.Text>
        {diagnostic.availability === 0 ? (
          <Button variant="light" disabled>
            No disponible
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(diagnostic)}
            variant="outline-secondary"
          >
            Agregar a lista de diagnósticos
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Diagnostic;
