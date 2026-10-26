import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData.js';

export default function Letter() {
  return (
    <section className="letter section-wrap" id="letter" aria-labelledby="letter-title">
      <p className="eyebrow">A LETTER TO YOU</p>
      <h2 id="letter-title">소중한 분들을<br />초대합니다</h2>
      <div className="letter__mark" aria-hidden="true"><Heart size={17} /></div>
      <p className="letter__copy">
        {weddingData.greeting}<br />
        서로의 하루에 다정한 빛이 되어<br />
        함께 걷기로 약속했습니다.<br />
        저희의 첫걸음을 따뜻한 마음으로<br />
        축복해 주시면 감사하겠습니다.
      </p>
      <p className="letter__signature">{weddingData.groom}<span> · </span>{weddingData.bride}</p>
      <div className="letter__flourish" aria-hidden="true"><span /><span /><span /></div>
    </section>
  );
}
