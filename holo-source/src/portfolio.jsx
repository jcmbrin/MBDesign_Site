import React from 'react';
import { createRoot } from 'react-dom/client';
import HoloCard from './HoloCard';
import './portfolio.css';

// Keep the existing HTML images until their dimensions are known so the grid
// retains its original aspect ratios and remains usable before React loads.
function mountCards() {
  document.querySelectorAll('.portfolio-holo-host').forEach(host => {
    const image = host.querySelector('img');
    if (!image) return;
    const content = host.closest('.portfolio-content');
    const src = image.getAttribute('src');
    const alt = image.alt || content.querySelector('h4, p')?.textContent.trim() || 'Portfolio project';
    let mounted = false;
    const mount = () => {
      if (mounted) return;
      mounted = true;
      const ratio = image.naturalWidth && image.naturalHeight ? image.naturalWidth / image.naturalHeight : 1.5;
      host.style.aspectRatio = String(ratio);
      createRoot(host).render(
        <HoloCard image={src} alt={alt} preset="bursts" idle={false}
          radius={4} hoverScale={1.025}
          style={{ '--hc-w': '100%', '--hc-ratio': ratio }} />
      );
    };
    if (image.complete) mount();
    else {
      image.addEventListener('load', mount, { once: true });
      image.addEventListener('error', mount, { once: true });
    }
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountCards, { once: true });
else mountCards();
