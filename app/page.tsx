import {
  ArrowDownRight,
  ArrowUpRight,
  Layers3,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Play,
  Sparkles,
} from 'lucide-react';

const tools = [
  { name: 'Illustrator', file: '/illustrator.png' },
  { name: 'Photoshop', file: '/photoshop.png' },
  { name: 'Lightroom', file: '/lightroom.png' },
  { name: 'Premiere Pro', file: '/premiere-pro.png' },
];

const process = [
  {
    number: '01',
    title: 'ทำความเข้าใจโจทย์',
    copy: 'เริ่มจากเป้าหมาย กลุ่มคนดู และความรู้สึกที่งานควรสื่อออกไป',
  },
  {
    number: '02',
    title: 'แปลงไอเดียเป็นภาพ',
    copy: 'วางทิศทางภาพ สี และองค์ประกอบให้เรื่องราวชัดและจำง่าย',
  },
  {
    number: '03',
    title: 'เก็บรายละเอียดให้พร้อมใช้',
    copy: 'ปรับงานให้ครบทั้งภาพนิ่ง งานดิจิทัล และไฟล์สำหรับใช้งานจริง',
  },
];

const boothWorks = [
  { src: '/photo-booth-01.jpg', alt: 'ภาพการตั้งบูธถ่ายรูปพร้อมฉากและไฟสตูดิโอ' },
  { src: '/photo-booth-02.jpg', alt: 'ภาพการเตรียมกล้องและทีมงานในบูธถ่ายรูป' },
  { src: '/photo-booth-03.jpg', alt: 'ภาพการจัดไฟและอุปกรณ์ถ่ายภาพในบูธ' },
];

const boothFrames = [
  { src: '/booth-frame-halloween-orange.jpg', alt: 'กรอบโฟโต้บูธธีมฮาโลวีนสีส้มและม่วง' },
  { src: '/booth-frame-graduation.jpg', alt: 'กรอบโฟโต้บูธแสดงความยินดีสำหรับบัณฑิต' },
  { src: '/booth-frame-halloween-purple.jpg', alt: 'กรอบโฟโต้บูธธีม Trick and Treat สีม่วง' },
];

const landNovelBanners = [
  { src: '/banner-truewallet.png', alt: 'แบนเนอร์แนะนำวิธีเติมเงินด้วย True Wallet Gift' },
  { src: '/banner-novel-gold.png', alt: 'แบนเนอร์นิยายโทนสีทองพร้อมตัวละครชาย' },
  { src: '/banner-promptpay.png', alt: 'แบนเนอร์เติมเงินผ่าน PromptPay' },
  { src: '/banner-monthly.png', alt: 'แบนเนอร์รวมนิยายอัปเดตประจำเดือน' },
  { src: '/banner-ceo.png', alt: 'แบนเนอร์นิยายเศรษฐีผู้ร่ำรวย' },
  { src: '/banner-retire.jpg', alt: 'แบนเนอร์นิยายซูเปอร์สตาร์คนนี้ขอรีไทร์' },
];

