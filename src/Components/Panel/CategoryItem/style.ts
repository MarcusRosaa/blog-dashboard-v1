import styled from "styled-components";

export const CategoryItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: .2s;

  border: 1px solid var(--border-soft);

  &:hover {
    background: var(--hover-soft);

    h2 {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`

export const CategoryItemTitle = styled.h2`
  font-size: 18px;
  font-weight: 200;
  transition: .2s;

  color: rgba(0, 0, 0, 0.6);
`

export const CategoryItemSettings = styled.div`
  display: flex;
  margin-left: auto;
`