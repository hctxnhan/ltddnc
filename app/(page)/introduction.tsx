import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';

export default function Page() {
  const [state, setState] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((state) => state - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (state === 0) {
      router.push('/');
    }
  }, [state]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Giới thiệu bản thân</Text>
      <Text>Hoàng Công Thành Nhân</Text>
      <Text>Mã số sinh viên: 20110687</Text>
      <Text>Thời gian còn lại: {state} giây</Text>
    </View>
  );
}
