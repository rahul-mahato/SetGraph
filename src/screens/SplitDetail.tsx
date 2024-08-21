import React from 'react';
import {
  BackButton,
  BackgroundContainer,
  ExerciseListItem,
} from '../components';
import {
  Box,
  Button,
  ChevronLeftIcon,
  FlatList,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAppSelector } from '../redux/hooks';
import { splitsSelectors } from '../redux/slices/splits.slice';
import { RootStackParamList } from '../navigation';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import emptyStates from '../constants/emptyStates';
import { useSelector } from 'react-redux';
import { exerciseSelectors } from '../redux/slices/exercise.slice';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'SplitDetail'
>;

const SplitDetail = () => {
  const navigation = useNavigation<NavigationProps['navigation']>();
  const { params } = useRoute<NavigationProps['route']>();
  const {
    name,
    description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
  } = useAppSelector(state =>
    splitsSelectors.selectById(state, params?.splitId || 1),
  );
  const exerciseIds = useSelector(exerciseSelectors.selectIds);

  const onBackPress = navigation.canGoBack()
    ? navigation.goBack
    : emptyStates.noop;

  const navigateToExerciseForm = () => {
    navigation.navigate('ExerciseForm', {
      splitId: params?.splitId,
    });
  };
  return (
    <BackgroundContainer>
      <VStack>
        <HStack alignItems="center" justifyContent="space-between">
          <BackButton size="xl" onPress={onBackPress} />
          <Text size="lg" flex={1} textAlign="center">
            {name}
          </Text>
          <Box flex={1} />
        </HStack>
        <FlatList
          data={exerciseIds}
          renderItem={({ item }) => <ExerciseListItem exerciseId={item} />}
        />
        <Button onPress={navigateToExerciseForm}>
          <Text>Add Exercise</Text>
        </Button>
      </VStack>
    </BackgroundContainer>
  );
};

export default SplitDetail;
