### 1 - Tools and Environment

#### Installing NodeJs
```
nodejs 14.15.3
ctrl + j : open the terminal
npm version
```

#### Installing Expo
```
mkdir MERN_Course
cd MERN_Course
npm install -g expo-cli
expo init --npm
easy-shop
blank
cd easy-shop
npm start

Run in web browser
```

#### Installing and running Android Studio
```
Android Studio
  Configure -> SDK Manager:
    Android 12 (S)
    Android SDK Platform 31
    Intel x86 Atom_64 System Image
    Google APIs Intel x86 Atom System Image
    Android SDK Build-Tools 31.0.0

ANDROID_HOME environment variable
Add platform-tools to Path
Android Virtual Device: Pixel 2

Expo: Run on Android device/emulator
```

#### Installing and running iOS Simulator
```
Xcode
Expo: Run on iOS simulator
File -> Open Device
```

#### Installing our Coding Editor (IDE)
```
Visual Studio Code
  Bracket Pair Colorizer
  ES7+ React/Redux/React-Native snippets
  Prettier - Code formatter
```

#### Configure MongoDB Atlas
```
New Project
  Name Your Project: E-shop
  Create Project

Build a Cluster -> Shared Clusters -> Create a cluster
  AWS, N. Virginia (us-east-1)
  Create Cluster

Collections
```

### 2 - Starting with Backend

#### Creating the Backend Server with Express
```
npm init
package name: eshop
description: backend of the eshop
entry point: app.js
npm install nodemon

package.json
  "start": "nodemon app.js",

npm install express
```
