import { memo, VFC } from "react";
import { Flex, Heading, Box, Link } from "@chakra-ui/react";

export const Header: VFC = memo(() => {
  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
        ユーザー管理アプリ
      </Heading>
      <Flex>
        <Box pr={4}>
          <Link>ユーザー一覧</Link>
        </Box>
      </Flex>
    </Flex>
  );
});
