import {
  Button,
  ChevronLeftIcon,
  HStack,
  Pressable,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BackgroundContainer } from '../../components';
import FormInput from '../../components/atoms/FormInput';
import { splitsAction } from '../../redux/slices/splits.slice';
import { Split } from '../../types/appState';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamList } from '../../navigation';

type SplitForm = Pick<Split, 'name' | 'description'>;
type NavigationProps = NativeStackScreenProps<RootStackParamList, 'SplitForm'>;

const SplitForm: React.FC = () => {
  const navigation = useNavigation<NavigationProps['navigation']>();
  const { control, handleSubmit } = useForm<SplitForm>({
    mode: 'all',
  });

  const dispatch = useDispatch();

  const onSubmit = (data: SplitForm) => {
    dispatch(splitsAction.addNewSplit(data));
    navigation.navigate('Home');
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
            New Split
          </Text>
        </HStack>
        <FormInput
          label="Split Name"
          type="text"
          rules={{
            required: 'Name is required',
          }}
          control={control}
          name="name"
          helperText="Enter your gym split eg. Chest, Biceps, Back & Shoulder"
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
        <Text color="$blueGray800">Add Split</Text>
      </Button>
    </BackgroundContainer>
  );
};

export default SplitForm;
