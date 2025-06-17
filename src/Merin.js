import React, { useEffect, useRef, useState } from 'react';
import './Merin.css';
import roseImg from './assets/rose.png';
import bgMusic from './assets/bg-music.mp3';

export default function Merin() {
  const audioRef = useRef();
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current.play().catch(() => {});
      document.removeEventListener('click', playMusic);
    };
    document.addEventListener('click', playMusic);
  }, []);

  const handleShowLetter = () => {
    setShowLetter(true);
  };

  return (
    <div className="merin-container">
      {!showLetter ? (
        <>
          <h1 className="fade-in">Hi Merin...</h1>
          <img src={roseImg} alt="Rose" className="rose-img" />
          <button className="surprise-btn" onClick={handleShowLetter}>Message from Allen 💌</button>
        </>
      ) : (
        <div className="letter-page">
          <div className="royal-letter">
            <p>
              I love being single, but I'd rather be with you instead because I don't want to spend the rest of my life wondering where our story could have led. <br /><br />
              So I think you're really pretty, but when I hear your beauty speak, my mind grips at handrails as my knees begin to weak. <br /><br />
              I think you're so incredibly talented that if talent competed in a show, they would use a picture of you winning as a definition everyone should know. <br /><br />
              I didn't want to be an artist until I saw a picture of you. Now my Instagram is full of paint mesmerized by someone I wish I knew. <br /><br />
              I've never been good at poetry. But if poetry could talk, every stanza would have your smile, every rhyme would show off your walk. <br /><br />
              I think your thoughts are incredible, if incredible meant worthy of being known. I'd like to prove to you the way love feels when it's consistently shown. <br /><br />
              I know we just met, but if my heart was a Tetris game, the existence of all my breaking just disappeared by hearing your name. <br /><br />
              I think you're really funny. But not in look or time. The kind of funny I fell in love with. That makes a biologist need to rhyme. <br /><br />
              Every time you show up on my feed or a new photo is posted I melt at the sight of you like butter on bread freshly toasted. <br /><br />
              I know you like being single, but I'd like to inquire about your heart. And I don't know how to convince you I'm worth it. But this seemed like a good start. <br /><br />
              <strong>Happy Birthday 🎂</strong>
            </p>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={bgMusic} loop />
    </div>
  );
}
