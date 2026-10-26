import Opening from './components/Opening.jsx';
import Letter from './components/Letter.jsx';
import PartyTicket from './components/PartyTicket.jsx';
import MapSection from './components/MapSection.jsx';
import RSVPModal from './components/RSVPModal.jsx';
import Ending from './components/Ending.jsx';

export default function App() {
  return (
    <main>
      <Opening />
      <Letter />
      <PartyTicket />
      <MapSection />
      <section className="rsvp section-wrap" aria-labelledby="rsvp-section-title">
        <p className="eyebrow">PLEASE REPLY</p>
        <h2 id="rsvp-section-title">마음 전해주기</h2>
        <p>참석 여부를 알려주시면<br />정성껏 자리를 준비하겠습니다.</p>
        <RSVPModal />
      </section>
      <Ending />
    </main>
  );
}
