import { Entypo } from '@expo/vector-icons';
import { Image } from 'expo-image';
import {
  ArrowRight,
  CalendarDays,
  Gamepad2,
  Info,
  LayoutGrid,
  Lightbulb,
  Megaphone,
  Play,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Ticket
} from 'lucide-react-native';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [showBalance, setShowBalance] = React.useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F6F8' }}>
      <StatusBar barStyle="light-content" backgroundColor="#118EE9" />
      
      {/* Ganti background jadi Biru biar nyatu sama Header */}
      <SafeAreaView style={{ flex: 1, backgroundColor: '#118EE9' }}>

        {/* --- BAGIAN ATAS (KODE LO) --- */}
        <View style={styles.atas}>
          <Image
            source={require('../../assets/images/dana_icon_white.png')}
            style={{ width: 24, height: 24 }}
          />
          <View style={styles.balanceContainer}>
            <Text style={styles.currencyText}>Rp</Text> 
            <Text style={styles.balanceText}>
              {showBalance ? '0' : '••• '}
            </Text> 
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                {showBalance ? (
                  <Entypo name="eye" color="#ffffff" size={16} />
                ) : (
                  <Entypo name="eye-with-line" color="#ffffff" size={16} />
                )}
            </TouchableOpacity>
          </View>
        </View>

        {/* --- LANJUTAN KONTEN (SCROLLABLE) --- */}
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: '#F5F6F8' }} // Background abu-abu buat konten bawah
        >
          
          {/* 1. TOP ACTION BUTTONS (Di atas Background Biru) */}
          <View style={styles.blueActionSection}>
             <View style={styles.topActionContainer}>
                <TopActionButton 
                  source={require('@/assets/images/plus-icon-new.png')} 
                  label="Top up" />
                <TopActionButton source={require('@/assets/images/rp-in-icon-no.png')} label="Request" />
                <TopActionButton source={require('@/assets/images/rp-out-icon-no.png')} label="Send" />
                <TopActionButton source={require('@/assets/images/share-icon-no.png')} label="Inbox" />
             </View>
          </View>

          {/* 2. MAIN MENU CARD (Numpuk ke atas) */}
          <View style={styles.mainCard}>
            {/* Header Card */}
            <View style={styles.mainCardHeader}>
              <View>
                  <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
                       <Ticket size={18} color="#F59E0B" fill="#F59E0B" />
                       <Text style={styles.mainCardTitle}>DANA Deals</Text>
                  </View>
                  <Text style={styles.mainCardSubtitle}>Dapatkan promo menarik!</Text>
              </View>
              <TouchableOpacity style={styles.serbuBtn}>
                  <Text style={styles.serbuBtnText}>SERBU!</Text>
              </TouchableOpacity>
            </View>

            {/* Grid Menu Icons */}
            <View style={styles.gridContainer}>
              <GridItem icon={Gamepad2} color="#00A3FF" label="DANA Games" />
              <GridItem icon={Play} color="#EA4335" label="Google Play" />
              <GridItem icon={Smartphone} color="#EF4444" label="Pulsa & Data" />
              <GridItem icon={Ticket} color="#F59E0B" label="A+ Rewards" />
              <GridItem icon={CalendarDays} color="#EF4444" label="Pay Installment" />
              <GridItem icon={Lightbulb} color="#F59E0B" label="Electricity" />
              <GridItem icon={LayoutGrid} color="#666" label="View All" />
              <View style={{ width: '25%' }} /> 
            </View>
          </View>

          {/* 3. FEED LIST */}
          <View style={styles.feedContainer}>
              <FeedItem text="Feed connect only with trusted connection!" />
              <FeedItem text="Feed Give a 💬,❤️,🎁 to spread joy!" />
              <FeedItem text="Feed Hi 👋, ready to explore our exciting feed?" />
              <FeedItem text="Feed come on in for the latest updates!" />
          </View>

          {/* 4. PROMO BANNER */}
          <View style={styles.bannerContainer}>
              <Image 
                  source={{ uri: 'https://img.freepik.com/free-vector/gradient-refund-illustration_23-2150348753.jpg' }} 
                  style={styles.bannerImage}
              />
              <View style={styles.bannerOverlay}>
                   <View style={styles.protectionBadge}>
                      <ShieldCheck size={12} color="#118EEA" />
                      <Text style={styles.protectionText}>DANA PROTECTION</Text>
                   </View>
                   <Text style={styles.bannerTitle}>JAMINAN 100% {"\n"}UANG KEMBALI</Text>
                   <Text style={styles.bannerSub}>#AMANDARIBADMAN</Text>
              </View>
          </View>

          {/* 5. INFO & SEARCH */}
          <View style={styles.infoCard}>
              <TouchableOpacity style={styles.blueInfoBar}>
                  <View style={{flexDirection:'row', alignItems:'center', gap:8, flex: 1}}>
                      <Info size={18} color="#fff" />
                      <Text style={{color:'#fff', fontWeight:'600', fontSize: 13}}>Get info about DANA Protection</Text>
                  </View>
                  <ArrowRight size={18} color="#fff" />
              </TouchableOpacity>

              <View style={styles.searchContainer}>
                  <Search size={20} color="#ccc" />
                  <TextInput 
                      placeholder="Any suspicious phone number?" 
                      style={styles.searchInput}
                  />
              </View>
              
              <View style={styles.securedFooter}>
                  <Text style={{color:'#888', fontSize:12}}>Secured by</Text>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                      <ShieldCheck size={14} color="#118EEA" style={{marginHorizontal:4}} />
                      <Text style={{color:'#118EEA', fontWeight:'bold', fontSize:12}}>DANA PROTECTION</Text>
                  </View>
              </View>
          </View>

          {/* 6. DANA DEALS LIST */}
          <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                  <View>
                      <Text style={styles.sectionTitle}>DANA Deals</Text>
                      <Text style={styles.sectionSubtitle}>Best vouchers around your area!</Text>
                  </View>
                  <TouchableOpacity style={styles.outlineBtn}>
                      <Text style={styles.outlineBtnText}>EXPLORE</Text>
                  </TouchableOpacity>
              </View>

              <VoucherCard 
                  title="Auntie Anne's" 
                  price="Rp25.000" 
                  discPrice="Rp15.000"
                  type="Culinary Voucher"
                  discount="-40%"
                  color="#1E3A8A"
                  logo="https://cdn-icons-png.flaticon.com/512/5717/5717438.png"
              />
              <VoucherCard 
                  title="Voucher Pack" 
                  price="Rp10.000" 
                  discPrice="Rp5.000"
                  type="Shopping Voucher"
                  discount="-50%"
                  color="#4ADE80"
                  logo="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
              />
          </View>

          {/* 7. WHAT'S NEW */}
          <View style={styles.sectionContainer}>
              <View style={styles.sectionHeader}>
                  <View>
                      <Text style={styles.sectionTitle}>What's New</Text>
                      <Text style={styles.sectionSubtitle}>The best news of the week!</Text>
                  </View>
                  <TouchableOpacity style={styles.outlineBtn}>
                      <Text style={styles.outlineBtnText}>VIEW ALL</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.newsList}>
                  <NewsItem 
                      icon={<ShieldCheck size={24} color="#118EEA" />} 
                      title="Jaminan 100% Uang Kembali"
                      desc="#AmanDariBadman"
                  />
                  <NewsItem 
                      icon={<Send size={24} color="#118EEA" />} 
                      title="Posko Bantuan Keliling"
                      desc="Nikmatin layanan prioritas buatmu"
                  />
                  <NewsItem 
                      icon={<Gamepad2 size={24} color="#118EEA" />} 
                      title="Main Game Ocean Buddy"
                      desc="Bantu Lindungi Hiu Paus Yuk!"
                  />
              </View>
          </View>
          
          <View style={{height: 50}} /> 
        </ScrollView>
      </SafeAreaView>
      
    </View>

  );
}

