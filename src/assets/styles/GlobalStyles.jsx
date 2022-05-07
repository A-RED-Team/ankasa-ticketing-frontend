import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato';
import '@fontsource/poppins';

const GlobalStyles = createGlobalStyle`
  /* Global CSS */
  :root {
    --text-black: #000000;
    --text-gray: #414141;
    --text-lightgray: #595959;
    --text-gainsboro: #6B6B6B;
    --text-sliver: #979797;
    --text-blue: #2395FF;
    --text-white: #FFFFFF;
  }

  .navbar {
    background: var(--text-white);
    padding: 20px 0;
    transition: all 0.5 ease;
    text-decoration: none;
  }

  .navbar .navbar-brand {
    font-size: 22px;
    color: var(--text-gray);
    font-weight: 600;
    font-family: 'Poppins', 'sans-serif';
    text-transform: capitalize;
  }

  .navbar .navbar-nav {
    gap: 5px;
  }

  .navbar .nav-item {
    margin-left: 0;
  }

  .navbar .nav-item a {
    text-decoration: none;
  }

  .navbar .nav-item .nav-link {
    color: var(--text-gray);
    text-transform: capitalize;
    font-family: 'Poppins', 'sans-serif';
    font-size: 16px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .navbar .nav-item .nav-link::before {
    content: '';
    width: 40px;
    height: 5px;
    background-color: #2395ff;
    position: absolute;
    display: block;
    margin: auto;
    border-radius: 10px;
    transition: all 0.4s ease;
    top: 50px;
    transform: scale(0);
  }

  .navbar .nav-item .nav-link:hover,
  .navbar .nav-item .nav-link.active::before,
  .navbar .nav-item .nav-link:hover::before {
    font-weight: 700;
    transform: scale(1);
  }

  /* Responsive */
  @media screen and (max-width: 992px) {
    .navbar {
      margin-top: -10px;
    }

    .navbar-toggler {
      background-color: none;
      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin-right: 15px;
    }

    .navbar .navbar-brand {
      margin-right: auto;
    }
    .navbar .nav-item .nav-link::before {
      top: 35px;
    }
  }
`;

export default GlobalStyles;
