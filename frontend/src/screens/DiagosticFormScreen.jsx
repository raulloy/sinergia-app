import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function DiagosticFormScreen() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress, cartItems },
  } = state;

  const [discussionFrequency, setDiscussionFrequency] = useState(
    shippingAddress.discussionFrequency || ''
  );
  const [feedbackFrequency, setFeedbackFrequency] = useState(
    shippingAddress.feedbackFrequency || ''
  );
  const [teamAwareness, setTeamAwareness] = useState(
    shippingAddress.teamAwareness || ''
  );
  const [teamApologies, setTeamApologies] = useState(
    shippingAddress.teamApologies || ''
  );
  const [teamSacrifice, setTeamSacrifice] = useState(
    shippingAddress.teamSacrifice || ''
  );
  const [teamConfessions, setTeamConfessions] = useState(
    shippingAddress.teamConfessions || ''
  );
  const [teamMeetings, setTeamMeetings] = useState(
    shippingAddress.teamMeetings || ''
  );
  const [teamCommitment, setTeamCommitment] = useState(
    shippingAddress.teamCommitment || ''
  );
  const [teamMoral, setTeamMoral] = useState(shippingAddress.teamMoral || '');
  const [teamDifficultIssues, setTeamDifficultIssues] = useState(
    shippingAddress.teamDifficultIssues || ''
  );
  const [teamConcern, setTeamConcern] = useState(
    shippingAddress.teamConcern || ''
  );
  const [teamPersonalLife, setTeamPersonalLife] = useState(
    shippingAddress.teamPersonalLife || ''
  );
  const [teamResolution, setTeamResolution] = useState(
    shippingAddress.teamResolution || ''
  );
  const [teamChallenges, setTeamChallenges] = useState(
    shippingAddress.teamChallenges || ''
  );
  const [teamContributions, setTeamContributions] = useState(
    shippingAddress.teamContributions || ''
  );

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/diagnostic-form');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        discussionFrequency,
        feedbackFrequency,
        teamAwareness,
        teamApologies,
        teamSacrifice,
        teamConfessions,
        teamMeetings,
        teamCommitment,
        teamMoral,
        teamDifficultIssues,
        teamConcern,
        teamPersonalLife,
        teamResolution,
        teamChallenges,
        teamContributions,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        discussionFrequency,
        feedbackFrequency,
        teamAwareness,
        teamApologies,
        teamSacrifice,
        teamConfessions,
        teamMeetings,
        teamCommitment,
        teamMoral,
        teamDifficultIssues,
        teamConcern,
        teamPersonalLife,
        teamResolution,
        teamChallenges,
        teamContributions,
      })
    );
    navigate('/results');
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">{cartItems[0].name}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="teamDiscussion">
            <Form.Label>
              1. Los miembros del equipo discuten los problemas apasionadamente
              y sin prevenciones.
            </Form.Label>
            <Form.Control
              as="select"
              value={discussionFrequency}
              onChange={(e) => setDiscussionFrequency(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamFeedback">
            <Form.Label>
              2. Los miembros del equipo señalan las deficiencias y conductas
              improductivas de cada uno.
            </Form.Label>
            <Form.Control
              as="select"
              value={feedbackFrequency}
              onChange={(e) => setFeedbackFrequency(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamAwareness">
            <Form.Label>
              3. Los miembros del equipo saben en qué están trabajando los otros
              y cómo contribuyen al bien colectivo del equipo.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamAwareness}
              onChange={(e) => setTeamAwareness(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamApologies">
            <Form.Label>
              4. Los miembros del equipo se disculpan en el acto y con toda
              sinceridad cuando dicen o hacen algo inadecuado o posiblemente
              perjudicial para el equipo.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamApologies}
              onChange={(e) => setTeamApologies(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamSacrifice">
            <Form.Label>
              5. Los miembros del equipo están dispuestos a sacrificar (por
              ejemplo presupuesto, carrera y puestos de trabajo) en sus
              departamentos o áreas especializadas por el bien del equipo.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamSacrifice}
              onChange={(e) => setTeamSacrifice(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamConfessions">
            <Form.Label>
              6. Los miembros del equipo confiesan abiertamente sus debilidades
              y errores.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamConfessions}
              onChange={(e) => setTeamConfessions(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamMeetings">
            <Form.Label>
              7. Las reuniones del equipo son apasionantes, no aburridas.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamMeetings}
              onChange={(e) => setTeamMeetings(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamCommitment">
            <Form.Label>
              8. Los miembros del equipo se marchan de las reuniones confiados
              en que sus compañeros están por completo comprometidos con las
              decisiones que acordaron, aunque hubiera desacuerdo inicialmente.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamCommitment}
              onChange={(e) => setTeamCommitment(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamMoral">
            <Form.Label>
              9. La moral se deteriora significativamente cuando no se logran
              las metas del equipo.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamMoral}
              onChange={(e) => setTeamMoral(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamDifficultIssues">
            <Form.Label>
              10. Durante las reuniones del equipo, los asuntos más importantes
              y difíciles se ponen en la mesa para ser resueltos.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamDifficultIssues}
              onChange={(e) => setTeamDifficultIssues(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamConcern">
            <Form.Label>
              11. A los miembros del equipo les preocupa seriamente la
              perspectiva de defraudar a sus compañeros.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamConcern}
              onChange={(e) => setTeamConcern(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamPersonalLife">
            <Form.Label>
              12. Los miembros del equipo conocen la vida personal de cada uno y
              se sienten cómodos conversando sobre ella.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamPersonalLife}
              onChange={(e) => setTeamPersonalLife(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamResolution">
            <Form.Label>
              13. Los miembros del equipo terminan sus debates con resoluciones
              claras y específicas y la decisión de actuar.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamResolution}
              onChange={(e) => setTeamResolution(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamChallenges">
            <Form.Label>
              14. Los miembros del equipo se desafían unos a otros acerca de sus
              planes y planteamientos.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamChallenges}
              onChange={(e) => setTeamChallenges(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="teamContributions">
            <Form.Label>
              15. Los miembros del equipo no tienen prisa en destacar sus
              propias contribuciones pero señalan las de los demás sin pérdida
              de tiempo.
            </Form.Label>
            <Form.Control
              as="select"
              value={teamContributions}
              onChange={(e) => setTeamContributions(e.target.value)}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Siempre">Siempre</option>
              <option value="Frecuente">Frecuente</option>
              <option value="A veces">A veces</option>
              <option value="Casi nunca">Casi nunca</option>
              <option value="Nunca">Nunca</option>
            </Form.Control>
          </Form.Group>

          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
