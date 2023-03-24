import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-front-smoothing: grayscale;
    scrollbar-width: auto;
    scrollbar-color: ${(props) =>
      `${props.theme['purple-200']} ${props.theme['purple-100']}`};

    &::-webkit-scrollbar {
      width: .8rem;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme['purple-100']};
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['purple-200']};
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme['purple-900']};
    }
  }

  :root {
    /* 1rem == 10px */
    font-size: 62.5%;
  }

  #root {
    display: flex;
    background: ${(props) => props.theme['purple-900']};
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  :focus {
    outline: .2rem solid ${(props) => props.theme['purple-900']};
  }
`
