import React from 'react';
import { ChevronLeftIcon, HStack, Pressable, Text } from '@gluestack-ui/themed';

type Props = {
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onPress: () => void;
};

const BackButton = ({ title = '', onPress, size }: Props) => {
  return (
    <Pressable flex={1} onPress={onPress}>
      <HStack alignItems="center">
        <ChevronLeftIcon size={size} />
        <Text>{title}</Text>
      </HStack>
    </Pressable>
  );
};

export default BackButton;
