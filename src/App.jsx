// import logo from './logo.svg';
// import './App.css';
// import ReactLogo from './assets/react.svg?react'


// export const App = () => {
// 	const currentYear = new Date().getFullYear(); /*Декларативынй стиль*/
// 	return ( /*Императивный стиль*/
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload 2.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<ReactLogo/>
// 				<footer>
//           		<p>{currentYear}</p>
//         		</footer>
// 			</header>
// 		</div>
// 	);
// };


import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactLogo from './assets/react.svg?react';

export const App = () => {
  const currentYear = new Date().getFullYear(); // Декларативный стиль

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload 2.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      ),
      React.createElement(ReactLogo),
      React.createElement(
        'footer',
        null,
        React.createElement('p', null, currentYear)
      )
    )
  );
};
