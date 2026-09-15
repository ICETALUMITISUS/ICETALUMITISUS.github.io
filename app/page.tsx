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
import { RetouchLightbox } from '@/components/retouch-lightbox';
import { PortfolioLightbox } from '@/components/portfolio-lightbox';

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

const verticalPosters = [
  {
    src: '/photo-booth-promo.png',
    alt: 'โปสเตอร์โปรโมตบริการ Photo Booth ราคา 100 บาท',
    title: 'Photo Booth — 100 Baht',
    description: 'โปสเตอร์ประชาสัมพันธ์บริการถ่ายภาพสำหรับกิจกรรมมหาวิทยาลัย เน้นราคาและรูปแบบบริการให้เข้าใจได้ทันที',
    concept: 'Pop graphic — ใช้สีแดง เหลือง และภาพกล้องขาวดำสร้างความตัดกัน เพื่อให้ข้อมูลหลักโดดเด่นจากระยะไกล',
  },
];

const horizontalPosters = [
  {
    src: '/banner-truewallet.png',
    alt: 'แบนเนอร์แนะนำวิธีเติมเงินด้วย True Wallet Gift',
    title: 'True Wallet Gift',
    description: 'แบนเนอร์อธิบายช่องทางเติมเงินสำหรับผู้ใช้งาน Land Novel',
    concept: 'จัดลำดับข้อมูลสั้น กระชับ และใช้ภาพสัญลักษณ์กระเป๋าเงินเป็นจุดนำสายตา',
  },
  {
    src: '/banner-novel-gold.png',
    alt: 'แบนเนอร์นิยายโทนสีทองพร้อมตัวละครชาย',
    title: 'Featured Novel — Gold',
    description: 'แบนเนอร์โปรโมตนิยายเด่นที่ให้ตัวละครเป็นศูนย์กลางของภาพ',
    concept: 'โทนทองสื่อความหรูหรา ผสานแสงและตัวอักษรเพื่อสร้างบรรยากาศแบบแฟนตาซี',
  },
  {
    src: '/banner-promptpay.png',
    alt: 'แบนเนอร์เติมเงินผ่าน PromptPay',
    title: 'PromptPay Campaign',
    description: 'สื่อประชาสัมพันธ์การเติมเงินผ่าน QR Code พร้อมข้อมูลค่าธรรมเนียม',
    concept: 'ใช้สีน้ำเงินเป็นสีหลักและขยายข้อความสำคัญ เพื่อให้ผู้ใช้รับสารได้ภายในไม่กี่วินาที',
  },
  {
    src: '/banner-monthly.png',
    alt: 'แบนเนอร์รวมนิยายอัปเดตประจำเดือน',
    title: 'Monthly Novel Update',
    description: 'แบนเนอร์รวบรวมเรื่องใหม่และตอนอัปเดตประจำเดือนบนแพลตฟอร์ม',
    concept: 'จัดปกนิยายเป็นจังหวะแบบแกลเลอรี เพื่อสื่อถึงความหลากหลายและชวนให้สำรวจต่อ',
  },
  {
    src: '/banner-ceo.png',
    alt: 'แบนเนอร์นิยายเศรษฐีผู้ร่ำรวย',
    title: 'CEO Romance',
    description: 'คีย์วิชวลสำหรับนิยายโรแมนติกที่เน้นตัวละครและอารมณ์ของเรื่อง',
    concept: 'ใช้ภาพตัวละครขนาดใหญ่ร่วมกับแสงเข้ม เพื่อสร้างบุคลิกที่มั่นใจและน่าติดตาม',
  },
  {
    src: '/banner-retire.jpg',
    alt: 'แบนเนอร์นิยายซูเปอร์สตาร์คนนี้ขอรีไทร์',
    title: 'Superstar Retirement',
    description: 'แบนเนอร์แนะนำเรื่องที่สื่อความโดดเดี่ยวและแรงกดดันของตัวละครหลัก',
    concept: 'ใช้บรรยากาศภาพยนตร์และพื้นที่มืดเพื่อดึงอารมณ์ พร้อมวางชื่อเรื่องให้เป็นจุดจำ',
  },
];

const retouchPortraits = [1, 2, 3, 4, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18].map((number) => ({
  src: `/retouch/retouch-${String(number).padStart(2, '0')}.jpg`,
  alt: `ผลงานรีทัชภาพบุคคลและภาพรับปริญญา ลำดับที่ ${number}`,
}));

