import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Raul Loyola',
      email: 'raul.loy@gmail.com',
      password: bcrypt.hashSync('1995TkdPk'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  diagnoses: [
    {
      name: 'Equipo de trabajo. 15 enfermedades',
      slug: 'equipo-trabajo-15-enfermedades',
      category: 'Equipos',
      image: '/images/teamwork.jpg',
      availability: 1,
      duration: '10 min',
      shortDescription:
        'Identificar cómo estás en cuanto a algunos temas sobre el Trabajo en Equipo, que te ayudarán a tener claridad en que punto estás.',
      description:
        '¡Bienvenido/a a esta encuesta sobre el trabajo en equipo en el entorno laboral! El objetivo principal de esta encuesta es proporcionarte una visión más clara de tu estilo y habilidades en el trabajo en equipo. Reconocer los puntos fuertes y las áreas de mejora en este aspecto es crucial para fomentar un ambiente colaborativo y productivo en cualquier organización.',
      instructions:
        'Utilice la escala abajo indicada para señalar cómo se aplica cada afirmación a su equipo. Es importante evaluarlo que realmente sucede, no lo que deseo suceda y no pensar demasiado las respuestas. Siempre, Frecuente, A veces, Casi nunca, Nunca',
    },
    {
      name: 'Clima laboral',
      slug: 'clima-laboral-organizacional',
      category: 'Organización',
      image: '/images/company.jpg',
      availability: 0,
      duration: '18 min',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quos.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore praesentium sint facilis cupiditate iusto. Quas assumenda sit commodi quod?',
      instructions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus sed fugiat corporis nobis est, eos adipisci provident distinctio dicta qui ratione porro illum. Ullam aliquam rerum temporibus aspernatur expedita quasi ab fugit, quibusdam est aliquid libero velit eaque minima.',
    },
    {
      name: 'Liderazgo',
      slug: 'liderazgo',
      category: 'Individual',
      image: '/images/leadership.jpg',
      availability: 0,
      duration: '12 min',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quos.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore praesentium sint facilis cupiditate iusto. Quas assumenda sit commodi quod?',
      instructions:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus sed fugiat corporis nobis est, eos adipisci provident distinctio dicta qui ratione porro illum. Ullam aliquam rerum temporibus aspernatur expedita quasi ab fugit, quibusdam est aliquid libero velit eaque minima.',
    },
  ],
};

export default data;
