import { useMemo, useState } from "react";
import { Search, Moon, Sun, Wrench, ArrowUpRight } from "lucide-react";
import apps from "./data/apps";
import AppCard from "./components/AppCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [dark, setDark] = useState(false);

  const categories = ["All", ...new Set(apps.map((app) => app.category))];

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();

    return apps.filter((app) => {
      const matchesCategory =
        category === "All" || app.category === category;

      const matchesSearch =
        !q ||
        [app.name, app.description, app.category, ...(app.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">
              <Wrench size={22} />
            </div>
            <div>
              <h1>GEPCO Tools Hub</h1>
              {/* <p>Revenue & office utility tools</p> */}
            </div>
          </div>

          <button
            className="theme-button"
            onClick={() => setDark((value) => !value)}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={25} /> : <Moon size={25} />}
          </button>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <span className="eyebrow">UTILITY DASHBOARD</span>
            <h2>All tools, in one place.</h2>
            <p>
              GEPCO Revenue Office Tools Built by Taimoor Ali.
            </p>
          </div>

          <div className="tool-count">
            <strong>{apps.length}</strong>
            <span>tools</span>
          </div>
        </section>

        <section className="controls">
          <div className="search-box">
            <Search size={19} />
            <input
              type="search"
              placeholder="Search tools..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {filteredApps.length > 0 ? (
          <section className="grid">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </section>
        ) : (
          <section className="empty">
            <Search size={34} />
            <h3>No tools found</h3>
            <p>Try another search or category.</p>
          </section>
        )}

        <footer>
          <span>GEPCO Tools Hub</span>
          <span>•</span>
          <span>Built as a launcher for your office utilities</span>
        </footer>
      </main>
    </div>
  );
}