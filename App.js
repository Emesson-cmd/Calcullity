import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Operacoes from './src/components/Operacoes';

export default function App() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [sinal, setSinal] = useState("")
  const [stringCalculo, setStringCalculo] = useState("0")

  var numeros = []
  for (var i = 0; i <= 9; i++) {
    numeros.push(i)
  }

  numeros.push("C", ",")

  var resultado = 0;
  function logicaCalculadora(n) {

    if (sinal === '') {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()))
      setStringCalculo(parseInt(firstNumber.toString() + n.toString()))
    }

    if (n == "-" || n == "*" || n == "+" || n == "/") {
      if (secondNumber == 0) {
        setStringCalculo(firstNumber.toString() + n)
        setSinal(n)
      } else {
        console.log("Teste")
      }
    }

    if (sinal !== "") {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculo(firstNumber + sinal + parseInt(secondNumber.toString() + n.toString()))
    }

    if (n == "=") {

      if (sinal == "+") {
        resultado = firstNumber + secondNumber
      }
      else if (sinal == "-") {
        resultado = firstNumber - secondNumber
      }
      else if (sinal == "*") {
        resultado = firstNumber * secondNumber
      }
      else if (sinal == "/") {
        resultado = firstNumber / secondNumber
      }
      setStringCalculo(resultado)
      setFirstNumber(resultado)
      resetar()
    }

    if (n == "C") {
      setFirstNumber(0)
      setStringCalculo("0")
      resetar()
    }

    console.log("Sem Limite: " + stringCalculo.length)

  }

  function resetar() {
    setSecondNumber(0)
    setSinal("")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.stringContainer}>
        <Text style={styles.stringCalculo}>{stringCalculo}</Text>
      </View>

      <View style={styles.generalContainer}>
        <View style={styles.tecladoContainer}>

          <View style={styles.row}>
            {
              numeros.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.touch}
                    onPress={() => logicaCalculadora(item)}
                  >
                    <Text style={styles.digitStyle}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        <Operacoes logicaCalculadora={logicaCalculadora} />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => logicaCalculadora("=")} style={[styles.touch, styles.touchBottom]}><Text style={styles.digitStyle}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stringContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: "100%",
    height: "18%",
    overflow: 'scroll',

  },
  stringCalculo: {
    margin: 20,
    marginTop: 32,
    fontSize: 64,
    textAlign: 'right'
  },
  generalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: "black",
    width: "100%",
    height: '70%'
  },
  tecladoContainer: {
    width: "75%",
    backgroundColor: 'gray',
  },
  row: {
    flexDirection: "row",
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  digitStyle: {
    fontSize: 64,
    textAlign: 'center',
    color: 'black',
  },
  touch: {
    margin: 24,
    textAlign: 'center',
  },
  bottom: {
    backgroundColor: "green",
    height: '12%'
  },
  touchBottom: {
    margin: 12
  }
});
