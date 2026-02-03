import { 
  ShieldCheck, 
  Plus, 
  Search 
} from 'lucide-react-native';
import React from 'react';
import { 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View,
  StatusBar,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#118EE9" />
      
      {/* 1. HEADER */}
      <View style={styles.header}>
        <SafeAreaView edges={['top', 'left', 'right']}>
            <View style={styles.headerContent}>
                {/* Left: Dana Protection */}
                <View style={styles.protectionBadge}>
                    <ShieldCheck size={18} color="#fff" strokeWidth={2.5} />
                    <View>
                        <Text style={styles.brandText}>DANA</Text>
                        <Text style={styles.protectionText}>PROTECTION</Text>
                    </View>
                </View>

                {/* Center: Title */}
                <Text style={styles.headerTitle}>Wallet</Text>

                {/* Right: Plus Icon */}
                <TouchableOpacity>
                    <Plus size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Search size={20} color="#ccc" />
                <TextInput 
                    placeholder="Looking for something in wallet?"
                    placeholderTextColor="#ccc"
                    style={styles.searchInput}
                />
            </View>
        </SafeAreaView>
      </View>

      {/* 2. CONTENT */}
      <ScrollView style={styles.content}>
        
        {/* Payment Method Header */}
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>PAYMENT METHOD</Text>
            <Text style={styles.sectionCount}>1 CARD</Text>
        </View>

        {/* 3. CARD: Save Bank Cards */}
        <View style={styles.bankCard}>
            {/* Blue Header Part */}
            <View style={styles.cardHeaderBg}>
                 <Image 
                    source={require('../../assets/images/dana_icon_white.png')} // Pake icon dana putih lo
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                 />
            </View>

            {/* White Body Part */}
            <View style={styles.cardBody}>
                <View style={{flex: 1, paddingRight: 10}}>
                    <Text style={styles.cardTitle}>Save your bank cards!</Text>
                    <Text style={styles.cardDesc}>Transaction just become more less hassle.</Text>
                    
                    <TouchableOpacity style={styles.openBtn}>
                        <Text style={styles.openBtnText}>OPEN</Text>
                    </TouchableOpacity>
                </View>

                {/* Right Side: Add Button & Illustration */}
                <View style={{alignItems: 'flex-end', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnText}>+ ADD</Text>
                    </TouchableOpacity>
                    
                    {/* Ilustrasi Kartu di pojok kanan bawah (Dummy) */}
                    <View style={styles.cardIllustration}>
                        <View style={[styles.miniCard, {backgroundColor: '#EF4444', right: 20, zIndex: 1}]} />
                        <View style={[styles.miniCard, {backgroundColor: '#118EE9', right: 0, zIndex: 0}]} />
                    </View>
                </View>
            </View>
        </View>

        {/* 4. WATERMARK WALLET (Empty State) */}
        <View style={styles.watermarkContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, opacity: 0.2}}>
                 {/* Icon dompet simple */}
                 <View style={styles.walletIcon} /> 
                 <Text style={styles.watermarkText}>WALLET</Text>
            </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  
  // Header Styles
  header: {
    backgroundColor: '#118EE9',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  protectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  brandText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '900',
    lineHeight: 10,
  },
  protectionText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: -20, // Biar agak tengah karena kiri kanan beda lebar
  },
  
  // Search Bar
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 44,
    marginTop: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  // Content
  content: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
  },
  sectionCount: {
    fontSize: 12,
    color: '#666',
  },

  // Bank Card
  bankCard: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    // Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeaderBg: {
    backgroundColor: '#4CB1F6', // Biru mudaan dikit buat header kartu
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  cardBody: {
    padding: 16,
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginBottom: 16,
  },
  openBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  openBtnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  addBtn: {
    borderWidth: 1,
    borderColor: '#118EE9',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  addBtnText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#118EE9',
  },
  
  // Illustration
  cardIllustration: {
    flexDirection: 'row',
    height: 30,
    width: 50,
    position: 'relative',
    marginTop: 10,
  },
  miniCard: {
    width: 36,
    height: 24,
    borderRadius: 4,
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: '#fff',
  },

  // Watermark
  watermarkContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletIcon: {
      width: 20,
      height: 16,
      borderWidth: 2,
      borderColor: '#999',
      borderRadius: 4,
      marginRight: 4
  },
  watermarkText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#999',
      letterSpacing: 1,
  }
});