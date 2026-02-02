#  DANA Clone App

![Expo](https://img.shields.io/badge/Expo-4630EB?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey?style=for-the-badge)

A high-fidelity mobile UI clone of the **DANA Digital Wallet** application, built using **React Native**, **Expo**, and **TypeScript**. This project demonstrates modern mobile development practices, complex layout handling, and component reusability.

---

## 📸 Screenshots

<!-- Upload your screenshots to the 'assets' folder or an image host and link them here -->
<!-- Example layout for screenshots -->
| Home Screen | Deals Section |
|:---:|:---:|
| <img src="./assets/images/react-logo.png" width="250" alt="Home Screen" /> | <img src="./assets/images/react-logo.png" width="250" alt="Deals Section" /> |

> *Note: Replace the placeholder images above with actual screenshots of your app.*

## ✨ Features

*   **Modern UI/UX**: Pixel-perfect replication of the DANA app interface.
*   **Wallet Dashboard**:
    *   Toggleable balance visibility (Eye icon interaction).
    *   Custom action buttons (Top up, Request, Send, Inbox) with custom assets.
*   **Interactive Layouts**:
    *   **Parallax Headers**: Smooth scrolling effects.
    *   **Overlapping Cards**: "Floating" main menu card effect using negative margins.
    *   **Grid Systems**: Responsive service menu grid.
*   **Components**:
    *   Custom Cards (Vouchers, News, Feeds).
    *   Promotional Banners with overlays.
    *   Secure Info & Search bar implementation.
*   **Navigation**: File-based routing using **Expo Router**.

## 🛠 Tech Stack

-   **Framework**: [React Native](https://reactnative.dev/)
-   **Platform**: [Expo](https://expo.dev/) (SDK 50+)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
-   **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native) & Expo Vector Icons
-   **Styling**: StyleSheet API & Flexbox

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS recommended)
*   [Expo Go](https://expo.dev/client) app installed on your iOS/Android device.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/dana-clone.git
    cd dana-clone
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npx expo start
    ```

4.  **Run on device**
    *   Scan the QR code shown in the terminal using the **Expo Go** app.
    *   Press `a` for Android Emulator or `i` for iOS Simulator.

## 📂 Project Structure

```
dana-clone/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx       # Main Home Screen (Wallet UI)
│   │   ├── explore.tsx     # Explore Screen
│   │   └── _layout.tsx     # Tab Navigation Config
│   └── _layout.tsx         # Root Layout
├── assets/
│   └── images/             # Custom Icons & Static Images
├── components/             # Reusable UI Components
├── constants/              # Theme & Colors
└── README.md
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features (like a Transaction History page), feel free to fork the repo and submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

Made with ❤️ using React Native