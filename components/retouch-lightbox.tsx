type RetouchWork = {
  src: string;
  alt: string;
};

export function RetouchLightbox({ works }: { works: RetouchWork[] }) {
  return (
    <div className="retouch-portrait-grid">
      {works.map((work, index) => (
        <figure className="retouch-portrait" key={work.src}>
          <button className="retouch-zoom-trigger" type="button" aria-label={`ขยายดู${work.alt}`}>
            <img src={work.src} alt={work.alt} loading="lazy" decoding="async" />
            <span className="retouch-zoom-hint" aria-hidden="true">ดูภาพใหญ่</span>
          </button>
          <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
        </figure>
      ))}
    </div>
  );
}
