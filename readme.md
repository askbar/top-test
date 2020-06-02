mkdir top && cd top
ionic start myApp tabs
cd myApp
npm run build

ionic capacitor add ios
npx cap open ios    // open x-code 
ionic capacitor run ios -l --external // open x-code and run - live update
pod install // in ios/App folder if build 

ionic serve  // run web version