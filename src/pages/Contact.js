import Card from "../components/Card";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">
        <a name="Contact">Contact</a>
      </h1>
      <p>
        <a href="mailto:seaofiandme35@gmail.com" className="email-link">
          📧 seaofiandme35@gmail.com
        </a>
      </p>
      <div className="contact-card-wrapper">
        <Card className="contact-card">
          <div className="contents">
            <h3>Name</h3>
            <input type="text" />
            <h3>Email</h3>
            <input type="email" />
            <h3>Message</h3>
            <textarea />
          </div>
          <div className="send-btn">
            <button>Send</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
