// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('ur')}>Urdu</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}
    
    style={{
        padding: '10px',
        border: '2px solid #007bff',
        borderRadius: '5px',
        backgroundColor: '#f0f8ff',
        color: '#333',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        width: '150px',
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#e6f0ff')}
      onMouseOut={(e) => (e.target.style.backgroundColor = '#f0f8ff')}>
      <option value="en">English</option>
      <option value="ur">Urdu</option>
    </select>
  );
};

export default LanguageSwitcher;
