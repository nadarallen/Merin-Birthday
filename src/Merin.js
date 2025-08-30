import React, { useEffect, useRef, useState } from 'react';
import './Merin.css';
import roseImg from './assets/rose.png';
import bgMusic from './assets/bg-music.mp3';
import campfire from './assets/campfire.gif';

export default function Merin() {
  const audioRef = useRef();
  const [showLetter, setShowLetter] = useState(false);
  const [showMoreMessages, setShowMoreMessages] = useState(false);
  const [showPoems, setShowPoems] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [ageText, setAgeText] = useState('');

  // Array of unsent messages
  const unsentMessages = [
    {
      id: 1,
      title: "Unsent Message 1",
      content: "If I had a time machine, I'd go back to the moment we met, just to experience it all over again, NVM i am so delulu"
    },
    {
      id: 2,
      title: "Unsent Message 2", 
      content: "I sometimes wonder if you smile when you see my name pop up on your phone, the way I do when I see yours[probably not, but I still wish i could be that smile too ...]."
    },
    {
      id: 3,
      title: "Unsent Message 3",
      content: "You have this incredible way of making a room brighter just by being in it, IDK but something inside feels me like that to say..."
    },
    {
      id: 4,
      title: "Unsent Message 4",
      content: "I've replayed our conversations in my head more times than I can count [Even though we barely ever talked]."
    },
    {
      id: 5,
      title: "Unsent Message 5",
      content: "As a final act of Love, I'll turn into someone we both can hate."
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

  // Array of un sent poems
  const unSentPoems = [
    {
      id: 1,
      title: "Waiting for You",
      content: "I am waiting for someone worth loving,\nsomeone worth suffering for,\ninstead of just suffering in vain.\n\nI sit outside looking for a rainbow,\nknowing I will only be met with rain.\nSo I start to say it's romantic.\n\nI shield my eyes and feel the water soak in.\nWhen sunshine starts to feel like something I deserve,\nthen I am a swim.\n\nBut as I grow comfortable, the storm changes.\nThe rain starts to pour,\nthe lightning becomes too dangerous,\nthe thunder drowns the city,\nand before I know it, I'm drowning.\n\nI tell myself I can swim.\nI tell myself a lot of things\nas the sunshine starts to dim.\n\nI wait for a new tomorrow.\nI shiver and I shake.\nI wait for an early morning\nthat will inevitably still take a summer\nand make it winter,\nskip over the need to fall.\n\nI'm waiting for you to be someone\nI know you will never be at all.\nLike mine, like ours,\nlike a patience to grow.\n\nI ask for too much, or too little from you, I know.\nAnd I wait,\nto be yelled at, to be laughed at,\nto be kissed,\nto be someone worth remembering,\nto be someone who is missed.\n\nI speak of bitter woes\nlike they're not stones in my shoe.\nBut I walk around in the rain\nand guess what?\nI never find you.\n\nI speak of plans like they're suggestions,\nbecause if they were serious, the earth would shake.\nThe morning is just morning,\nbut I still smile for my sake.\n\nI wait for you to say you miss me,\nor to say what we had was real.\nBut I keep making excuses,\nand every time I am the one,\nI still make it a big deal.\nI say you give too much\njust so I can accept less.\n\nBut you're like a crossroad of a romance\nI no longer want to guess.\nI say you're troubled, wounded,\nwhile I'm bleeding on the phone\nthat you don't know any better.\n\nLike you were raised on Earth alone,\nyou left but didn't learn,\nyou learned but didn't care.\nEveryone deserves to be art,\nbut I'm just an artist to you.\nHow is that fair?\n\nYou were insecure, immature, unavailable,\nyou didn't know.\nBut all of that is bullshit\nwhen, to somebody else's arms, you go,\nbecause you're drunk,\nbecause you're tired,\nbecause they're not me,\nso they'd still be with you.\n\nI'm waiting for you to say\nyou've been waiting for me too.\nBut what I realized,\nwhat I always knew,\nthough maybe just chose not to see,\nis that if I were to go see the future,\nyou still wouldn't have chosen.\nYou still wouldn't have chosen me."
    },
    {
      id: 2,
      title: "Being Around You",
      content: "You want me to say it?\nI'll say it.\n\nBeing around you makes me nervous.\nBut if nerves were a pool, I would high dive, belly flop, embarrass myself\njust to try to look cool.\n\nBecause you make my heart beat faster.\nYou don't mean to. I know.\nBut when I'm next to you, why would I care to watch any stupid show?\n\nFinish the sentence. Look away.\nIf I could be next to you, I would let my hyperventilation stay,\nbecause with you, I feel nervous—\nbut the kind of anxiety that turns to humor.\n\nI'm laughing at how ridiculous it was\nthat my greatest insecurity was being a late bloomer.\n\nYou make me shy,\nand that way makes you have to smile.\nI can't look at you for too long,\nor my heart grows legs to sprint,\na smile to sprint a mile.\n\nI'm smiling at you.\nI'm blushing.\nYou're so pretty, by the way,\nand I would feel pretty lucky to remind you of that every day.\n\nBeing around you makes me jumpy\nin a chaotic sort of calm,\nas if a heavy metal rock band covered a beautiful ethereal song.\n\nYou make me feel excited—maybe you could tell.\nBecause when your knee kisses mine,\nI'm put under a spell\nthat starts with \"oh God\" and ends with \"please, no more.\"\n\nMy hands cover my face.\nI've never been giddy like this before.\n\nSo I push my leg closer.\nWe're both sitting on the floor,\nchallenging the limits of tension\nuntil we can't take it anymore."
    },
    {
      id: 3,
      title: "I Never Got Over You",
      content: "I never got over it, obviously.\nI just pretended to get through.\nBecause how does one get over the regret of losing you?\n\nMy death story is obsessed with all the futures that could have been.\nTo me, you were heaven.\nHeaven should never be tainted by such sin.\n\nYou are perfect, polished, an absolute pleasure to know.\nI never could have compared to the place where angels go.\nYou're well-spoken, well-mannered, worth every reason to fall.\nBut if you had never met me, it wouldn't have mattered in your life at all.\n\nIf words were made of pennies,\nyou'd create lotteries that rhyme.\nI made myself a millionaire just because it wasn't the right time.\nBut I wish it had been.\n\nI hold those thoughts like a prayer,\nto say or not to say.\nI guess a better man wouldn't dare,\nbut I confess before I know if I should.\n\nI never got over you. Honestly, I don't think I ever could.\nI loved you immediately.\nIt was a dopamine rush I had never felt before about any other crush.\nBecause I loved you before love even had time to fall.\nI loved you even when I said I didn't like you very much at all.\nI loved you. I did.\n\nSometimes I still do,\nwhen I compare every first date to that first one I had with you.\nI loved you. I did.\nTo call it something else would be cruel.\n\nWhen you read over essays after I confided how much I wanted to go back to school,\nI started making myself better.\nI loved you so much.\nI used it as a new standard setter.\nBecause if I could love you, that love with me remains.\n\nAnd I'm really hoping this is the part where you say these were just growing pains,\nthat I'll understand when I'm older,\nwhen I'm somehow less naive.\n\nHow can you still love someone\nwhen you know they're supposed to leave?\n\nDon't leave.\nI loved you.\nDon't leave. Please stay.\nDon't leave, because that love isn't gonna leave my heart anyway.\nDon't leave. I didn't say it then.\nDon't leave, but I wish I had.\nDon't leave, because I know the future,\nand without you, it's pretty fucking sad.\nDon't leave. I mean it.\n\nDon't leave—or at least let me go.\nLeave if you must,\nbut I really need you to know\nthat part of me will always love you.\n\nBut if you were never to return,\nwhat a hell of a lesson the loss of you was to learn."
    },
    {
      id: 4,
      title: "Everything I Make",
      content: "Everything I make somehow keeps you in mind,\nas if my art is a treasure chest\nand I'm leaving clues for you to find.\n\nHow wonderful you are.\nHow you redefined my idea of perfection,\nbecause I thought perfect was impossible\nuntil I got a glimpse of your reflection\nand your full smile,\nwhich dips to the side.\n\nIf I told everyone perfection was impossible,\nmeeting you would prove I lied.\nBecause it isn't that often\nthat you meet intelligence incarnate,\nnot with that sense of humor,\nnot with your everlasting wit.\n\nBecause with you, I want to argue\njust to hear what you might say.\nI might not survive the comeback,\nbut hey, it was time I met my match.\n\nBecause with you, I want to talk\njust to savor your presence for hours,\nrun back into a grocery store\njust to buy you a bouquet of flowers.\n\nEverything I make, I look at with your eyes.\nWhat would you love about it?\nWhat would you think are just lies?\n\nI feel Gatsbyrian, writing for the masses,\npraying and hoping that only you will recognize my heart as it passes.\nThis heart that I created, molded to your touch,\nholds back its letters in case writing for you is too much.\n\nBecause everything I make somehow carries your aura,\nas if I am just the forest\nmade to hold the prettiest flora.\nWhere the flowers ask to be sent to you,\nthe sky blues at your presence lost.\nAngels pray to become human\nfor a chance to come across you.\n\nAt my most artistic,\nsometimes creativity falters\nbecause of the reality of your perfection.\nMy poetry never alters; it only accentuates\nwhat you believed was only mine.\n\nYou thought me perfect.\nI'm convinced you are divine.\nSo everything I make tries to get you back your wings.\nAn angel has no business wasting time with earthly things.\n\nEventually, in heaven, we reunite again.\nBut you are already an angel among human men,\nso I'm not surprised by your greatness,\nthe light that carried you home.\nI'm surprised you made me an angel,\nthat you weren't an angel alone."
    },
    {
      id: 5,
      title: "If I Were to Call You Beautiful",
      content: "If I were to call you beautiful,\nbeauty would need a new definition,\nbecause God put you together\nto make \"gorgeous\"\nhave a more ethereal rendition.\n\nYou're beautiful\nin the way your energy floats,\nlike it's freezing outside,\nand you brought infinite codes\nso that everyone would feel comfortable.\n\nYou're beautiful in how you speak.\nThe first time you talked to me,\nI must have replayed it in my head for a week.\n\nIf I were to call you beautiful,\nyou'd shake your head in blush,\nwhile I'd hold onto the table\nas the butterflies start to rush—\nbecause you're beautiful\nin how you listen to an endless stream of thoughts.\n\nI compared the light in your eyes\nto those found on ceilings,\nbut stars don't share those same watts.\n\nYou're beautiful in the way poets string together words,\nlike every single part of you\nwas placed into perfection\nby a pair of hummingbirds.\n\nYou're beautiful\nso much so that I need to look away,\nbecause if I look into your eyes,\nI forget what I was gonna say.\n\nThe sky blues at your absence,\nbut even when it cries,\nthe rainbows form\nto guide us toward one day realizing\nthat there's art in sadness.\n\nI'm sad that you don't know\nthat I think you're so beautiful,\nand that made me want to let you go.\nBecause beauty kept secret\nis like standing in the shade.\nYou never know the sun's warmth\nif, in its absence, you've always stayed.\n\nAnd I should have stayed.\nEven if I stood there in awe\nwith no words to form,\nI couldn't find a single flaw—\nbecause you're beautiful today,\nbeautiful tomorrow.\n\nI went and begged the sun\nfor some of its beauty to borrow,\nand it showed me your smile.\nThen took a picture of mine,\nhanded me a pen,\nand I described you in every line."
    },
    {
      id: 6,
      title: "Unsent Poem 6",
      content: "Like a painter with colors so bright,\nI sketch your image in morning light.\nEach stroke a whisper of what I feel,\nA love so deep, so pure, so real."
    },
    {
      id: 7,
      title: "Unsent Poem 7",
      content: "In the library of my mind,\nYour story's one I long to find.\nI write these verses, page by page,\nHoping to turn a new chapter's age."
    },
    {
      id: 8,
      title: "Unsent Poem 8",
      content: "Like a bird that sings but never flies,\nI write these words with tearful eyes.\nEach rhyme a heartbeat, each line a prayer,\nThat someday you'll know how much I care."
    },
    {
      id: 9,
      title: "Unsent Poem 9",
      content: "In the symphony of life's sweet song,\nYour voice is where my heart belongs.\nI compose these verses in quiet rooms,\nWhere love grows stronger, dispelling gloom."
    },
    {
      id: 10,
      title: "Unsent Poem 10",
      content: "Like a dream that fades with morning light,\nI hold these feelings through the night.\nEach poem a bridge I long to cross,\nTo reach the heart I've almost lost."
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

  const handleShowPoems = () => {
    setShowPoems(true);
    setSelectedPoem(null);
  };

  const handlePoemSelect = (poem) => {
    setSelectedPoem(poem);
  };

  const handleBackToPoems = () => {
    setSelectedPoem(null);
  };

  const handleBackToLetterFromPoems = () => {
    setShowPoems(false);
    setSelectedPoem(null);
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
          {!showMoreMessages && !showPoems ? (
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
                <br /><br />
                <span
                  onClick={handleShowPoems}
                  style={{ cursor: 'pointer', textDecoration: 'underline', color: '#a86c27' }}
                >
                  Read unsent poems...
                </span>
              </p>
              <div className="live-age">⏳ My ribs were went missing for: {ageText}</div>
            </div>
          ) : showMoreMessages ? (
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
          ) : showPoems ? (
            <div className="messages-container">
              {!selectedPoem ? (
                <>
                  <h2 className="messages-title">Choose an Unsent Poem</h2>
                  <h4 className="messages-title">All of this are super random but I thaught of merin in between these lines</h4>
                  <div className="messages-grid">
                    {unSentPoems.map((poem) => (
                      <button
                        key={poem.id}
                        className="message-btn"
                        onClick={() => handlePoemSelect(poem)}
                      >
                        {poem.title}
                      </button>
                    ))}
                  </div>
                  <button onClick={handleBackToLetterFromPoems} className="back-btn">
                    Back to Letter
                  </button>
                </>
              ) : (
                <div className="royal-letter">
                  <h2>{selectedPoem.title}</h2>
                  <p style={{ whiteSpace: 'pre-line' }}>{selectedPoem.content}</p>
                  <button onClick={handleBackToPoems} className="back-btn">
                    Back to Poems
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      )}
      <audio ref={audioRef} src={bgMusic} loop />
    </div>
  );
}
