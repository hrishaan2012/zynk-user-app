# 💻 Preview Zynk Apps on Windows Laptop

Complete guide for Windows users to preview the apps.

---

## 🚀 Quick Start (Choose One)

### **Option A: Android Emulator** (Best - 30 min setup)
Full native app experience with all features

### **Option B: Web Browser** (Fastest - 2 min)
Quick preview with limited features

---

## 📱 OPTION A: Android Emulator (RECOMMENDED)

### **Part 1: Install Android Studio (One-Time)**

#### **Step 1: Download**
1. Go to: https://developer.android.com/studio
2. Click **"Download Android Studio"**
3. Accept terms and click **"Download Android Studio for Windows"**
4. File: `android-studio-2023.x.x.x-windows.exe` (~1GB)

#### **Step 2: Install**
1. Run the downloaded `.exe` file
2. Click **"Next"** on welcome screen
3. Select components (keep all checked):
   - ✅ Android Studio
   - ✅ Android Virtual Device
4. Click **"Next"** → Choose install location
5. Click **"Install"** (takes 5-10 minutes)
6. Click **"Finish"**

#### **Step 3: First Launch Setup**
1. Android Studio opens
2. **"Import Android Studio Settings"** → Select "Do not import"
3. Click **"Next"** on Welcome screen
4. Select **"Standard"** installation
5. Choose theme (Light or Dark)
6. Click **"Next"** → **"Finish"**
7. Wait for SDK download (5-10 minutes, ~3GB)

### **Part 2: Create Virtual Device**

#### **Step 1: Open Device Manager**
1. Android Studio main screen
2. Click **"More Actions"** (three dots)
3. Select **"Virtual Device Manager"**

#### **Step 2: Create Device**
1. Click **"Create Device"** button
2. **Category**: Phone
3. **Select**: Pixel 5 (recommended)
4. Click **"Next"**

#### **Step 3: Download System Image**
1. **Release Name**: Tiramisu (Android 13)
2. Click **"Download"** next to it
3. Accept license → Click **"Next"**
4. Wait for download (5 minutes, ~1.5GB)
5. Click **"Finish"**
6. Click **"Next"**

#### **Step 4: Verify Configuration**
1. **AVD Name**: Pixel 5 API 33
2. **Startup orientation**: Portrait
3. Click **"Finish"**

#### **Step 5: Test Emulator**
1. Click **▶ (Play)** button next to your device
2. Emulator window opens (takes 1-2 minutes first time)
3. You'll see Android home screen
4. Close emulator for now

### **Part 3: Run Your App**

#### **Step 1: Open Command Prompt**
1. Press **Windows Key + R**
2. Type: `cmd`
3. Press **Enter**

#### **Step 2: Navigate to App Folder**
```bash
# Example - adjust path to where you cloned the repo
cd C:\Users\YourName\Desktop\zynk-user-app

# Or if on different drive
D:
cd D:\Projects\zynk-user-app
```

#### **Step 3: Install Dependencies (First Time Only)**
```bash
npm install
```
Wait 2-3 minutes for installation.

#### **Step 4: Start the App**
```bash
npm start
```

You'll see:
```
› Metro waiting on exp://192.168.x.x:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
```

#### **Step 5: Open in Emulator**
**Press 'a'** in the Command Prompt

The emulator will:
1. Launch automatically (if closed)
2. Install Expo Go
3. Load your app
4. Show your app running!

**First time takes 2-3 minutes. After that, instant!**

---

## 🌐 OPTION B: Web Browser (Quick Preview)

### **Step 1: Open Command Prompt**
```
Windows Key + R → type "cmd" → Enter
```

### **Step 2: Navigate and Start**
```bash
# Go to app folder
cd C:\Users\YourName\Desktop\zynk-user-app

# Install dependencies (first time)
npm install

# Start app
npm start
```

### **Step 3: Open in Browser**
**Press 'w'** in Command Prompt

Or open browser and go to: `http://localhost:19006`

### **What You'll See:**
- ✅ App layout and design
- ✅ Navigation between screens
- ✅ UI components
- ✅ Basic functionality

### **Limitations:**
- ❌ No camera access
- ❌ No GPS/location
- ❌ No push notifications
- ❌ Some native features won't work

---

## 🎯 Testing All Three Apps

### **User App**
```bash
cd C:\path\to\zynk-user-app
npm install
npm start
# Press 'a' for emulator or 'w' for web
```

### **Driver App**
```bash
cd C:\path\to\zynk-driver-app
npm install
npm start
# Press 'a' for emulator or 'w' for web
```

### **Admin Panel**
```bash
cd C:\path\to\zynk-admin-panel
npm install
npm run dev
# Opens at http://localhost:3000
```

---

## 📸 Taking Screenshots

