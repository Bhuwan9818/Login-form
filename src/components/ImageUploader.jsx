import React, { useRef, useState } from 'react';

function ProfileImageUploader() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ position: 'relative', width: '80px', margin: '0 auto' }}>
      <img
        src={image || 'images/pg.png'}
        alt="Profile"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #ccc'
        }}
      />
      
      {/* Camera Icon */}
      <div 
        onClick={handleImageClick}
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          background: '#007bff',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: '2px solid white'
        }}
      >
        <span style={{ color: 'white', fontSize: '15px' }}>📷</span>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ProfileImageUploader;