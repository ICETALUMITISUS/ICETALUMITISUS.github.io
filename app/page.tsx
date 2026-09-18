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
    title: 'คุยให้เข้าใจก่อน',
    copy: 'ผมจะเริ่มจากถามว่างานนี้ทำเพื่อใคร ต้องการสื่ออะไร และสุดท้ายจะนำไปใช้ที่ไหน',
  },
  {
    number: '02',
    title: 'ลองวางภาพและทิศทาง',
    copy: 'เมื่อโจทย์ชัดแล้ว ผมจะลองจัดวางภาพ เลือกสี และหาวิธีเล่าเรื่องที่เหมาะกับงานนั้น',
  },
  {
    number: '03',
    title: 'ตรวจงานก่อนส่ง',
    copy: 'ช่วงท้ายจะเช็กตัวหนังสือ สี ขนาด และรายละเอียดอีกครั้ง เพื่อให้ไฟล์พร้อมนำไปใช้จริง',
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
    description: 'โปสเตอร์โปรโมตโฟโต้บูธในงานมหาวิทยาลัย ผมตั้งใจให้คนเห็นราคาและเข้าใจบริการได้ตั้งแต่ครั้งแรกที่มอง',
    concept: 'เลือกใช้สีแดงกับสีเหลืองที่ตัดกัน แล้ววางภาพกล้องขาวดำเป็นจุดหลัก เพื่อให้งานสะดุดตาแม้มองจากระยะไกล',
  },
];

const horizontalPosters = [
  {
    src: '/banner-truewallet.png',
    alt: 'แบนเนอร์แนะนำวิธีเติมเงินด้วย True Wallet Gift',
    title: 'True Wallet Gift',
    description: 'แบนเนอร์บอกวิธีเติมเงินใน Land Novel โดยพยายามทำให้ขั้นตอนดูง่ายและไม่ต้องอ่านข้อความเยอะ',
    concept: 'ผมลดข้อมูลให้เหลือเฉพาะส่วนที่จำเป็น แล้วใช้ภาพกระเป๋าเงินช่วยบอกว่าผู้ใช้ต้องทำอะไรต่อ',
  },
  {
    src: '/banner-novel-gold.png',
    alt: 'แบนเนอร์นิยายโทนสีทองพร้อมตัวละครชาย',
    title: 'Featured Novel — Gold',
    description: 'แบนเนอร์แนะนำนิยายเด่น โดยให้ตัวละครเป็นส่วนแรกที่คนเห็นก่อนอ่านชื่อเรื่อง',
    concept: 'ใช้โทนทองและแสงรอบตัวละคร เพื่อให้ภาพดูหรูและมีบรรยากาศแบบแฟนตาซี',
  },
  {
    src: '/banner-promptpay.png',
    alt: 'แบนเนอร์เติมเงินผ่าน PromptPay',
    title: 'PromptPay Campaign',
    description: 'สื่อบอกช่องทางเติมเงินผ่าน QR Code พร้อมค่าธรรมเนียมที่ผู้ใช้ควรรู้ก่อนทำรายการ',
    concept: 'ใช้สีน้ำเงินให้เข้ากับ PromptPay และขยายคำสำคัญ เพื่อให้กวาดตาอ่านได้เร็ว',
  },
  {
    src: '/banner-monthly.png',
    alt: 'แบนเนอร์รวมนิยายอัปเดตประจำเดือน',
    title: 'Monthly Novel Update',
    description: 'แบนเนอร์รวมเรื่องใหม่และนิยายที่มีตอนอัปเดตในเดือนนั้น ให้ผู้อ่านเลือกต่อได้ง่าย',
    concept: 'เรียงปกนิยายคล้ายชั้นหนังสือ เพื่อให้เห็นว่ามีหลายเรื่องและชวนกดดูต่อ',
  },
  {
    src: '/banner-ceo.png',
    alt: 'แบนเนอร์นิยายเศรษฐีผู้ร่ำรวย',
    title: 'CEO Romance',
    description: 'ภาพโปรโมตนิยายโรแมนติกที่เน้นตัวละครหลักและอารมณ์ของเรื่องเป็นสำคัญ',
    concept: 'ขยายตัวละครให้เด่น ใช้แสงที่เข้มขึ้นเล็กน้อย เพื่อให้ภาพดูจริงจังและน่าติดตาม',
  },
  {
    src: '/banner-retire.jpg',
    alt: 'แบนเนอร์นิยายซูเปอร์สตาร์คนนี้ขอรีไทร์',
    title: 'Superstar Retirement',
    description: 'แบนเนอร์นิยายที่ต้องการเล่าความรู้สึกโดดเดี่ยวและแรงกดดันของตัวละครหลัก',
    concept: 'ใช้ภาพโทนมืดคล้ายฉากภาพยนตร์ แล้ววางชื่อเรื่องในตำแหน่งที่มองเห็นและจำได้ง่าย',
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
    description: 'ป้ายขนาด 0.60 × 0.90 เมตร รวมอุโมงค์เบตง วัดคูหาภิมุข และสถานที่สำคัญของจังหวัดยะลาไว้ในชิ้นเดียว',
    concept: 'ผมใช้กรอบวงกลมแยกสถานที่ย่อย แล้วให้ภาพหลักกินพื้นที่มากกว่า เพื่อช่วยไล่สายตาจากบนลงล่าง',
  },
  {
    src: '/brightsky/loei-display-spec.png',
    alt: 'แบบป้ายประชาสัมพันธ์ท่องเที่ยวจังหวัดเลย พร้อมระบุขนาดงาน',
    title: 'เสน่ห์เมืองเลย',
    description: 'ป้ายแนะนำแหล่งท่องเที่ยวจังหวัดเลย มีทั้งวัดสมเด็จภูเรือมิ่งเมือง น้ำตกเพียงดิน และหมู่บ้านวัฒนธรรมไทดำ',
    concept: 'เลือกภาพสถาปัตยกรรมเป็นจุดหลักและใช้โทนอุ่น เพื่อให้รู้สึกถึงวัฒนธรรมและบรรยากาศของสถานที่',
  },
  {
    src: '/brightsky/yala-artwork.png',
    alt: 'ภาพอาร์ตเวิร์กป้ายเส้นทางท่องเที่ยวจังหวัดยะลา',
    title: 'Yala Tourism Artwork',
    description: 'ไฟล์อาร์ตเวิร์กที่เตรียมไว้สำหรับผลิตจริง โดยจัดภาพและข้อความให้อ่านได้ชัดในพื้นที่แนวตั้ง',
    concept: 'เก็บเฉพาะข้อมูลที่จำเป็น และเผื่อระยะรอบงานให้เหมาะกับขั้นตอนการพิมพ์และติดตั้ง',
  },
];

