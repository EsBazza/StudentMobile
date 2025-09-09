import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';




const FormScreen = ({ navigation }) => {
  const [student_id, setStudentId] = useState('');
  const [full_name, setfullName] = useState('');
  const [course, setcourse] = useState('');
  const [year_level, setyear_level] = useState('');
  const [date_registered, setdate_registered] = useState('');
 
 
  const handleSubmit = () => {
    if (!student_id || !full_name || !course || !year_level || !date_registered) {
      Alert.alert('Incomplete Form', 'Please fill in all the fields.');
      return;
    }
    navigation.navigate('Confirmation', { student_id, full_name, course, year_level, date_registered});
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Student Submission Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={student_id}
        onChangeText={setStudentId}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={full_name}
        onChangeText={setfullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Course"
        value={course}
        onChangeText={setcourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Year Level"
        value={year_level}
        onChangeText={setyear_level}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="date_registered (YYYY-MM-DD)"
        value={date_registered}
        onChangeText={setdate_registered}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});


export default FormScreen;
