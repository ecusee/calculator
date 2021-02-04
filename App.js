import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import Colors from './Colors';
 
import styles from './styles'
import CalcuButtons from './CalcuButtons';

export default function App() {

  const [isOn,setIsOn] = useState(false);


  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={styles.output}>
          <View style={styles.darkMode}>
          <ToggleSwitch
            isOn={isOn}
            onColor= {isOn ? Colors.dark.darkColor : Colors.light.lightColor}
            offColor = {!isOn ? Colors.light.lightColor : Colors.dark.darkColor}
            size="medium"
            onToggle={() => setIsOn(!isOn)}
            icon={isOn ? <Text>🌜</Text> : <Text>🌞</Text>}
          />
          </View>

          <View>
            <View style={styles.resultContainer}>
              <View style={styles.result}>
                <View><Text style={styles.resultText}>2122</Text></View>
              </View>
              <View style={styles.equalAndLast}>
                <View style={styles.equal}><Text style={styles.equalText}>=</Text></View>
                <View style={styles.lastOne}><Text style={styles.lastOneText}>346+74*24</Text></View>
              </View>
            </View>
          </View>
          
        </View>

        <CalcuButtons />

      </View>
    </SafeAreaView>
  );
}