const brightSkyBanners = [
  {
    src: '/brightsky/sakon-nakhon-banner.jpg',
    alt: 'แบนเนอร์ประชาสัมพันธ์การท่องเที่ยวจังหวัดสกลนคร',
    title: 'Welcome to Sakon Nakhon',
    description: 'แบนเนอร์แนะนำวัดพระธาตุเชิงชุมและวัดธรรมอุทยาน สำหรับประชาสัมพันธ์การท่องเที่ยวจังหวัดสกลนคร',
  },
  {
    src: '/brightsky/phu-pha-man-banner.jpg',
    alt: 'แบนเนอร์อุทยานแห่งชาติภูผาม่าน จังหวัดขอนแก่น',
    title: 'Phu Pha Man National Park',
    description: 'ผมเลือกภาพน้ำตกเป็นภาพหลัก แล้วใส่ชื่อสถานที่ทั้งภาษาไทยและอังกฤษเพื่อให้ใช้งานได้กว้างขึ้น',
  },
  {
    src: '/brightsky/phu-wiang-banner.jpg',
    alt: 'แบนเนอร์อุทยานแห่งชาติภูเวียง จังหวัดขอนแก่น',
    title: 'Phu Wiang National Park',
    description: 'แบนเนอร์ที่รวมจุดเด่นของอุทยานแห่งชาติภูเวียงไว้ด้วยกัน โดยใช้สีสดให้เหมาะกับงานท่องเที่ยว',
  },
];

