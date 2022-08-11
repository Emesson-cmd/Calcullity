import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Operacoes(props) {
  return (
        <View style={styles.sinais}>
          <TouchableOpacity onPress={()=>props.logicaCalculadora("+")} style={styles.touch}><Text style={styles.digitStyle}>+</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>props.logicaCalculadora("-")} style={styles.touch}><Text style={styles.digitStyle}>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>props.logicaCalculadora("*")} style={styles.touch}><Text style={styles.digitStyle}>x</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>props.logicaCalculadora("/")} style={styles.touch}><Text style={styles.digitStyle}>/</Text></TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  digitStyle: {
    fontSize: 64,
    textAlign: 'center',
    color: 'black',
  },
  touch: {
    margin: 24,
    textAlign: 'center',
    
  },
  sinais: {
    width: '25%',
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center'
  },
});
