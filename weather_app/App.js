import Navigator from './navigator/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1 overflow-y-auto">
      <Navigator />
    </SafeAreaView>
  );
}