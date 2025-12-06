# 📱 How to Preview Zynk User App

## 🚀 Fastest Method (2 Minutes)

### **Step 1: Install Expo Go on Your Phone**

**Android**: https://play.google.com/store/apps/details?id=host.exp.exponent

**iOS**: https://apps.apple.com/app/expo-go/id982107779

### **Step 2: Start the App**

```bash
# Navigate to folder
cd zynk-user-app

# Install dependencies (first time only)
npm install

# Start the app
npm start
```

### **Step 3: Scan QR Code**

You'll see a QR code in terminal:

```
█▀▀▀▀▀█ ▀▀█▄ █▀▀▀▀▀█
█ ███ █ ▄▀▀█ █ ███ █
█ ▀▀▀ █ █▀▀▄ █ ▀▀▀ █
```

**Android**: Open Expo Go → Tap "Scan QR code"

**iOS**: Open Camera app → Point at QR code

### **Step 4: App Loads!** 🎉

The app will load on your phone in 10-20 seconds!

---

## 💻 Using Android Emulator

### **One-Time Setup**

1. **Download Android Studio**:
   https://developer.android.com/studio

2. **Install Android Studio**

3. **Open Android Studio** → More Actions → Virtual Device Manager

4. **Create Device**:
   - Click "Create Device"
   - Select "Pixel 5"
   - Click "Next"
   - Download "Tiramisu" (Android 13)
   - Click "Finish"

### **Every Time**

```bash
# Start app
cd zynk-user-app
npm start

# In terminal, press 'a'
# Emulator will open automatically!
```

---

## 🍎 Using iOS Simulator (Mac Only)

### **One-Time Setup**

```bash
# Install Xcode from App Store (free)

# Install command line tools
xcode-select --install
```

### **Every Time**

```bash
# Start app
cd zynk-user-app
npm start

# In terminal, press 'i'
# Simulator will open automatically!
```

---

## 🌐 Web Preview (Limited)

```bash
cd zynk-user-app
npm start

# Press 'w' in terminal
# Opens in browser at http://localhost:19006
```

**Note**: Some features won't work (camera, location)

---

## 📸 Taking Screenshots

### **On Phone (Expo Go)**
- Android: Power + Volume Down
- iOS: Side Button + Volume Up

### **On Emulator**
- Click camera icon in toolbar
- Or: Ctrl/Cmd + S

### **On Simulator**
- Cmd + S (Mac)
- Screenshots saved to Desktop

---

## 🎥 Recording Demo Video

### **On Phone**
- Android: Built-in screen recorder
- iOS: Control Center → Screen Recording

### **On Emulator**
- Click record button in toolbar
- Or use OBS Studio (free)

---

## 🔧 Troubleshooting

### **"Metro bundler failed to start"**
```bash
# Clear cache
npx expo start -c
```

### **"Unable to resolve module"**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### **"Network response timed out"**
```bash
# Make sure phone and computer on same WiFi
# Or use tunnel mode:
npx expo start --tunnel
```

### **"Expo Go not connecting"**
```bash
# Use tunnel mode
npx expo start --tunnel

# Or use LAN mode
npx expo start --lan
```

---

## 💡 Pro Tips

### **Faster Reload**
- Shake phone → "Reload"
- Or press 'r' in terminal

### **Debug Menu**
- Shake phone → "Debug Remote JS"
- Opens Chrome DevTools

### **Hot Reload**
- Edit code
- Save file
- App updates automatically!

### **Multiple Devices**
- Scan same QR on multiple phones
- All update together!

---

## 📱 Test on Real Device vs Emulator

### **Use Real Device For**:
- Camera features
- GPS/Location
- Push notifications
- Performance testing
- Real user experience

### **Use Emulator For**:
- Quick testing
- Screenshots
- Debugging
- Development

---

## 🎯 Recommended Workflow

1. **Development**: Use emulator (faster)
2. **Testing**: Use real device (accurate)
3. **Screenshots**: Use emulator (easier)
4. **Demo**: Use real device (impressive)

---

## 📊 What You Can Test

### **User App**
✅ Browse products by category
✅ Search products
✅ Add to cart
✅ View cart
✅ Checkout flow
✅ Order history
✅ Profile management

### **Driver App**
✅ Dashboard
✅ Available orders
✅ Accept orders
✅ Delivery workflow
✅ Earnings tracking

### **Admin Panel**
✅ Dashboard analytics
✅ Product management
✅ Order management
✅ Driver assignment

---

## 🚀 Quick Commands Reference

```bash
# Start app
npm start

# Open Android
Press 'a'

# Open iOS
Press 'i'

# Open Web
Press 'w'

# Reload
Press 'r'

# Clear cache
Press 'Shift + r'

# Toggle menu
Press 'm'

# Show QR
Press 'q'
```

---

## 📞 Need Help?

**Common Issues**:
- Port already in use → Close other terminals
- Can't connect → Check WiFi connection
- App crashes → Check error in terminal

**Resources**:
- Expo Docs: https://docs.expo.dev
- Expo Forums: https://forums.expo.dev
- Discord: https://chat.expo.dev

---

## ✅ Checklist

- [ ] Expo Go installed on phone
- [ ] Dependencies installed (`npm install`)
- [ ] App started (`npm start`)
- [ ] QR code scanned
- [ ] App loaded successfully
- [ ] Tested main features
- [ ] Screenshots taken

---

**You're ready to preview your app! 🎉**

**Estimated time**: 2-5 minutes from start to preview!
