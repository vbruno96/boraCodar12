import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  padding: 3.2rem 2.7rem 0 3.5rem;

  nav {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    width: 11.4rem;
    padding-top: 6rem;

    .menu-item {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      color: ${(props) => props.theme['purple-200']};
      font-weight: 500;
      line-height: 125%;
      text-decoration: none;
      transition: all ease-in 0.2s;

      span {
        font-size: 2rem;
      }

      &.active,
      &:hover {
        color: ${(props) => props.theme.white};
        font-weight: 700;
      }
    }
  }
`
