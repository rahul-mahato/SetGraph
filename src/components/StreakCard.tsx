import { Card, HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import UserSelector from '../redux/selectors/user.selector';

const StreakCard: React.FC = () => {
  const streaks = useAppSelector(UserSelector.getUserStreaks);
  return (
    <Card
      flex={1}
      backgroundColor="$blueGray900"
      borderWidth={0.3}
      borderRadius={16}
      py="$7"
      borderColor="$cyan600">
      <VStack>
        <HStack>
          <VStack>
            <Text size="5xl" lineHeight={'$4xl'}>
              {streaks.currentStreak}
            </Text>
            <Text size="lg">Day streak</Text>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export default StreakCard;
