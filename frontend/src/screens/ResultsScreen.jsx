import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ResultsScreen() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { cart, userInfo } = state;

  const response = cart.shippingAddress;

  const finishHandler = async () => {
    navigate('/');
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  // Properties with index 4, 6, and 12
  const propertiesSet1 = [
    response['teamSacrifice'],
    response['teamMeetings'],
    response['teamContributions'],
  ];

  // Properties with index 1, 7, and 10
  const propertiesSet2 = [
    response['feedbackFrequency'],
    response['teamApologies'],
    response['teamDifficultIssues'],
  ];

  // Properties with index 3, 8, and 13
  const propertiesSet3 = [
    response['teamAwareness'],
    response['teamCommitment'],
    response['teamResolution'],
  ];

  // Properties with index 2, 11, and 14
  const propertiesSet4 = [
    response['feedbackFrequency'],
    response['teamConcern'],
    response['teamChallenges'],
  ];

  // Properties with index 5, 9, and 15
  const propertiesSet5 = [
    response['teamSacrifice'],
    response['teamMoral'],
    response['teamContributions'],
  ];

  // Function to calculate the sum based on the given parameters
  const calculateSum = (properties, parameterMapping) => {
    let sum = 0;
    properties.forEach((property) => {
      sum += parameterMapping[property];
    });
    return sum;
  };

  // Parameter mapping
  const parameterMapping = {
    Siempre: 5,
    Frecuente: 4,
    'A veces': 3,
    'Casi nunca': 2,
    Nunca: 1,
  };

  const radarData = {
    labels: [
      'Ausencia de confianza',
      'Temor al conflicto',
      'Falta de compromiso',
      'Evitar responsabilidades',
      'Falta de enfoque a resultados',
    ],
    datasets: [
      {
        label: 'Equipo de trabajo. 15 disfunciones',
        data: [
          calculateSum(propertiesSet1, parameterMapping),
          calculateSum(propertiesSet2, parameterMapping),
          calculateSum(propertiesSet3, parameterMapping),
          calculateSum(propertiesSet4, parameterMapping),
          calculateSum(propertiesSet5, parameterMapping),
        ],
        backgroundColor: 'rgba(0, 123, 255, 0.4)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  const radarOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 15, // Adjust the max value as desired
        stepSize: 5,
      },
    },
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <Helmet>
        <title>Resultados</title>
      </Helmet>
      <h1 className="my-3">Tus resultados</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Preguntas por categoría</Card.Title> <br />
              <Card.Text>
                <strong>Ausencia de confianza:</strong> 4, 6 y 12. <br />
                <strong>Temor al conflicto:</strong> 1, 7 y 10 <br />
                <strong>Falta de compromiso:</strong> 3, 8 y 13 <br />
                <strong>Evitar responsabilidades:</strong> 2, 11 y 14. <br />
                <strong>Falta de enfoque a resultados: </strong> 5, 9 y 15.
              </Card.Text>{' '}
              <br />
              {/* <Link to="/diagnostic-form">Edit</Link> */}
              Independientemente de la puntuación, es importante tener presente
              que un equipo requiere constante trabajo, porque sin él incluso
              los mejores son presa de las disfunciones
            </Card.Body>
          </Card>

          {/* <Card className="mb-3">
            <Card.Body>
              <Card.Title>Resultados</Card.Title>
              <Card.Text>
                <strong>Ausencia de confianza:</strong>{' '}
                {calculateSum(propertiesSet1, parameterMapping)} <br />
                <strong>Temor al conflicto:</strong>{' '}
                {calculateSum(propertiesSet2, parameterMapping)} <br />
                <strong>Falta de compromiso:</strong>{' '}
                {calculateSum(propertiesSet3, parameterMapping)} <br />
                <strong>Evitar responsabilidades:</strong>{' '}
                {calculateSum(propertiesSet4, parameterMapping)} <br />
                <strong>Falta de enfoque a resultados: </strong>{' '}
                {calculateSum(propertiesSet5, parameterMapping)}
              </Card.Text>
              <Link to="/diagnostic-form">Editar</Link>
            </Card.Body>
          </Card> */}

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Diagnóstico</Card.Title>
              <ListGroup variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        {/* <Link to={`/diagnostic/${item.slug}`}>{item.name}</Link> */}
                      </Col>
                      <Col md={6}>
                        <span>{item.description}</span>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {/* <Link to="/diagnostic-form">Edit</Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Gráfica</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <div>
                        <Radar data={radarData} options={radarOptions} />
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={10}>Ausencia de confianza:</Col>
                    <Col md={2}>
                      {calculateSum(propertiesSet1, parameterMapping)}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={10}>Temor al conflicto:</Col>
                    <Col md={2}>
                      {calculateSum(propertiesSet2, parameterMapping)}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={10}>Falta de compromiso:</Col>
                    <Col md={2}>
                      {calculateSum(propertiesSet3, parameterMapping)}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={10}>Evitar responsabilidades:</Col>
                    <Col md={2}>
                      {calculateSum(propertiesSet4, parameterMapping)}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col md={10}>Falta de enfoque a resultados:</Col>
                    <Col md={2}>
                      {calculateSum(propertiesSet5, parameterMapping)}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      onClick={finishHandler}
                      disabled={cart.cartItems.length === 0}
                    >
                      Finalizar
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
