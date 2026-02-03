import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
// Gue pake Lucide icons biar konsisten sama kode lo sebelumnya
import { FileText, Wallet, User, QrCode } from 'lucide-react-native'; 

// 1. Komponen Tombol PAY Bulat Besar
const CustomPayButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -24, // Bikin tombol naik ke atas (Floating effect)
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow // Kasih bayangan biar pop-up
    }}
    onPress={onPress}
    activeOpacity={0.9}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#118EE9', // Warna Biru DANA
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 4,
      borderColor: '#f5f6f8', // Border putih/abu dikit biar misah dari background
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#000', // Warna icon aktif (Hitam)
        tabBarInactiveTintColor: '#888', // Warna icon mati (Abu)
        
        // 2. Styling Container Tab Bar
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: '#ffffff',
            height: Platform.OS === 'android' ? 65 : 85, // Tinggi tab bar
            paddingBottom: Platform.OS === 'android' ? 10 : 30,
            paddingTop: 10,
            borderTopWidth: 0, //ilangin garis atas standar
            ...styles.shadow // Shadow buat container
        },
        tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            marginTop: 4,
        }
      }}>

      {/* 1. HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            // Pake gambar lo sendiri buat icon Home
            <Image 
                source={require('../../assets/images/dana_icon.png')} // Pastikan path bener
                style={{ width: 26, height: 26, tintColor: color }} // tintColor biar warnanya ngikut aktif/ga
                resizeMode="contain"
            />
          ),
        }}
      />

      {/* 2. ACTIVITY TAB */}
      <Tabs.Screen
        name="activity" // Pastikan lo bikin file activity.tsx
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => <FileText size={24} color={color} />,
        }}
      />

      {/* 3. PAY TAB (TOMBOL TENGAH SPESIAL) */}
      <Tabs.Screen
        name="pay" // Pastikan lo bikin file pay.tsx (buat scanner misalnya)
        options={{
          title: 'PAY',
          tabBarLabelStyle: { display: 'none' }, // Sembunyiin label default di bawah
          
          // Icon di dalem lingkaran biru
          tabBarIcon: ({ focused }) => (
             <View style={{ alignItems: 'center', justifyContent: 'center', top: Platform.OS === 'ios' ? 8 : 0 }}>
                <QrCode size={28} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold', marginTop: 2 }}>PAY</Text>
             </View>
          ),
          
          // Ganti tombol standar jadi tombol bulat kustom
          tabBarButton: (props) => (
             <CustomPayButton {...props} />
          )
        }}
      />

      {/* 4. WALLET TAB */}
      <Tabs.Screen
        name="wallet" // Pastikan lo bikin file wallet.tsx
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <Wallet size={24} color={color} />,
        }}
      />

      {/* 5. ME TAB */}
      <Tabs.Screen
        name="profile" // Pastikan lo bikin file profile.tsx
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => <User size={26} color={color} />,
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});