const landNovelUi = [
  { src: '/ui-home.png', alt: 'หน้าหลักเว็บไซต์ Land Novel', shape: 'ui-shot-tall', ratio: '872 / 987' },
  { src: '/ui-novel.png', alt: 'หน้ารายละเอียดนิยายเว็บไซต์ Land Novel', shape: 'ui-shot-tall', ratio: '857 / 988' },
  { src: '/ui-wallet.png', alt: 'หน้าช่องทางเติมเงินเว็บไซต์ Land Novel', shape: 'ui-shot-wide', ratio: '841 / 552' },
  { src: '/ui-profile.png', alt: 'หน้าโปรไฟล์ผู้ใช้เว็บไซต์ Land Novel', shape: 'ui-shot-wide', ratio: '840 / 657' },
];

const brightSkyDisplays = [
  {
    src: '/brightsky/yala-display-spec.png',
    alt: 'แบบป้ายประชาสัมพันธ์ท่องเที่ยวจังหวัดยะลา พร้อมระบุขนาดงาน',
    title: 'เส้นทางท่องเที่ยวจังหวัดยะลา',
    description: 'ออกแบบป้ายประชาสัมพันธ์ขนาด 0.60 × 0.90 เมตร นำเสนออุโมงค์เบตง วัดคูหาภิมุข และสถานที่สำคัญในจังหวัดยะลา',
    concept: 'รวมภาพสถานที่หลายจุดด้วยกรอบวงกลมและรูปทรงพู่กัน เพื่อสร้างลำดับการมองจากข้อมูลสู่ภาพบรรยากาศหลัก',
  },
  {
    src: '/brightsky/loei-display-spec.png',
    alt: 'แบบป้ายประชาสัมพันธ์ท่องเที่ยวจังหวัดเลย พร้อมระบุขนาดงาน',
    title: 'เสน่ห์เมืองเลย',
    description: 'งานป้ายประชาสัมพันธ์แหล่งท่องเที่ยวจังหวัดเลย โดยรวมวัดสมเด็จภูเรือมิ่งเมือง น้ำตกเพียงดิน และหมู่บ้านวัฒนธรรมไทดำ',
    concept: 'ใช้โทนอบอุ่นและภาพสถาปัตยกรรมเป็นจุดเด่น เพื่อถ่ายทอดวัฒนธรรมและบรรยากาศการเดินทางในภาพเดียว',
  },
  {
    src: '/brightsky/yala-artwork.png',
    alt: 'ภาพอาร์ตเวิร์กป้ายเส้นทางท่องเที่ยวจังหวัดยะลา',
    title: 'Yala Tourism Artwork',
    description: 'ไฟล์อาร์ตเวิร์กสำหรับนำไปผลิตจริง จัดวางข้อมูลและภาพสถานที่ให้อ่านได้ชัดในพื้นที่แนวตั้ง',
    concept: 'คงรายละเอียดสำคัญไว้ในพื้นที่กระชับ พร้อมควบคุมสัดส่วนและระยะปลอดภัยสำหรับงานพิมพ์',
  },
];