const landNovelUi = [
  { src: '/ui-home.png', alt: 'หน้าหลักเว็บไซต์ Land Novel', shape: 'ui-shot-tall', ratio: '872 / 987' },
  { src: '/ui-novel.png', alt: 'หน้ารายละเอียดนิยายเว็บไซต์ Land Novel', shape: 'ui-shot-tall', ratio: '857 / 988' },
  { src: '/ui-wallet.png', alt: 'หน้าช่องทางเติมเงินเว็บไซต์ Land Novel', shape: 'ui-shot-wide', ratio: '841 / 552' },
  { src: '/ui-profile.png', alt: 'หน้าโปรไฟล์ผู้ใช้เว็บไซต์ Land Novel', shape: 'ui-shot-wide', ratio: '840 / 657' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="กลับไปด้านบน">
          <span className="brand-mark">P.</span>
          <span className="brand-label">Pitipong Chusawat</span>
        </a>

        <nav className="desktop-nav" aria-label="เมนูหลัก">
          <a href="#work">ผลงาน</a>
          <a href="#about">เกี่ยวกับ</a>
          <a href="#process">วิธีทำงาน</a>
        </nav>

        <a className="header-link" href="#contact">
          มาคุยกัน <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>
      </header>

      <div id="top" className="hero-wrap">
        <section className="hero section-container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Graphic design · Retouching · Motion
            </p>
            <h1 id="hero-title">
              ออกแบบภาพที่
              <br />
              <span>สื่อสารได้ชัดเจน</span>
            </h1>
            <p className="hero-description">
              พอร์ตโฟลิโอของนักออกแบบที่ชอบเปลี่ยนโจทย์ให้กลายเป็นภาพที่ดูง่าย
              มีอารมณ์ และพร้อมใช้งานจริง
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                ดูผลงาน <ArrowDownRight size={17} />
              </a>
              <a className="button button-ghost" href="#about">
                รู้จักกันเพิ่ม
              </a>
            </div>
            <div className="hero-note">
              <span>01</span>
              <p>ออกแบบด้วยความตั้งใจ<br />ตั้งแต่เฟรมแรกถึงไฟล์สุดท้าย</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="ภาพโปรไฟล์ของนักออกแบบ">
            <div className="portrait-backdrop" />
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <img src="/profile.png" alt="ภาพโปรไฟล์นักออกแบบ" />
            </div>
            <div className="portrait-card portrait-card-outdoor">
              <img src="/portrait-personal-outdoor.jpg" alt="ภาพถ่ายส่วนตัวของ Pitipong ด้านนอกสตูดิโอ" />
            </div>
            <div className="portrait-card portrait-card-studio">
              <img src="/portrait-personal-studio.jpg" alt="ภาพถ่ายบุคคลของ Pitipong ในสตูดิโอ" />
            </div>
            <div className="visual-label label-top">
              <Sparkles size={14} />
              <span>Creative direction</span>
            </div>
            <div className="visual-label label-bottom">
              <span className="label-index">BKK / TH</span>
              <span className="label-line" />
              <span>Available for selected projects</span>
            </div>
          </div>
        </section>

        <section className="tool-strip section-container" aria-label="ทักษะและเครื่องมือ">
          <div className="strip-intro">
            <span className="strip-line" />
            <p>Tools I use to<br />make ideas visible</p>
          </div>
          <div className="tool-list">
            {tools.map((tool) => (
              <div className="tool-item" key={tool.name}>
                <img src={tool.file} alt="" />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="work" className="work-section section-container" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected work / 01</p>
            <h2 id="work-title">งานที่เล่าเรื่อง<br /><em>ด้วยภาพ</em></h2>
          </div>
          <p className="section-intro-copy">
            คัดเฉพาะงานที่สะท้อนวิธีคิดและความตั้งใจในการทำงานแต่ละชิ้น
          </p>
        </div>

        <div className="work-grid">
          <article className="project-feature">
            <div className="project-image-wrap">
              <img src="/miss-tiffany.png" alt="Key visual ของ Miss Tiffany's 2026" />
              <span className="project-tag">Key visual</span>
            </div>
            <div className="project-info">
              <div>
                <p className="project-type">Portrait retouch & key visual · 2026</p>
                <h3>Miss Tiffany’s 2026</h3>
              </div>
              <p className="project-summary">รีทัชภาพบุคคลและจัดองค์ประกอบแคมเปญให้ผิว แสง และตัวแบบดูโดดเด่นอย่างเป็นธรรมชาติ</p>
            </div>
          </article>

          <div className="project-stack">
            <article className="project-card project-card-yellow">
              <div className="card-topline">
                <span>Portrait retouch / 02</span>
                <Layers3 size={20} strokeWidth={1.5} />
              </div>
              <h3>รีทัชคน<br /><em>ให้รายละเอียดดูเป็นธรรมชาติ</em></h3>
              <p>เก็บผิว แสง และโทนสีของภาพบุคคลให้ดูสะอาด มีมิติ และยังคงคาแรกเตอร์ของคนในภาพ</p>
              <div className="mini-tools">
                <img src="/photoshop.png" alt="" />
                <img src="/lightroom.png" alt="" />
              </div>
            </article>

            <article className="project-card project-card-blue">
              <div className="card-topline">
                <span>Motion & edit / 03</span>
                <Play size={20} strokeWidth={1.5} />
              </div>
              <h3>จากภาพนิ่ง<br /><em>สู่จังหวะที่เคลื่อนไหว</em></h3>
              <p>ต่อยอดงานภาพให้มีจังหวะและพลังมากขึ้นสำหรับคอนเทนต์ดิจิทัล</p>
              <div className="mini-tools">
                <img src="/premiere-pro.png" alt="" />
                <img src="/illustrator.png" alt="" />
              </div>
            </article>
          </div>
        </div>

        <div className="new-work-section">
          <div className="new-work-heading">
            <div>
              <p className="section-kicker">Photo booth frames / 04</p>
              <h3>กรอบโฟโต้บูธ<br /><em>จัดองค์ประกอบให้คนในภาพเด่นขึ้น</em></h3>
            </div>
            <p>
              ออกแบบพื้นที่ภาพและจัดองค์ประกอบสำหรับกรอบโฟโต้บูธ
              ตั้งแต่จัดฉาก วางไฟ ไปจนถึงเตรียมอุปกรณ์ให้พร้อมใช้งานจริง
            </p>
          </div>

          <div className="gallery-heading booth-setup-heading">
            <span>Production setup</span>
            <p>เบื้องหลังการจัดฉาก วางไฟ และเตรียมกล้องสำหรับวันถ่ายงานจริง</p>
          </div>
          <div className="booth-gallery" aria-label="ภาพการตั้งบูธถ่ายรูป">
            {boothWorks.map((work) => (
              <figure className="booth-frame" key={work.src}>
                <img src={work.src} alt={work.alt} />
              </figure>
            ))}
          </div>

          <div className="gallery-heading booth-design-heading">
            <span>Photo booth frame designs</span>
            <p>กรอบภาพแนวตั้งสำหรับกิจกรรมฮาโลวีนและงานแสดงความยินดี โดยรักษาพื้นที่ภาพทั้ง 4 ช่องให้ใช้งานได้ชัดเจน</p>
          </div>
          <div className="booth-frame-gallery" aria-label="ผลงานออกแบบกรอบโฟโต้บูธ">
            {boothFrames.map((work) => (
              <figure className="booth-design-frame" key={work.src}>
                <img src={work.src} alt={work.alt} />
              </figure>
            ))}
          </div>

          <div className="promo-showcase">
            <div className="line-menu-heading">
              <span>Promotional poster / 05</span>
              <p>โปสเตอร์ประชาสัมพันธ์บริการ Photo Booth ราคา 100 บาท ใช้สีแดง เหลือง และภาพกล้องเพื่อดึงสายตา</p>
            </div>
            <figure className="promo-frame">
              <img src="/photo-booth-promo.png" alt="โปสเตอร์โปรโมตบริการ Photo Booth ราคา 100 บาท" />
            </figure>
          </div>

          <div className="line-menu-showcase">
            <div className="line-menu-heading">
              <span>LINE menu design / 06</span>
              <p>ออกแบบเมนูให้แบ่งทางเลือกชัดเจน อ่านง่าย และใช้งานได้จริงบนหน้าจอมือถือ</p>
            </div>
            <figure className="line-menu-frame">
              <img src="/line-menu.jpg" alt="ภาพการออกแบบเมนู LINE สำหรับบริการถ่ายภาพ" />
            </figure>
          </div>
        </div>

        <div className="landnovel-section">
          <div className="landnovel-heading">
            <div>
              <p className="section-kicker">Land Novel / 07</p>
              <h3>ออกแบบประสบการณ์อ่านนิยาย<br /><em>ตั้งแต่หน้าจอถึงภาพแคมเปญ</em></h3>
            </div>
            <p>
              งานออกแบบเว็บไซต์และสื่อประชาสัมพันธ์ที่ใช้ระบบภาพเดียวกัน
              เพื่อให้เนื้อหาอ่านง่ายและแบรนด์จดจำได้ชัดเจน
            </p>
          </div>

          <figure className="showcase-frame showcase-frame-landscape" aria-label="ภาพรวมผลงานเว็บไซต์ Land Novel">
            <img src="/landnovel-overview.png" alt="ภาพรวมหน้าหลักและหน้ารายละเอียดนิยาย Land Novel" />
          </figure>

          <figure className="showcase-frame brand-frame">
            <img src="/landnovel-brand.jpg" alt="ภาพอัตลักษณ์แบรนด์ Land Novel" />
          </figure>

          <div className="gallery-heading">
            <span>Campaign banners</span>
            <p>วางภาพตามอัตราส่วนกว้าง 2.5:1 เพื่อให้ข้อความและองค์ประกอบแสดงครบทุกส่วน</p>
          </div>
          <div className="banner-gallery">
            {landNovelBanners.map((work) => (
              <figure className="banner-frame" key={work.src}>
                <img src={work.src} alt={work.alt} />
              </figure>
            ))}
          </div>

          <div className="gallery-heading ui-heading">
            <span>Interface details</span>
            <p>หน้าจอแนวตั้งและแนวนอนใช้กรอบตามขนาดจริง จึงมองเห็นโครงหน้าได้โดยไม่ถูกครอป</p>
          </div>
          <div className="ui-gallery">
            {landNovelUi.map((work) => (
              <figure className={`ui-frame ${work.shape}`} key={work.src} style={{ aspectRatio: work.ratio }}>
                <img src={work.src} alt={work.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-container" aria-labelledby="about-title">
        <div className="about-stamp">ABOUT<br /><span>ME</span></div>
        <div className="about-copy">
          <p className="section-kicker">A little about the maker</p>
          <h2 id="about-title">คิดเป็นภาพ<br /><em>ทำให้คนรู้สึก</em></h2>
          <p>
            ผมสนุกกับงานที่ต้องมองทั้งภาพใหญ่และรายละเอียดเล็ก ๆ ในเวลาเดียวกัน
            ตั้งแต่การหา mood ที่ใช่ ไปจนถึงการจัดองค์ประกอบให้คนหยุดมองและเข้าใจสารได้ในไม่กี่วินาที
          </p>
          <p>
            งานที่ถนัดคือภาพแคมเปญ งานรีทัช และคอนเทนต์ที่ต้องการความชัดเจน
            แต่ยังมีบุคลิกเป็นของตัวเอง
          </p>
        </div>
        <div className="about-aside">
          <PenTool size={25} strokeWidth={1.3} />
          <p>Design is not just what it looks like. It’s how clearly it speaks.</p>
          <span>— Steve Jobs</span>
        </div>
      </section>

      <section id="process" className="process-section section-container" aria-labelledby="process-title">
        <div className="section-heading process-heading">
          <div>
            <p className="section-kicker">How I work / 02</p>
            <h2 id="process-title">ทำงานให้เป็นระบบ<br /><em>เพื่อให้ไอเดียไปได้ไกล</em></h2>
          </div>
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <article className="process-item" key={item.number}>
              <span className="process-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section section-container" aria-labelledby="contact-title">
        <div className="contact-card">
          <div>
            <p className="section-kicker">Have a project in mind?</p>
            <h2 id="contact-title">ให้ไอเดียของคุณ<br /><em>เริ่มต้นที่ภาพแรก</em></h2>
          </div>
          <div className="contact-actions">
            <div className="contact-list" aria-label="ช่องทางการติดต่อ">
              <a className="contact-item" href="mailto:workwithpiti@hotmail.com">
                <Mail size={21} strokeWidth={1.7} />
                <span>workwithpiti@hotmail.com</span>
              </a>
              <a className="contact-item" href="tel:+66902878347">
                <Phone size={21} strokeWidth={1.7} />
                <span>090-287-8347</span>
              </a>
              <div className="contact-item">
                <MapPin size={21} strokeWidth={1.7} />
                <address>Sam Phran, Nakhon Pathom,<br />Thailand</address>
              </div>
            </div>
            <a className="contact-button" href="#work">
              กลับไปดูผลงาน <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-container">
        <div className="footer-brand"><span className="brand-mark">P.</span> Creative portfolio</div>
        <div className="footer-note"><Mail size={15} /> พร้อมรับฟังไอเดียใหม่ ๆ</div>
        <p>© 2026 — Made with intent.</p>
      </footer>
    </main>
  );
}
