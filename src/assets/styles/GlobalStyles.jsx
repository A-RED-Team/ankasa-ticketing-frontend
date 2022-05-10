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
    --shadow-black-100: 0 5px 15px rgba(0, 0, 0, 1);
    --shadow-black-300: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .navbar {
    background: var(--text-white);
    padding: 20px 0;
    transition: all 0.5s ease;
    text-decoration: none;
  }

  .navbar.navbar-shrink {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
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

  .navbar .nav-item:hover {
    cursor: pointer;
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

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    display:none;
  }

  .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
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
