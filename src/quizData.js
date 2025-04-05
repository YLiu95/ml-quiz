// src/quizData.js

export const quizData = [
    {
      id: "svm",
      topic: "Support Vector Machine (SVM)",
      questions: [
        {
          id: "svm-q1",
          difficulty: "E", // E for Easy
          text: "What is the primary goal of a Support Vector Machine (SVM) classifier?",
          options: [
            "To find the hyperplane that minimizes the distance to the nearest data points.",
            "To cluster data points based on density.",
            "To find the hyperplane that maximizes the margin between different classes.",
            "To reduce the dimensionality of the data.",
            "I don't know",
          ],
          correctOptionIndex: 2, // Index of the correct answer in the options array (starts from 0)
        },
        {
          id: "svm-q2",
          difficulty: "E",
          text: "What are the data points closest to the separating hyperplane in SVM called?",
          options: [
            "Centroids",
            "Outliers",
            "Support Vectors",
            "Kernels",
            "I don't know",
          ],
          correctOptionIndex: 2,
        },
      ],
    },
    {
      id: "logr",
      topic: "Logistic Regression (LogR)",
      questions: [
        {
          id: "logr-q1",
          difficulty: "E",
          text: "What type of problem is Logistic Regression primarily used for?",
          options: [
            "Predicting a continuous value.",
            "Clustering data points into groups.",
            "Binary or multi-class classification problems.",
            "Dimensionality reduction.",
            "I don't know",
          ],
          correctOptionIndex: 2,
        },
        {
          id: "logr-q2",
          difficulty: "E",
          text: "What function does Logistic Regression use to map the linear combination of inputs to a probability?",
          options: [
            "Rectified Linear Unit (ReLU)",
            "Hyperbolic Tangent (tanh)",
            "Sigmoid (Logistic) function",
            "Gaussian function",
            "I don't know",
          ],
          correctOptionIndex: 2,
        },
      ],
    },
    // Add more topics here in the future following the same structure
  ];
  
  export const DONT_KNOW_INDEX = 4; // Assuming "I don't know" is always the last option (index 4)