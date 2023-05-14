import styled from 'styled-components';

export const BlogWrapper = styled.section`
  background-color: #f9f9f9;
  padding: 80px 0;
`;

export const BlogContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const BlogTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
`;

export const BlogCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BlogCard = styled.a`
  color: inherit;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const BlogCardContent = styled.div`
  padding: 20px;
`;

export const BlogCardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const BlogCardExcerpt = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const BlogCardDate = styled.p`
  font-size: 14px;
  color: #999;
`;