const brightSkyBanners = [
  {
    src: '/brightsky/sakon-nakhon-banner.jpg',
    alt: 'แบนเนอร์ประชาสัมพันธ์การท่องเที่ยวจังหวัดสกลนคร',
    title: 'Welcome to Sakon Nakhon',
    description: 'แบนเนอร์แนวนอนแนะนำวัดพระธาตุเชิงชุมและวัดธรรมอุทยาน จังหวัดสกลนคร',
  },
  {
    src: '/brightsky/phu-pha-man-banner.jpg',
    alt: 'แบนเนอร์อุทยานแห่งชาติภูผาม่าน จังหวัดขอนแก่น',
    title: 'Phu Pha Man National Park',
    description: 'สื่อท่องเที่ยวที่ใช้ภาพน้ำตกเป็นจุดนำสายตา พร้อมชื่อสถานที่ทั้งภาษาไทยและอังกฤษ',
  },
  {
    src: '/brightsky/phu-wiang-banner.jpg',
    alt: 'แบนเนอร์อุทยานแห่งชาติภูเวียง จังหวัดขอนแก่น',
    title: 'Phu Wiang National Park',
    description: 'แบนเนอร์ท่องเที่ยวที่รวมแลนด์มาร์กสำคัญด้วยโทนสีสดใสและรูปทรงพู่กัน',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <PortfolioLightbox />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="กลับไปด้านบน">
          <span className="brand-mark">P.</span>
          <span className="brand-label">Pitipong Chusawat</span>
        </a>

        <nav className="desktop-nav" aria-label="เมนูหลัก">
          <a href="#about">เกี่ยวกับ</a>
          <a href="#work">ผลงาน</a>
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
              <span className="status-dot" /> Graphic design · Retouching
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

      <section id="about" className="about-section section-container" aria-labelledby="about-title">
        <div className="about-stamp">ABOUT<br /><span>ME</span></div>
        <div className="about-copy">
          <p className="section-kicker">Profile / 01</p>
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

      <section id="work" className="work-section section-container" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Portfolio categories / 02</p>
            <h2 id="work-title">ผลงาน<br /><em>แยกตามหมวดหมู่</em></h2>
          </div>
          <p className="section-intro-copy">
            เรียงงานตามประเภทและสัดส่วน เพื่อให้เห็นทั้งภาพรวม แนวคิด และวิธีแก้โจทย์ของแต่ละชิ้น
          </p>
        </div>

        <nav className="category-nav" aria-label="เลือกหมวดผลงาน">
          <a href="#poster-work"><span>01</span>โปสเตอร์</a>
          <a href="#retouch-work"><span>02</span>รีทัช</a>
          <a href="#booth-work"><span>03</span>โฟโต้บูธ</a>
          <a href="#line-work"><span>04</span>LINE</a>
          <a href="#landnovel-work"><span>05</span>Land Novel</a>
          <a href="#internship-work"><span>06</span>ฝึกงาน</a>
        </nav>

        <div id="poster-work" className="portfolio-category poster-category">
          <div className="category-heading">
            <span className="category-number">01</span>
            <div>
              <p className="section-kicker">Poster design</p>
              <h3>งานโปสเตอร์</h3>
            </div>
            <p>ออกแบบลำดับสายตาให้ข้อมูลสำคัญอ่านง่าย พร้อมเลือกสัดส่วนให้เหมาะกับพื้นที่ใช้งานจริง</p>
          </div>

          <div className="orientation-heading">
            <span>Vertical posters</span>
            <p>โปสเตอร์แนวตั้ง — เหมาะกับงานอีเวนต์ หน้าจอมือถือ และสื่อที่ต้องการภาพหลักขนาดใหญ่</p>
          </div>
          <div className="poster-vertical-grid">
            {verticalPosters.map((work) => (
              <figure className="poster-card poster-card-vertical" key={work.src}>
                <div className="poster-media poster-media-vertical">
                  <img src={work.src} alt={work.alt} />
                </div>
                <figcaption className="poster-caption">
                  <p className="project-type">Vertical poster</p>
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                  <p className="concept-copy"><strong>Concept</strong>{work.concept}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="orientation-heading horizontal-heading">
            <span>Horizontal posters</span>
            <p>โปสเตอร์แนวนอน — วางข้อมูลให้อ่านจบเร็ว เหมาะกับแบนเนอร์เว็บไซต์และสื่อประชาสัมพันธ์ดิจิทัล</p>
          </div>
          <div className="poster-horizontal-grid">
            {horizontalPosters.map((work) => (
              <figure className="poster-card poster-card-horizontal" key={work.src}>
                <div className="poster-media poster-media-horizontal">
                  <img src={work.src} alt={work.alt} />
                </div>
                <figcaption className="poster-caption">
                  <p className="project-type">Horizontal poster</p>
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                  <p className="concept-copy"><strong>Concept</strong>{work.concept}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div id="retouch-work" className="portfolio-category">
          <div className="category-heading">
            <span className="category-number">02</span>
            <div>
              <p className="section-kicker">Portrait retouch & key visual</p>
              <h3>รีทัชภาพบุคคล</h3>
            </div>
            <p>เก็บรายละเอียดผิว แสง และสีให้ดูเป็นธรรมชาติ พร้อมสร้างคีย์วิชวลที่รักษาบุคลิกของตัวแบบ</p>
          </div>
          <figure className="project-feature retouch-feature">
            <div className="project-image-wrap">
              <img src="/miss-tiffany.png" alt="Key visual ของ Miss Tiffany's 2026" />
            </div>
            <figcaption className="poster-caption retouch-caption">
              <p className="project-type">Portrait retouch & key visual · 2026</p>
              <h4>Miss Tiffany’s 2026</h4>
              <p>รีทัชภาพบุคคลและจัดองค์ประกอบแคมเปญให้ผิว แสง และตัวแบบดูโดดเด่นอย่างเป็นธรรมชาติ</p>
              <p className="concept-copy"><strong>Concept</strong>ใช้แสงนุ่ม โทนสีที่ดูสง่างาม และพื้นที่ว่างรอบตัวแบบ เพื่อส่งความมั่นใจโดยไม่ลดทอนความเป็นธรรมชาติ</p>
            </figcaption>
          </figure>
          <div className="orientation-heading retouch-gallery-heading">
            <span>Graduation portrait series</span>
            <p>ชุดภาพรีทัชบุคคลสำหรับงานทางการและรับปริญญา ปรับผิว แสง สี และรายละเอียดเครื่องแต่งกายให้ภาพดูสะอาดและเป็นธรรมชาติ</p>
          </div>
          <RetouchLightbox works={retouchPortraits} />
          <figure className="retouch-overview">
            <img
              src="/retouch/retouch-overview.png"
              alt="ภาพรวมชุดผลงานรีทัชภาพบุคคล"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="poster-caption">
              <p className="project-type">Retouch collection · Portrait production</p>
              <h4>ภาพรวมงานรีทัชบุคคล</h4>
              <p>จัดการภาพหลายบุคคลให้มีมาตรฐานเดียวกัน ทั้งสัดส่วน สีพื้นหลัง ความสว่าง และความเรียบร้อยของรายละเอียด</p>
              <p className="concept-copy"><strong>Concept</strong>Clean &amp; consistent — ให้ทุกภาพดูสุภาพ เป็นธรรมชาติ และพร้อมใช้งานทั้งสิ่งพิมพ์และสื่อดิจิทัล</p>
            </figcaption>
          </figure>
          <div className="project-stack service-cards">
            <article className="project-card project-card-yellow">
              <div className="card-topline"><span>Retouch workflow</span><Layers3 size={20} strokeWidth={1.5} /></div>
              <h3>เก็บรายละเอียด<br /><em>โดยยังคงตัวตน</em></h3>
              <p>ปรับผิว แสง และโทนสีอย่างพอดี เพื่อให้ภาพสะอาด มีมิติ และไม่ดูแต่งเกินจริง</p>
              <div className="mini-tools"><img src="/photoshop.png" alt="" /><img src="/lightroom.png" alt="" /></div>
            </article>
            <article className="project-card project-card-blue">
              <div className="card-topline"><span>Motion & edit</span><Play size={20} strokeWidth={1.5} /></div>
              <h3>ต่อยอดภาพนิ่ง<br /><em>ให้มีจังหวะ</em></h3>
              <p>นำองค์ประกอบจากงานภาพไปพัฒนาเป็นคอนเทนต์เคลื่อนไหวสำหรับช่องทางดิจิทัล</p>
              <div className="mini-tools"><img src="/premiere-pro.png" alt="" /><img src="/illustrator.png" alt="" /></div>
            </article>
          </div>
        </div>

        <div id="booth-work" className="portfolio-category">
          <div className="category-heading">
            <span className="category-number">03</span>
            <div>
              <p className="section-kicker">Photo booth frames</p>
              <h3>กรอบโฟโต้บูธ<br /><em>จัดองค์ประกอบให้คนในภาพเด่นขึ้น</em></h3>
            </div>
            <p>
              ออกแบบพื้นที่ภาพและจัดองค์ประกอบสำหรับกรอบโฟโต้บูธ
              ตั้งแต่จัดฉาก วางไฟ ไปจนถึงเตรียมอุปกรณ์ให้พร้อมใช้งานจริง
            </p>
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
        </div>

        <div id="line-work" className="portfolio-category">
          <div className="category-heading">
            <span className="category-number">04</span>
            <div>
              <p className="section-kicker">LINE menu design</p>
              <h3>เมนู LINE<br /><em>อ่านง่ายบนหน้าจอมือถือ</em></h3>
            </div>
            <p>แบ่งทางเลือกให้ชัดเจน ลดข้อความที่ไม่จำเป็น และใช้ภาพช่วยให้ผู้ใช้ตัดสินใจได้เร็วขึ้น</p>
          </div>
          <figure className="poster-card line-menu-card">
            <div className="poster-media line-menu-media">
              <img src="/line-menu.jpg" alt="ภาพการออกแบบเมนู LINE สำหรับบริการถ่ายภาพ" />
            </div>
            <figcaption className="poster-caption">
              <p className="project-type">Digital menu</p>
              <h4>LINE Rich Menu</h4>
              <p>ออกแบบเมนูสำหรับบริการถ่ายภาพให้แต่ละปุ่มมีขอบเขตชัดและอ่านได้แม้บนหน้าจอขนาดเล็ก</p>
              <p className="concept-copy"><strong>Concept</strong>ใช้โครงสร้างแบบช่องและน้ำหนักสีที่แตกต่าง เพื่อแยกบริการหลักโดยไม่ทำให้หน้าจอดูแน่นเกินไป</p>
            </figcaption>
          </figure>
        </div>

        <div id="landnovel-work" className="portfolio-category landnovel-section">
          <div className="category-heading">
            <span className="category-number">05</span>
            <div>
              <p className="section-kicker">Land Novel — Web & visual design</p>
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

        <div id="internship-work" className="portfolio-category internship-section">
          <div className="category-heading">
            <span className="category-number">06</span>
            <div>
              <p className="section-kicker">Internship experience</p>
              <h3>ผลงานระหว่างฝึกงาน<br /><em>บริษัท ไบรท์ สกาย มีเดีย จำกัด</em></h3>
            </div>
            <p>ประสบการณ์ออกแบบสื่อประชาสัมพันธ์จริง ตั้งแต่งานท่องเที่ยว ป้ายสำหรับผลิต ไปจนถึงคอนเทนต์กีฬาออนไลน์</p>
          </div>

          <div className="internship-brand-card">
            <div className="internship-logo-wrap">
              <img src="/brightsky/logo.jpg" alt="โลโก้บริษัท BrightSky Media" />
            </div>
            <div>
              <p className="project-type">Bright Sky Media Co., Ltd.</p>
              <h4>Graphic Design Internship</h4>
              <p>ฝึกกระบวนการทำงานตั้งแต่รับโจทย์ วางองค์ประกอบ เตรียมไฟล์ตามขนาดจริง และปรับงานให้เหมาะกับช่องทางเผยแพร่</p>
            </div>
          </div>

          <div className="orientation-heading internship-heading">
            <span>Sports media</span>
            <p>คอนเทนต์ประชาสัมพันธ์ LCFC Live สำหรับสื่อออนไลน์ โดยคุมภาพรวมด้วยสีน้ำเงินและบรรยากาศของสโมสร</p>
          </div>
          <figure className="poster-card internship-feature-card">
            <div className="internship-feature-media">
              <img src="/brightsky/lcfc-live.jpg" alt="งานประชาสัมพันธ์ LCFC Live ของ BrightSky Media" loading="lazy" decoding="async" />
            </div>
            <figcaption className="poster-caption">
              <p className="project-type">Social media artwork</p>
              <h4>LCFC Live</h4>
              <p>ออกแบบภาพประชาสัมพันธ์การถ่ายทอดสดและรวบรวมภาพสื่อดิจิทัลในพื้นที่สนามบิน ให้ข้อมูลกิจกรรมและภาพลักษณ์สโมสรอยู่ในงานเดียวกัน</p>
              <p className="concept-copy"><strong>Concept</strong>ใช้กริด เส้นโค้ง และสีน้ำเงินของสโมสรสร้างความต่อเนื่อง พร้อมวางนักฟุตบอลเป็นจุดเด่นเพื่อเพิ่มพลังให้ภาพ</p>
            </figcaption>
          </figure>

          <div className="orientation-heading internship-heading">
            <span>Tourism display design</span>
            <p>งานออกแบบป้ายแนวตั้งสำหรับผลิตจริง แสดงทั้งแบบกำหนดขนาดและอาร์ตเวิร์กพร้อมใช้งาน</p>
          </div>
          <div className="internship-display-grid">
            {brightSkyDisplays.map((work) => (
              <figure className="poster-card internship-display-card" key={work.src}>
                <div className="internship-display-media">
                  <img src={work.src} alt={work.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption className="poster-caption">
                  <p className="project-type">Display artwork</p>
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                  <p className="concept-copy"><strong>Concept</strong>{work.concept}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="orientation-heading internship-heading">
            <span>Tourism banners</span>
            <p>สื่อแนวนอนสำหรับแนะนำจุดหมายท่องเที่ยว ใช้ภาพสถานที่และชื่อไทย–อังกฤษให้รับสารได้รวดเร็ว</p>
          </div>
          <div className="internship-banner-grid">
            {brightSkyBanners.map((work) => (
              <figure className="poster-card internship-banner-card" key={work.src}>
                <div className="internship-banner-media">
                  <img src={work.src} alt={work.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption className="poster-caption">
                  <p className="project-type">Tourism banner</p>
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
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
