import { Button, FlatList, HStack, Text, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { useSelector } from 'react-redux';
import { BackgroundContainer, ProfileHeader, StreakCard } from '../components';
import SplitListItem from '../components/listItems/SplitListItem';
import { RootStackParamList } from '../navigation';
import { splitsSelectors } from '../redux/slices/splits.slice';

interface HomepageProps {}
type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Homepage: React.FC<HomepageProps> = () => {
  const splits = useSelector(splitsSelectors.selectIds);
  const navigation = useNavigation<NavigationProps['navigation']>();
  const navigateToSplitForm = () => {
    navigation.navigate('SplitForm');
  };

  const navigateToSplitDetail = (splitId: number) => {
    
    navigation.navigate('SplitDetail', {
      splitId,
    });
  };

  return (
    <BackgroundContainer>
      <ProfileHeader />
      <VStack gap={'$2'}>
        <HStack alignItems="center" gap={'$2'}>
          <StreakCard />
        </HStack>

        <FlatList
          ListHeaderComponent={
            <HStack>
              <Text size="xl">Splits</Text>
            </HStack>
          }
          ListFooterComponent={
            <Button onPress={navigateToSplitForm}>
              <Text>Add Split</Text>
            </Button>
          }
          data={splits}
          renderItem={({ item }) => (
            <SplitListItem
              onPress={navigateToSplitDetail}
              splitId={item as number}
            />
          )}
        />
      </VStack>
    </BackgroundContainer>
  );
};

export default Homepage;
