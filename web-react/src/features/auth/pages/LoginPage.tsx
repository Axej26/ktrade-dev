import LoginForm from "../components/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="branding-container">
        <h2 className="project-name">Bienvenido a <span className="highlight">K-Trade</span></h2>
        <p className="project-desc">Tu plataforma de comercio internacional</p>
      </div>
      <LoginForm />
    </div>
  );
}
