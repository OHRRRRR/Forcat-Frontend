import {
  HeaderBackArrow,
  HeaderLogo,
  Home,
  Profile,
  Search as SearchIcon, // Search 아이콘
} from "../../assets/svg";
import { Block, Text, Input } from "../../style/ui";

type PageType = "market" | "search" | "home" | "cart" | "profile";

interface HeaderProps {
  pageType: PageType;
}

export default function Header({ pageType }: HeaderProps) {
  return (
    <>
      <Block.AbsoluteBox width="599px" height="103px" top="0">
        <Block.FlexBox padding="31px 25px" justifyContent="space-between">
          {pageType === "home" && (
            <>
              <HeaderLogo width={52} />
              <Profile width={31} />
            </>
          )}

          {pageType === "cart" && (
            <>
              <HeaderBackArrow width={24} />
              <Text.TitleMenu300> 장바구니 </Text.TitleMenu300>
              <Home width={21} />
            </>
          )}

          {pageType === "profile" && (
            <>
              <Text.TitleMenu300> 프로필 </Text.TitleMenu300>
              <Profile width={31} />
            </>
          )}

          {pageType === "market" && (
            <>
              <Text.TitleMenu300> 마켓 </Text.TitleMenu300>
              <SearchIcon width={31} />
            </>
          )}

          {pageType === "search" && (
            <>
              {/* 검색바와 검색 아이콘을 포함한 레이아웃 */}
              <Block.FlexBox
                width="100%"
                padding="8px 16px"
                border="1px solid #e0e0e0"
                borderRadius="24px"
                alignItems="center"
              >
                <Input.Search
                  width="100%"
                  placeholder="검색어를 입력해주세요"
                />
                <SearchIcon width={24} style={{ marginLeft: "10px" }} />
              </Block.FlexBox>
            </>
          )}
        </Block.FlexBox>
      </Block.AbsoluteBox>
    </>
  );
}
