import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData.js';

export default function Ending() {
  return (
    <footer className="ending">
      <div className="ending__ornament" aria-hidden="true"><Heart size={18} /></div>
      <p>{weddingData.groom} <span>·</span> {weddingData.bride}</p>
      <small>2026. 11. 01</small>
      <span className="ending__credit">MADE WITH LOVE</span>
    </footer>
  );
}
