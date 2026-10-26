import { ArrowDown } from 'lucide-react';
import { weddingData } from '../data/weddingData.js';

const baseUrl = import.meta.env.BASE_URL;

export default function Opening() {
  return (
    <section className="opening" aria-labelledby="opening-title">
      <img className="opening__moon" src={`${baseUrl}illustrations/moon.svg`} alt="" />
      <img className="opening__stars" src={`${baseUrl}illustrations/stars.svg`} alt="" />
      <img className="opening__rabbit" src={`${baseUrl}illustrations/rabbit.svg`} alt="작은 토끼 삽화" />
      <p className="eyebrow opening__eyebrow">A LITTLE CELEBRATION</p>
      <h1 id="opening-title">우리, 결혼합니다</h1>
      <p className="opening__names">{weddingData.groom}<span>그리고</span>{weddingData.bride}</p>
      <div className="opening__rule" aria-hidden="true"><i /><i /><i /></div>
      <p className="opening__date">{weddingData.date}</p>
      <a className="opening__scroll" href="#letter" aria-label="초대장 읽기"><ArrowDown size={18} /></a>
    </section>
  );
}
