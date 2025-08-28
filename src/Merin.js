import React, { useEffect, useRef, useState } from 'react';
import './Merin.css';
import roseImg from './assets/rose.png';
import bgMusic from './assets/bg-music.mp3';
import campfire from './assets/campfire.gif';

export default function Merin() {
  const audioRef = useRef();
  const [showLetter, setShowLetter] = useState(false);
  const [showMoreMessages, setShowMoreMessages] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [ageText, setAgeText] = useState('');

  // Array of unsent messages
  const unsentMessages = [
    {
      id: 1,
      title: "Unsent Message 1",
      content: "If I had a time machine, I'd go back to the moment we met, just to experience it all over again."
    },
    {
      id: 2,
      title: "Unsent Message 2", 
      content: "I sometimes wonder if you smile when you see my name pop up on your phone, the way I do when I see yours."
    },
    {
      id: 3,
      title: "Unsent Message 3",
      content: "You have this incredible way of making a room brighter just by being in it."
    },
    {
      id: 4,
      title: "Unsent Message 4",
      content: "I've replayed our conversations in my head more times than I can count."
    },
    {
      id: 5,
      title: "Unsent Message 5",
      content: "Just so you know, you're my favorite notification."
    },
    {
      id: 6,
      title: "Unsent Message 6",
      content: "Every time I see your name, my heart does this little dance that I can't explain."
    },
    {
      id: 7,
      title: "Unsent Message 7",
      content: "I think about the way you laugh and it makes me want to be the reason you smile more often."
    },
    {
      id: 8,
      title: "Unsent Message 8",
      content: "Your voice has this magical quality that makes everything else fade into the background."
    },
    {
      id: 9,
      title: "Unsent Message 9",
      content: "I find myself looking for excuses to start conversations with you, just to hear what you have to say."
    },
    {
      id: 10,
      title: "Unsent Message 10",
      content: "You're the kind of person who makes me believe in love at first sight, even though I never believed in it before."
    }
  ];

  // Calculate live age
  useEffect(() => {
    const dob = new Date('2005-08-30T00:00:00'); // local time

    const updateAge = () => {
      const now = new Date();
      const diffMs = now - dob;

      const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diffMs % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      setAgeText(`${years} yrs, ${months} months, ${days} days — ${hours}:${minutes}:${seconds}`);
    };

    const interval = setInterval(updateAge, 1000);
    updateAge(); // initial call
    return () => clearInterval(interval);
  }, []);

  const handleShowLetter = () => {
    setShowLetter(true);
    audioRef.current.play().catch(() => {});
  };

  const handleShowMoreMessages = () => {
    setShowMoreMessages(true);
    setSelectedMessage(null);
  };

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  const handleBackToMessages = () => {
    setSelectedMessage(null);
  };

  const handleBackToLetter = () => {
    setShowMoreMessages(false);
    setSelectedMessage(null);
  };

  return (
    <div className="merin-container">
      {!showLetter ? (
        <>
          <h1 className="fade-in">Hi Merin...</h1>
          <img src={roseImg} alt="Rose" className="rose-img" />
          <button className="surprise-btn" onClick={handleShowLetter}>
            Unsent Text from Allen 💌
          </button>
          <img src={campfire} alt="Campfire" className="campfire-scene" />
        </>
      ) : (
        <div className="letter-page">
          {!showMoreMessages ? (
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
                <strong
                  onClick={() => alert('Wishing you the best birthday ever, Merin! 🎉')}
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Happy Birthday 🎂
                </strong>
                <br /><br />
                <span
                  onClick={handleShowMoreMessages}
                  style={{ cursor: 'pointer', textDecoration: 'underline', color: '#a86c27' }}
                >
                  More unsent messages...
                </span>
              </p>
              <div className="live-age">⏳ My ribs were went missing for: {ageText}</div>
            </div>
          ) : (
            <div className="messages-container">
              {!selectedMessage ? (
                <>
                  <h2 className="messages-title">Choose an Unsent Message</h2>
                  <div className="messages-grid">
                    {unsentMessages.map((message) => (
                      <button
                        key={message.id}
                        className="message-btn"
                        onClick={() => handleMessageSelect(message)}
                      >
                        {message.title}
                      </button>
                    ))}
                  </div>
                  <button onClick={handleBackToLetter} className="back-btn">
                    Back to Letter
                  </button>
                </>
              ) : (
                <div className="royal-letter">
                  <h2>{selectedMessage.title}</h2>
                  <p>{selectedMessage.content}</p>
                  <button onClick={handleBackToMessages} className="back-btn">
                    Back to Messages
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <audio ref={audioRef} src={bgMusic} loop />
    </div>
  );
}
