import styled from 'styled-components'

export const CardsBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`

export const CardShadow = styled.div<{ height: number; marginLeft: number }>`
  position: absolute;
  width: 100%;
  height: ${(props) => props.height}px;
  background: ${(props) => props.theme['purple-200']};
  margin-left: ${(props) => props.marginLeft}px;
  border-radius: 8px;
  z-index: 1;
`
