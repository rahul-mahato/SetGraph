import { FlatList, HStack, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { BackgroundContainer, ProfileHeader, StreakCard } from '../components';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <BackgroundContainer>
      <ProfileHeader />
      <VStack>
        <HStack alignItems="center" gap={'$2'}>
          <StreakCard />
        </HStack>
        <FlatList />
      </VStack>
    </BackgroundContainer>
  );
};

export default Homepage;
