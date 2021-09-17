import styled from "styled-components";

export default function Banner() {
  return (
    <BannerContainer className="w-full hide-for-mobile">
      <p className="text-uppercase text-center">call us at 070180924501</p>
    </BannerContainer>
  );
}

const BannerContainer = styled.aside`
  background: var(--gray);
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border-color);

  p {
    font-weight: var(--font-md);
  }
`;
