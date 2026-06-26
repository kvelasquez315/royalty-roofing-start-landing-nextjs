/**
 * RecentProjectsSection — "Recent Omaha Projects" before/after gallery.
 * id="projects"
 * Light off-white bg to alternate with the dark Reviews section.
 * Photos are optimized 800px .webp and lazy-loaded. Swap in real job-site
 * photos by replacing the files in /public/images/project-*.webp.
 */

interface Project {
  area: string;
  type: string;
  beforeSrc: string;
  afterSrc: string;
}

const PROJECTS: Project[] = [
  {
    area: "Dundee",
    type: "Full Roof Replacement",
    beforeSrc: "/images/project-dundee-before.webp",
    afterSrc: "/images/project-dundee-after.webp",
  },
  {
    area: "Millard",
    type: "Storm Damage Repair",
    beforeSrc: "/images/project-millard-before.webp",
    afterSrc: "/images/project-millard-after.webp",
  },
  {
    area: "West Omaha",
    type: "Siding & Gutters",
    beforeSrc: "/images/project-westomaha-before.webp",
    afterSrc: "/images/project-westomaha-after.webp",
  },
];

function PhotoTile({ label, src, alt }: { label: string; src: string; alt: string }) {
  return (
    <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <span style={tagStyle}>{label}</span>
    </div>
  );
}

const tagStyle: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  left: "10px",
  background: "rgba(10,18,32,0.85)",
  color: "white",
  fontFamily: "var(--font-body)",
  fontWeight: 700,
  fontSize: "11px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "5px 10px",
  borderRadius: "4px",
};

export default function RecentProjectsSection() {
  return (
    <section id="projects" style={{ background: "#F5F5F3", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }} className="projects-inner">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2d5aad",
              marginBottom: "12px",
            }}
          >
            Before &amp; After
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 0.95,
              color: "#0A1220",
              letterSpacing: "0.01em",
              margin: 0,
            }}
          >
            RECENT OMAHA PROJECTS
          </h2>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
          className="projects-grid"
        >
          {PROJECTS.map((p) => (
            <div
              key={`${p.area}-${p.type}`}
              style={{
                background: "#ffffff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <PhotoTile label="Before" src={p.beforeSrc} alt={`${p.type} in ${p.area}, before`} />
                <PhotoTile label="After" src={p.afterSrc} alt={`${p.type} in ${p.area}, after`} />
              </div>
              <div style={{ padding: "16px 18px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#0A1220",
                    margin: "0 0 2px",
                  }}
                >
                  {p.type}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "#5B6470",
                    margin: 0,
                  }}
                >
                  {p.area}, Omaha
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
        }
        @media (max-width: 640px) {
          #projects { padding: 56px 0 !important; }
          .projects-inner { padding: 0 16px !important; }
          .projects-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
