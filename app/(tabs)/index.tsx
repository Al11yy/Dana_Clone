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
  FlatList,
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
  const flatListRef = React.useRef<FlatList>(null);
  const bannerListRef = React.useRef<FlatList>(null);

  // Data Voucher Infinite (Diduplikasi biar banyak)
  const VOUCHER_DATA = React.useMemo(() => {
      const baseData = [
          [
              { title: "Auntie Anne's", price: "Rp25.000", discPrice: "Rp15.000", type: "Culinary Voucher", discount: "-40%", color: "#1E3A8A", logo: require('@/assets/images/auntie-logo.png') },
              { title: "Voucher Prima", price: "Rp10.000", discPrice: "Rp5.000", type: "Shopping Voucher", discount: "-50%", color: "#4ADE80", logo: require('@/assets/images/prima-logo.png') }
          ],
          [
              { title: "Solaria e-Voucher", price: "Rp50.000", discPrice: "Rp45.000", type: "Culinary Voucher", discount: "-10%", color: "#9333EA", logo: require('@/assets/images/solaria-logo.png') },
              { title: "Miniso Voucher", price: "Rp25.000", discPrice: "Rp20.000", type: "Shopping Voucher", discount: "-20%", color: "#F59E0B", logo: require('@/assets/images/miniso-logo.png') }
          ]
      ];
      // Duplicate 5x biar jadi 10 item (Infinite feel)
      return [...baseData, ...baseData, ...baseData, ...baseData, ...baseData];
  }, []);

  // Data Banner Infinite
  const BANNER_DATA = React.useMemo(() => {
      const baseData = [
          require('@/assets/images/banner-1.png'),
          require('@/assets/images/banner-2.png'),
          require('@/assets/images/banner-3.png'),
          require('@/assets/images/banner-4.png'),
      ];
      return [...baseData, ...baseData, ...baseData, ...baseData, ...baseData];
  }, []);

  // Auto Scroll Logic
  React.useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
          index++;
          if (index >= VOUCHER_DATA.length) {
              index = 0;
              flatListRef.current?.scrollToIndex({ index: 0, animated: false }); // Reset instan ke awal
          } else {
              flatListRef.current?.scrollToIndex({ index, animated: true });
          }
      }, 3000); // Scroll tiap 3 detik
      return () => clearInterval(interval);
  }, [VOUCHER_DATA]);

  // Auto Scroll Logic Banner
  React.useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
          index++;
          if (index >= BANNER_DATA.length) {
              index = 0;
              bannerListRef.current?.scrollToIndex({ index: 0, animated: false });
          } else {
              bannerListRef.current?.scrollToIndex({ index, animated: true });
          }
      }, 3000);
      return () => clearInterval(interval);
  }, [BANNER_DATA]);

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
              {showBalance ? '100.000' : '••• '}
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
          <FlatList
            ref={bannerListRef}
            data={BANNER_DATA}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 30, gap: 16 }}
            style={{ marginTop: 16 }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.bannerContainer, { marginHorizontal: 0, marginTop: 0, width: 300 }]}>
                  <Image 
                      source={item} 
                      style={styles.bannerImage}
                  />
              </View>
            )}
          />

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

              <FlatList
                  ref={flatListRef}
                  data={VOUCHER_DATA}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 12 }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                      <View style={{ gap: 12 }}>
                          {item.map((voucher: any, i: number) => (
                              <VoucherCard key={i} {...voucher} />
                          ))}
                      </View>
                  )}
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

          <Text style={{textAlign:'center', color: '#888', fontSize: 14, marginTop: 10, marginTop: 50}} >DANA Indonesia terdaftar serta diawasi</Text>
          <Text style={{textAlign:'center', color: '#888', fontSize: 14, marginBottom: 80}} >Oleh <Text style={{fontWeight: 'bold'}}>Bank Indonesia</Text> dan <Text style={{fontWeight: 'bold'}}>Komdigi</Text></Text>
         
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
                <Image source={logo} style={{ width: 24, height: 24 }} contentFit="contain" />
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
    paddingTop: 20,
    paddingBottom: 15,
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
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  // INFO & SEARCH -> JADI CARD
  infoCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16, // RAPIHIN GAP
    borderRadius: 12,
    overflow: 'hidden', // Biar header biru ngikutin radius card
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    width: 280,
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