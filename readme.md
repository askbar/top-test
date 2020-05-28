mkdir top && cd top
ionic start myApp tabs
cd myApp
npm run build

ionic capacitor add ios
npx cap open ios    // open x-code and run 

ionic serve