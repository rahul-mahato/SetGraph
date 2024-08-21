import {
  Button,
  ChevronRightIcon,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';

import { splitsSelectors } from '../../redux/slices/splits.slice';
import { useAppSelector } from '../../redux/hooks';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../navigation';

type Props = {
  splitId: number;
  onPress?: (splitId: number) => void;
};

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'SplitDetail'
>;

const SplitListItem = ({ splitId, onPress = () => {} }: Props) => {
  const { name, description, exerciseIds } = useAppSelector(state =>
    splitsSelectors.selectById(state, splitId),
  );
  const onSplitPress = () => onPress(splitId);
  return (
    <Pressable onPress={onSplitPress}>
      <HStack
        alignItems="center"
        pb="$2"
        borderBottomWidth={0.5}
        borderColor="$cyan700"
        p="$2"
        py="$3"
        backgroundColor="$blueGray900">
        <VStack flex={1}>
          <VStack pb="$1">
            <Text size="md" color="$warmGray100">
              {name}
            </Text>
            {description && (
              <Text size="sm" color="$trueGray400">
                {description}
              </Text>
            )}
          </VStack>
          <HStack>
            {exerciseIds.length === 0 && (
              <HStack flex={1}>
                <Text size="xs" flex={3}>
                  You haven't added any excercises to this split yet.
                </Text>
              </HStack>
            )}
          </HStack>
        </VStack>
        {exerciseIds.length > 0 && (
          <Text size="sm">{exerciseIds.length} Excercises</Text>
        )}
        <ChevronRightIcon />
      </HStack>
    </Pressable>
  );
};

export default React.memo(
  SplitListItem,
  (prev, next) => prev.splitId === next.splitId,
);
