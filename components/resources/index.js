import styled from "styled-components";
import Image from "next/image";

export default function ResourceCard({ src, alt, label }) {
  return (
    <ResourceCardContainer>
      <div className="img-container">
        <Image src={src} alt={alt} width={520} height={420} className="img" />
      </div>
      <ResourceCardInner>
        <p>{label}</p>
      </ResourceCardInner>
    </ResourceCardContainer>
  );
}

const ResourceCardContainer = styled.div`
  .img-container {
    margin-bottom: var(--spacing-sm);
    overflow: hidden;
    .img {
      width: 100%;
      display: block;
      transition: transform 0.35s cubic-bezier(0.3, 0.86, 0.36, 0.95);
      transition-duration: 0.5s;
      max-width: 100%;
      height: auto;
    }
  }
`;

const ResourceCardInner = styled.div`
  p {
    margin-bottom: var(--spacing-sm);
    max-width: 20ch;
  }
`;
