# Zynk User App - Google Play Store Submission Guide

## Prerequisites

1. **Google Play Developer Account** ($25 one-time)
   - Sign up at: https://play.google.com/console/signup

2. **EAS CLI Installed**
   ```bash
   npm install -g eas-cli
   ```

3. **Expo Account**
   - Sign up at: https://expo.dev

---

## Step 1: Configure App for Production

### 1.1 Update app.json

```json
{
  "expo": {
    "name": "Zynk - Quick Commerce",
    "slug": "zynk-user-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#10b981"
    },
    "android": {
      "package": "com.zynk.userapp",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#10b981"
      },
      "permissions": [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ],
      "googleServicesFile": "./google-services.json"
    },
    "extra": {
      "eas": {
        "projectId": "your-project-id-here"
      }
    }
  }
}
```

### 1.2 Create eas.json

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "aab"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./service-account-key.json",
        "track": "internal"
      }
    }
  }
}
```

---

## Step 2: Build the App

### 2.1 Login to EAS

```bash
eas login
```

### 2.2 Configure Project

```bash
eas build:configure
```

### 2.3 Build for Android (AAB)

```bash
# Production build
eas build --platform android --profile production
```

This will:
- Create an Android App Bundle (.aab)
- Upload to Expo servers
- Provide download link

**Build time**: 10-20 minutes

---

## Step 3: Prepare Store Listing

### 3.1 App Information

**App Name**: Zynk - Quick Commerce

**Short Description** (80 chars):
```
Order groceries, fresh produce & essentials. Delivered in minutes!
```

**Full Description** (4000 chars):
```
🛒 Zynk - Your Quick Commerce Partner

Get groceries, fresh produce, drinks, and pharmacy items delivered to your doorstep in minutes!

✨ KEY FEATURES:

📦 Wide Product Range
• Fresh fruits & vegetables
• Groceries & staples
• Beverages & snacks
• Pharmacy & healthcare
• Personal care items

🚀 Lightning Fast Delivery
• Order in seconds
• Delivered in minutes
• Real-time order tracking
• Live driver location

💰 Best Prices
• Competitive pricing
• Regular discounts
• Promo codes & offers
• No hidden charges

🎯 Easy Shopping Experience
• Browse by categories
• Smart search
• Add to cart instantly
• Multiple payment options

📍 Flexible Delivery
• Save multiple addresses
• Schedule deliveries
• Doorstep delivery
• Contactless option

🔒 Safe & Secure
• Secure payments
• Quality products
• Verified sellers
• 24/7 support

WHY CHOOSE ZYNK?

✓ Fastest delivery in your area
✓ Fresh & quality products
✓ Transparent pricing
✓ Easy returns & refunds
✓ Excellent customer service

DOWNLOAD NOW and experience the future of grocery shopping!

Need help? Contact us at support@zynk.com
```

### 3.2 App Category

- **Category**: Shopping
- **Tags**: grocery, delivery, quick commerce, food delivery

### 3.3 Content Rating

Complete the questionnaire:
- Violence: None
- Sexual Content: None
- Profanity: None
- Controlled Substances: None
- Gambling: None

**Expected Rating**: Everyone

---

## Step 4: Create Assets

### 4.1 App Icon (512x512 PNG)

Requirements:
- Size: 512x512 pixels
- Format: 32-bit PNG
- No transparency
- Full bleed (no padding)

### 4.2 Feature Graphic (1024x500 PNG)

Create a banner with:
- App logo
- Tagline: "Quick Commerce in Minutes"
- Key features

### 4.3 Screenshots (Minimum 2, Maximum 8)

Required sizes:
- Phone: 1080x1920 or 1080x2340
- 7-inch Tablet: 1200x1920
- 10-inch Tablet: 1920x1200

**Recommended Screenshots**:
1. Home screen with products
2. Product details
3. Shopping cart
4. Order tracking
5. User profile
6. Categories view

### 4.4 Promo Video (Optional)

- Max length: 2 minutes
- YouTube URL
- Showcase key features

---

## Step 5: Privacy Policy

Create a privacy policy page. Here's a template:

```markdown
# Privacy Policy for Zynk

