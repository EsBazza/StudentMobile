import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Button, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const ConfirmationScreen = ({ route, navigation }) => {
  const { student_id, full_name, course, year_level, date_registered } = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Submission Confirmed!</Text>
      <Text style={styles.subtitle}>Review your details below.</Text>


      <View style={styles.dataContainer}>
        <Text style={styles.dataLabel}>Student ID:</Text>
        <Text style={styles.dataValue}>{student_id}</Text>
      </View>


      <View style={styles.dataContainer}>
        <Text style={styles.dataLabel}>Full Name:</Text>
        <Text style={styles.dataValue}>{full_name}</Text>
      </View>


      <View style={styles.dataContainer}>
        <Text style={styles.dataLabel}>Course:</Text>
        <Text style={styles.dataValue}>{course}</Text>
      </View>


      <View style={styles.dataContainer}>
        <Text style={styles.dataLabel}>Year Level:</Text>
        <Text style={styles.dataValue}>{year_level}</Text>
      </View>


      <View style={styles.dataContainer}>
        <Text style={styles.dataLabel}>Date Registered:</Text>
        <Text style={styles.dataValue}>{date_registered}</Text>
      </View>


      <View style={styles.buttonWrapper}>
        <Button
          title="Go Back to Form"
          onPress={() => navigation.goBack()}
          color="#007AFF" // iOS/Standard Blue
        />
      </View>
     
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50, // Comma added here
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  dataLabel: {
    fontWeight: '600',
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  dataValue: {
    fontSize: 16,
    color: '#000',
    flex: 2,
    textAlign: 'right',
  },
  buttonWrapper: {
    marginTop: 30,
    width: '80%',
  }
});


export default ConfirmationScreen;
