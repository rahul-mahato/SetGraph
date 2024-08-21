import {
  Button,
  ChevronLeftIcon,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BackgroundContainer } from '../../components';
import FormInput from '../../components/atoms/FormInput';

import { Exercise, Split } from '../../types/appState';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../navigation';
import { exercisesAction } from '../../redux/slices/exercise.slice';
import { v4 as uuidV4 } from 'uuid';

type ExerciseForm = Pick<Exercise, 'name' | 'description' | 'id'>;
type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'ExerciseForm'
>;

const ExerciseForm: React.FC = () => {
  const navigation = useNavigation<NavigationProps['navigation']>();
  const route = useRoute<NavigationProps['route']>();
  const { control, handleSubmit } = useForm<ExerciseForm>({
    mode: 'all',
  });

  const dispatch = useDispatch();

  const onSubmit = (data: ExerciseForm) => {
    console.log({ route, data: { ...data, id: Date.now().toString() } });
    // dispatch(exercisesAction.addNewExercise(data));
    // if (navigation.canGoBack()) {
    //   navigation.goBack();
    // } else {
    //   navigation.navigate('Home');
    // }
  };

  return (
    <BackgroundContainer>
      <VStack flex={1} gap="$2">
        <HStack py="$3" alignItems="center">
          <Pressable w={'$5'}>
            <ChevronLeftIcon size="md" />
          </Pressable>
          <Text
            color="$cyan300"
            size="lg"
            bold
            textAlign="center"
            alignItems="center"
            mr="$5"
            flex={1}
            w={'100%'}>
            New Exercise
          </Text>
        </HStack>
        <FormInput
          label="Exercise Name"
          type="text"
          rules={{
            required: 'Name is required',
          }}
          control={control}
          name="name"
          helperText="Enter your gym Exercise eg. Chest, Biceps, Back & Shoulder"
          defaultValue={''}
        />
        <FormInput
          control={control}
          label="Description"
          type="text"
          defaultValue=""
          name={'description'}
          rules={undefined}
        />
      </VStack>
      <Button onPress={handleSubmit(onSubmit)} bg="$cyan300">
        <Text color="$blueGray800">Add Exercise</Text>
      </Button>
    </BackgroundContainer>
  );
};

export default ExerciseForm;
