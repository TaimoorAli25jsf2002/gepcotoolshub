import { ArrowUpRight } from "lucide-react";

export default function AppCard({ app }) {
const openApp = () => {
  const path = app.path.replace(/^\/+/, "");
  window.location.href = `${import.meta.env.BASE_URL}${path}`;
};

  return (
    <article className="card">
      <div className="card-top">
        <div className="app-icon">{app.icon}</div>
        <span className="category-label">{app.category}</span>
      </div>

      <div className="card-body">
        <h3>{app.name}</h3>
        <p>{app.description}</p>
      </div>

      <button className="open-button" onClick={openApp}>
        Open tool
        <ArrowUpRight size={17} />
      </button>
    </article>
  );
}