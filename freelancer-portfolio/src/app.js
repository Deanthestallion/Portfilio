import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './styles/main.css';

const Navbar = ({ onNavClick }) => (
    <nav className="navbar">
        <div className="logo">Dean</div>
        <ul className="nav-links">
            <li><a href="#about" onClick={onNavClick}>About</a></li>
            <li><a href="#services" onClick={onNavClick}>Services</a></li>
            <li><a href="#portfolio" onClick={onNavClick}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={onNavClick}>Testimonials</a></li>
            <li><a href="#contact" onClick={onNavClick}>Contact</a></li>
        </ul>
    </nav>
);

const Hero = () => (
    <section className="hero">
        <h1>Hello, I'm <span className="highlight">Dean</span></h1>
        <p className="subtitle">Web Developer & AI Automation Expert</p>
        <div className="hero-links">
            <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer" className="cta-btn">Upwork</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">LinkedIn</a>
            <a href="#contact" className="cta-btn">Hire Me</a>
        </div>
    </section>
);

const About = React.forwardRef((props, ref) => (
    <section id="about" className="about-section" ref={ref}>
        <h2>About Me</h2>
        <p>
            Hi! I'm Dean, a dedicated Web Developer and AI Automation Expert. I specialize in building modern, responsive websites and automating business processes using the latest AI technologies. With a strong presence on Upwork and LinkedIn, I help clients streamline their operations and create impactful digital experiences.
        </p>
        <ul className="about-highlights">
            <li>✔ 5+ years of experience in web development</li>
            <li>✔ Expert in AI automation, bots, and workflow optimization</li>
            <li>✔ Proficient in HTML, CSS, JavaScript, Python, React, and Node.js</li>
            <li>✔ Excellent communication and project management skills</li>
        </ul>
    </section>
));

const Services = React.forwardRef((props, ref) => (
    <section id="services" className="services-section" ref={ref}>
        <h2>Services</h2>
        <div className="services-list">
            <div className="service-card">
                <h3>Web Development</h3>
                <p>Custom websites, web apps, and landing pages using modern technologies.</p>
            </div>
            <div className="service-card">
                <h3>AI Automation</h3>
                <p>Automate repetitive tasks, integrate AI tools, and optimize workflows for efficiency.</p>
            </div>
            <div className="service-card">
                <h3>UI/UX Design</h3>
                <p>Beautiful, intuitive, and user-centered designs for web and mobile.</p>
            </div>
            <div className="service-card">
                <h3>Consulting</h3>
                <p>Expert advice on digital transformation, automation, and web strategy.</p>
            </div>
        </div>
    </section>
));

const Portfolio = React.forwardRef((props, ref) => (
    <section id="portfolio" className="portfolio-section" ref={ref}>
        <h2>Portfolio</h2>
        <div className="portfolio-list">
            <div className="portfolio-item">
                <img src="https://via.placeholder.com/300x200" alt="AI Chatbot Project" />
                <h4>AI Chatbot Integration</h4>
                <p>Developed a custom AI chatbot for a client, automating customer support and increasing engagement.</p>
            </div>
            <div className="portfolio-item">
                <img src="https://via.placeholder.com/300x200" alt="Automation Dashboard" />
                <h4>Automation Dashboard</h4>
                <p>Built a dashboard to automate business workflows, saving hours of manual work weekly.</p>
            </div>
            <div className="portfolio-item">
                <img src="https://via.placeholder.com/300x200" alt="Modern Web App" />
                <h4>Modern Web Application</h4>
                <p>Created a responsive web app for a startup, featuring real-time data and seamless UX.</p>
            </div>
        </div>
    </section>
));

const Testimonials = React.forwardRef((props, ref) => (
    <section id="testimonials" className="testimonials-section" ref={ref}>
        <h2>Testimonials</h2>
        <div className="testimonials-list">
            <blockquote>
                "Dean automated our workflow and built a beautiful website. Highly recommended!"
                <span>- Sarah K., Upwork Client</span>
            </blockquote>
            <blockquote>
                "Professional, fast, and knowledgeable in both web and AI automation."
                <span>- Michael T., LinkedIn</span>
            </blockquote>
        </div>
    </section>
));

const Contact = React.forwardRef((props, ref) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (form.name && form.email && form.message) {
            setSubmitted(true);
            setForm({ name: '', email: '', message: '' });
        }
    };

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <h2>Contact Me</h2>
            {submitted && <div style={{ color: "#00b894", marginBottom: "1rem" }}>Thank you for your message!</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-links">
                <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">Upwork Profile</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
        </section>
    );
});

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2025 Dean. All rights reserved.</p>
    </footer>
);

const App = () => {
    // Refs for smooth scrolling
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);

    const handleNavClick = (e) => {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const section = {
                '#about': aboutRef,
                '#services': servicesRef,
                '#portfolio': portfolioRef,
                '#testimonials': testimonialsRef,
                '#contact': contactRef
            }[href];
            if (section && section.current) {
                section.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <header className="header">
                <Navbar onNavClick={handleNavClick} />
                <Hero />
            </header>
            <main>
                <About ref={aboutRef} />
                <Services ref={servicesRef} />
                <Portfolio ref={portfolioRef} />
                <Testimonials ref={testimonialsRef} />
                <Contact ref={contactRef} />
            </main>
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;