import {
  Image as ImageIcon,
  Info,
  QrCode,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function PayScreen() {
  const [isSmartPayEnabled, setIsSmartPayEnabled] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background Transparan (Simulasi Overlay) */}
      <View style={styles.overlayBackground} />

      {/* Main White Content */}
      <View style={styles.contentContainer}>
        
        {/* 1. HEADER */}
        <View style={styles.header}>
          {/* Left: DANA Protection */}
          <View style={styles.protectionBadge}>
            <ShieldCheck size={18} color="#118EE9" strokeWidth={2.5} />
            <View>
              <Text style={styles.brandText}>DANA</Text>
              <Text style={styles.protectionText}>PROTECTION</Text>
            </View>
          </View>

          {/* Center: Title */}
          <View style={styles.titleContainer}>
            <Wallet size={20} color="#118EE9" fill="#118EE9" />
            <Text style={styles.headerTitle}>PAY</Text>
          </View>

          {/* Empty View biar center title pas */}
          <View style={{ width: 40 }} />
        </View>

        {/* 2. MAIN CARD AREA (CENTERED) */}
        <View style={styles.mainArea}>
            {/* SCANNER CARD (Black) */}
            <View style={styles.scannerCard}>
              {/* Top Icons */}
              <View style={styles.scannerHeader}>
                <TouchableOpacity style={styles.iconBtn}>
                  <ImageIcon size={24} color="#fff" />
                </TouchableOpacity>

                <View style={styles.qrisLogo}>
                  <QrCode size={20} color="#fff" />
                  <Text style={styles.qrisText}>
                    QRIS{" "}
                    <Text style={{ fontWeight: "400", fontSize: 10 }}>READY</Text>
                  </Text>
                </View>

                <TouchableOpacity style={styles.iconBtn}>
                  <Zap size={24} color="#fff" />
                </TouchableOpacity>
              </View>

              {/* Camera Placeholder Area */}
              <View style={{ flex: 1 }} />

              {/* Bottom SmartPay */}
              <View style={styles.scannerFooter}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                  <Text style={styles.smartPayText}>SMARTPAY</Text>
                  <Info size={14} color="#fff" />
                </View>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isSmartPayEnabled ? "#118EE9" : "#f4f3f4"}
                  onValueChange={() => setIsSmartPayEnabled(!isSmartPayEnabled)}
                  value={isSmartPayEnabled}
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                />
              </View>
            </View>
        </View>

        {/* 3. CLOSE BUTTON */}
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
          <Text style={styles.closeText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  overlayBackground: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    height: "85%",
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  protectionBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  brandText: {
    color: "#118EE9",
    fontSize: 10,
    fontWeight: "900",
    lineHeight: 10,
  },
  protectionText: {
    color: "#118EE9",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#118EE9",
  },

  // Main Area Center
  mainArea: {
    flex: 1,
    justifyContent: 'center', // Vertikal center
    alignItems: 'center', // Horizontal center
  },

  // Scanner Card
  scannerCard: {
    width: width * 0.85, // Sedikit lebih lebar biar gagah karena sendirian
    height: '90%', // Mengisi area mainArea
    maxHeight: 500, // Batesin tinggi biar ga kegedean di HP panjang
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between",
    // Tambahin shadow dikit biar pop-up
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  scannerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  qrisLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  qrisText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  scannerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  smartPayText: {
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 14,
  },

  // Footer
  closeBtn: {
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
  },
  closeText: {
    color: "#118EE9",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
  },
});
