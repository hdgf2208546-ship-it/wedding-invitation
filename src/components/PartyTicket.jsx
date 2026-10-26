import { CalendarDays, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData.js';

export default function PartyTicket() {
  return (
    <section className="ticket section-wrap" aria-labelledby="ticket-title">
      <p className="eyebrow">SAVE THE DATE</p>
      <h2 id="ticket-title">기쁜 날, 함께해요</h2>
      <div className="ticket__body">
        <div className="ticket__row">
          <span className="ticket__icon"><CalendarDays size={19} /></span>
          <div><p className="ticket__label">WHEN</p><p>{weddingData.date}</p></div>
        </div>
        <div className="ticket__divider" />
        <div className="ticket__row">
          <span className="ticket__icon"><MapPin size={19} /></span>
          <div><p className="ticket__label">WHERE</p><p>{weddingData.venue}</p><p className="ticket__address">{weddingData.address}</p></div>
        </div>
        <a className="ticket__map-link" href={weddingData.mapUrl} target="_blank" rel="noreferrer">네이버 지도로 길 찾기 <span aria-hidden="true">↗</span></a>
      </div>
      <p className="ticket__note">두 사람이 함께 내딛는 첫걸음에<br />따뜻한 축복으로 함께해 주세요.</p>
    </section>
  );
}