const brightSkyLocations = [
  { src: '/brightsky/actual-location/location-01.png', alt: 'ภาพสื่อประชาสัมพันธ์การท่องเที่ยวที่ติดตั้งในพื้นที่จริง' },
  { src: '/brightsky/actual-location/location-02.png', alt: 'ภาพจอประชาสัมพันธ์บริเวณสายพานรับกระเป๋า' },
  { src: '/brightsky/actual-location/location-03.png', alt: 'ภาพจอประชาสัมพันธ์สถานที่ท่องเที่ยวบริเวณสายพานรับกระเป๋า' },
  { src: '/brightsky/actual-location/location-04.png', alt: 'ภาพรวมพื้นที่ติดตั้งจอประชาสัมพันธ์ภายในสนามบิน' },
  { src: '/brightsky/actual-location/location-05.png', alt: 'ภาพสื่อท่องเที่ยวที่แสดงบนจอในพื้นที่สนามบิน' },
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
          ติดต่อผม <ArrowUpRight size={16} strokeWidth={1.8} />
        </a>
      </header>

      <div id="top" className="hero-wrap">
        <section className="hero section-container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> Graphic design · Retouching
            </p>
            <h1 id="hero-title">
              สวัสดีครับ ผมปิติพงษ์
              <br />
              <span>นี่คือผลงานของผม</span>
            </h1>
            <p className="hero-description">
              ผมทำงานกราฟิก รีทัชภาพ และออกแบบสื่อสำหรับใช้งานจริง
              หน้านี้รวบรวมงานที่ผมเคยทำและงานที่ชอบไว้ด้วยกัน
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                ดูผลงาน <ArrowDownRight size={17} />
              </a>
              <a className="button button-ghost" href="#about">
                เกี่ยวกับผม
              </a>
            </div>
            <div className="hero-note">
              <span>01</span>
              <p>ผมใส่ใจทั้งภาพรวม<br />และรายละเอียดเล็ก ๆ ในงาน</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="ภาพโปรไฟล์ของนักออกแบบ">
            <div className="portrait-backdrop" />
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="hanging-id" aria-label="ป้ายห้อยโปรไฟล์ของปิติพงษ์">
              <div className="lanyard-strap" />
              <div className="lanyard-clip"><span /></div>
              <figure className="hanging-id-card">
                <div className="id-card-topline">
                  <span className="id-card-mark">P.</span>
                  <span>PORTFOLIO PASS</span>
                </div>
                <img src="/profile.png" alt="ภาพปิติพงษ์บนป้ายห้อยโปรไฟล์" />
                <figcaption>
                  <strong>PITIPONG CHUSAWAT</strong>
                  <span>GRAPHIC DESIGNER · BKK</span>
                </figcaption>
              </figure>
            </div>
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
              <span>Graphic designer</span>
            </div>
            <div className="visual-label label-bottom">
              <span className="label-index">BKK / TH</span>
              <span className="label-line" />
              <span>พร้อมรับงานและพูดคุย</span>
            </div>
          </div>
        </section>

        <section className="tool-strip section-container" aria-label="ทักษะและเครื่องมือ">
          <div className="strip-intro">
            <span className="strip-line" />
            <p>โปรแกรมที่ผม<br />ใช้ทำงานเป็นประจำ</p>
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
          <h2 id="about-title">รู้จักผม<br /><em>ให้มากขึ้นอีกนิด</em></h2>
          <p>
            ผมชื่อปิติพงษ์ ชูสวัสดิ์ ชอบทำงานกราฟิกที่ดูง่ายและสื่อสารตรงประเด็น
            เวลาทำงานผมจะเริ่มจากทำความเข้าใจโจทย์ แล้วค่อยเลือกภาพ สี และการจัดวางให้เข้ากับงาน
          </p>
          <p>
            งานที่ผมถนัดคือโปสเตอร์ แบนเนอร์ รีทัชภาพบุคคล และสื่อออนไลน์
            ผมยังชอบเรียนรู้วิธีใหม่ ๆ เพื่อให้งานแต่ละชิ้นออกมาดีขึ้นกว่าเดิม
          </p>
        </div>
        <div className="about-aside">
          <PenTool size={25} strokeWidth={1.3} />
          <p>สำหรับผม งานที่ดีไม่จำเป็นต้องซับซ้อน ขอแค่คนดูเข้าใจและจำสิ่งที่เราต้องการสื่อได้</p>
          <span>แนวคิดที่ผมใช้เวลาทำงาน</span>
        </div>
      </section>

      <section id="work" className="work-section section-container" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected works / 02</p>
            <h2 id="work-title">ผลงาน<br /><em>ที่ผมเคยทำ</em></h2>
          </div>
          <p className="section-intro-copy">
            ผมแยกงานไว้เป็นหมวดเพื่อให้ดูง่าย แต่ละชิ้นมีคำอธิบายสั้น ๆ ว่าทำอะไรและคิดอย่างไร
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
            <p>รวมงานโปสเตอร์และแบนเนอร์ที่ผมออกแบบ โดยเน้นให้ข้อมูลหลักเห็นชัดและอ่านง่าย</p>
          </div>

          <div className="orientation-heading">
            <span>Vertical posters</span>
            <p>งานแนวตั้งสำหรับโปรโมตกิจกรรม เหมาะกับพื้นที่ที่ต้องการภาพหลักเด่น ๆ และข้อมูลไม่เยอะ</p>
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
                  <p className="concept-copy"><strong>แนวคิด</strong>{work.concept}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="orientation-heading horizontal-heading">
            <span>Horizontal posters</span>
            <p>งานแนวนอนสำหรับเว็บไซต์และสื่อออนไลน์ ผมจัดข้อมูลให้กวาดตาอ่านได้เร็ว</p>
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
                  <p className="concept-copy"><strong>แนวคิด</strong>{work.concept}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div id="retouch-work" className="portfolio-category">
          <div className="category-heading">
            <span className="category-number">02</span>
            <div>
              <p className="section-kicker">Portrait retouch</p>
              <h3>รีทัชภาพบุคคล</h3>
            </div>
            <p>งานรีทัชที่ผมตั้งใจให้ภาพดูเรียบร้อยขึ้น แต่ยังดูเป็นคนเดิมและไม่แต่งจนเกินไป</p>
          </div>
          <figure className="project-feature retouch-feature">
            <div className="project-image-wrap">
              <img src="/miss-tiffany.png" alt="Key visual ของ Miss Tiffany's 2026" />
            </div>
            <figcaption className="poster-caption retouch-caption">
              <p className="project-type">Portrait retouch · 2026</p>
              <h4>Miss Tiffany’s 2026</h4>
              <p>งานชิ้นนี้ผมรีทัชผิว ปรับแสง และจัดวางตัวแบบใหม่ เพื่อให้ภาพดูเด่นขึ้นและยังคงความเป็นธรรมชาติ</p>
              <p className="concept-copy"><strong>แนวคิด</strong>ใช้แสงนุ่มกับโทนสีที่ดูสง่า แล้วเว้นพื้นที่รอบตัวแบบไว้พอดี เพื่อให้ภาพดูมั่นใจแต่ไม่อึดอัด</p>
            </figcaption>
          </figure>
          <div className="orientation-heading retouch-gallery-heading">
            <span>Graduation portrait series</span>
            <p>ภาพชุดนี้เป็นงานติดบัตรและรับปริญญา ผมปรับผิว แสง สี และเสื้อผ้าให้ทุกภาพดูเรียบร้อยใกล้เคียงกัน</p>
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
              <p>ผมจัดสัดส่วน สีพื้นหลัง และความสว่างของภาพแต่ละคนให้ไปในทิศทางเดียวกัน เพื่อให้เอาไปใช้รวมกันได้</p>
              <p className="concept-copy"><strong>แนวคิด</strong>ภาพต้องดูสะอาด สุภาพ และยังเป็นธรรมชาติ เพื่อให้ใช้ได้ทั้งงานพิมพ์และออนไลน์</p>
            </figcaption>
          </figure>
          <div className="project-stack service-cards">
            <article className="project-card project-card-yellow">
              <div className="card-topline"><span>Retouch workflow</span><Layers3 size={20} strokeWidth={1.5} /></div>
              <h3>เก็บรายละเอียด<br /><em>โดยยังคงตัวตน</em></h3>
              <p>ผมพยายามแก้เฉพาะจุดที่จำเป็น ทั้งผิว แสง และสี เพื่อให้ภาพดีขึ้นโดยไม่ดูหลอกตา</p>
              <div className="mini-tools"><img src="/photoshop.png" alt="" /><img src="/lightroom.png" alt="" /></div>
            </article>
            <article className="project-card project-card-blue">
              <div className="card-topline"><span>Video & edit</span><Play size={20} strokeWidth={1.5} /></div>
              <h3>งานตัดต่อ<br /><em>สำหรับสื่อออนไลน์</em></h3>
              <p>นอกจากภาพนิ่ง ผมยังนำภาพและองค์ประกอบต่าง ๆ มาตัดต่อเป็นวิดีโอสั้นสำหรับสื่อออนไลน์ได้</p>
              <div className="mini-tools"><img src="/premiere-pro.png" alt="" /><img src="/illustrator.png" alt="" /></div>
            </article>
          </div>
        </div>

        <div id="booth-work" className="portfolio-category">
          <div className="category-heading">
            <span className="category-number">03</span>
            <div>
              <p className="section-kicker">Photo booth frames</p>
              <h3>งานโฟโต้บูธ<br /><em>ตั้งแต่กรอบภาพถึงวันถ่ายจริง</em></h3>
            </div>
            <p>
              ผมออกแบบทั้งกรอบภาพและช่วยเตรียมหน้างาน ตั้งแต่จัดฉาก วางไฟ
              ไปจนถึงเช็กกล้องก่อนเริ่มถ่ายจริง
            </p>
          </div>

          <div className="gallery-heading booth-design-heading">
            <span>Photo booth frame designs</span>
            <p>กรอบภาพสำหรับงานฮาโลวีนและงานรับปริญญา ผมเว้นพื้นที่ทั้ง 4 ช่องให้ใส่ภาพแล้วไม่ชนกับส่วนตกแต่ง</p>
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
            <p>ภาพเบื้องหลังตอนจัดฉาก วางไฟ และเตรียมกล้องก่อนเปิดให้ผู้ร่วมงานเข้ามาถ่ายภาพ</p>
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
              <h3>เมนู LINE<br /><em>กดใช้งานได้ง่าย</em></h3>
            </div>
            <p>ผมแบ่งเมนูตามบริการที่คนใช้บ่อย เพื่อให้มองแล้วรู้ทันทีว่าต้องกดตรงไหน</p>
          </div>
          <figure className="poster-card line-menu-card">
            <div className="poster-media line-menu-media">
              <img src="/line-menu.jpg" alt="ภาพการออกแบบเมนู LINE สำหรับบริการถ่ายภาพ" />
            </div>
            <figcaption className="poster-caption">
              <p className="project-type">Digital menu</p>
              <h4>LINE Rich Menu</h4>
              <p>เมนูนี้ทำสำหรับบริการถ่ายภาพ ผมแยกแต่ละปุ่มให้ชัดและเลือกขนาดตัวหนังสือที่อ่านได้บนมือถือ</p>
              <p className="concept-copy"><strong>แนวคิด</strong>ใช้ช่องและสีช่วยแยกบริการ ลดข้อความที่ไม่จำเป็น เพื่อให้หน้าจอไม่แน่นจนเกินไป</p>
            </figcaption>
          </figure>
        </div>

        <div id="landnovel-work" className="portfolio-category landnovel-section">
          <div className="category-heading">
            <span className="category-number">05</span>
            <div>
              <p className="section-kicker">Land Novel — Web & visual design</p>
              <h3>งานออกแบบ Land Novel<br /><em>ทั้งเว็บไซต์และสื่อโปรโมต</em></h3>
            </div>
            <p>
              งานชุดนี้มีทั้งหน้าตาเว็บไซต์และภาพประชาสัมพันธ์
              ผมพยายามคุมสีและรูปแบบให้ดูเป็นงานของแบรนด์เดียวกัน
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
            <p>ตัวอย่างหน้าหลัก หน้านิยาย ช่องทางเติมเงิน และหน้าโปรไฟล์ โดยแสดงตามสัดส่วนของหน้าจอจริง</p>
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
              <p className="section-kicker">Internship / BrightSky Media</p>
              <h3>ผลงานระหว่างฝึกงาน<br /><em>บริษัท ไบรท์ สกาย มีเดีย จำกัด</em></h3>
            </div>
            <p>รวมงานที่ผมทำตอนฝึกงาน มีทั้งป้ายประชาสัมพันธ์สถานที่ท่องเที่ยวและงานกราฟิกสำหรับสื่อออนไลน์</p>
          </div>

          <div className="internship-brand-card">
            <div className="internship-logo-wrap">
              <img src="/brightsky/logo.jpg" alt="โลโก้บริษัท BrightSky Media" />
            </div>
            <div>
              <p className="project-type">Bright Sky Media Co., Ltd.</p>
              <h4>Graphic Design Internship</h4>
              <p>ช่วงฝึกงานผมได้ลองทำงานตั้งแต่รับบรีฟ วางแบบ แก้ตามความคิดเห็นของทีม และเตรียมไฟล์ตามขนาดที่ใช้จริง</p>
            </div>
          </div>

          <div className="orientation-heading internship-heading">
            <span>Sports media</span>
            <p>งานประชาสัมพันธ์ LCFC Live สำหรับลงออนไลน์ ใช้สีน้ำเงินของสโมสรเป็นสีหลักของภาพ</p>
          </div>
          <figure className="poster-card internship-feature-card">
            <div className="internship-feature-media">
              <img src="/brightsky/lcfc-live.jpg" alt="งานประชาสัมพันธ์ LCFC Live ของ BrightSky Media" loading="lazy" decoding="async" />
            </div>
            <figcaption className="poster-caption">
              <p className="project-type">Social media artwork</p>
              <h4>LCFC Live</h4>
              <p>ภาพนี้ใช้ประชาสัมพันธ์การถ่ายทอดสดและรวบรวมตัวอย่างสื่อดิจิทัลที่ติดตั้งในสนามบินไว้ในชิ้นเดียวกัน</p>
              <p className="concept-copy"><strong>แนวคิด</strong>ใช้สีน้ำเงินและเส้นกริดให้เข้ากับสโมสร แล้ววางนักฟุตบอลไว้ด้านหน้าเพื่อดึงสายตา</p>
            </figcaption>
          </figure>

          <div className="orientation-heading internship-heading">
            <span>Tourism display design</span>
            <p>งานป้ายแนวตั้งที่ทำตามขนาดสำหรับผลิตจริง มีทั้งแบบที่ระบุขนาดและไฟล์อาร์ตเวิร์ก</p>
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
                  <p className="concept-copy"><strong>แนวคิด</strong>{work.concept}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="orientation-heading internship-heading">
            <span>Tourism banners</span>
            <p>แบนเนอร์แนะนำสถานที่ท่องเที่ยว ผมใช้ภาพจริงเป็นส่วนหลักและใส่ชื่อทั้งภาษาไทยกับอังกฤษ</p>
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

          <div className="orientation-heading internship-heading">
            <span>ภาพสถานที่จริง</span>
            <p>ตัวอย่างผลงานที่นำไปติดตั้งและเปิดใช้งานจริงบนจอประชาสัมพันธ์ภายในพื้นที่สนามบิน</p>
          </div>
          <div className="actual-location-gallery" aria-label="ภาพผลงานที่ติดตั้งในสถานที่จริง">
            {brightSkyLocations.map((work) => (
              <figure className="actual-location-frame" key={work.src}>
                <img src={work.src} alt={work.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process-section section-container" aria-labelledby="process-title">
        <div className="section-heading process-heading">
          <div>
            <p className="section-kicker">How I work / 03</p>
            <h2 id="process-title">ปกติผมทำงาน<br /><em>ตามขั้นตอนนี้</em></h2>
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
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">สนใจร่วมงาน<br /><em>ติดต่อผมได้เลยครับ</em></h2>
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
        <div className="footer-brand"><span className="brand-mark">P.</span> Pitipong Chusawat</div>
        <div className="footer-note"><Mail size={15} /> ขอบคุณที่เข้ามาดูผลงานครับ</div>
        <p>© 2026 — Portfolio</p>
      </footer>
    </main>
  );
}
