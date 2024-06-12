import { HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';

import { useAppSelector } from '../redux/hooks';
import UserSelector from '../redux/selectors/user.selector';

const ProfileHeader: React.FC = () => {
  const user = useAppSelector(UserSelector.getUserInfo);

  return (
    <HStack alignItems="center">
      <VStack>
        <Text size="sm" color="$warmGray300">
          Good Morning,
        </Text>
        <Text size="2xl" bold>
          {user.name}
        </Text>
      </VStack>
    </HStack>
  );
};

export default React.memo(ProfileHeader);
