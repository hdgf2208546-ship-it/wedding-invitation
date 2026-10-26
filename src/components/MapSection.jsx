import { ExternalLink, MapPinned, Navigation } from 'lucide-react';
import { weddingData } from '../data/weddingData.js';

export default function MapSection() {
  return (
    <section className="map-section section-wrap" aria-labelledby="map-title">
      <p className="eyebrow">COME FIND US</p>
      <h2 id="map-title">오시는 길</h2>
      <a className="map-preview" href={weddingData.mapUrl} target="_blank" rel="noreferrer" aria-label="네이버 지도에서 장소 보기">
        <span className="map-preview__grid" aria-hidden="true" />
        <span className="map-preview__road map-preview__road--one" aria-hidden="true" />
        <span className="map-preview__road map-preview__road--two" aria-hidden="true" />
        <span className="map-preview__park" aria-hidden="true" />
        <span className="map-preview__pin"><MapPinned size={24} /></span>
        <span className="map-preview__label">{weddingData.venue}</span>
        <span className="map-preview__open"><ExternalLink size={15} /> 네이버 지도에서 보기</span>
      </a>
      <div className="map-section__address">
        <Navigation size={17} aria-hidden="true" />
        <div><strong>{weddingData.venue}</strong><p>{weddingData.address}</p></div>
      </div>
    </section>
  );
}
