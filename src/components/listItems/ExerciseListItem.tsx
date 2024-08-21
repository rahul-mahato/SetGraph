import React from 'react';
import { exerciseSelectors } from '../../redux/slices/exercise.slice';
import { useAppSelector } from '../../redux/hooks';
import { Pressable } from 'react-native';
import { HStack, Text, VStack } from '@gluestack-ui/themed';

type Props = {
  exerciseId: number;
  onPress: (exerciseId: number) => void;
};

const ExerciseListItem = ({ exerciseId, onPress: _onPress }: Props) => {
  const { name, description } = useAppSelector(state =>
    exerciseSelectors.selectById(state, exerciseId),
  );
  const onPress = () => _onPress(exerciseId);

  return (
    <Pressable onPress={onPress}>
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
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default ExerciseListItem;
