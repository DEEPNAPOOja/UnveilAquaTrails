import React from 'react';
import './Gallery.css';
import image1 from '../Assests/diver-sea-surrounded-by-archeological-building-ruins.jpg';
import image2 from '../Assests/diver-sea-surrounded-by-archeological-building-ruins.jpg';
import image3 from '../Assests/diver-sea-surrounded-by-archeological-building-ruins.jpg';
import { MapPin, Anchor, Fish, Info } from 'lucide-react';


const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='gallery-header'>
        <h1>Hikkaduwa</h1>
        <h4>Galle, Sri Lanka</h4>
      </div>
      <div className='imageGallery'>
        <div className='image-main'>
          <img src={image1} alt='Underwater ruins' />
        </div>
        <div className='image-side'>
          <img src={image2} alt='Underwater scene' />
          <img src={image3} alt='Coral reef' />
        </div>
      </div>
      <div className='about'>
        <Info size={24} />
        <h3>About</h3>
        <p>Hikkaduwa is a small town on the south coast of Sri Lanka. It is known for its strong surf and beaches, and is a popular destination for surfing and diving enthusiasts.</p>
      </div>
      <div className='info-section'>
        <div className='depth'>
          <Anchor size={24} />
          <h3>Depth of the Dive</h3>
          <p>5-30 meters (16-98 feet)</p>
        </div>
        <div className='location'>
          <MapPin size={24} />
          <h3>Location</h3>
          <p>Galle, Sri Lanka</p>
        </div>
        <div className='marine-life'>
          <Fish size={24} />
          <h3>Marine Life Highlights</h3>
          <ul>
            <li>Colorful coral reefs</li>
            <li>Tropical fish species</li>
            <li>Sea turtles</li>
            <li>Occasional manta rays</li>
          </ul>
        </div>
      </div>
      <div className='bottom-section'>
        <div className='activities'>
          <h2>Diving Activities</h2>
          <ul>
            <li> Reef Diving</li>
            <li> Wreck Diving</li>
            <li> Night Diving</li>
            <li> Snorkeling</li>
          </ul>
          <button className='search-button'>Search Nearest Diving Shops</button>
        </div>
        <div className='similar-places'>
          <h2>Similar Places</h2>
          <div className='similar-images'>
            <img src={image1} alt='Similar place 1' />
            <img src={image2} alt='Similar place 2' />
            <img src={image3} alt='Similar place 3' />
            <img src={image1} alt='Similar place 4' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;