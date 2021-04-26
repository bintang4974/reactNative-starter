import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000)
  }, [])
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  )
}

export default App;