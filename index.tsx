import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const services = [
    "Video Production",
    "Live Stream",
    "Event Planning, Video Production & MC",
    "Television Program Concept Development",
    "Online Program Concept & Production",
    "Distribution of concept on Digital Platform",
    "Exhibition Coverage",
    "Online Radio",
    "Mall Tv",
];

const portfolioItems = [
    {
        id: 1,
        title: "Kofifiland Brand Production",
        category: "Video Production",
        thumbnailUrl: "https://cdn-kyknet.dstv.com/images/WidgetBilboard/2017/09/21/122078/5/34_Kofifiland_Showpage_Billboard_1600_x_640.jpg",
        imageUrl: "https://cdn-kyknet.dstv.com/images/WidgetBilboard/2017/09/21/122077/5/27_Kofifiland_Showpage_Billboard_1600_x_640.webp",
        description: "We crafted a compelling brand production that encapsulates the client's core values and vision. Through cinematic storytelling and high-quality production, we helped them connect with their audience on an emotional level, boosting brand engagement by 40%."
    },
    {
        id: 2,
        title: "Radio Live Stream",
        category: "Live Stream",
        thumbnailUrl: "https://i.ytimg.com/vi/CGDeeVAKhQ0/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgWyhbMA8=&rs=AOn4CLCuw2x-yu264O1-z-Trqopi2_tL3Q",
        imageUrl: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/508010648_9742494515860335_6658750083682569313_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0X-5oopuMc4Q7kNvwHiO4FQ&_nc_oc=AdlbnB9ViBhdT6xNp-XwNRDc8NxpLAyc4djlDjCdDIEgbB7A8UnzkMQnDbFtgj-7pRE&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=voGLbhtlSTxNz_S2tgT6kQ&oh=00_AfWTZ0y4DuS0SHygOcaa3jZhxjVjEFCtR7UJ-NHqM4b04g&oe=68BA1A19",
        description: "Our team provided end-to-end live streaming services for a major live streaming event. We managed a multi-camera setup, ensuring seamless broadcast to a global audience of over 50,000 virtual attendees with crystal-clear audio and video."
    },
    {
        id: 3,
        title: "Music Festival Coverage",
        category: "Event Planning",
        thumbnailUrl: "https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2019/06/14123924/events-in-joburg-16-june.png",
        imageUrl: "https://s3.amazonaws.com/yomzansi.com/wp-content/uploads/2019/06/14123924/events-in-joburg-16-june.png",
        description: "From planning logistics to capturing the vibrant energy of the event, we produced a stunning June 16th youth day for a major music festival. The video garnered over a million views across social media platforms, driving ticket sales for the following year."
    }
];

const pricingPlans = [
    {
        title: "Video and Media Production",
        description: "Depending on the complexity, length, deadline, and a few other factors. Our projects range from:",
        priceRange: "R10 000 to R100 000",
        features: [
            "Video Production",
            "Live Stream",
            "Online Radio",
            "Exhibition Coverage",
            "Mall Tv",
            "Event Planning",
            "Television Program Development",
            "Online Program Production",
            "Digital Platform Distribution",
            "Motion Design",
            "Animation"
        ],
        note: "50% Upfront to get us rolling"
    },
    {
        title: "Graphic and Web Design",
        description: "Depending on the complexity, length, deadline, and a few other factors. Our projects range from:",
        priceRange: "R3000 to R60 000",
        features: [
            "Front End",
            "Back End",
            "Full Stack",
            "UI / UX Design",
            "Graphic Design",
            "App Development",
            "AI Development"
        ],
        note: "50% Upfront to get us rolling"
    }
];

const testimonials = [
    {
        quote: "Ethos Productions delivered a final product that exceeded our wildest expectations. Their team's creativity and professionalism were evident in every step of the process. Highly recommended!",
        name: "Michael Ragebult",
        title: "Founder, Weflow TV."
    },
    {
        quote: "Working with Ethos was an absolute pleasure. They are masters of their craft, turning our vague concept into a compelling visual story. Their attention to detail is second to none.",
        name: "Brendon Carlton",
        title: "Director, Nexus AI Partners."
    }
];

const faqData = [
    {
        question: "What is the first step to start a project with Ethos Productions?",
        answer: "Every great production begins with a solid plan. The first step is for clients to provide a detailed script or a comprehensive brief outlining their vision, goals, and key messages. This ensures we are perfectly aligned before production begins."
    },
    {
        question: "How long does a typical video project take?",
        answer: "Project timelines can vary significantly based on complexity, from a few days for simple shoots to several weeks for large-scale productions. After reviewing your script, we'll provide a detailed production schedule."
    },
    {
        question: "Can you help with scriptwriting and concept development?",
        answer: "While we require a client-provided script to kick things off, our team of creative experts is available to collaborate and refine your concept. We can help polish your script to ensure it's production-ready and will resonate with your audience."
    },
    {
        question: "What are your payment terms?",
        answer: "As noted in our pricing plans, we require a 50% upfront payment to secure booking and initiate the pre-production process. The remaining 50% is due upon final delivery of the project."
    }
];

