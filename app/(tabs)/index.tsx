import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text style={styles.title}>Tab Moustapha traore</Text>
      <Text style={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam impedit sed animi deleniti quo minus blanditiis eveniet perspiciatis! Distinctio quisquam quo harum repellendus obcaecati tempore aliquid vero quidem sit.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate quos facere aliquid labore autem cupiditate obcaecati ea voluptas iste! Earum quis dolore magni nam placeat porro minus eligendi modi praesentium.
      </Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
