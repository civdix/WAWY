import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
const Quotes = [
  {
    verse: "",
    translation:
      "The interesting thing about life is that one day, it will leave you, yet you still love it. So, love Your'Self'. ✨",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "Life is like a camera. Focus on the good times, develop from the negatives, and if things don’t work out, take another shot. 📸✨",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "Difficult roads often lead to beautiful destinations. Keep going! 🌄",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "Life is not about waiting for the storm to pass, but learning to dance in the rain. ☔💃",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "Every day is a new beginning. Take a deep breath, smile, and start again.",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "Those we love never truly leave us. They live on in the kindness they shared, the love they gave, and the memories they left behind. ❤️",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "When someone you love becomes a memory, that memory becomes a treasure. Keep them alive in your heart. 🌿✨",
    source: "WAWY",
  },
  {
    verse: "",
    translation:
      "They may be gone from your sight, but they will never be gone from your heart. Their love surrounds you always. 💫",
    source: "WAWY",
  },
  {
    verse: "Na jāyate mriyate vā kadāchin nāyaṁ bhūtvā bhavitā vā na bhūyaḥ",
    translation:
      "The soul is neither born nor does it ever die. It has always existed and will always exist.",
    source: "Bhagavad Gita 2.20",
  },
  {
    verse:
      "Yatha deepo nivata-stho nengate sopama smrita, yogino yata-chittasya yuñjato yogam ātmanaḥ",
    translation:
      "Just as a lamp in a windless place does not flicker, the self-controlled yogi, focused on the Supreme, remains steady in peace.",
    source: "Bhagavad Gita 6.19",
  },
  {
    verse: "Antaṁ prapya śarīrasya naṣṭaṁ kāryam na vidyate",
    translation:
      "When the body reaches its end, its purpose is fulfilled, but the soul moves forward.",
    source: "Unknown",
  },
  {
    verse: "Jatasya hi dhruvo mrityur, dhruvam janma mritasya cha",
    translation:
      "For one who is born, death is certain; and for one who has died, rebirth is certain.",
    source: "Bhagavad Gita 2.27",
  },
  {
    verse: "Vāsāṁsi jīrṇāni yathā vihāya navāni gṛhṇāti naro’parāṇi",
    translation:
      "As a person discards old clothes and wears new ones, so does the soul leave the body and take a new one.",
    source: "Bhagavad Gita 2.22",
  },
  {
    verse: "Agne naya supatha rāye asmān",
    translation: "O Fire God, lead us on the right path to the ultimate truth.",
    source: "Rig Veda 1.189.1",
  },
  {
    verse: "Anityam asukhaṁ lokaṁ imaṁ prāpya bhajasva mām",
    translation:
      "This world is temporary and full of suffering, so surrender unto Me.",
    source: "Bhagavad Gita 9.33",
  },
  {
    verse: "Sarvam khalvidam brahma",
    translation:
      "Everything in this universe is divine and connected to Brahman (the Supreme Reality).",
    source: "Chandogya Upanishad 3.14.1",
  },
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function Home() {
  const [quote, setQuote] = useState(null); //Quotes[parseInt(getRandomInt(0, Quotes.length))]
  useEffect(() => {
    setQuote(Quotes[parseInt(getRandomInt(0, Quotes.length))]);
  }, []);
  return (
    <div className="home">
      <Navbar />

      <div className="content">
        <div className="WAWY">
          <span className="title W">W</span>
          <span className="title A">A</span>
          <span className="title W">W</span>
          <span className="title Y">Y</span>
        </div>
        <div className="WAWY message">A After Life Friend</div>
        <div className="glassy quote">
          {/* will have a light colored and blured box which will have a line vertically 
equal to height taken by the Quote
*/}

          {quote && quote.verse != "" ? "'" + quote.verse + "'" : ""}
          {quote && quote.verse ? <br /> : ""}
          <span
            style={{
              borderBottom: "1px Solid black",
            }}
            className="underline"
          >
            {quote && quote.translation}
          </span>
          <br />
          {quote && "-" + quote.source}
          <br />
        </div>
      </div>
      <div className="HomePlanBtn">
        <input
          type="button"
          value="Plan Your After Life"
          className="btn btn-transparent px-5 border mx-1"
        />
        <input
          type="button"
          value="Plan Someone's After Life"
          className="btn btn-transparent px-5 border "
        />
      </div>
    </div>
  );
}

export default Home;
