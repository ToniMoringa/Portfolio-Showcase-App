import { useState, useEffect } from 'react';

function StudioStory() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const storyHighlights = [
    'Creative Innovation',
    'Client-Centric Approach',
    'Results-Driven Solutions',
    'Modern Design Systems',
  ];

  // story 
  const briefStory = `Aero Studio is a forward-thinking creative agency founded with a mission to transform digital experiences through innovative design and strategic thinking.`;

  const fullStory = `${briefStory} Since our establishment, we've partnered with businesses of all sizes to create compelling brand identities, intuitive user interfaces, and powerful digital solutions. Our team of designers, developers, and strategists work collaboratively to deliver projects that not only meet but exceed client expectations. We believe in the power of storytelling through design, and every project we undertake is a new chapter in our journey of creative excellence.`;

  return (
    <div className={`studio-story ${isVisible ? 'fade-in' : ''}`}>
      <div className="story-header">
        <div className="story-icon">✦</div>
        <h2 className="story-title">Our Studio Story</h2>
        <div className="story-icon">✦</div>
      </div>

      <div className="story-content">
        <p className="story-text">{isExpanded ? fullStory : briefStory}</p>

        <button
          className="story-read-more frutiger-aero-button small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less ↑' : 'Read More ↓'}
        </button>
      </div>

      <div className="story-highlights">
        {storyHighlights.map((highlight, index) => (
          <div
            key={index}
            className="highlight-badge"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {highlight}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudioStory;
