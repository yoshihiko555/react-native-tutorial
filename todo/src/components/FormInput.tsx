import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'

type Props = {
  label: string
  value: string
  placeholder: string
  onChangeText: (v: string) => void
};

const FormInput: React.FC<Props> = ({ label, value, placeholder, onChangeText }) => {
  return (
    <View style={styles.formGroup}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        style={styles.formControl}
        value={value}
        placeholder={placeholder}
        onChangeText={v => onChangeText(v)}
      />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  }
});
