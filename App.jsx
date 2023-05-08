
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {DataTable} from 'react-native-paper'
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  tableHead: {
    backgroundColor: '#eee',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
  },
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
  }
});
export default function App() {
  const [monthlyExpenses, setMonthlyExpenses] = useState({
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  });
  const [predictedExpenses, setPredictedExpenses] = useState({
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  });
 
  const [nextYearJanExpense, setNextYearJanExpense] = useState("");
  const [nextYearFebExpense, setNextYearFebExpense] = useState("");
  const [nextYearMarExpense, setNextYearMarExpense] = useState("");
  const [nextYearAprExpense, setNextYearAprExpense] = useState("");
  const [nextYearMayExpense, setNextYearMayExpense] = useState("");
  const [nextYearJuneExpense, setNextYearJuneExpense] = useState("");
  const [nextYearJulyExpense, setNextYearJulyExpense] = useState("");
  const [nextYearAugExpense, setNextYearAugExpense] = useState("");
  const [nextYearSepExpense, setNextYearSepExpense] = useState("");
  const [nextYearOctExpense, setNextYearOctExpense] = useState("");
  const [nextYearNovExpense, setNextYearNovExpense] = useState("");
  const [nextYearDecExpense, setNextYearDecExpense] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMonthlyExpenses((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNextYearJanExpenseChange = (e) => {
    const { value } = e.target;
    setNextYearJanExpense(value);
  };
 
  const handlePredictClick = () => {
    const leastExpense = Math.min(...Object.values(monthlyExpenses));
    const predictedExpenses = {};
    for (const month in monthlyExpenses) {
      predictedExpenses[month] = (monthlyExpenses[month] / leastExpense) ;
    }
    setPredictedExpenses(predictedExpenses);
  };
  const handlePredictClic = () => {
    const NextYear1stRatio = nextYearJanExpense / monthlyExpenses["Jan"]
    setNextYearFebExpense( NextYear1stRatio * monthlyExpenses["Feb"])
    setNextYearMarExpense( NextYear1stRatio * monthlyExpenses["Mar"])
    setNextYearAprExpense( NextYear1stRatio * monthlyExpenses["Apr"])
    setNextYearMayExpense( NextYear1stRatio * monthlyExpenses["May"])
    setNextYearJuneExpense( NextYear1stRatio * monthlyExpenses["Jun"])
    setNextYearJulyExpense( NextYear1stRatio * monthlyExpenses["Jul"])
    setNextYearAugExpense( NextYear1stRatio * monthlyExpenses["Aug"])
    setNextYearSepExpense( NextYear1stRatio * monthlyExpenses["Sep"])
    setNextYearOctExpense( NextYear1stRatio * monthlyExpenses["Oct"])
    setNextYearNovExpense( NextYear1stRatio * monthlyExpenses["Nov"])
    setNextYearDecExpense( NextYear1stRatio * monthlyExpenses["Dec"])
  };

  return (
     <SafeAreaView>
      <View>
        <Text>Monthly Expenses</Text>
        <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Month</DataTable.Title>
        <DataTable.Title>Expense</DataTable.Title>
      </DataTable.Header>
      {Object.entries(monthlyExpenses).map(([month, expense]) => (
      <DataTable.Row key={month}>
        <DataTable.Cell>{month}</DataTable.Cell>
        <DataTable.Cell>
          <TextInput
           style = {styles.textInput}
           keyboardType='decimal-pad'
           name={month} value={expense} 
           onChangeText={handleChange}
           placeholder="Enter Your Expense"
           />
        </DataTable.Cell>
      </DataTable.Row>
      ))}
    </DataTable>
      </View>
     </SafeAreaView>
  )
}

