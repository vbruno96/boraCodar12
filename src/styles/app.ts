import styled from 'styled-components'

export const AppContainer = styled.main`
  flex: 1;
  display: grid;
  gap: 3.2rem;
  grid-template-rows: max-content max-content 1fr;
  height: calc(100vh - 0.4rem);
  background: ${(props) => props.theme['gray-100']};
  margin-top: 0.4rem;
  padding: 4.8rem 3.2rem 0 3.2rem;
  border-top-left-radius: 32px;
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.4rem;

  h1 {
    color: ${(props) => props.theme['brown-600']};
    line-height: 130%;

    svg {
      color: ${(props) => props.theme['gray-300']};
      font-size: 2.4rem;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0 2.4rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: ${(props) => props.theme['purple-900']};
    color: ${(props) => props.theme.white};
    padding: 1.2rem 3.2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    line-height: 2.4rem;
    transition: all ease-in 0.4s;

    svg {
      font-size: 2.4rem;
    }

    &:hover {
      background: ${(props) => props.theme['purple-200']};
      color: ${(props) => props.theme['purple-900']};
    }
  }
`

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;

  input {
    width: 100%;
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme['brown-100']};
    border: 0.07rem solid ${(props) => props.theme['gray-200']};
    border-radius: 8px;
    padding: 1.6rem 2.4rem 1.6rem 5.8rem;
    line-height: 1.6rem;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  svg {
    position: absolute;
    top: 1.2rem;
    left: 2.4rem;
    color: ${(props) => props.theme['gray-700']};
    font-size: 2.4rem;
  }
`