const Header = () => (
    <header className="header" role="banner">
        <img src="/logo.png" alt="Ethos Productions Logo" className="logo" />
        <nav className="nav" aria-label="Main Navigation">
            <a href="#portfolio">Portfolio</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
);

const Hero = () => (
    <section id="home" className="hero" aria-labelledby="hero-title">
        <video playsInline autoPlay muted loop className="hero-background-video" poster="/Ethos Productions service.jpg">
            <source src="/Ethos Production Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="hero-grid"></div>
        <div className="hero-content">
            <h1 id="hero-title">Ethos Productions</h1>
            <p>Creative Video & Media Solutions</p>
        </div>
    </section>
);

const Portfolio = ({ onProjectSelect }) => (
    <section id="portfolio">
        <div className="container">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">
                A glimpse into the diverse range of projects we've brought to life.
            </p>
            <div className="portfolio-grid">
                {portfolioItems.map(item => (
                    <div className="portfolio-item" key={item.id} onClick={() => onProjectSelect(item)} onKeyDown={(e) => e.key === 'Enter' && onProjectSelect(item)} tabIndex={0} role="button" aria-label={`View details for ${item.title}`}>
                        <img src={item.thumbnailUrl} alt={item.title} />
                        <div className="portfolio-overlay">
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Modal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close project details">&times;</button>
                <img src={project.imageUrl} alt={project.title} className="modal-image" />
                <div className="modal-body">
                    <h3 id="modal-title">{project.title}</h3>
                    <p className="modal-category">{project.category}</p>
                    <p className="modal-description">{project.description}</p>
                </div>
            </div>
        </div>
    );
};

const Services = () => (
    <section id="services">
        <div className="container">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
                We offer a comprehensive range of production services to bring your vision to life, from concept to final distribution.
            </p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <p>{service}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Pricing = () => (
    <section id="pricing">
        <div className="container">
            <p className="section-pre-title">Service and Pricing Architecture</p>
            <h2 className="section-title">Easy, Predictable Plans</h2>
            <div className="pricing-grid">
                {pricingPlans.map(plan => (
                    <div className="pricing-card" key={plan.title}>
                        <h3>{plan.title}</h3>
                        <p className="pricing-description">{plan.description}</p>
                        <p className="price-range">{plan.priceRange}</p>
                        <ul>
                            {plan.features.map(feature => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                        <p className="note">{plan.note}</p>
                        <a href="#contact" className="btn-cta">Get Started</a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section id="testimonials">
        <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
             <p className="section-subtitle">
                We are proud to have collaborated with a diverse range of clients who trust our creative vision and technical expertise.
            </p>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <svg className="testimonial-quote-icon" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"/></svg>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                            <p className="author-name">{testimonial.name}</p>
                            <p className="author-title">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQ = () => (
    <section id="faq">
        <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
                Have questions? We've got answers. Here are some of the most common inquiries we receive from our clients.
            </p>
            <div className="faq-accordion">
                {faqData.map((item, index) => (
                    <details key={index} className="faq-item">
                        <summary className="faq-question">
                            {item.question}
                        </summary>
                        <div className="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
                Ready to start your next project? Contact us today.
            </p>
            <div className="contact-info">
                <a href="tel:0659242933" className="contact-item" aria-label="Call us">
                    <svg viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"></path></svg>
                    <span>065 924 2933</span>
                </a>
                <a href="mailto:info@ethosproductions.co.za" className="contact-item" aria-label="Email us">
                    <svg viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path></svg>
                    <span>info@ethosproductions.co.za</span>
                </a>
                <a href="https://instagram.com/ethosproductions" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="Visit our Instagram">
                    <svg viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path></svg>
                    <span>@ethosproductions</span>
                </a>
                 <a href="https://facebook.com/Ethos-productions" target="_blank" rel="noopener noreferrer" className="contact-item" aria-label="Visit our Facebook">
                    <svg viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.81C10.44 7.31 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>
                    <span>Ethos productions</span>
                </a>
            </div>
            <p className="address">
                Cnr Nasrec & Rand Show, Johannesburg 2000
            </p>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Ethos Productions. All Rights Reserved.</p>
    </footer>
);

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <Header />
            <main role="main">
                <Hero />
                <Portfolio onProjectSelect={setSelectedProject} />
                <Testimonials />
                <Services />
                <Pricing />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);