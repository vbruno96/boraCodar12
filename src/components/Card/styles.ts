import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 1rem;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['brown-100']};
  padding: 2.4rem;
  border-radius: 8px;
  line-height: 130%;
  box-shadow: 0px 4px 16px #eae2fd;

  h5 {
    color: ${(props) => props.theme['brown-600']};
    font-size: 1.4rem;
  }

  p {
    overflow: hidden;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    font-size: 1.4rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  span {
    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-900']};
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
  }
`
