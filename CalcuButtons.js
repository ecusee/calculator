import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

const CalcuButtons = () => {
    return (
        <View style={styles.buttons}>            
          <View style={styles.row}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>C</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>+/-</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>%</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>/</Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>7</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>8</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>9</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>X</Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>4</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>5</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>6</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>0</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonNumber}>.</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text><Feather name="delete" style={styles.buttonText} /></Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>=</Text>
                </View>
            </TouchableOpacity>
          </View>

        </View>
    )
}

export default CalcuButtons
