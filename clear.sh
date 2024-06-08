function npmInstall() {
  echo "==========>   Start npm install   <==============="
  npm install --legacy-peer-deps
}

function clearNodeModule() {
  echo "==========>   start watch dell all    <==============="
  watchman watch-del-all
  echo "==========>   start delete node modules, .lock files    <==============="
  sudo rm -rf node_modules \
  && sudo rm -rf package-lock.json \
  && sudo rm -rf yarn.lock
}

function ios() {
   echo "==========>   Start IOS   <==============="
   clearNodeModule
   cd ios \
   && sudo rm -rf ~/Library/Developer/Xcode/DerivedData \
   && sudo rm -rf Pods \
   && sudo rm -rf Podfile.lock \
   && sudo rm -rf build \
   && cd ..
   echo "==========>   start install RN-modules and POD-modules   <==============="
   npmInstall \
   && cd ios \
   && pod install \
   && cd ..
   react-native run-ios --scheme TruGreatStaging
}

function android(){
  echo "==========>   Start ANDROID   <==============="
  clearNodeModule
  cd android \
  && sudo rm -rf app/build \
  && sudo rm -rf .gradle \
  && sudo rm -rf build \
  && cd ..
  npmInstall
  react-native run-android --variant=trugreatStagingDebug --appIdSuffix staging
}

function runDefault() {
  echo "==========>   Start Default   <==============="
  echo "==========>   start watch dell all    <==============="
  watchman watch-del-all
  echo "start delete node modules and Pods modules <==============="
  sudo rm -rf node_modules/ && rm -rf package-lock.json && rm -rf yarn.lock && npm install --legacy-peer-deps && cd ios/ && rm -rf ~/Library/Developer/Xcode/DerivedData && rm -rf Pods/ && rm -rf build/ && rm -rf Podfile.lock && pod install  && cd ..
  echo "==========>   start project on ios   <==============="
  react-native run-ios --scheme TruGreatStaging
  echo "==========>   END   <==============="
}

while getopts ia flag; do
  case "${flag}" in
    (i) ios; exit;;
    (a) android; exit;;
    (*) echo "Flag is wrong";;
  esac
done

if [[ $# == 0 ]]; then
  runDefault
  fi