Last updated: [Date]

## Information We Collect
- Name, email, phone number
- Delivery addresses
- Order history
- Payment information (encrypted)
- Location data (for delivery)

## How We Use Information
- Process orders
- Deliver products
- Send order updates
- Improve services
- Customer support

## Data Security
- Encrypted storage
- Secure payment processing
- No data selling
- GDPR compliant

## Contact
support@zynk.com
```

Host at: `https://yourwebsite.com/privacy-policy`

---

## Step 6: Submit to Play Store

### 6.1 Create App in Play Console

1. Go to https://play.google.com/console
2. Click "Create app"
3. Fill in details:
   - App name: Zynk - Quick Commerce
   - Default language: English
   - App or game: App
   - Free or paid: Free

### 6.2 Complete Store Listing

**Main Store Listing**:
- App name
- Short description
- Full description
- App icon
- Feature graphic
- Screenshots (at least 2)
- Privacy policy URL

**Store Settings**:
- App category: Shopping
- Tags: grocery, delivery
- Contact details
- Website (optional)

### 6.3 Content Rating

1. Click "Content rating"
2. Fill questionnaire
3. Get rating certificate

### 6.4 Target Audience

- Target age: 18+
- Appeals to children: No

### 6.5 Upload App Bundle

1. Go to "Production" → "Create new release"
2. Upload the .aab file from EAS build
3. Add release notes:

```
Version 1.0.0
- Browse products by category
- Add items to cart
- Place orders
- Track deliveries in real-time
- Manage profile and addresses
```

### 6.6 Pricing & Distribution

- Free app
- Select countries (or worldwide)
- Content guidelines: Agree
- US export laws: Agree

---

## Step 7: Submit for Review

1. Review all sections (must be green checkmarks)
2. Click "Send for review"
3. Wait for approval (typically 1-7 days)

---

## Step 8: After Approval

### Monitor Performance
- Check crash reports
- Read user reviews
- Monitor downloads
- Track ratings

### Update Regularly
```bash
# Increment version in app.json
"version": "1.0.1",
"versionCode": 2

# Build new version
eas build --platform android --profile production

# Submit update
eas submit --platform android
```

---

## Troubleshooting

### Build Failed
```bash
# Clear cache
eas build:clear-cache

# Try again
eas build --platform android --profile production
```

### Submission Rejected

Common reasons:
1. **Privacy Policy Missing**: Add valid URL
2. **Screenshots**: Need at least 2
3. **Content Rating**: Complete questionnaire
4. **Permissions**: Justify location permission

### App Crashes

1. Check crash reports in Play Console
2. Fix issues
3. Submit update

---

## Useful Commands

```bash
# Check build status
eas build:list

# Download build
eas build:download --platform android

# Submit to Play Store
eas submit --platform android

# View submission status
eas submit:list
```

---

## Costs

- **Google Play Developer**: $25 (one-time)
- **EAS Build**: Free tier (30 builds/month)
- **Hosting**: Included with Supabase

**Total**: $25 to get started!

---

## Timeline

- **Account Setup**: 1-2 days
- **App Build**: 20 minutes
- **Store Listing**: 1-2 hours
- **Review Process**: 1-7 days

**Total**: ~3-10 days from start to live

---

## Support

- **EAS Docs**: https://docs.expo.dev/eas/
- **Play Console**: https://support.google.com/googleplay/android-developer
- **Expo Forums**: https://forums.expo.dev

---

## Checklist

- [ ] Google Play Developer account created
- [ ] EAS CLI installed
- [ ] app.json configured
- [ ] eas.json created
- [ ] App built successfully
- [ ] App icon created (512x512)
- [ ] Feature graphic created (1024x500)
- [ ] Screenshots taken (minimum 2)
- [ ] Privacy policy created
- [ ] Store listing completed
- [ ] Content rating obtained
- [ ] App bundle uploaded
- [ ] Submitted for review

---

**You're ready to launch on Google Play Store! 🚀**