// --- SUB COMPONENTS ---

const TopActionButton = ({ source, label, iconStyle }: any) => (
  <TouchableOpacity style={styles.topActionBtn}>
    <View style={styles.topActionIconBox}>
        <Image source={source} style={[{ width: 70, height: 50 }, iconStyle]} contentFit="contain" />
    </View>
    <Text style={styles.topActionLabel}>{label}</Text>
  </TouchableOpacity>
);

const GridItem = ({ icon: Icon, color, label }: any) => (
    <TouchableOpacity style={styles.gridItem}>
        <Icon size={28} color={color} />
        <Text style={styles.gridLabel}>{label}</Text>
    </TouchableOpacity>
);

const FeedItem = ({ text }: { text: string }) => (
    <View style={styles.feedItem}>
        <View style={styles.feedIcon}>
            <Text style={{color:'#fff', fontWeight:'bold', fontSize:10}}>=</Text>
        </View>
        <Text style={styles.feedText} numberOfLines={1}>{text}</Text>
        <Megaphone size={14} color="#118EEA" />
    </View>
);

const VoucherCard = ({ title, price, discPrice, type, discount, color, logo }: any) => (
    <View style={styles.voucherCard}>
        <View style={[styles.voucherLeft, { backgroundColor: color }]}>
            <View style={styles.voucherLogoBg}>
                <Image source={{ uri: logo }} style={{ width: 24, height: 24 }} resizeMode="contain" />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.voucherTitle} numberOfLines={1}>{title}</Text>
                <Text style={styles.voucherPrice}>{price}</Text>
                <Text style={styles.voucherType}>{type}</Text>
            </View>
            <View style={styles.discountBadge}>
                <Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{discount}</Text>
            </View>
        </View>
        <View style={styles.voucherRight}>
            <Text style={styles.discPrice}>{discPrice}</Text>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:4}}>
                 <Send size={10} color="#EF4444" style={{marginRight:4}} />
                 <Text style={{fontSize:10, color:'#666'}}>4.7 km</Text>
            </View>
        </View>
    </View>
);