### **In Android Emulator:**
1. Click **📷 (Camera)** icon in emulator toolbar
2. Or press **Ctrl + S**
3. Screenshots saved to: `C:\Users\YourName\Pictures\Screenshots`

### **In Web Browser:**
1. Press **Windows Key + Shift + S**
2. Select area to capture
3. Or use browser's screenshot tool

---

## 🎬 Recording Screen

### **In Android Emulator:**
1. Click **⏺ (Record)** icon in emulator toolbar
2. Click **Start Recording**
3. Use your app
4. Click **Stop Recording**
5. Video saved automatically

### **In Windows:**
1. Press **Windows Key + G** (Game Bar)
2. Click **⏺ Record** button
3. Use your app
4. Click **⏹ Stop**
5. Video saved to: `C:\Users\YourName\Videos\Captures`

---

## 🔧 Troubleshooting

### **"npm is not recognized"**
**Solution**: Install Node.js
1. Go to: https://nodejs.org
2. Download LTS version
3. Install with default settings
4. Restart Command Prompt

### **"Android emulator not starting"**
**Solution 1**: Enable Virtualization in BIOS
1. Restart PC
2. Enter BIOS (usually F2, F10, or Del key)
3. Find "Virtualization" or "VT-x"
4. Enable it
5. Save and exit

**Solution 2**: Use web preview instead
```bash
npm start
# Press 'w'
```

### **"Port 8081 already in use"**
**Solution**: Kill the process
```bash
# Find process
netstat -ano | findstr :8081

# Kill it (replace PID with actual number)
taskkill /PID <PID> /F

# Or just restart Command Prompt
```

### **"Metro bundler failed to start"**
**Solution**: Clear cache
```bash
npx expo start -c
```

### **"Unable to resolve module"**
**Solution**: Reinstall dependencies
```bash
# Delete node_modules
rmdir /s /q node_modules

# Reinstall
npm install
```

### **Emulator is slow**
**Solution**: Allocate more RAM
1. Device Manager → Edit device (pencil icon)
2. Show Advanced Settings
3. RAM: 2048 MB → 4096 MB
4. Click "Finish"

---

## ⚡ Performance Tips

### **Speed Up Emulator:**
1. Close other applications
2. Allocate more RAM (4GB recommended)
3. Enable hardware acceleration
4. Use SSD for Android Studio

### **Speed Up Development:**
1. Keep emulator running (don't close)
2. Use Fast Refresh (automatic)
3. Use web preview for quick UI checks
4. Use emulator for full testing

---

## 🎯 Recommended Workflow

### **For UI Development:**
1. Use **web browser** (instant preview)
2. Make changes → Auto-refreshes
3. Quick iteration

### **For Feature Testing:**
1. Use **Android emulator**
2. Test all features
3. Take screenshots
4. Record demos

### **For Final Testing:**
1. Build APK
2. Install on real Android phone
3. Test in real conditions

---

## 📋 Quick Commands Reference

```bash
# Start app
npm start

# Open Android emulator
Press 'a'

# Open web browser
Press 'w'

# Reload app
Press 'r'

# Clear cache and reload
Press 'Shift + r'

# Show developer menu
Press 'm'

# Stop server
Press 'Ctrl + C'
```

---

## ✅ Setup Checklist

### **One-Time Setup:**
- [ ] Node.js installed
- [ ] Android Studio installed
- [ ] Virtual device created
- [ ] Emulator tested

### **Every Time:**
- [ ] Command Prompt opened
- [ ] Navigated to app folder
- [ ] Dependencies installed (`npm install`)
- [ ] App started (`npm start`)
- [ ] Emulator opened (Press 'a')
- [ ] App loaded successfully

---

## 🎓 Video Tutorial

If you need a video walkthrough, I can guide you through:
1. Installing Android Studio
2. Creating virtual device
3. Running the app
4. Taking screenshots

Would you like me to create that?

---

## 💡 Pro Tips

1. **Keep emulator running** - Don't close it between tests
2. **Use keyboard shortcuts** - Much faster than clicking
3. **Enable Fast Refresh** - Changes appear instantly
4. **Use web for UI** - Faster for design tweaks
5. **Use emulator for features** - Full native experience

---

## 📞 Need Help?

**Common Issues:**
- Emulator won't start → Enable virtualization in BIOS
- App won't load → Clear cache (`npx expo start -c`)
- Slow performance → Allocate more RAM to emulator

**Resources:**
- Android Studio: https://developer.android.com/studio/run/emulator
- Expo Docs: https://docs.expo.dev
- Stack Overflow: Search your error message

---

## 🎉 You're Ready!

**Estimated Setup Time:**
- First time: 30-45 minutes (downloading + setup)
- After setup: 2 minutes to preview

**What You Can Do:**
✅ See your app running
✅ Test all features
✅ Take screenshots
✅ Record demos
✅ Debug issues
✅ Show to others

---

**Start with web preview (2 min), then set up emulator for full experience!**
