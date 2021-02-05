import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

export default function ColorBoxes({ navigation }) {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const answerOptions = [
    {
      text: 'red',
      correctAnswer: 'yellow',
      answertext: ['red', 'green', 'yellow', 'black'],
    },
    {
      text: 'blue',
      correctAnswer: 'pink',
      answertext: ['pink', 'black', 'orange', 'grey'],
    },
    {
      text: 'green',
      correctAnswer: 'green',
      answertext: ['green', 'white', 'orange', 'purple'],
    },
    {
      text: 'brown',
      correctAnswer: 'purple',
      answertext: ['lightgreen', 'purple', 'blue', 'pale green'],
    },
  ];

  const [colorBox, setColorBox] = useState([
    'lightblue',
    'lightblue',
    'lightblue',
    'lightblue',
  ]);

  const [questionIndex, setQuestionIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
        Points: {counter}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 90,
          color: answerOptions[questionIndex].correctAnswer,
          margin: 50,
        }}
      >
        {answerOptions[questionIndex].text}
      </Text>
      <BoxColors
        answertext={answerOptions[questionIndex].answertext}
        correctAnswer={answerOptions[questionIndex].correctAnswer}
        colorBox={colorBox}
        setColorBox={setColorBox}
        setDisabled={setDisabled}
        disabled={disabled}
        setCounter={setCounter}
      />
      <Button
        title="Next question"
        onPress={() => {
          if (questionIndex < answerOptions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setColorBox(['lightblue', 'lightblue', 'lightblue', 'lightblue']);
            setDisabled(false);
          } else {
            navigation.navigate('Results');
            counter;
          }
        }}
      />
    </View>
  );
}

const FlexBoxesColor = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: props.leftcolor,
          margin: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        disabled={props.disabled}
        onPress={() => {
          CheckAnswer(
            props.lefttext,
            props.correctAnswer,
            props.setColorBox,
            props.colorBox,
            props.leftindex,
            props.setCounter
          );
          props.setDisabled(true);
        }}
      >
        <Text>{props.lefttext}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: props.rightcolor,
          margin: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        disabled={props.disabled}
        onPress={() => {
          CheckAnswer(
            props.righttext,
            props.correctAnswer,
            props.setColorBox,
            props.colorBox,
            props.rightindex,
            props.setCounter
          );
          props.setDisabled(true);
        }}
      >
        <Text>{props.righttext}</Text>
      </TouchableOpacity>
    </View>
  );
};

const BoxColors = (props) => {
  return (
    <View>
      <FlexBoxesColor
        leftcolor={props.colorBox[0]}
        rightcolor={props.colorBox[1]}
        righttext={props.answertext[1]}
        lefttext={props.answertext[0]}
        setColorBox={props.setColorBox}
        colorBox={props.colorBox}
        leftindex={0}
        rightindex={1}
        correctAnswer={props.correctAnswer}
        disabled={props.disabled}
        setDisabled={props.setDisabled}
        setCounter={props.setCounter}
      />
      <FlexBoxesColor
        leftcolor={props.colorBox[2]}
        rightcolor={props.colorBox[3]}
        righttext={props.answertext[3]}
        lefttext={props.answertext[2]}
        setColorBox={props.setColorBox}
        colorBox={props.colorBox}
        leftindex={2}
        rightindex={3}
        correctAnswer={props.correctAnswer}
        disabled={props.disabled}
        setDisabled={props.setDisabled}
        setCounter={props.setCounter}
      />
    </View>
  );
};

const CheckAnswer = (
  text,
  correctAnswer,
  setColorBox,
  colorBox,
  buttonIndex,
  setCounter
) => {
  let answerColorBox = [...colorBox];
  if (text == correctAnswer) {
    answerColorBox[buttonIndex] = 'green';
    setCounter((prev) => prev + 1);
  } else {
    answerColorBox[buttonIndex] = 'red';
  }
  setColorBox(answerColorBox);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 40,
    fontSize: 40,
  },
});