const NewsItem = ({ icon, title, desc }: any) => (
    <TouchableOpacity style={styles.newsItem}>
        <View style={styles.newsIconContainer}>{icon}</View>
        <View>
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.newsDesc}>{desc}</Text>
        </View>
    </TouchableOpacity>
);

// --- STYLES ---

const styles = StyleSheet.create({
  // HEADER LO
  atas: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#118EE9',
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 16,
    gap: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
  },
  currencyText: {
    color: '#ffffffc2',
    fontWeight: '500',
    fontSize: 14,
  },
  balanceText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  // --- NEW STYLES ---
  blueActionSection: {
    backgroundColor: '#118EE9',
    paddingBottom: 70, // Padding bawah gede biar Card Putih bisa numpuk (overlap)
    paddingTop: 20,
    paddingHorizontal: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  topActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  topActionBtn: {
    alignItems: 'center',
    gap: 2,
  },
  topActionIconBox: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
  },
  smallRp: {
      position: 'absolute',
      top: -2,
      right: -4,
      backgroundColor: 'rgba(255,255,255,0.3)',
      paddingHorizontal: 2,
      borderRadius: 2,
  },
  topActionLabel: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  // MAIN CARD (OVERLAPPING)
  mainCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: -50, // NEGATIVE MARGIN: Kunci biar numpuk ke atas
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mainCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  mainCardSubtitle: {
    fontSize: 11,
    color: '#F59E0B',
    fontWeight: '500',
  },
  serbuBtn: {
    backgroundColor: '#118EE9',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  serbuBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 24,
  },
  gridItem: {
    width: '25%', // 4 kolom
    alignItems: 'center',
    gap: 8,
  },
  gridLabel: {
    fontSize: 11,
    textAlign: 'center',
    color: '#333',
    lineHeight: 14,
  },

  // FEED
  feedContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16, // RAPIHIN GAP
    borderRadius: 12,
    padding: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  feedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  feedIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#118EE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedText: {
    flex: 1,
    fontSize: 12,
    color: '#333',
  },

  // BANNER
  bannerContainer: {
    marginHorizontal: 30,
    marginTop: 16, // RAPIHIN GAP
    borderRadius: 12,
    overflow: 'hidden',
    height: 140,
    backgroundColor: '#0F4C81',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  bannerOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  protectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
    gap: 4
  },
  protectionText: {
    color: '#118EE9',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  bannerSub: {
      color: '#fff',
      fontSize: 10,
      fontWeight: 'bold',
      marginTop: 4,
      fontStyle: 'italic',
      opacity: 0.8
  },

  // INFO & SEARCH -> JADI CARD
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16, // RAPIHIN GAP
    borderRadius: 12,
    overflow: 'hidden', // Biar header biru ngikutin radius card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  blueInfoBar: {
    backgroundColor: '#118EE9',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 13,
  },
  securedFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },

  // SECTION GENERAL
  sectionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16, // RAPIHIN GAP (Ganti marginBottom jadi marginTop biar konsisten)
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: '#118EE9',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  outlineBtnText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#118EE9',
  },

  // VOUCHER CARD
  voucherCard: {
    flexDirection: 'row',
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
  },
  voucherLeft: {
    flex: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    position: 'relative',
  },
  voucherLogoBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voucherTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  voucherPrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  voucherType: {
    color: '#eee',
    fontSize: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 0,
    right: 12,
    backgroundColor: '#10B981', 
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  voucherRight: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
    borderStyle: 'dashed', 
  },
  discPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#118EE9',
  },

  // NEWS ITEM
  newsList: {
    gap: 16,
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  newsIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  newsDesc: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  }
});