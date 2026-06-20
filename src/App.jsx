import { useState } from 'react';
import FeatureCard from './components/FeatureCard.jsx';

const features = [
  {
    title: 'Reparaciones a domicilio',
    description: 'Soluciones rápidas para electrodomésticos, plomería, electricidad y detalles menores sin salir de casa.',
  },
  {
    title: 'Mejoras en el hogar',
    description: 'Transformamos espacios con ideas prácticas y resultados modernos que facilitan tu vida diaria.',
  },
  {
    title: 'Atención personalizada',
    description: 'Asesoría amable y cercana para que cada problema familiar se resuelva con confianza y claridad.',
  },
];

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent('Agendar cita JM Solution');
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nProblema del hogar: ${problem}`
    );
    window.location.href = `mailto:contacto@jmsolution.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <section className="content-section" id="features">
          <div className="section-intro">
            <span className="eyebrow">Soluciones en casa</span>
            <h2>Servicios diseñados para tu hogar y tranquilidad</h2>
            <p>
              JM Solution ayuda a amas de casa y personas del hogar con soluciones prácticas,
              seguras y modernas para cualquier desperfecto o mejora residencial.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((item, index) => (
              <FeatureCard key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        <section className="content-section alternate" id="how-it-works">
          <div className="section-intro">
            <span className="eyebrow">Cómo funciona</span>
            <h2>De tu problema al servicio en pasos muy simples</h2>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <strong>1. Cuenta tu problema</strong>
              <p>Describe el inconveniente del hogar en el formulario para que nuestro equipo lo revise.</p>
            </article>
            <article className="step-card">
              <strong>2. Recibe confirmación</strong>
              <p>Te contactamos por correo para definir fecha, hora y detalles del servicio.</p>
            </article>
            <article className="step-card">
              <strong>3. Nosotros nos encargamos</strong>
              <p>Un experto llega a tu hogar y soluciona la situación con eficiencia y seguridad.</p>
            </article>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-intro">
            <span className="eyebrow">Agenda tu cita</span>
            <h2>Cuéntanos qué necesitas y nosotros nos encargamos</h2>
            <p>Completa el formulario y se generará un correo para que tomemos manos a la obra.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input
                type="text"
                value={name}
                placeholder="Tu nombre"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Correo electrónico
              <input
                type="email"
                value={email}
                placeholder="ejemplo@correo.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Problema en el hogar
              <textarea
                value={problem}
                placeholder="Describe el problema que necesitas resolver"
                onChange={(e) => setProblem(e.target.value)}
                required
              />
            </label>
            <button type="submit" className="primary-button">
              Enviar solicitud
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="page-header">
      <div className="brand">JM Solution</div>
      <nav>
        <a href="#features">Servicios</a>
        <a href="#how-it-works">Proceso</a>
        <a href="#contact">Cita</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="eyebrow">JM Solution</span>
        <h1>Soluciones en casa para que vivas con calma</h1>
        <p>
          Servicios confiables y rápidos para amas de casa y personas del hogar. Agenda una cita, describe el problema
          y recibe atención rápida desde el primer contacto.
        </p>
        <a href="#contact" className="primary-button hero-button">
          Agendar cita
        </a>
      </div>
      <div className="hero-visual">
        <div className="visual-card">
          <p>Reparación · Mantenimiento · Asesoría</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>JM Solution · Soluciones en casa · contacto@jmsolution.com</p>
      <p>Diseño moderno, minimalista y enfocado en tu hogar.</p>
    </footer>
  );
}
