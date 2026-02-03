import {
  ArrowDownCircle,
  ArrowUpCircle,
  ChevronRight,
  Coins,
  Headphones,
  Info,
  QrCode,
  Receipt,
  Settings,
  Target,
  TicketPercent,
  Users
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('Personal');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#118EE9" />
      
      {/* 1. BLUE HEADER SECTION */}
      <View style={styles.headerBackground}>
        <SafeAreaView edges={['top', 'left', 'right']}>
          
          {/* Toggle Personal / Bisnis */}
          <View style={styles.toggleContainer}>
            <View style={styles.toggleWrapper}>
                <TouchableOpacity 
                    style={[styles.toggleBtn, activeTab === 'Personal' && styles.toggleBtnActive]}
                    onPress={() => setActiveTab('Personal')}
                >
                    <Text style={[styles.toggleText, activeTab === 'Personal' && styles.toggleTextActive]}>Personal</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.toggleBtn, activeTab === 'Bisnis' && styles.toggleBtnActive]}
                    onPress={() => setActiveTab('Bisnis')}
                >
                    <Text style={[styles.toggleText, activeTab === 'Bisnis' && styles.toggleTextActive]}>Bisnis</Text>
                </TouchableOpacity>
            </View>
          </View>

          {/* User Profile Info */}
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
                 <Image 
                    source={require('@/assets/images/diwa-pp.jpeg')} 
                    style={styles.avatarPlaceholder}
                 />
            </View>
            <View>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.phoneNumber}>08••••••••21</Text>
                    <ChevronRight size={20} color="#fff" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.qrButton}>
                    <QrCode size={16} color="#fff" />
                    <Text style={styles.qrText}>MY QR</Text>
                    <ChevronRight size={14} color="#fff" />
                </TouchableOpacity>
            </View>
          </View>

        </SafeAreaView>
      </View>

      {/* 2. SCROLL CONTENT */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        
        {/* Banner Premium */}
        <TouchableOpacity style={styles.premiumCard}>
            <Image 
                source={require('@/assets/images/img-di.jpeg')} 
                style={styles.premiumImage}
                resizeMode="cover"
            />
            <View style={styles.premiumContent}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.premiumSub}>Upgrade DANA Premium, Enjoy</Text>
                    <Text style={styles.premiumTitle}>Cash withdrawal anytime</Text>
                </View>
                <ChevronRight size={20} color="#ccc" />
            </View>
        </TouchableOpacity>

        {/* Menu Grid Icons */}
        <View style={styles.menuGridCard}>
            <View style={styles.gridRow}>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={require('@/assets/images/dana_icon.png')} style={{ width: 50, height: 32 }} resizeMode="contain" />
                    <Text style={styles.gridLabel}>Balance</Text>
                    <Text style={styles.gridSubLabel}>Let's Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gridItem}>
                    <Image source={require('@/assets/images/dana-plus.jpeg')} style={{ width: 50, height: 32 }} resizeMode="contain" />
                    <Text style={styles.gridLabel}>DANA+</Text>
                    <Text style={styles.gridSubLabel}>Daily Reward!</Text>
                </TouchableOpacity>
                <GridItem icon={Target} color="#EF4444" label="DANA Goals" subLabel="Create goals!" />
            </View>
            <View style={[styles.gridRow, { marginTop: 20 }]}>
                <GridItem icon={Users} color="#F59E0B" label="Family Account" subLabel="Let's Activate!" />
                <GridItem icon={Coins} color="#F59E0B" label="eMAS" subLabel="Start Investing" />
                {/* Empty View biar layout grid rapi */}
                <View style={{ width: '33%' }} /> 
            </View>
        </View>

        {/* Income & Expense Stats */}
        <View style={styles.statsRow}>
            <View style={styles.statsCard}>
                <View style={styles.statsIconGreen}>
                    <ArrowUpCircle size={24} color="#10B981" />
                </View>
                <View>
                    <Text style={styles.statsLabel}>Income</Text>
                    <Text style={styles.statsValue}>Rp0</Text>
                </View>
            </View>
            <View style={styles.statsCard}>
                <View style={styles.statsIconOrange}>
                    <ArrowDownCircle size={24} color="#F59E0B" />
                </View>
                <View>
                    <Text style={styles.statsLabel}>Expense</Text>
                    <Text style={styles.statsValue}>Rp0</Text>
                </View>
            </View>
        </View>

        {/* List Menu Section */}
        <View style={styles.listContainer}>
            <ListItem icon={Receipt} color="#F59E0B" label="My Bills" />
            <ListItem icon={TicketPercent} color="#F59E0B" label="Voucher Promo" />
            <ListItem icon={Settings} color="#118EE9" label="Settings" />
            <ListItem icon={Info} color="#10B981" label="General Info" />
            <ListItem 
                icon={Headphones} 
                color="#118EE9" 
                label="DIANA is here to help!" 
                subLabel="Let's chat if you need assistance." 
                isLast={true}
                customIconBg
            />
        </View>

        {/* Version Footer */}
        <Text style={styles.versionText}>Version 2.112.0</Text>
        <View style={{height: 30}} />

      </ScrollView>
    </View>
  );
}

