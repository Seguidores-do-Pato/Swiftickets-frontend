import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      {/* <img src="caminho/do/seu/logo.png" alt="Logo" style={logoStyle} /> */}
      <h1 style={titleStyle}>Swiftickets</h1>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

// const logoStyle = {
//   width: '50px', // ajuste o tamanho do logo conforme necessário
//   height: '50px', // ajuste o tamanho do logo conforme necessário
// };

const titleStyle = {
  margin: '0',
};

export default Header;
