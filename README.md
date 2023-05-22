Run the following command to create a new React Native project
```
npx react-native@latest init project_name
```
```
npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
```
```
 yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
```
```
npx create-expo-app --template
```
```
yarn tsc
```
```
npm install expo-cli --global
```
## For build APK
```
keytool -genkey -v -keystore your_key_name.keystore -alias your_key_alias -keyalg RSA -keysize 2048 -validity 10000
mv my-release-key.keystore /android/app
cd android
./gradlew assembleRelease
```
check ->android/app/build/outputs/apk/release/app-release.apk<br>
OR
```
cd android
./gradlew bundleRelease --no-daemon
```
check ->android/app/build/outputs/bundle/release/app-release.aab
ctrl+m ->degub in android


```
npm install @react-navigation/stack
npm install react-native-gesture-handler
npm install @react-native-masked-view/masked-view
```
### For redux
```
npm i redux
npm i react-redux
npm install @reduxjs/toolkit react-redux
```
## For firebase
- login to firebase and create project with App Distribution
- upload apk in Releases and add tester
- create service account for cicd
```
firebase login:ci 
firebase logout --token TOKEN
```
Adding  android:usesCleartextTraffic="true" in <application> tag in android\app\src\main\AndroidManifest.xml for Fetch working in release APK

