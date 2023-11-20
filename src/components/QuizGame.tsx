import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Question {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: string;
}

export default function QuizGame({navigation} : any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // untuk nge fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gunakan path file JSON secara langsung
        const response = require("../dataDummy/dummyQuestion.json");
        setQuestions(response.questions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAnswer = (selectedOption: string) => {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
      setScore(score + 10);
    }

    // Pindah ke pertanyaan berikutnya
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Menampilkan hasil setelah semua pertanyaan dijawab
      alert("Score Anda: " + score);

      navigation.navigate('Start_Game');

      // Mengatur ulang indeks pertanyaan dan skor
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  // kondisi warna skor

  // Menampilkan loading jika questions belum di-fetch
  if (questions.length === 0) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/baclgound.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
            alignSelf: "center",
            color: "white",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2,
            textShadowColor: "black",
            textShadowOffset: { width: 2, height: 2 },
          }}
        >
          Scor Anda: {score}
        </Text>
        <View style={styles.questionContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              alignSelf: "center",
              color: "#000000",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 2,
              textShadowColor: "black",
              textShadowOffset: { width: 2, height: 2 },
            }}
          >
            {questions[currentQuestionIndex].question}
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {Object.entries(questions[currentQuestionIndex].options).map(
            ([key, value]) => (
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleAnswer(key)}
              >
                <Text style={styles.optionText}>{value}</Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Add your logic for handling user selection and displaying results here */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  optionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
