import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  // data is loading
  if (fetching) {
    //user not logged in
  } else if (!data?.me) {
    //user is logged in
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2}>{data.me.username}</Box>
        <Button variant="link">Logout</Button>
      </Flex>
    );
  }

  return (
    <Flex bg="facebook.400" p={4}>
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};

export default Navbar;