// --- SUB COMPONENTS ---

const GridItem = ({ icon: Icon, color, label, subLabel }: any) => (
    <TouchableOpacity style={styles.gridItem}>
        <Icon size={32} color={color} strokeWidth={1.5} />
        <Text style={styles.gridLabel}>{label}</Text>
        <Text style={styles.gridSubLabel}>{subLabel}</Text>
    </TouchableOpacity>
);

const ListItem = ({ icon: Icon, color, label, subLabel, isLast, customIconBg }: any) => (
    <TouchableOpacity style={[styles.listItem, !isLast && styles.listBorder]}>
        <View style={styles.listLeft}>
            {customIconBg ? (
                // Khusus Icon Diana yang ada buletan background
                <View style={styles.dianaIconBg}>
                    <Icon size={18} color="#fff" />
                    <View style={styles.greenDot} />
                </View>
            ) : (
                <Icon size={24} color={color} />
            )}
            <View>
                <Text style={styles.listLabel}>{label}</Text>
                {subLabel && <Text style={styles.listSubLabel}>{subLabel}</Text>}
            </View>
        </View>
        <ChevronRight size={20} color="#ccc" />
    </TouchableOpacity>
);

// --- STYLES ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  
  // Header
  headerBackground: {
    backgroundColor: '#118EE9',
    paddingBottom: 20,
  },
  toggleContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleWrapper: {
    flexDirection: 'row',
    backgroundColor: '#0F7BCF', // Biru lebih gelap dikit
    borderRadius: 8,
    padding: 4,
  },
  toggleBtn: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  toggleBtnActive: {
    backgroundColor: '#4CB1F6', // Biru terang buat aktif
  },
  toggleText: {
    color: '#AADDF9',
    fontWeight: '600',
    fontSize: 13,
  },
  toggleTextActive: {
    color: '#fff',
  },

  // Profile Info
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff', // Lingkaran putih polos
  },
  phoneNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4,
  },
  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    gap: 4
  },
  qrText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // Scroll Content
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Premium Banner
  premiumCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    height: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  premiumImage: {
    width: 90,
    height: 85,
  },
  premiumContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  premiumSub: {
    fontSize: 12,
    color: '#666',
  },
  premiumTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  // Menu Grid
  menuGridCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '33%',
    alignItems: 'center',
    gap: 6,
  },
  gridLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  gridSubLabel: {
    fontSize: 10,
    color: '#118EE9', // Text biru kecil di bawah label
    textAlign: 'center',
  },

  // Stats (Income/Expense)
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 16,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statsIconGreen: {
    padding: 6,
    backgroundColor: '#E6FFFA',
    borderRadius: 20,
  },
  statsIconOrange: {
    padding: 6,
    backgroundColor: '#FFF7ED',
    borderRadius: 20,
  },
  statsLabel: {
    fontSize: 11,
    color: '#888',
  },
  statsValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  // List Menu
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  listBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  listLabel: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  listSubLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  dianaIconBg: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#118EE9',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
  },
  greenDot: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#10B981',
      borderWidth: 1.5,
      borderColor: '#fff',
  },

  // Footer
  versionText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
  },
});