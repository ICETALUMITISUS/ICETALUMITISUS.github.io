'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

const lightboxSelector = [
  '.hero-visual img',
  '.poster-media img',
  '.retouch-feature img',
  '.retouch-portrait img',
  '.retouch-overview > img',
  '.booth-gallery img',
  '.booth-frame-gallery img',
  '.promo-frame img',
  '.line-menu-frame img',
  '.showcase-frame img',
  '.banner-frame img',
  '.ui-frame img',
  '.internship-section img',
].join(',');

type SelectedImage = {
  src: string;
  alt: string;
};

let paperAudioContext: AudioContext | null = null;

function playPaperSound() {
  try {
    const context = paperAudioContext ?? new AudioContext();
    paperAudioContext = context;

    if (context.state === 'suspended') {
      void context.resume();
    }

    const duration = 0.3;
    const frameCount = Math.floor(context.sampleRate * duration);
    const buffer = context.createBuffer(1, frameCount, context.sampleRate);
    const samples = buffer.getChannelData(0);

    for (let index = 0; index < frameCount; index += 1) {
      const progress = index / frameCount;
      const envelope = Math.pow(1 - progress, 1.55);
      const paperTexture = 0.72 + Math.sin(progress * 125) * 0.12;
      samples[index] = (Math.random() * 2 - 1) * envelope * paperTexture;
    }

    const source = context.createBufferSource();
    const highPass = context.createBiquadFilter();
    const lowPass = context.createBiquadFilter();
    const gain = context.createGain();
    const startTime = context.currentTime;

    highPass.type = 'highpass';
    highPass.frequency.setValueAtTime(520, startTime);
    lowPass.type = 'lowpass';
    lowPass.frequency.setValueAtTime(6200, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.11, startTime + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    source.buffer = buffer;
    source.playbackRate.setValueAtTime(0.95 + Math.random() * 0.12, startTime);
    source.connect(highPass).connect(lowPass).connect(gain).connect(context.destination);
    source.start(startTime);
    source.stop(startTime + duration);
  } catch {
    // The lightbox still works when audio is unavailable or muted by the browser.
  }
}

export function PortfolioLightbox() {
  const [selected, setSelected] = useState<SelectedImage | null>(null);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll<HTMLImageElement>(lightboxSelector));

    for (const image of images) {
      image.classList.add('lightbox-source');
      if (!image.closest('button, a')) {
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', `ขยายดู${image.alt || 'ภาพผลงาน'}`);
      }
    }

    const openImage = (image: HTMLImageElement) => {
      playPaperSound();
      setSelected({ src: image.currentSrc || image.src, alt: image.alt || 'ภาพผลงาน' });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof HTMLImageElement && target.matches(lightboxSelector)) {
        openImage(target);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLImageElement &&
        target.matches(lightboxSelector) &&
        !target.closest('button, a') &&
        (event.key === 'Enter' || event.key === ' ')
      ) {
        event.preventDefault();
        openImage(target);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      for (const image of images) {
        image.classList.remove('lightbox-source');
        if (!image.closest('button, a')) {
          image.removeAttribute('tabindex');
          image.removeAttribute('role');
          image.removeAttribute('aria-label');
        }
      }
    };
  }, []);

  return (
    <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
      <DialogContent className="portfolio-lightbox" aria-describedby="portfolio-lightbox-description">
        <DialogTitle className="sr-only">ภาพผลงานขนาดใหญ่</DialogTitle>
        <DialogDescription id="portfolio-lightbox-description" className="sr-only">
          กด Escape ปุ่มปิด หรือคลิกพื้นที่ด้านนอกเพื่อกลับไปยังหน้าเว็บ
        </DialogDescription>
        {selected && <img key={selected.src} src={selected.src} alt={selected.alt} />}
      </DialogContent>
    </Dialog>
  );
}
