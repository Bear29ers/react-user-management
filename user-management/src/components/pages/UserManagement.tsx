import React, { FC, memo } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => (
  <Wrap p={{ base: 4, md: 10 }}>
    <WrapItem>
      <UserCard imageUrl="https://source.unsplash.com/random" userName="くま" fullName="Yuta Okuma" />
    </WrapItem>
  </Wrap>
));
