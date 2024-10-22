import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 hook

interface Product {
  product_id: number;
  thumbnail_url: string;
  name: string;
  price: number;
  discount_rate: string;
  discounted_price: number;
  company: string; // company 필드 추가
}

export default function Market() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 사용

  useEffect(() => {
    axios
      .get("http://125.189.109.17/api/products", {
        params: {
          name: null,
          categories: null,
          cursor: null,
        },
      })
      .then((response) => {
        setProducts(response.data.results); // 상품 데이터 저장
        console.log(response.request);
        console.log("받은 데이터:", response.data.results); // 콘솔에 데이터 출력
      })
      .catch((error: AxiosError) => {
        setError(error);
        console.error("통신 실패:", error.message); // 오류 출력
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MarketContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            onClick={() => navigate(`/market/${product.product_id}`)} // 클릭 시 상세 페이지로 이동
          >
            <ProductImage src={product.thumbnail_url} alt={product.name} />
            <ProductDetails>
              <ProductCompany>{product.company}</ProductCompany>{" "}
              {/* 회사명 표시 */}
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                {product.discount_rate !== "0.00" && (
                  <>
                    <OriginalPrice>{product.price}원</OriginalPrice>
                    <DiscountedPrice>
                      {product.discounted_price}원
                    </DiscountedPrice>
                  </>
                )}
                {product.discount_rate === "0.00" && (
                  <>{product.discounted_price}원</>
                )}
              </ProductPrice>
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductGrid>
    </MarketContainer>
  );
}

// Styled components
const MarketContainer = styled.div`
  flex: 1;
  margin-top: 103px; /* header 높이만큼 위쪽 여백 추가 */
  margin-bottom: 103px; /* navigator 높이만큼 아래쪽 여백 추가 */
  overflow-y: auto; /* 스크롤 가능 */
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열로 배치 */
  gap: 20px;
`;

const ProductCard = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ProductDetails = styled.div`
  text-align: left; /* 왼쪽 정렬 */
  margin-top: 10px;
`;

const ProductCompany = styled.div`
  color: #999;
  font-size: 12px;
  margin-top: 5px;
`;

const ProductName = styled.div`
  margin: 10px 0;
  font-size: 12px;
`;

const ProductPrice = styled.div`
  font-size: 14px;
  color: #333;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
`;

const DiscountedPrice = styled.span`
  color: red;
  font-weight: bold;
`;
