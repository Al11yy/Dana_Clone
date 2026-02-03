import { useRouter } from 'expo-router';
import {
    ArrowLeft,
    ChevronRight,
    Link as LinkIcon,
    Search,
    Share,
    SlidersHorizontal
} from 'lucide-react-native';
import React from 'react';
import {
    Image,
    SectionList,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ActivityScreen() {
  const router = useRouter();

  // Data Dummy Mirip Gambar
  const DATA = [
    {
      title: 'January 2026',
      total: '-Rp0',
      data: [
        {
          id: '1',
          type: 'connect', // Tipe Connect background krem
          title: 'Connect to GOOGLE',
          date: '13 Jan 2026 • 09:18',
          icon: <LinkIcon size={20} color="#118EE9" />,
        },
      ],
    },
    {
      title: 'June 2025',
      total: '-Rp0',
      data: [
        {
          id: '2',
          type: 'transaction', // Tipe Transaksi background putih
          title: 'MyTelkomsel - DANA',
          date: '23 Jun 2025 • 03:15',
          amount: '-Rp5.000',
          image: require('@/assets/images/telkom.jpg'),
        },
        {
          id: '3',
          type: 'connect',
          title: 'Connect to TELKOMSEL',
          date: '23 Jun 2025 • 03:15',
          icon: <LinkIcon size={20} color="#118EE9" />,
        },
        {
          id: '4',
          type: 'transaction',
          title: 'Top Up from hotelmurah....',
          date: '22 Jun 2025 • 19:37',
          amount: 'Rp5.000', // Topup positif
          image: require('@/assets/images/hotel.png'),
        },
      ],
    },
  ];

  const renderItem = ({ item }: any) => {
    const isConnect = item.type === 'connect';
    
    return (
      <View style={[
        styles.itemContainer, 
        isConnect ? styles.itemConnectBg : styles.itemTransactionBg
      ]}>
        
        {/* Left Icon */}
        <View style={styles.iconBox}>
           {item.image ? (
             <Image source={item.image} style={styles.logoImage} resizeMode="contain" />
           ) : (
             item.icon
           )}
        </View>

        {/* Content */}
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
        </View>

        {/* Right Side */}
        <View style={styles.itemRight}>
           {isConnect ? (
             <ChevronRight size={20} color="#ccc" />
           ) : (
             <View style={{alignItems: 'flex-end'}}>
                <Text style={[
                  styles.amountText, 
                  item.amount.includes('-') ? {color: '#333'} : {color: '#333'} 
                ]}>{item.amount}</Text>
                {/* Icon kecil DANA di bawah harga */}
                <Image 
                    source={require('../../assets/images/dana_icon.png')} // Pastikan ada icon ini
                    style={{ width: 14, height: 14, marginTop: 4 }}
                    resizeMode="contain"
                />
             </View>
           )}
        </View>

      </View>
    );
  };

  const renderSectionHeader = ({ section: { title, total } }: any) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
        <Text style={styles.sectionTotal}>{total}</Text>
        <View style={styles.blueCircleChevron}>
            <ChevronRight size={12} color="#fff" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#118EE9" />
      
      {/* 1. HEADER */}
      <View style={styles.header}>
        <SafeAreaView edges={['top', 'left', 'right']}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.back()}>
                <ArrowLeft color="#fff" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Activity</Text>
            <TouchableOpacity>
                <Share color="#fff" size={24} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
             <Search size={20} color="#118EE9" style={{marginLeft: 12}} />
             <TextInput 
                placeholder="Search top up"
                placeholderTextColor="#ccc"
                style={styles.searchInput}
             />
             <TouchableOpacity style={styles.filterBtn}>
                <SlidersHorizontal size={20} color="#118EE9" />
             </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      {/* 2. LIST CONTENT */}
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={{ paddingBottom: 20 }}
        stickySectionHeadersEnabled={false} // Biar header gak nempel di atas kayak kontak HP
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // Header Styles
  header: {
    backgroundColor: '#118EE9',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 44,
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  filterBtn: {
    paddingHorizontal: 12,
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
    height: '60%',
    justifyContent: 'center',
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTotal: {
    fontSize: 14,
    color: '#118EE9',
  },
  blueCircleChevron: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#118EE9',
      justifyContent: 'center',
      alignItems: 'center',
  },

  // Item Styles
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemConnectBg: {
    backgroundColor: '#FFF8E1', // Warna krem/kuning muda
  },
  itemTransactionBg: {
    backgroundColor: '#fff',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoImage: {
    width: 24,
    height: 24,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 12,
    color: '#888',
  },
  itemRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    color: '#333',
    // fontWeight: '500',
  },
});