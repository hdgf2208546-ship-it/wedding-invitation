import { useState } from 'react';
import { Check, Copy, MessageCircle, X } from 'lucide-react';
import { weddingData } from '../data/weddingData.js';

export default function RSVPModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const phoneDigits = weddingData.phone.replace(/\D/g, '');
  const message = encodeURIComponent(`안녕하세요, ${weddingData.groom}·${weddingData.bride} 결혼식 참석 여부를 전합니다.`);

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(weddingData.phone);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `tel:${phoneDigits}`;
    }
  }

  return (
    <>
      <button className="rsvp-trigger" type="button" onClick={() => setOpen(true)}>
        <MessageCircle size={17} /> 참석 여부 전하기
      </button>
      {open && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <section className="rsvp-modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-title">
            <button className="rsvp-modal__close" type="button" onClick={() => setOpen(false)} aria-label="닫기"><X size={19} /></button>
            <p className="eyebrow">WITH LOVE</p>
            <h2 id="rsvp-title">참석 여부를<br />전해주세요</h2>
            <p className="rsvp-modal__copy">따뜻한 축하의 마음에 감사드립니다.<br />아래 연락처로 편하게 알려주세요.</p>
            <p className="rsvp-modal__phone">{weddingData.phone}</p>
            <div className="rsvp-modal__actions">
              <button type="button" className="button button--quiet" onClick={copyPhone}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? '복사했어요' : '번호 복사'}</button>
              <a className="button button--primary" href={`sms:${phoneDigits}?body=${message}`}><MessageCircle size={16} /> 문자 보내기</a>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
