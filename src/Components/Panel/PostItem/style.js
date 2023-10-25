import styled from "styled-components";

export const PostItemContainer = styled.div`
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

    div:nth-of-type(3) {
      display: flex;
    }
  }
`

export const PostItemBanner = styled.div`
  width: 120px;
  height: 70px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-right: 15px;
`

export const PostItemBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PostItemDetails = styled.div`
  width: 500px;
`

export const PostItemDetailsTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const PostItemDetailsDate = styled.p`
  font-size: 16px;
  font-weight: 200;
`

export const PostItemSettings = styled.div`
  display: none;
  margin: 0 0 auto auto;
  transition: .2s;
`