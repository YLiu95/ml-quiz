// src/quizData.js

export const quizData = [
  // === Linear Regression (LR) ===
  {
    id: "linear-regression",
    topic: "Linear Regression (LR)",
    questions: [
      {
        id: "lr-q1",
        difficulty: "E",
        text: "What is the primary goal of Ordinary Least Squares (OLS) in Linear Regression?",
        options: [
          "To maximize the variance explained by the model.",
          "To minimize the sum of squared differences between predicted and actual values.",
          "To ensure all residuals are normally distributed.",
          "To minimize the number of features used in the model.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Ordinary Least Squares (OLS) aims to find the line (or hyperplane) that best fits the data by minimizing the sum of the squared vertical distances between the actual observed values (y) and the values predicted by the linear model (ŷ). This sum is often called the Residual Sum of Squares (RSS).",
      },
      {
        id: "lr-q2",
        difficulty: "E",
        text: "In the equation y = β₀ + β₁x + ε, what does β₁ represent?",
        options: [
          "The predicted value of y.",
          "The change in y for a one-unit change in x.",
          "The intercept of the regression line.",
          "The error term.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "β₁ is the slope coefficient. It represents the average change in the dependent variable (y) associated with a one-unit increase in the independent variable (x), holding other variables constant if present.",
      },
      {
        id: "lr-q3",
        difficulty: "E",
        text: "What does R-squared (Coefficient of Determination) measure?",
        options: [
          "The significance of the intercept term.",
          "The proportion of the variance in the dependent variable that is predictable from the independent variable(s).",
          "The correlation between two independent variables.",
          "The standard deviation of the residuals.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "R-squared ranges from 0 to 1 and indicates the percentage of the total variation in the dependent variable (y) that can be explained by the linear relationship with the independent variable(s) (x). A higher R-squared indicates a better fit of the model to the data.",
      },
      {
        id: "lr-q4",
        difficulty: "M",
        text: "Which assumption of OLS linear regression is primarily concerned with the independence of errors?",
        options: [
          "Linearity",
          "Homoscedasticity",
          "Normality of errors",
          "Independence of observations (or errors)",
          "I don't know",
        ],
        correctOptionIndices: [3],
        explanation: "The independence assumption states that the errors (residuals) associated with one observation are not correlated with the errors of any other observation. This is often related to the study design (e.g., no time-series correlation, independent subjects).",
      },
      {
        id: "lr-q5",
        difficulty: "M",
        text: "What is a common visual diagnostic tool for checking Homoscedasticity?",
        options: [
          "A Q-Q plot of residuals.",
          "A histogram of the dependent variable.",
          "A plot of residuals versus fitted values.",
          "A correlation matrix of predictors.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Homoscedasticity means the variance of the errors is constant across all levels of the independent variable(s). A plot of residuals (errors) versus fitted values (predicted y) should show a random scatter around zero with no discernible pattern (like a funnel shape) if homoscedasticity holds. A Q-Q plot checks normality, a histogram checks variable distribution, and a correlation matrix checks multicollinearity.",
      },
      {
        id: "lr-q6",
        difficulty: "M",
        text: "What is multicollinearity?",
        options: [
          "When the dependent variable is highly correlated with an independent variable.",
          "When the error terms are correlated with each other.",
          "When two or more independent variables are highly correlated with each other.",
          "When the relationship between independent and dependent variables is non-linear.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Multicollinearity refers specifically to high linear correlation between two or more predictor (independent) variables in a regression model. It does not involve the dependent variable directly or the error terms' correlation (autocorrelation).",
      },
      {
        id: "lr-q7",
        difficulty: "M",
        text: "How does high multicollinearity affect OLS estimates?",
        options: [
          "It biases the coefficient estimates significantly upwards.",
          "It makes the coefficient estimates unstable and inflates their standard errors.",
          "It systematically decreases the R-squared value.",
          "It violates the normality of errors assumption.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Multicollinearity doesn't typically bias the coefficient estimates themselves (they are still unbiased on average), but it increases their variance significantly. This leads to large standard errors, making the estimates unstable (sensitive to small changes in data) and difficult to interpret reliably (low statistical significance even if a relationship exists). R-squared might remain high.",
      },
      {
        id: "lr-q8",
        difficulty: "H",
        text: "Which of the following techniques can help mitigate issues arising from multicollinearity?",
        options: [
          "Increasing the sample size.", // 0
          "Removing one of the highly correlated predictors.", // 1
          "Using Principal Component Regression (PCR).", // 2
          "Applying Ridge Regression (L2 Regularization).", // 3
          "Transforming the dependent variable using a logarithm.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [1, 2, 3],
        explanation: "Multicollinearity occurs when predictor variables are highly correlated. Removing one of the correlated predictors (B) directly addresses the issue. Principal Component Regression (PCR) (C) transforms predictors into uncorrelated components before regression. Ridge Regression (D) adds a penalty term (L2) that shrinks coefficients and stabilizes estimates even in the presence of multicollinearity, reducing variance inflation. Increasing sample size might help stability but doesn't remove the core issue. Transforming the dependent variable doesn't address predictor correlation.",
      },
      {
        id: "lr-q9",
        difficulty: "H",
        text: "If the assumption of homoscedasticity is violated (i.e., heteroscedasticity is present), what are the consequences for OLS estimation?",
        options: [
          "The coefficient estimates (β) become biased.", // 0
          "The standard errors of the coefficient estimates become unreliable.", // 1
          "Hypothesis tests (like t-tests for coefficient significance) may be invalid.", // 2
          "The OLS estimators are no longer the Best Linear Unbiased Estimators (BLUE).", // 3
          "The R-squared value becomes meaningless.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [1, 2, 3],
        explanation: "Under heteroscedasticity, OLS coefficient estimates (β) remain unbiased, but they are no longer efficient (not BLUE - Best Linear Unbiased Estimator). The standard errors calculated by OLS are incorrect (typically underestimated), leading to unreliable t-statistics and p-values for hypothesis tests and confidence intervals. R-squared interpretation is less affected directly.",
      },
      {
        id: "lr-q10",
        difficulty: "H",
        text: "Comparing Ridge (L2) and Lasso (L1) regression for handling multicollinearity and feature selection, which statements are typically true?",
        options: [
          "Ridge tends to shrink coefficients towards zero but rarely sets them exactly to zero.", // 0
          "Lasso can perform feature selection by shrinking some coefficients exactly to zero.", // 1
          "Ridge is generally preferred when many predictors have small-to-moderate effects.", // 2
          "Lasso is generally preferred if you suspect only a few predictors are truly important.", // 3
          "Neither Ridge nor Lasso can handle multicollinearity effectively.", // 4
          "Ridge adds the sum of squared coefficients to the loss, while Lasso adds the sum of absolute coefficients.", // 5
          "I don't know", // 6
        ],
        correctOptionIndices: [0, 1, 2, 3, 5],
        explanation: "Ridge (L2 penalty: sum of squared coeffs) shrinks correlated predictors towards each other, keeping most non-zero, good for retaining many features with moderate effects. Lasso (L1 penalty: sum of absolute coeffs) performs feature selection by forcing some coefficients to exactly zero, good when few predictors are dominant. Both handle multicollinearity by stabilizing coefficients. Option E is false.",
      },
      {
        id: "lr-q11",
        difficulty: "M",
        text: "What does a p-value associated with a coefficient (e.g., β₁) in a linear regression output represent?",
        options: [
          "The probability that the coefficient is exactly zero.",
          "The probability of observing the data (or more extreme data) if the true coefficient were zero (null hypothesis).",
          "The magnitude of the coefficient's effect.",
          "The confidence level of the prediction interval.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The p-value tests the null hypothesis that the true coefficient is zero (H₀: β₁ = 0). It represents the probability of obtaining a test statistic (like the t-statistic) at least as extreme as the one observed, assuming the null hypothesis is true. A small p-value (e.g., < 0.05) suggests rejecting the null hypothesis.",
      },
      {
        id: "lr-q12",
        difficulty: "M",
        text: "If you add more relevant predictors to a linear regression model, what typically happens to the Adjusted R-squared compared to the regular R-squared?",
        options: [
          "Adjusted R-squared will always increase more than R-squared.",
          "Adjusted R-squared might increase, decrease, or stay the same, while R-squared will generally increase or stay the same.",
          "Both will always decrease.",
          "R-squared will increase, but Adjusted R-squared will always decrease.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Regular R-squared never decreases when adding predictors, even irrelevant ones. Adjusted R-squared penalizes the addition of predictors that do not improve the model sufficiently to offset their inclusion. Therefore, adding a relevant predictor usually increases both, but adding an irrelevant one might increase R-squared slightly while decreasing Adjusted R-squared.",
      },
    ],
  },

  // === Logistic Regression (LogR) ===
  {
    id: "logistic-regression",
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
        correctOptionIndices: [2],
        explanation: "Logistic Regression is a statistical model used to predict the probability of a categorical dependent variable (usually binary, like Yes/No, 0/1). It models the probability that an instance belongs to a particular class.",
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
        correctOptionIndices: [2],
        explanation: "The Sigmoid function, σ(z) = 1 / (1 + e⁻ᶻ), takes any real-valued number (the linear combination of inputs, z = β₀ + β₁x₁ + ...) and squashes it into a range between 0 and 1, which can be interpreted as a probability.",
      },
      {
        id: "logr-q3",
        difficulty: "E",
        text: "The output of the sigmoid function in Logistic Regression lies in which range?",
        options: [
          "[-1, 1]",
          "[0, ∞)",
          "(-∞, ∞)",
          "(0, 1)",
          "I don't know",
        ],
        correctOptionIndices: [3],
        explanation: "The sigmoid function's formula, σ(z) = 1 / (1 + e⁻ᶻ), ensures that the output value is always strictly greater than 0 and strictly less than 1, representing a probability.",
      },
      {
        id: "logr-q4",
        difficulty: "M",
        text: "How are the coefficients (β) in Logistic Regression typically interpreted?",
        options: [
          "As the direct change in probability for a one-unit change in the predictor.",
          "As the change in the log-odds of the outcome for a one-unit change in the predictor.",
          "As the correlation between the predictor and the outcome.",
          "As the variance explained by the predictor.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Logistic Regression models the logarithm of the odds ratio (log-odds or logit) as a linear combination of the predictors: log(P(Y=1)/P(Y=0)) = β₀ + β₁x₁ + ... Therefore, β₁ represents the change in the log-odds of the outcome for a one-unit increase in x₁, holding other predictors constant. Exponentiating the coefficient (e^β₁) gives the odds ratio.",
      },
      {
        id: "logr-q5",
        difficulty: "M",
        text: "What estimation method is commonly used to find the optimal coefficients in Logistic Regression?",
        options: [
          "Ordinary Least Squares (OLS)",
          "Principal Component Analysis (PCA)",
          "Maximum Likelihood Estimation (MLE)",
          "Gradient Descent (often used within MLE, but MLE is the framework)",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Unlike Linear Regression which uses OLS, Logistic Regression coefficients are typically estimated using Maximum Likelihood Estimation (MLE). MLE finds the coefficient values that maximize the likelihood (probability) of observing the actual outcomes in the training data given the model. Gradient Descent is often the optimization algorithm used to implement MLE.",
      },
      {
        id: "logr-q6",
        difficulty: "M",
        text: "Why is using Linear Regression generally inappropriate for a binary classification task?",
        options: [
          "Linear Regression can predict values outside the [0, 1] range, which are not valid probabilities.", // 0
          "The assumption of homoscedasticity (constant error variance) is violated for binary outcomes.", // 1
          "Linear Regression assumes a linear relationship between predictors and the outcome, while Logistic Regression models the log-odds linearly.", // 2
          "Linear Regression requires normally distributed errors, which is not the case for a binary variable (Bernoulli distribution).", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [0, 1, 2, 3],
        explanation: "Linear regression is unsuitable for binary outcomes because: 1) Its predictions aren't constrained to [0, 1], making probability interpretation invalid. 2) The error variance for a binary outcome depends on the predicted probability, violating homoscedasticity. 3) The relationship between predictors and a binary outcome is often non-linear, better captured by the logit link. 4) Errors for a binary outcome follow a Bernoulli distribution, not a normal distribution.",
      },
      {
        id: "logr-q7",
        difficulty: "M",
        text: "What does the 'odds ratio' associated with a predictor in Logistic Regression represent?",
        options: [
          "The probability of the event occurring.",
          "The ratio P(Y=1) / P(Y=0).",
          "The factor by which the odds of the outcome change for a one-unit increase in the predictor (e^β).",
          "The p-value of the coefficient.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The odds ratio for a predictor x₁ is calculated as exp(β₁). It represents the multiplicative change in the odds [P(Y=1)/P(Y=0)] for a one-unit increase in x₁, holding other predictors constant. An odds ratio > 1 means increased odds, < 1 means decreased odds, = 1 means no change.",
      },
      {
        id: "logr-q8",
        difficulty: "H",
        text: "In the context of Logistic Regression, what is the 'Logit' function?",
        options: [
          "The sigmoid function: 1 / (1 + e⁻ᶻ)", // 0
          "The inverse of the sigmoid function: log(p / (1-p))", // 1
          "The loss function used for training (Log Loss / Binary Cross-Entropy).", // 2
          "The regularization term applied to the coefficients.", // 3
          "The exponential of the coefficient (Odds Ratio).", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [1],
        explanation: "The Logit function (also called log-odds) is the inverse of the Sigmoid (logistic) function. If p is the probability output by the sigmoid, the logit is log(p / (1-p)). Logistic regression models this logit as a linear function of the predictors.",
      },
      {
        id: "logr-q9",
        difficulty: "H",
        text: "Which assumptions are typically associated with Logistic Regression?",
        options: [
          "Independence of observations.", // 0
          "Linearity of independent variables and the log-odds of the outcome.", // 1
          "Absence of significant multicollinearity among predictors.", // 2
          "Normality of residuals.", // 3
          "Homoscedasticity of residuals.", // 4
          "Large sample size (for MLE properties).", // 5
          "I don't know", // 6
        ],
        correctOptionIndices: [0, 1, 2, 5],
        explanation: "Key assumptions for Logistic Regression include: 1) Independence of observations. 2) A linear relationship between the continuous predictors and the log-odds (logit) of the outcome. 3) No strong multicollinearity among predictors. 4) Large sample size is needed for the properties of Maximum Likelihood Estimation to hold well. Unlike OLS, it does not assume normality or homoscedasticity of residuals in the same way.",
      },
      {
        id: "logr-q10",
        difficulty: "H",
        text: "How does L1 or L2 regularization affect a Logistic Regression model?",
        options: [
          "It helps prevent overfitting by penalizing large coefficient values.", // 0
          "L1 regularization (Lasso) can perform feature selection by shrinking some coefficients to exactly zero.", // 1
          "L2 regularization (Ridge) tends to shrink all coefficients towards zero but keeps most non-zero.", // 2
          "Regularization primarily addresses issues of non-linearity.", // 3
          "Regularization typically increases the bias and decreases the variance of the model.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 2, 4],
        explanation: "Regularization (both L1/Lasso and L2/Ridge) adds a penalty term to the logistic loss function based on the magnitude of the coefficients. This discourages overly complex models with large coefficients, thus reducing variance and preventing overfitting, often at the cost of a small increase in bias. L1 has the property of shrinking some coefficients to exactly zero (feature selection), while L2 shrinks all coefficients towards zero. Regularization primarily addresses overfitting/high variance, not non-linearity.",
      },
      {
        id: "logr-q11",
        difficulty: "M",
        text: "What is a common metric used to evaluate the performance of a Logistic Regression classifier, especially when classes are imbalanced?",
        options: [
          "Mean Squared Error (MSE)",
          "R-squared",
          "Area Under the ROC Curve (AUC-ROC) or Precision-Recall Curve (AUC-PR)",
          "Variance Inflation Factor (VIF)",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "For classification, especially with imbalanced classes where accuracy can be misleading, AUC-ROC (Area Under the Receiver Operating Characteristic Curve) and AUC-PR (Area Under the Precision-Recall Curve) are common evaluation metrics. AUC-ROC summarizes performance across all classification thresholds, while AUC-PR is often more informative when the positive class is rare. MSE and R-squared are regression metrics. VIF measures multicollinearity.",
      },
      {
        id: "logr-q12",
        difficulty: "M",
        text: "If the probability threshold for classifying an instance as positive (Y=1) in Logistic Regression is increased from 0.5 to 0.7, what is the likely effect on precision and recall?",
        options: [
          "Precision increases, Recall decreases.",
          "Precision decreases, Recall increases.",
          "Both Precision and Recall increase.",
          "Both Precision and Recall decrease.",
          "I don't know",
        ],
        correctOptionIndices: [0],
        explanation: "Increasing the classification threshold means the model requires stronger evidence (higher predicted probability) to classify an instance as positive. This leads to fewer positive predictions. Consequently, fewer true positives are identified (lower recall: TP/(TP+FN)), but the positive predictions made are more likely to be correct (higher precision: TP/(TP+FP)).",
      },
    ],
  },

  // === Support Vector Machine (SVM) ===
  {
    id: "svm", // Keep original ID if needed
    topic: "Support Vector Machine (SVM)",
    questions: [
      {
        id: "svm-q1", // Keep original ID if needed
        difficulty: "E",
        text: "What is the primary goal of a Support Vector Machine (SVM) classifier?",
        options: [
          "To find the hyperplane that minimizes the distance to the nearest data points.",
          "To cluster data points based on density.",
          "To find the hyperplane that maximizes the margin between different classes.",
          "To reduce the dimensionality of the data.",
          "I don't know", // Added missing option E from prompt
        ],
        correctOptionIndices: [2],
        explanation: "SVM aims to find the optimal separating hyperplane by maximizing the margin, which is the distance between the hyperplane and the closest data points (support vectors) of any class. This maximum margin hyperplane provides the best separation.",
      },
      {
        id: "svm-q2", // Keep original ID if needed
        difficulty: "E",
        text: "What are the data points closest to the separating hyperplane in SVM called?",
        options: [
          "Centroids",
          "Outliers",
          "Support Vectors",
          "Kernels",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "These crucial data points lying on the margin boundaries are called Support Vectors because they 'support' the hyperplane and define the margin. If these points were moved, the optimal hyperplane would likely change.",
      },
      {
        id: "svm-q3",
        difficulty: "M",
        text: "What is the 'margin' in the context of SVM?",
        options: [
          "The distance between the two most distant points in the dataset.",
          "The number of misclassified points.",
          "The perpendicular distance between the separating hyperplane and the closest support vectors.",
          "The complexity parameter of the model.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The margin is the 'street' between the classes, defined by the separating hyperplane in the middle and bounded by parallel hyperplanes passing through the closest points of each class (the support vectors). SVM seeks to maximize the width of this margin (twice the perpendicular distance from the hyperplane to the support vectors).",
      },
      {
        id: "svm-q4",
        difficulty: "M",
        text: "What does the 'kernel trick' allow SVMs to do?",
        options: [
          "Speed up the training process significantly for linear SVMs.",
          "Handle missing values automatically.",
          "Implicitly map data to a higher-dimensional space to find a non-linear decision boundary.",
          "Perform feature selection automatically.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The kernel trick allows SVMs to operate in a high-dimensional feature space without explicitly computing the coordinates of the data in that space. By using kernel functions (like Polynomial or RBF), SVM can find complex, non-linear decision boundaries in the original input space by implicitly finding a linear separating hyperplane in the higher-dimensional space.",
      },
      {
        id: "svm-q5",
        difficulty: "M",
        text: "Which of the following is a common kernel function used in SVMs?",
        options: [
          "Sigmoid", // 0
          "Linear", // 1
          "Polynomial", // 2
          "Radial Basis Function (RBF) / Gaussian", // 3
          "All of the above", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [4],
        explanation: "Linear, Polynomial, RBF (Gaussian), and Sigmoid are all standard kernel functions available for use with SVMs, allowing different types of non-linear decision boundaries to be learned.",
      },
      {
        id: "svm-q6",
        difficulty: "M",
        text: "What is the role of the hyperparameter 'C' (Cost parameter) in SVM?",
        options: [
          "It controls the width of the RBF kernel.",
          "It determines the number of support vectors used.",
          "It controls the trade-off between maximizing the margin and minimizing classification errors on the training data.",
          "It specifies the degree of the polynomial kernel.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The 'C' parameter in SVM is a regularization parameter. It balances the desire for a large margin (simpler model, potentially more margin violations) against the penalty for misclassifying training points. A small C encourages a larger margin even if it means misclassifying more points (higher bias, lower variance). A large C penalizes misclassifications heavily, leading to a smaller margin and potentially overfitting (lower bias, higher variance).",
      },
      {
        id: "svm-q7",
        difficulty: "M",
        text: "A high value of 'C' in SVM generally leads to:",
        options: [
          "A wider margin and potentially more training errors (higher bias).",
          "A narrower margin and potentially fewer training errors (lower bias, higher variance).",
          "A simpler decision boundary, less prone to overfitting.",
          "No significant change in the decision boundary.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "A high value of C means a high penalty for misclassified points. The optimizer will try harder to classify all training points correctly, even if it means choosing a hyperplane with a smaller margin and potentially fitting noise, leading to lower bias on the training set but higher variance (risk of overfitting).",
      },
      {
        id: "svm-q8",
        difficulty: "H",
        text: "For an RBF kernel SVM, what does the hyperparameter 'gamma' control?",
        options: [
          "The penalty for misclassification (similar to C).", // 0
          "The influence of a single training example; low gamma means 'far' influence, high gamma means 'close' influence.", // 1
          "The maximum number of iterations for the solver.", // 2
          "The degree of the polynomial expansion implicitly performed.", // 3
          "The number of dimensions in the feature space.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [1],
        explanation: "Gamma defines how far the influence of a single training example reaches. Low values mean 'far' influence (smoother decision boundary, higher bias, lower variance), while high values mean 'close' influence (more complex, wiggly decision boundary that closely fits the training data, lower bias, higher variance). It affects the 'width' or 'reach' of the Gaussian kernel.",
      },
      {
        id: "svm-q9",
        difficulty: "H",
        text: "Which statements accurately describe characteristics or considerations for using SVMs?",
        options: [
          "SVMs are generally effective in high-dimensional spaces.", // 0
          "SVMs can be memory efficient because they only use a subset of training points (support vectors) in the decision function.", // 1
          "SVMs are inherently probabilistic classifiers, directly outputting class probabilities.", // 2
          "Feature scaling (e.g., standardization) is often crucial for SVM performance, especially with kernels like RBF.", // 3
          "SVMs are relatively robust to outliers compared to Logistic Regression.", // 4
          "Choosing the right kernel and tuning hyperparameters (C, gamma) is critical and often requires cross-validation.", // 5
          "I don't know", // 6
        ],
        correctOptionIndices: [0, 1, 3, 5],
        explanation: "SVMs work well in high dimensions (A). Their decision boundary depends only on support vectors, making them memory efficient (B). Standard SVMs are not inherently probabilistic; probability estimates require calibration (e.g., Platt scaling) (C is false). Feature scaling is vital as SVMs rely on distances/margins (D). Sensitivity to outliers depends on C; a high C makes it sensitive (E is debatable/context-dependent). Kernel/hyperparameter tuning is crucial (F).",
      },
      {
        id: "svm-q10",
        difficulty: "H",
        text: "What is the difference between Hard Margin SVM and Soft Margin SVM?",
        options: [
          "Hard Margin SVM requires the data to be perfectly linearly separable.", // 0
          "Soft Margin SVM allows for some misclassifications or points within the margin, controlled by the 'C' parameter.", // 1
          "Hard Margin SVM always finds a wider margin than Soft Margin SVM.", // 2
          "Soft Margin SVM is generally more practical for real-world datasets which often contain noise or overlapping classes.", // 3
          "Hard Margin SVM uses kernels, while Soft Margin SVM does not.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 3],
        explanation: "Hard Margin SVM finds a separating hyperplane only if the data is perfectly linearly separable, allowing no points within the margin (A). Soft Margin SVM introduces slack variables and the C parameter to allow some points to be within the margin or even misclassified, making it robust to noise and applicable to non-separable data (B, D). The resulting margin might be narrower than a hypothetical hard margin if one existed. Both can use kernels (E is false).",
      },
      {
        id: "svm-q11",
        difficulty: "M",
        text: "SVM was originally designed for binary classification. How is it typically extended for multi-class classification?",
        options: [
          "By using a multi-output sigmoid function.", // 0
          "By employing strategies like One-vs-Rest (OvR) or One-vs-One (OvO).", // 1
          "By directly optimizing a multi-class margin objective function (less common than OvR/OvO).", // 2
          "SVM cannot be used for multi-class problems.", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [1, 2], // Updated to accept both common strategies
        explanation: "The most common methods to extend binary SVMs to multi-class problems are decomposition strategies: One-vs-Rest (OvR trains K binary classifiers) and One-vs-One (OvO trains K*(K-1)/2 binary classifiers). While less common in standard libraries, direct multi-class formulations (like Crammer-Singer) also exist.",
      },
      {
        id: "svm-q12",
        difficulty: "M",
        text: "Compared to Logistic Regression, when might SVM with a non-linear kernel be a better choice?",
        options: [
          "When the decision boundary is expected to be highly non-linear.", // 0
          "When the number of features is much larger than the number of samples.", // 1
          "When interpretability of individual feature effects is the primary goal.", // 2
          "When dealing with very small datasets where maximizing the margin is crucial.", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [0, 1, 3],
        explanation: "SVM with non-linear kernels (like RBF) excels when the decision boundary is complex (A). SVMs are also effective in high-dimensional spaces, especially when N << p (B). The maximum margin principle can be beneficial on small datasets (D). Logistic Regression is generally more interpretable (C is false for SVM).",
      },
    ],
  },

  // === K-Nearest Neighbors (KNN) ===
  {
    id: "knn",
    topic: "K-Nearest Neighbors (KNN)",
    questions: [
      {
        id: "knn-q1",
        difficulty: "E",
        text: "KNN is considered a _______ learning algorithm.",
        options: [
          "Supervised, parametric",
          "Unsupervised, parametric",
          "Supervised, non-parametric, instance-based (lazy)",
          "Unsupervised, non-parametric",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "KNN is supervised because it learns from labeled data. It's non-parametric because it doesn't make strong assumptions about the functional form of the relationship. It's instance-based or 'lazy' because it doesn't build an explicit model during training; all computation (finding neighbors) happens during prediction.",
      },
      {
        id: "knn-q2",
        difficulty: "E",
        text: "How does KNN make a prediction for a new data point in a classification task?",
        options: [
          "By calculating the mean of the 'k' nearest neighbors' features.",
          "By assigning the majority class label among its 'k' nearest neighbors.",
          "By fitting a linear model to the 'k' nearest neighbors.",
          "By finding the single closest neighbor and copying its label.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "For classification, KNN identifies the 'k' training data points closest to the new point (based on a distance metric) and predicts the class that is most frequent among those 'k' neighbors (majority vote).",
      },
      {
        id: "knn-q3",
        difficulty: "E",
        text: "What does the 'k' in KNN represent?",
        options: [
          "The number of features used.",
          "The number of clusters to find.",
          "The number of nearest neighbors to consider for prediction.",
          "The kernel function parameter.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "'k' is a hyperparameter chosen by the user that specifies how many of the closest neighbors in the training data should be considered when making a prediction for a new, unseen data point.",
      },
      {
        id: "knn-q4",
        difficulty: "M",
        text: "What is a major disadvantage of the KNN algorithm, especially with large datasets?",
        options: [
          "It requires strong assumptions about data distribution.",
          "The training phase is computationally very expensive.",
          "The prediction phase can be computationally expensive as it requires calculating distances to all training points.",
          "It cannot handle non-linear relationships.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "KNN has virtually no training phase (it just stores the data). However, making a prediction requires calculating the distance from the new point to every single point in the training dataset to find the nearest neighbors. This becomes computationally infeasible for very large datasets.",
      },
      {
        id: "knn-q5",
        difficulty: "M",
        text: "Why is feature scaling (e.g., standardization or normalization) generally important for KNN?",
        options: [
          "To satisfy the normality assumption of the algorithm.",
          "To prevent features with larger ranges/values from dominating the distance calculation.",
          "To speed up the training process.",
          "To handle categorical features correctly.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "KNN relies on distance metrics (like Euclidean distance). If features have vastly different scales (e.g., one feature ranges 0-1, another 0-1000), the feature with the larger range will disproportionately influence the distance calculation, effectively ignoring the contribution of features with smaller ranges. Scaling brings all features to a comparable scale.",
      },
      {
        id: "knn-q6",
        difficulty: "M",
        text: "How does the choice of 'k' typically affect the bias-variance trade-off in KNN?",
        options: [
          "Small 'k' leads to high bias, low variance.",
          "Small 'k' leads to low bias, high variance.",
          "Large 'k' leads to low bias, high variance.",
          "'k' does not significantly affect bias or variance.",
          "I don't know",
        ],
        correctOptionIndices: [1], // Corrected: Small k -> low bias, high variance
        explanation: "A small 'k' (e.g., k=1) makes the model very sensitive to local variations and noise (low bias, high variance, prone to overfitting). A large 'k' smooths out the decision boundary by considering more neighbors, making it less sensitive to noise but potentially ignoring local patterns (high bias, low variance, prone to underfitting).",
      },
      {
        id: "knn-q7",
        difficulty: "M",
        text: "What is the 'Curse of Dimensionality' and how does it affect KNN?",
        options: [
          "KNN becomes faster in higher dimensions.",
          "In high dimensions, the concept of 'nearest' neighbors becomes less meaningful as points tend to be equidistant, degrading performance.",
          "KNN requires exponentially more memory in higher dimensions.",
          "High dimensionality violates the core assumptions of KNN.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The Curse of Dimensionality refers to various phenomena that arise when working with high-dimensional data. For KNN, as dimensionality increases, the distance between any two points tends to become very similar ('equidistant'), making it hard to distinguish true 'nearest' neighbors from other points. This degrades the performance of distance-based algorithms like KNN.",
      },
      {
        id: "knn-q8",
        difficulty: "H",
        text: "Which distance metrics are commonly used in KNN?",
        options: [
          "Euclidean Distance (L2 norm)", // 0
          "Manhattan Distance (L1 norm)", // 1
          "Cosine Similarity", // 2
          "Minkowski Distance (generalization of L1 and L2)", // 3
          "Pearson Correlation Coefficient", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 2, 3],
        explanation: "Euclidean (L2) and Manhattan (L1) are common choices for dense, continuous data. Minkowski is the generalized form (p=2 for Euclidean, p=1 for Manhattan). Cosine Similarity is often preferred for high-dimensional sparse data like text document vectors, as it measures angle rather than magnitude. Pearson correlation is less common as a primary KNN distance.",
      },
      {
        id: "knn-q9",
        difficulty: "H",
        text: "Compared to algorithms like SVM or Logistic Regression, what are some potential advantages of KNN?",
        options: [
          "Simplicity and ease of implementation.", // 0
          "No explicit training phase (lazy learning).", // 1
          "Naturally handles multi-class problems without modification.", // 2
          "Can learn highly irregular decision boundaries.", // 3
          "Robustness to outliers.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 2, 3],
        explanation: "KNN is conceptually simple (A) and requires no explicit training (B). It handles multi-class classification naturally by majority vote (C) and can adapt to complex, non-linear decision boundaries determined by the local data structure (D). However, KNN is generally sensitive to outliers, especially with small 'k' values (E is false).",
      },
      {
        id: "knn-q10",
        difficulty: "H",
        text: "How can the computational cost of prediction in KNN be potentially reduced?",
        options: [
          "Using data structures like KD-Trees or Ball Trees for faster neighbor search (effective in lower dimensions).", // 0
          "Performing dimensionality reduction (e.g., PCA) before applying KNN.", // 1
          "Using approximate nearest neighbor search algorithms.", // 2
          "Subsampling the training data (at the cost of potential accuracy loss).", // 3
          "Choosing k=1.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 2, 3],
        explanation: "Brute-force search is slow. KD-Trees and Ball Trees organize the data to speed up neighbor search, though their effectiveness diminishes in very high dimensions (A). Dimensionality reduction reduces the number of features distances are computed over (B). Approximate methods trade exactness for speed (C). Reducing the size of the dataset to search through via subsampling also speeds up prediction (D). Choosing k=1 doesn't change the fundamental need to search all points (E is false).",
      },
      {
        id: "knn-q11",
        difficulty: "M",
        text: "For KNN regression (predicting a continuous value), how is the prediction typically made?",
        options: [
          "By taking the mode of the neighbors' values.",
          "By taking the mean or median of the neighbors' values.",
          "By fitting a local linear regression on the neighbors.",
          "By assigning the value of the single closest neighbor.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "In KNN regression, after finding the 'k' nearest neighbors, the prediction for the new point is typically the average (mean) of the target values of those neighbors. The median can also be used for robustness to outliers.",
      },
      {
        id: "knn-q12",
        difficulty: "M",
        text: "What happens if you choose k equal to the total number of training samples (N) in KNN classification?",
        options: [
          "The model will always predict the majority class of the entire training set.",
          "The model will have extremely high variance.",
          "The model will likely overfit the training data.",
          "The prediction time becomes constant.",
          "I don't know",
        ],
        correctOptionIndices: [0],
        explanation: "If k=N, every prediction considers all training points as neighbors. The prediction will therefore always be the class that is most frequent in the overall training data, regardless of the input features. This is a very high bias, low variance model.",
      },
    ],
  },

  // === Naive Bayes (NB) ===
  {
    id: "naive-bayes",
    topic: "Naive Bayes (NB)",
    questions: [
      {
        id: "nb-q1",
        difficulty: "E",
        text: "What is the core assumption made by Naive Bayes classifiers?",
        options: [
          "Features are normally distributed.",
          "Features are conditionally independent given the class label.",
          "The dataset is perfectly balanced.",
          "The relationship between features and the class is linear.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The 'naive' part of Naive Bayes comes from its core assumption: that all features are independent of each other, given the class label. This simplifies the calculation of P(X|Y) = P(x₁|Y) * P(x₂|Y) * ... * P(x<0xE2><0x82><0x99>|Y).",
      },
      {
        id: "nb-q2",
        difficulty: "E",
        text: "Naive Bayes is based on which fundamental theorem of probability?",
        options: [
          "Central Limit Theorem",
          "Law of Large Numbers",
          "Bayes' Theorem",
          "Chebyshev's Inequality",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The Naive Bayes algorithm directly applies Bayes' Theorem: P(Y|X) = [P(X|Y) * P(Y)] / P(X). It calculates the posterior probability P(Y|X) for each class Y and chooses the class with the highest probability. The 'naive' assumption simplifies the calculation of the likelihood P(X|Y).",
      },
      {
        id: "nb-q3",
        difficulty: "M",
        text: "Why is the 'naive' assumption often violated in real-world datasets?",
        options: [
          "Because real-world data rarely follows a Gaussian distribution.",
          "Because features in real-world problems are often correlated with each other.",
          "Because datasets often contain missing values.",
          "Because the number of features is usually very large.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The assumption that all features are independent given the class is rarely true in practice. For example, in text classification, the presence of the word 'San' might be correlated with the presence of 'Francisco'. Naive Bayes ignores these dependencies.",
      },
      {
        id: "nb-q4",
        difficulty: "M",
        text: "Despite the naive assumption often being incorrect, why does Naive Bayes frequently perform well, especially in text classification?",
        options: [
          "It only requires the rank order of probabilities to be correct for classification, not the exact probability values.", // 0
          "It is computationally very efficient and scales well with a large number of features.", // 1
          "The independence assumption perfectly holds for text data represented as bag-of-words.", // 2
          "It is relatively robust to irrelevant features.", // 3
          "It requires less training data compared to more complex models.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 3, 4],
        explanation: "NB often works well because: (A) Classification depends on which class has the *highest* posterior probability, not the exact value, making it robust to inaccuracies caused by the independence assumption. (B) It's fast and scales linearly with features. (D) Irrelevant features tend to affect probabilities similarly across classes, having less impact. (E) Its simplicity means it can learn reasonably well from smaller datasets. (C) is false; word occurrences are often dependent.",
      },
      {
        id: "nb-q5",
        difficulty: "M",
        text: "What is Gaussian Naive Bayes typically used for?",
        options: [
          "Problems with discrete features (e.g., word counts).",
          "Problems with continuous features assumed to follow a Gaussian distribution within each class.",
          "Problems where features are binary (presence/absence).",
          "Ranking problems.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Gaussian Naive Bayes is a variant adapted for continuous features. It assumes that the likelihood of continuous features P(xᵢ|Y) follows a Gaussian (normal) distribution for each class Y. The mean and variance for each feature within each class are estimated from the training data.",
      },
      {
        id: "nb-q6",
        difficulty: "M",
        text: "What is Multinomial Naive Bayes typically used for?",
        options: [
          "Problems with continuous features that are normally distributed.",
          "Problems involving counts or frequencies, such as text classification (word counts).",
          "Problems where features represent fractions or proportions.",
          "Problems with binary features.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Multinomial Naive Bayes is well-suited for discrete features that represent counts or frequencies, such as word counts in a document (bag-of-words model) or occurrence counts of categorical variables. It assumes features have a multinomial distribution.",
      },
      {
        id: "nb-q7",
        difficulty: "M",
        text: "What issue can arise in Naive Bayes if a specific feature value never occurs with a specific class in the training data?",
        options: [
          "The model will overfit to that class.",
          "The conditional probability estimate for that feature/class combination will be zero, potentially zeroing out the entire posterior probability for that class.",
          "The model will automatically ignore that feature.",
          "It violates the independence assumption.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "If a feature value xᵢ never appears with class Y in the training data, the estimated likelihood P(xᵢ|Y) will be zero. Since Naive Bayes multiplies these likelihoods, the entire posterior probability P(Y|X) for that class will become zero, regardless of other feature values. This is known as the zero-frequency problem.",
      },
      {
        id: "nb-q8",
        difficulty: "H",
        text: "How is the 'zero-frequency problem' typically addressed in Naive Bayes?",
        options: [
          "By removing features that cause this problem.", // 0
          "By using feature scaling.", // 1
          "By using smoothing techniques like Laplace (add-one) smoothing or Lidstone smoothing.", // 2
          "By increasing the size of the training dataset.", // 3
          "By using a different algorithm like SVM.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [2],
        explanation: "Smoothing techniques are used to avoid zero probabilities. Laplace (add-one) smoothing adds 1 to every count, ensuring no probability is exactly zero. Lidstone smoothing is a generalization using an additive parameter alpha (0 < alpha <= 1). This prevents a single zero likelihood from zeroing out the entire posterior probability.",
      },
      {
        id: "nb-q9",
        difficulty: "H",
        text: "Comparing Naive Bayes to Logistic Regression, which statements are generally true?",
        options: [
          "Naive Bayes often requires less training data to achieve reasonable performance due to its strong assumption.", // 0
          "Logistic Regression often achieves higher accuracy when the feature independence assumption is strongly violated and sufficient data is available.", // 1
          "Naive Bayes is generally faster to train.", // 2
          "Logistic Regression coefficients provide direct insights into feature importance and direction (log-odds).", // 3
          "Naive Bayes directly models P(X|Y) and P(Y), while Logistic Regression directly models P(Y|X).", // 4
          "Only Logistic Regression can handle continuous features.", // 5
          "I don't know", // 6
        ],
        correctOptionIndices: [0, 1, 2, 3, 4],
        explanation: "NB (Generative) makes strong independence assumptions, needing less data (A), trains faster (C), models P(X|Y) (E). LogReg (Discriminative) directly models P(Y|X) (E), often better if independence fails & data is sufficient (B), offers interpretable coefficients (D). Gaussian NB handles continuous features (F is false).",
      },
      {
        id: "nb-q10",
        difficulty: "H",
        text: "What is Complement Naive Bayes, and when might it be preferred over standard Multinomial NB?",
        options: [
          "It models the probability of a document not belonging to a class, often performing better on imbalanced text datasets.", // 0
          "It uses a complementary distance metric instead of probabilities.", // 1
          "It ignores the naive independence assumption entirely.", // 2
          "It is specifically designed for continuous data.", // 3
          "It requires features to be negatively correlated.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0],
        explanation: "Complement Naive Bayes (CNB) addresses a weakness of standard Multinomial NB on imbalanced datasets. Instead of calculating the likelihood of a document belonging to class Y, it calculates the likelihood of it *not* belonging to Y (belonging to the complement class Y'). This tends to give more stable parameter estimates and better performance when some classes are much rarer than others.",
      },
      {
        id: "nb-q11",
        difficulty: "M",
        text: "Naive Bayes is considered a _______ model.",
        options: [
          "Discriminative",
          "Generative",
          "Lazy",
          "Kernel-based",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Naive Bayes is a generative model because it learns the joint probability distribution P(X, Y) by modeling the class priors P(Y) and the class-conditional likelihoods P(X|Y). It can, in principle, generate new data points. Discriminative models (like Logistic Regression, SVM) directly model the conditional probability P(Y|X) or learn a decision boundary.",
      },
      {
        id: "nb-q12",
        difficulty: "M",
        text: "What type of features does Bernoulli Naive Bayes expect?",
        options: [
          "Continuous, normally distributed features.",
          "Count-based features (integers).",
          "Binary features (e.g., presence or absence of a word).",
          "Categorical features with multiple levels.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Bernoulli Naive Bayes is designed for features that are binary (Boolean) - typically indicating the presence (1) or absence (0) of a particular attribute or term. It differs from Multinomial NB which handles counts.",
      },
    ],
  },

  // === Random Forest (RF) ===
  {
    id: "random-forest",
    topic: "Random Forest (RF)",
    questions: [
      {
        id: "rf-q1",
        difficulty: "E",
        text: "Random Forest is an ensemble learning method based on which underlying model?",
        options: [
          "Support Vector Machines",
          "Linear Regression",
          "Decision Trees",
          "K-Nearest Neighbors",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Random Forest builds an ensemble (a 'forest') of many individual Decision Tree models. Each tree is trained on a slightly different subset of the data and features, and their collective prediction is used.",
      },
      {
        id: "rf-q2",
        difficulty: "E",
        text: "What is the primary mechanism Random Forest uses to reduce the variance of individual decision trees?",
        options: [
          "Pruning the trees heavily.",
          "Using gradient boosting.",
          "Averaging predictions from multiple decorrelated trees (Bagging + Feature Randomness).",
          "Applying L2 regularization.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Individual decision trees can easily overfit (high variance). Random Forest reduces this variance by: 1) Training each tree on a different bootstrap sample of the data (Bagging). 2) Considering only a random subset of features at each split. These steps create diverse, decorrelated trees, and averaging their predictions leads to a more stable, lower-variance ensemble.",
      },
      {
        id: "rf-q3",
        difficulty: "M",
        text: "What is 'Bagging' (Bootstrap Aggregating) in the context of Random Forest?",
        options: [
          "Training each tree on the entire dataset but with different random seeds.",
          "Training each tree on a random subset of features.",
          "Creating multiple bootstrap samples (sampling with replacement) from the training data and training one tree on each sample.",
          "Sequentially training trees where each tree corrects the errors of the previous one.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Bagging involves creating multiple new datasets (bootstrap samples) by sampling repeatedly *with replacement* from the original training data. Each sample has the same size as the original dataset but contains duplicates and omits some original points. A separate model (in RF, a decision tree) is trained independently on each bootstrap sample.",
      },
      {
        id: "rf-q4",
        difficulty: "M",
        text: "What is the purpose of 'feature randomness' (feature subsampling) at each split in a Random Forest tree?",
        options: [
          "To speed up the training process by reducing computation at each node.",
          "To handle missing values in the features.",
          "To decorrelate the trees in the forest, further reducing variance and improving generalization.",
          "To ensure all features are used equally across the forest.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "If all trees considered all features, they might all pick the same strongest predictor at the top split, leading to highly correlated trees. By forcing each split to consider only a random subset of features (controlled by `max_features`), different trees are likely to use different features, making them less correlated. Averaging less correlated trees yields greater variance reduction.",
      },
      {
        id: "rf-q5",
        difficulty: "M",
        text: "How does Random Forest typically make a final prediction for a classification task?",
        options: [
          "By averaging the probability outputs of all trees.", // 0
          "By taking a majority vote among the class predictions of all trees.", // 1
          "By selecting the prediction of the single best tree in the forest.", // 2
          "By using a weighted average based on individual tree performance.", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [0, 1], // Accept both common methods
        explanation: "For classification, the final prediction is typically made either by taking the mode (majority vote) of the individual tree predictions or by averaging the predicted class probabilities from each tree and then choosing the class with the highest average probability. Averaging probabilities is often preferred as it provides a measure of confidence.",
      },
      {
        id: "rf-q6",
        difficulty: "M",
        text: "What is the 'Out-of-Bag' (OOB) error estimate in Random Forest?",
        options: [
          "The error calculated on a separate, held-out validation set.",
          "An estimate of the generalization error calculated using the data points not included in the bootstrap sample for each tree.",
          "The training error of the entire forest.",
          "The error specifically attributed to outliers in the data.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Due to bootstrap sampling, each tree is trained on only about two-thirds of the original data. The remaining one-third ('out-of-bag' samples) can be used as a built-in validation set for that specific tree. The OOB error is the average error rate computed by testing each data point using only the trees that did *not* see that point during their training.",
      },
      {
        id: "rf-q7",
        difficulty: "M",
        text: "Compared to a single, deep decision tree, Random Forest is less prone to:",
        options: [
          "High bias",
          "Overfitting (High variance)",
          "Underfitting",
          "Computational inefficiency",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "A single deep decision tree can easily memorize the training data, leading to high variance and overfitting. Random Forest, by averaging many decorrelated trees (often deep ones), significantly reduces this variance, making it much less prone to overfitting and improving generalization to unseen data.",
      },
      {
        id: "rf-q8",
        difficulty: "H",
        text: "Which hyperparameters are commonly tuned for Random Forest?",
        options: [
          "n_estimators: The number of trees in the forest.", // 0
          "max_features: The number (or proportion) of features considered at each split.", // 1
          "max_depth: The maximum depth of individual trees.", // 2
          "min_samples_split: The minimum number of samples required to split an internal node.", // 3
          "min_samples_leaf: The minimum number of samples required to be at a leaf node.", // 4
          "C (Cost parameter)", // 5
          "gamma (Kernel coefficient)", // 6
          "I don't know", // 7
        ],
        correctOptionIndices: [0, 1, 2, 3, 4],
        explanation: "Key RF hyperparameters include: `n_estimators` (more trees generally better up to a point), `max_features` (controls tree correlation), and parameters controlling individual tree complexity like `max_depth`, `min_samples_split`, and `min_samples_leaf`. C and gamma are SVM hyperparameters.",
      },
      {
        id: "rf-q9",
        difficulty: "H",
        text: "What are some advantages of Random Forest?",
        options: [
          "Generally high accuracy on many problems.", // 0
          "Robustness to outliers and noise compared to single trees.", // 1
          "Implicitly handles feature interactions.", // 2
          "Provides estimates of feature importance.", // 3
          "Requires minimal data preprocessing (like scaling).", // 4
          "Easy to parallelize training.", // 5
          "Highly interpretable individual predictions.", // 6
          "I don't know", // 7
        ],
        correctOptionIndices: [0, 1, 2, 3, 4, 5],
        explanation: "RF often achieves high accuracy (A), is more robust than single trees due to averaging (B), captures interactions via tree structures (C), offers feature importance measures (D), is insensitive to feature scaling (E), and tree building is easily parallelized (F). However, the final ensemble model lacks the simple interpretability of a single tree or linear model (G is false).",
      },
      {
        id: "rf-q10",
        difficulty: "H",
        text: "How is feature importance typically calculated in Random Forest?",
        options: [
          "Based on the coefficients assigned by the model (like linear models).", // 0
          "Mean Decrease in Impurity (MDI): Averaging the total reduction in node impurity (e.g., Gini impurity, entropy) caused by splits on that feature across all trees.", // 1
          "Mean Decrease in Accuracy (Permutation Importance): Measuring how much the model's accuracy (often OOB accuracy) decreases when the values of that feature are randomly shuffled.", // 2
          "By counting the number of times a feature is used to split a node.", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [1, 2],
        explanation: "Two main methods are: 1) Mean Decrease in Impurity (MDI), which sums the impurity reduction achieved by splits on a feature across all trees (fast but can be biased towards high cardinality features). 2) Permutation Importance (Mean Decrease in Accuracy), which measures the drop in model performance (e.g., OOB accuracy) when a feature's values are randomly shuffled (more robust, model-agnostic, but slower). Counting splits is less common/reliable.",
      },
      {
        id: "rf-q11",
        difficulty: "M",
        text: "Increasing the number of trees (n_estimators) in a Random Forest generally:",
        options: [
          "Increases overfitting significantly after a certain point.",
          "Decreases performance due to excessive computation.",
          "Improves performance (or plateaus) and reduces variance, without significantly increasing bias or overfitting risk (though returns diminish).",
          "Primarily increases the bias of the model.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Adding more trees to a Random Forest typically reduces the variance of the prediction and improves stability. While performance gains diminish after a certain number of trees, adding more trees generally does not lead to overfitting in the way that increasing complexity in other models might. The main cost is increased computation time.",
      },
      {
        id: "rf-q12",
        difficulty: "M",
        text: "If max_features is set to the total number of features (p), how does the Random Forest algorithm behave differently?",
        options: [
          "It becomes equivalent to Gradient Boosting.",
          "It becomes equivalent to Bagging (Bootstrap Aggregating) of decision trees without feature randomness.",
          "It will fail to train.",
          "Each tree will only have one split.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Random Forest combines Bagging with feature randomness. If `max_features=p`, the feature randomness step is effectively removed (all features are considered at each split). The algorithm then reduces to simply Bagging decision trees.",
      },
    ],
  },

  // === Gradient Boosting Machine (GBM) ===
  {
    id: "gbm",
    topic: "Gradient Boosting Machine (GBM)",
    questions: [
      {
        id: "gbm-q1",
        difficulty: "E",
        text: "Gradient Boosting is an ensemble technique where new models are added sequentially to:",
        options: [
          "Increase the diversity of independent models.",
          "Correct the errors made by the previous models.",
          "Reduce the dimensionality of the feature space.",
          "Vote independently on the final prediction.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Gradient Boosting builds models sequentially. Each new model (typically a tree) is trained to predict the errors (residuals) or the negative gradient of the loss function with respect to the predictions of the ensemble built so far. This focuses new models on the mistakes of the previous ones.",
      },
      {
        id: "gbm-q2",
        difficulty: "E",
        text: "What kind of models are typically used as the 'weak learners' in standard Gradient Boosting implementations like scikit-learn's GradientBoostingClassifier?",
        options: [
          "Linear Regression models",
          "Support Vector Machines",
          "K-Nearest Neighbors",
          "Decision Trees (usually shallow ones)",
          "I don't know",
        ],
        correctOptionIndices: [3],
        explanation: "While boosting can theoretically use various base models, Gradient Boosting Machines almost always use decision trees (specifically, regression trees that predict residuals or gradients) as the weak learners. These trees are often kept shallow (low `max_depth`) to prevent individual trees from overfitting.",
      },
      {
        id: "gbm-q3",
        difficulty: "M",
        text: "How does Gradient Boosting differ fundamentally from Random Forest in how the ensemble is built?",
        options: [
          "GBM uses bagging, RF uses boosting.",
          "GBM builds trees sequentially and dependently; RF builds trees independently and in parallel (conceptually).",
          "GBM averages predictions; RF uses weighted voting based on errors.",
          "GBM only works for regression; RF works for classification and regression.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Random Forest builds trees independently (each on a bootstrap sample, conceptually in parallel). Gradient Boosting builds trees sequentially, where each new tree depends on the errors of the previously built ensemble. RF uses averaging/voting; GBM uses additive combination, often weighted by a learning rate.",
      },
      {
        id: "gbm-q4",
        difficulty: "M",
        text: "What do the individual trees in a Gradient Boosting model typically learn to predict?",
        options: [
          "The target variable directly.",
          "The class probabilities.",
          "The residuals (errors) or the negative gradient of the loss function of the current ensemble prediction.",
          "The feature importances.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Instead of predicting the target variable itself, each new tree in GBM is trained to predict the 'pseudo-residuals' - the difference between the true target and the current ensemble's prediction, or more generally, the negative gradient of the loss function with respect to the current prediction. This directs the learning towards areas where the current ensemble performs poorly.",
      },
      {
        id: "gbm-q5",
        difficulty: "M",
        text: "What is the role of the 'learning rate' (or shrinkage) parameter in Gradient Boosting?",
        options: [
          "It controls the maximum depth of the individual trees.",
          "It determines the fraction of features to consider at each split.",
          "It scales the contribution of each new weak learner added to the ensemble, helping to prevent overfitting.",
          "It sets the initial prediction value before the boosting starts.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The learning rate (often denoted as eta or α) scales the contribution of each new tree before adding it to the ensemble prediction. A smaller learning rate means each tree contributes less, requiring more trees (iterations) to reach good performance but generally leading to better generalization and preventing overfitting. It 'shrinks' the impact of each step.",
      },
      {
        id: "gbm-q6",
        difficulty: "M",
        text: "Compared to Random Forest, Gradient Boosting is generally considered to be:",
        options: [
          "Less prone to overfitting, regardless of the number of estimators.",
          "Easier and faster to tune hyperparameters for.",
          "More sensitive to overfitting if the number of estimators is too high, requiring careful tuning of learning rate and tree complexity.",
          "Less computationally intensive to train.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "While highly effective, GBM models can easily overfit if too many trees (estimators) are added, especially with a high learning rate or complex trees. Careful tuning of hyperparameters (number of trees, learning rate, tree depth, etc.), often using early stopping, is crucial. Random Forest is generally less sensitive to the number of trees regarding overfitting.",
      },
      {
        id: "gbm-q7",
        difficulty: "H",
        text: "What loss functions are commonly used in Gradient Boosting for regression and binary classification tasks?",
        options: [
          "Regression: Least Squares (MSE)", // 0
          "Regression: Least Absolute Deviations (LAD)", // 1
          "Regression: Huber loss (combination of MSE and LAD)", // 2
          "Classification: Logistic Loss (Log Loss / Deviance / Binary Cross-Entropy)", // 3
          "Classification: Hinge Loss (used in SVMs)", // 4
          "Classification: Exponential Loss (used in AdaBoost)", // 5
          "I don't know", // 6
        ],
        correctOptionIndices: [0, 1, 2, 3, 5],
        explanation: "For regression, common choices include Least Squares (sensitive to outliers), LAD (robust to outliers), and Huber (a compromise). For binary classification, Logistic Loss (deviance) is standard for probability prediction. Exponential Loss is used in AdaBoost (a type of boosting) but less common in general GBM frameworks compared to log loss. Hinge loss is characteristic of SVMs.",
      },
      {
        id: "gbm-q8",
        difficulty: "H",
        text: "Besides learning rate, what other techniques are used in Gradient Boosting implementations to control overfitting?",
        options: [
          "Subsampling (Stochastic Gradient Boosting): Training trees on a fraction of the training data drawn without replacement at each iteration.", // 0
          "Limiting tree complexity (e.g., max_depth, min_samples_leaf).", // 1
          "Feature subsampling at each split (similar to Random Forest, less common in basic GBM but used in XGBoost/LightGBM).", // 2 - Refined based on prompt note
          "Early stopping based on performance on a validation set.", // 3
          "Using L1/L2 regularization on tree leaf weights (primarily in XGBoost/LightGBM).", // 4 - Refined based on prompt note
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 3], // Adjusted based on prompt note for standard GBM
        explanation: "Common regularization techniques for standard GBM include: 1) Subsampling data for each tree (Stochastic GB). 2) Controlling individual tree size (`max_depth`, `min_samples_leaf`). 3) Early stopping: monitoring validation error and stopping training when it no longer improves. Feature subsampling and L1/L2 on weights are more characteristic of advanced implementations like XGBoost/LightGBM.",
     },
      {
        id: "gbm-q9",
        difficulty: "H",
        text: "What is Stochastic Gradient Boosting?",
        options: [
          "Using stochastic gradient descent to update leaf weights.",
          "Introducing randomness by training each tree on a random subsample of the training data (sampled without replacement).",
          "Randomly selecting features at each split point.",
          "Using a random learning rate at each iteration.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Stochastic Gradient Boosting introduces randomness by fitting each new tree on a random fraction (subsample) of the training data, typically drawn without replacement at each iteration. This helps to reduce variance, prevent overfitting, and can speed up training.",
      },
      {
        id: "gbm-q10",
        difficulty: "H",
        text: "Consider the bias-variance trade-off. How does Gradient Boosting typically proceed?",
        options: [
          "It starts with high bias, low variance and primarily reduces variance with more trees.",
          "It starts with low bias, high variance and primarily reduces bias with more trees.",
          "It iteratively reduces bias by fitting residuals, but can start increasing variance if too many complex trees are added, especially without regularization/shrinkage.",
          "It maintains a constant bias and variance throughout the boosting process.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "GBM starts with a simple model (e.g., mean prediction, high bias). Each subsequent tree tries to correct the errors (reduce bias). As more trees are added, the model becomes more complex, fitting the training data better (lower bias). However, if too many trees are added or they are too complex, the model can start fitting noise, leading to an increase in variance (overfitting). Regularization techniques help manage this.",
      },
      {
        id: "gbm-q11",
        difficulty: "M",
        text: "If you set the learning rate in GBM to a very high value (e.g., close to 1.0), what is likely to happen?",
        options: [
          "The model will converge very slowly.",
          "The model will likely overfit quickly to the training data.",
          "The model will underfit the data.",
          "The training process will become more stable.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "A high learning rate means each new tree makes a large adjustment to the overall prediction. This allows the model to fit the training data very quickly, but it often leads to instability and rapid overfitting, as the model aggressively corrects errors without sufficient shrinkage.",
      },
      {
        id: "gbm-q12",
        difficulty: "M",
        text: "Can Gradient Boosting be used for feature selection?",
        options: [
          "No, it requires all features to be present.", // 0
          "Yes, implicitly through feature importances derived from splits, but less directly than Lasso.", // 1
          "Yes, L1 regularization within boosting (like XGBoost) can shrink feature usage.", // 2
          "Only if combined with PCA beforehand.", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [1, 2], // Accept both implicit and explicit (in advanced versions)
        explanation: "Standard GBM provides feature importance scores (based on impurity reduction or split counts), which can guide manual feature selection (B). Advanced implementations like XGBoost incorporate L1 regularization, which can automatically perform feature selection by shrinking some feature contributions effectively to zero (C).",
      },
    ],
  },

  // === XGBoost ===
  {
    id: "xgboost",
    topic: "XGBoost",
    questions: [
      {
        id: "xgb-q1",
        difficulty: "E",
        text: "XGBoost stands for:",
        options: [
          "Expert Gradient Boosting",
          "Extended Gradient Boosting",
          "Extreme Gradient Boosting",
          "Express Gradient Boosting",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "XGBoost stands for Extreme Gradient Boosting, reflecting its focus on performance, scalability, and pushing the limits of gradient boosting algorithms.",
      },
      {
        id: "xgb-q2",
        difficulty: "E",
        text: "XGBoost is an implementation of which type of algorithm?",
        options: [
          "Random Forest",
          "Support Vector Machine",
          "Gradient Boosting Machines",
          "K-Nearest Neighbors",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "XGBoost is a highly optimized and regularized implementation of the Gradient Boosting Machine (GBM) framework, known for its speed and performance.",
      },
      {
        id: "xgb-q3",
        difficulty: "M",
        text: "What is a key difference in the objective function used by XGBoost compared to traditional Gradient Boosting?",
        options: [
          "XGBoost uses only L1 regularization, while GBM uses L2.",
          "XGBoost includes a regularization term (penalizing model complexity) directly in the objective function it optimizes when building trees.",
          "XGBoost uses Mean Absolute Error by default, while GBM uses Mean Squared Error.",
          "XGBoost does not use a loss function, only regularization.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "While traditional GBM often relies on hyperparameters like tree depth and learning rate for regularization, XGBoost incorporates regularization terms (L1 and L2 penalties on leaf weights, and a penalty on the number of leaves via gamma) directly into the objective function that is optimized during the tree building process. This provides more explicit control over model complexity.",
      },
      {
        id: "xgb-q4",
        difficulty: "M",
        text: "Which regularization techniques are built into XGBoost's objective function?",
        options: [
          "L1 regularization (alpha) on leaf weights.", // 0
          "L2 regularization (lambda) on leaf weights.", // 1
          "Penalty on the number of leaves (gamma, minimum loss reduction).", // 2
          "Dropout regularization.", // 3
          "Batch Normalization.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 2],
        explanation: "XGBoost includes several forms of regularization: L1 (alpha) and L2 (lambda) penalties applied to the weights assigned to the leaves of the trees, and the gamma parameter which sets a minimum loss reduction required to make a split, effectively controlling the number of leaves and pruning the tree.",
      },
      {
        id: "xgb-q5",
        difficulty: "M",
        text: "How does XGBoost handle missing values by default?",
        options: [
          "It requires imputation before training.",
          "It automatically drops rows with missing values.",
          "It learns a default direction (left or right child) for missing values at each split during training based on gain.",
          "It replaces missing values with the mean or median of the feature.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "A key feature of XGBoost is its built-in handling of missing values. During training, at each potential split, XGBoost considers sending all missing values to the left child and calculates the gain, then considers sending them all to the right child and calculates the gain. It chooses the direction that maximizes the gain and learns this 'default direction' for missing values at that node.",
      },
      {
        id: "xgb-q6",
        difficulty: "M",
        text: "What approximation does XGBoost use for its objective function during tree building, allowing it to use second-order information?",
        options: [
          "First-order Taylor expansion (like standard GBM)",
          "Second-order Taylor expansion (using gradient and Hessian)",
          "Fourier expansion",
          "Polynomial expansion",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Unlike standard GBM which typically uses only the first derivative (gradient) of the loss function, XGBoost uses a second-order Taylor expansion of the loss function around the current prediction. This incorporates both the gradient (first derivative) and the Hessian (second derivative), providing more information for finding the optimal splits and leaf values.",
      },
      {
        id: "xgb-q7",
        difficulty: "H",
        text: "What system optimizations contribute to XGBoost's efficiency?",
        options: [
          "Parallelization of tree construction (e.g., finding best splits across features).", // 0
          "Cache-aware algorithms for memory access.", // 1
          "Out-of-core computation for datasets larger than RAM.", // 2
          "Built-in cross-validation capabilities within the training function.", // 3
          "Automatic hyperparameter tuning.", // 4
          "Quantization of feature values for faster split finding (though more prominent in LightGBM).", // 5
          "I don't know", // 6
        ],
        correctOptionIndices: [0, 1, 2, 3],
        explanation: "XGBoost employs several system optimizations: Parallel processing (at feature level for split finding) (A), cache-aware data structures (DMatrix) and access patterns (B), ability to handle datasets that don't fit in memory (C), and convenient built-in CV (D). Automatic hyperparameter tuning is usually done via separate libraries (E is false). Quantization/histogram-based split finding (F) is a key feature of LightGBM, though XGBoost also has variations.",
      },
      {
        id: "xgb-q8",
        difficulty: "H",
        text: "What is the role of the gamma parameter (sometimes called min_split_loss) in XGBoost?",
        options: [
          "It controls the L2 regularization strength.", // 0
          "It specifies the minimum loss reduction required to make a further partition (split) on a leaf node; acts as a pruning mechanism.", // 1
          "It determines the fraction of data to subsample for each tree.", // 2
          "It controls the learning rate.", // 3
          "It sets the maximum depth of the trees.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [1],
        explanation: "Gamma imposes a minimum threshold on the gain (loss reduction) achieved by introducing a split. If the best possible split results in a gain less than gamma, the split is not performed, effectively pruning the tree and preventing splits that don't sufficiently improve the model according to the regularized objective.",
      },
      {
        id: "xgb-q9",
        difficulty: "H",
        text: "Comparing XGBoost to standard Gradient Boosting implementations (like scikit-learn's), what are generally considered advantages of XGBoost?",
        options: [
          "Often faster execution speed due to system optimizations.", // 0
          "Better control over overfitting due to built-in regularization (L1/L2, gamma).", // 1
          "Native handling of missing values.", // 2
          "Often achieves higher predictive accuracy (partly due to regularization and second-order approximation).", // 3
          "Simpler API with fewer hyperparameters to tune.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 2, 3],
        explanation: "XGBoost is known for its speed (A), advanced regularization features (B), built-in missing value handling (C), and often superior accuracy (D). However, it typically has *more* hyperparameters to tune than basic GBM implementations, not fewer (E is false).",
      },
      {
        id: "xgb-q10",
        difficulty: "H",
        text: "XGBoost utilizes a data structure called DMatrix. What is its primary purpose?",
        options: [
          "To store the model's predictions.",
          "An internal data structure optimized for memory efficiency and training speed within XGBoost.",
          "A visualization tool for feature importances.",
          "A method for handling categorical features directly.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The DMatrix is XGBoost's internal data structure designed to optimize memory usage and computational speed. It pre-processes the data into a format suitable for cache-aware access, efficient gradient calculation, and handling of sparsity and missing values.",
      },
      {
        id: "xgb-q11",
        difficulty: "M",
        text: "Does XGBoost support custom objective and evaluation functions?",
        options: [
          "No, only standard ones like MSE or LogLoss are allowed.",
          "Yes, users can define their own objective functions (providing gradient and hessian) and evaluation metrics.",
          "Only custom evaluation functions are supported, not objectives.",
          "Only custom objective functions are supported, not evaluation metrics.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "XGBoost is flexible and allows users to define custom objective functions (by providing the first and second derivatives - gradient and Hessian) and custom evaluation metrics tailored to specific problem requirements beyond the standard built-in options.",
      },
      {
        id: "xgb-q12",
        difficulty: "M",
        text: "What does the scale_pos_weight parameter in XGBoost typically help with?",
        options: [
          "Scaling feature values to a standard range.",
          "Adjusting the learning rate dynamically.",
          "Handling imbalanced datasets in binary classification by weighting the positive class.",
          "Controlling the L1 regularization strength.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "In binary classification with imbalanced classes, `scale_pos_weight` is used to give more weight to the minority (positive) class during training. It's typically set to (count(negative class) / count(positive class)). This helps the model pay more attention to the rare class, improving metrics like recall or F1-score.",
      },
    ],
  },

  // === LSTM (Long Short-Term Memory) ===
  {
    id: "lstm",
    topic: "LSTM (Long Short-Term Memory)",
    questions: [
      {
        id: "lstm-q1",
        difficulty: "E",
        text: "LSTMs are a type of which neural network architecture, specifically designed for sequential data?",
        options: [
          "Convolutional Neural Network (CNN)",
          "Recurrent Neural Network (RNN)",
          "Multi-Layer Perceptron (MLP)",
          "Autoencoder",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Long Short-Term Memory (LSTM) networks are a specialized type of Recurrent Neural Network (RNN). RNNs are designed to process sequences of data by maintaining an internal hidden state that captures information from previous steps in the sequence.",
      },
      {
        id: "lstm-q2",
        difficulty: "E",
        text: "What fundamental problem in standard RNNs do LSTMs primarily aim to solve?",
        options: [
          "Overfitting",
          "Slow convergence speed",
          "Vanishing (and exploding) gradient problem",
          "Inability to process non-linear data",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Standard ('vanilla') RNNs struggle to learn long-range dependencies in sequences due to the vanishing gradient problem (gradients shrinking exponentially during backpropagation through time) and the related exploding gradient problem. LSTMs were specifically designed with internal gating mechanisms to mitigate these issues.",
      },
      {
        id: "lstm-q3",
        difficulty: "M",
        text: "What is the role of the 'cell state' in an LSTM unit?",
        options: [
          "To store the final output prediction of the LSTM.",
          "To act as a 'conveyor belt' carrying information through time, allowing easier gradient flow and preserving long-term dependencies.",
          "To compute the activation function for the hidden state.",
          "To store the weights of the input gate.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The cell state runs horizontally through the top of the LSTM unit. It acts like a memory channel, allowing information to flow relatively unchanged across many time steps. Gates control the addition or removal of information to the cell state, enabling the LSTM to selectively remember or forget information over long durations.",
      },
      {
        id: "lstm-q4",
        difficulty: "M",
        text: "Which gates are typically found within an LSTM cell?",
        options: [
          "Input Gate", // 0
          "Forget Gate", // 1
          "Attention Gate", // 2
          "Output Gate", // 3
          "Recurrent Gate", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 3],
        explanation: "A standard LSTM cell contains three main gates: 1) Forget Gate: Decides what information to throw away from the cell state. 2) Input Gate: Decides which new information to store in the cell state. 3) Output Gate: Decides what parts of the cell state to output (based on the filtered cell state and the input). Attention is a separate mechanism, not a standard internal LSTM gate.",
      },
      {
        id: "lstm-q5",
        difficulty: "M",
        text: "What is the function of the 'Forget Gate' in an LSTM?",
        options: [
          "To decide which new information to add to the cell state.",
          "To decide which parts of the cell state should be outputted.",
          "To decide which information from the previous cell state should be discarded or kept.",
          "To reset the hidden state to zero.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The Forget Gate looks at the previous hidden state (h<0xE1><0xB5><0x9C>₋₁) and the current input (x<0xE1><0xB5><0x9C>) and outputs a number between 0 and 1 for each number in the previous cell state (C<0xE1><0xB5><0x9C>₋₁). A 1 represents 'completely keep this' while a 0 represents 'completely get rid of this'.",
      },
      {
        id: "lstm-q6",
        difficulty: "M",
        text: "What activation function is typically used for the gates (input, forget, output) within an LSTM to control information flow (outputting values between 0 and 1)?",
        options: [
          "ReLU",
          "tanh",
          "Sigmoid",
          "Linear",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The gates in an LSTM control the flow of information (how much to let through). The Sigmoid activation function is used because its output range (0, 1) naturally represents this gating mechanism (0 = block completely, 1 = let everything through).",
      },
      {
        id: "lstm-q7",
        difficulty: "H",
        text: "What activation function is typically used to scale the candidate values before adding them to the cell state and to scale the cell state before outputting (often mapping values to [-1, 1])?",
        options: [
          "ReLU",
          "tanh",
          "Sigmoid",
          "Softmax",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The hyperbolic tangent (tanh) function is typically used in two places: 1) To create the vector of new candidate values (C̃<0xE1><0xB5><0x9C>) that could be added to the cell state. 2) To filter the cell state before multiplying it by the output gate's result to produce the hidden state (h<0xE1><0xB5><0x9C>). Tanh outputs values between -1 and 1, helping regulate the network's activations.",
      },
      {
        id: "lstm-q8",
        difficulty: "H",
        text: "How does the structure of the cell state and gates help mitigate the vanishing gradient problem?",
        options: [
          "The cell state allows information to flow with only minor linear transformations (addition, pointwise multiplication by forget gate), making gradient flow easier over long sequences.", // 0
          "Gates explicitly control which information is kept or discarded, preventing gradients from consistently shrinking through repeated matrix multiplications found in simple RNNs.", // 1
          "LSTMs use ReLU activations which prevent gradients from vanishing.", // 2
          "LSTMs use skip connections similar to ResNets.", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [0, 1],
        explanation: "The cell state acts like a conveyor belt with mostly additive interactions, allowing gradients to flow back through time more easily without vanishing (A). The gates regulate this flow, learning when to preserve or discard information, preventing the repeated matrix multiplications that cause gradients to shrink exponentially in simple RNNs (B). LSTMs primarily use sigmoid/tanh, not ReLU (C is false). While the cell state provides a path, it's the gating mechanism, distinct from ResNet skips, that's key (D is misleading).",
      },
      {
        id: "lstm-q9",
        difficulty: "H",
        text: "What is a Bidirectional LSTM (BiLSTM)?",
        options: [
          "An LSTM with two hidden layers stacked on top of each other.",
          "An LSTM that processes the input sequence both forwards (left-to-right) and backwards (right-to-left) and concatenates the hidden states.",
          "An LSTM specifically designed for two related input sequences.",
          "An LSTM that uses attention mechanisms in both directions.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "A Bidirectional LSTM consists of two separate LSTM layers: one processes the input sequence from the beginning to the end (forward pass), and the other processes it from the end to the beginning (backward pass). The hidden states from both layers at each time step are typically concatenated (or summed/averaged) to produce the final output for that time step, incorporating context from both past and future.",
      },
      {
        id: "lstm-q10",
        difficulty: "H",
        text: "When would using a Bidirectional LSTM be particularly beneficial?",
        options: [
          "In real-time prediction tasks where future context is unavailable.",
          "In tasks where understanding the context from both past and future elements is important for predicting the current element (e.g., NLP tasks like Named Entity Recognition).",
          "When dealing with extremely long sequences where forward processing is too slow.",
          "Primarily for reducing the number of parameters in the model.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "BiLSTMs excel when the prediction for an element at time 't' can benefit from information about elements both before 't' (past context) and after 't' (future context). This is common in NLP tasks like translation, sentiment analysis of a whole sentence, or named entity recognition, where knowing the surrounding words helps interpret the current word. They are not suitable for real-time prediction where future data isn't available.",
      },
      {
        id: "lstm-q11",
        difficulty: "M",
        text: "What is the typical input shape expected by an LSTM layer in frameworks like Keras or PyTorch (assuming batch processing)?",
        options: [
          "(batch_size, features)",
          "(sequence_length, features)",
          "(batch_size, sequence_length, features)",
          "(batch_size, features, sequence_length)",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "LSTM layers typically expect a 3D tensor as input with the shape (batch_size, sequence_length, num_features). `batch_size` is the number of sequences processed in parallel, `sequence_length` is the number of time steps in each sequence, and `num_features` is the number of input features at each time step.",
      },
      {
        id: "lstm-q12",
        difficulty: "M",
        text: "What is a common technique used to prevent overfitting in LSTMs?",
        options: [
          "Increasing the number of LSTM units.",
          "Using Dropout regularization (often applied to the inputs/outputs of the LSTM layer, or recurrent dropout).",
          "Removing the forget gate.",
          "Using a smaller batch size.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Dropout is a widely used regularization technique for LSTMs and other neural networks. It randomly sets a fraction of input units (or recurrent connections, in the case of recurrent dropout) to zero during training, which helps prevent co-adaptation of units and reduces overfitting. Increasing units or removing gates typically increases complexity/risk of overfitting. Batch size affects optimization dynamics but isn't a primary regularization method.",
      },
      {
        id: "lstm-q13",
        difficulty: "H",
        text: "What is a Gated Recurrent Unit (GRU), and how does it relate to LSTM?",
        options: [
          "A more complex version of LSTM with additional gates.",
          "A simpler variant of LSTM that combines the input and forget gates into an 'update gate' and lacks a separate cell state (merging cell and hidden state).",
          "An architecture designed specifically for image data, unrelated to LSTM.",
          "The precursor to the standard RNN.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "The GRU is a newer gating mechanism for RNNs, often seen as a simplification of the LSTM. It combines the forget and input gates into a single 'update gate' and merges the cell state and hidden state. It has fewer parameters than LSTM and sometimes performs comparably, though performance is task-dependent.",
      },
    ],
  },

  // === Transformers ===
  {
    id: "transformer", // Keep original ID if needed
    topic: "Transformers",
    questions: [
      {
        id: "trans-q1", // Keep original ID if needed
        difficulty: "E", // Adjusted from prompt based on content
        text: "The Transformer architecture was first introduced in which influential paper?",
        options: [
          "\"Deep Residual Learning for Image Recognition\"", // 0
          "\"Generative Adversarial Nets\"", // 1
          "\"Attention Is All You Need\"", // 2
          "\"Playing Atari with Deep Reinforcement Learning\"", // 3
          "I don't know", // 4
        ],
        correctOptionIndices: [2],
        explanation: "The Transformer model was introduced by Vaswani et al. in the 2017 paper titled 'Attention Is All You Need', revolutionizing sequence transduction tasks, particularly in Natural Language Processing.",
      },
      {
        id: "trans-q2",
        difficulty: "E",
        text: "What core mechanism allows Transformers to process sequences without using recurrence (like RNNs/LSTMs)?",
        options: [
          "Convolutional layers",
          "Dense (fully connected) layers only",
          "Self-Attention mechanism",
          "Pooling layers",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "The key innovation of the Transformer is the self-attention mechanism. It allows the model to weigh the importance of different parts of the input sequence directly when processing each part, regardless of their distance, enabling parallel processing and capturing long-range dependencies without recurrent connections.",
      },
      {
        id: "trans-q3",
        difficulty: "M",
        text: "What is the purpose of the self-attention mechanism in a Transformer?",
        options: [
          "To reduce the dimensionality of the input embeddings.",
          "To allow the model to weigh the importance of different words in the input sequence when processing each word, capturing contextual relationships.",
          "To introduce non-linearity into the model.",
          "To handle sequences of variable lengths by padding.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Self-attention calculates scores between each pair of positions (e.g., words) in the input sequence. These scores determine how much 'attention' each position pays to every other position (including itself) when computing its updated representation. This allows the model to learn contextual dependencies within the sequence.",
      },
      {
        id: "trans-q4",
        difficulty: "M",
        text: "In the scaled dot-product attention formula Attention(Q, K, V) = softmax( (Q * Kᵀ) / sqrt(d<0xE2><0x82><0x9E>) ) * V, what do Q, K, and V represent?",
        options: [
          "Quality, Keyness, Value",
          "Query, Kernel, Vector",
          "Query, Key, Value vectors derived from the input embeddings.",
          "Quantization, Knockout, Validation vectors.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Q (Query), K (Key), and V (Value) are matrices derived by projecting the input embeddings (or the output of a previous layer) using learned weight matrices. For a given Query (representing the current position being processed), attention scores are calculated by taking the dot product with all Keys (representing other positions). These scores weight the corresponding Values, which are then summed up to produce the output representation.",
      },
      {
        id: "trans-q5",
        difficulty: "M",
        text: "Why is scaling by sqrt(d<0xE2><0x82><0x9E>) (square root of the key dimension) performed before the softmax in scaled dot-product attention?",
        options: [
          "To normalize the vectors to unit length.",
          "To prevent the dot products from becoming too large, which could saturate the softmax function and lead to vanishing gradients.",
          "To introduce randomness into the attention scores.",
          "To ensure the output dimension matches the input dimension.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "When the dimension d<0xE2><0x82><0x9E> of the key vectors is large, the dot products QKᵀ can grow large in magnitude. Large inputs to the softmax function can push it into regions where its gradient is extremely small (saturation), hindering learning. Scaling by sqrt(d<0xE2><0x82><0x9E>) counteracts this effect, keeping the variance of the dot products stable and improving gradient flow.",
      },
      {
        id: "trans-q6",
        difficulty: "M",
        text: "What is 'Multi-Head Attention'?",
        options: [
          "Running the attention mechanism multiple times sequentially.",
          "Applying attention to multiple different input sequences simultaneously.",
          "Running multiple self-attention mechanisms ('heads') in parallel, each potentially learning different aspects of relationships, and concatenating their outputs.",
          "Using different types of attention (dot-product, additive) in the same layer.",
          "I don't know",
        ],
        correctOptionIndices: [2],
        explanation: "Multi-Head Attention involves projecting the Q, K, and V matrices multiple times with different learned linear projections ('heads'). Scaled dot-product attention is applied independently within each head in parallel. The outputs of the heads are then concatenated and linearly projected again to produce the final output. This allows the model to jointly attend to information from different representation subspaces at different positions.",
      },
      {
        id: "trans-q7",
        difficulty: "M",
        text: "Since the self-attention mechanism itself doesn't inherently understand word order, how do Transformers incorporate positional information?",
        options: [
          "By processing words sequentially like RNNs.",
          "By adding Positional Encodings (vectors representing position) to the input embeddings.",
          "By using convolutional layers before the attention layers.",
          "Position information is not needed for most NLP tasks.",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "Transformers are not recurrent, so they process all input elements simultaneously. To provide the model with information about the relative or absolute position of elements in the sequence, positional encodings (vectors calculated based on position, often using sine and cosine functions) are added to the input embeddings before they are fed into the first Transformer block.",
      },
      {
        id: "trans-q8",
        difficulty: "H",
        text: "What are the main components of a standard Transformer block (encoder or decoder layer)?",
        options: [
          "Multi-Head Self-Attention sub-layer.", // 0
          "Position-wise Feed-Forward Network (FFN) sub-layer.", // 1
          "Recurrent connections (like LSTM gates).", // 2
          "Add & Norm layers (Residual connections followed by Layer Normalization).", // 3
          "Convolutional sub-layer.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1, 3],
        explanation: "A standard Transformer block (like in an Encoder) contains two main sub-layers: a Multi-Head Self-Attention mechanism and a Position-wise Feed-Forward Network. Residual ('Add') connections are applied around each sub-layer, followed by Layer Normalization ('Norm'). Decoder blocks have an additional cross-attention layer. Recurrent or convolutional layers are not standard components.",
      },
      {
        id: "trans-q9",
        difficulty: "H",
        text: "What is the role of the Position-wise Feed-Forward Network (FFN) in a Transformer block?",
        options: [
          "To calculate attention scores between different words.",
          "To apply the same feed-forward network (typically two linear layers with a non-linear activation like ReLU) independently to each position after attention.",
          "To combine the outputs of the different attention heads.",
          "To generate the final output probabilities (e.g., over vocabulary).",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "After the attention mechanism processes relationships between positions, the FFN applies further transformation independently to the representation at each position. It typically consists of two linear transformations with a non-linearity (like ReLU) in between. This allows the model to learn more complex representations for each position.",
      },
      {
        id: "trans-q10",
        difficulty: "H",
        text: "How does the Transformer Decoder differ from the Encoder, particularly regarding attention?",
        options: [
          "The Decoder typically has two Multi-Head Attention layers: one masked self-attention over the decoder inputs, and one cross-attention layer attending to the encoder outputs.", // 0
          "The Decoder uses recurrence instead of self-attention.", // 1
          "The masked self-attention in the decoder prevents positions from attending to subsequent positions (to maintain auto-regressive property during generation).", // 2
          "The Encoder uses Layer Normalization, while the Decoder uses Batch Normalization.", // 3
          "The Decoder does not use positional encodings.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 2],
        explanation: "A Decoder block has three sub-layers: 1) Masked Multi-Head Self-Attention on the decoder's own inputs. The masking ensures that during prediction of position 'i', attention can only be paid to positions less than 'i' (maintaining auto-regressive behavior). 2) Multi-Head Cross-Attention, where Queries come from the decoder and Keys/Values come from the encoder's output, allowing the decoder to attend to the input sequence. 3) The FFN. Both use Layer Norm and positional encodings.",
      },
      {
        id: "trans-q11",
        difficulty: "H",
        text: "What are some advantages of Transformers over LSTMs/RNNs for sequence processing tasks?",
        options: [
          "Better ability to model long-range dependencies due to direct attention paths (O(1) path length).", // 0
          "Higher parallelizability during training, leading to faster training times on suitable hardware.", // 1
          "Generally require fewer parameters for similar performance.", // 2
          "Inherently better at handling sequences of variable lengths without padding.", // 3
          "Simpler architecture with fewer distinct components.", // 4
          "I don't know", // 5
        ],
        correctOptionIndices: [0, 1],
        explanation: "Transformers excel at long-range dependencies because attention provides direct connections between any two sequence positions (A). The lack of recurrence allows computations within a layer to be parallelized across the sequence length, making training faster on GPUs/TPUs (B). Transformers often require *more* parameters than LSTMs (C is false). They still require padding for batch processing (D is false). The architecture, while powerful, is arguably more complex than a standard LSTM cell (E is false).",
      },
      {
        id: "trans-q12",
        difficulty: "M",
        text: "BERT (Bidirectional Encoder Representations from Transformers) is primarily based on which part of the Transformer architecture?",
        options: [
          "The Decoder stack",
          "The Encoder stack",
          "Both Encoder and Decoder connected sequentially",
          "A modified LSTM cell integrated with attention",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "BERT uses a stack of Transformer Encoder layers. Its key characteristic is being bidirectional, meaning it processes the entire input sequence at once using self-attention, allowing each token's representation to incorporate context from both left and right.",
      },
      {
        id: "trans-q13",
        difficulty: "M",
        text: "GPT (Generative Pre-trained Transformer) models are primarily based on which part of the Transformer architecture, modified for generative tasks?",
        options: [
          "The Encoder stack",
          "The Decoder stack (using masked self-attention)",
          "A combination of CNNs and attention",
          "A BiLSTM network",
          "I don't know",
        ],
        correctOptionIndices: [1],
        explanation: "GPT models use a stack of Transformer Decoder layers. They employ masked self-attention, which restricts attention to only previous positions in the sequence. This auto-regressive property makes them suitable for generative tasks, where the model predicts the next token based on the preceding ones.",
      },
      {
        "id": "trans-q14",
        "difficulty": "E",
        "text": "What is the name of the language model released by Deep Seek in January 2025?",
        "options": [
          "R1",
          "GPT-3",
          "BERT",
          "Transformer XL",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "The Deep Seek language model is called R1. \nOption explanations:\n• R1: Correct – this is the model released by Deep Seek.\n• GPT-3, BERT, Transformer XL: Incorrect – these are models from other organizations.\n• I don't know: Always provided as a fallback option."
      },
      {
        "id": "trans-q15",
        "difficulty": "E",
        "text": "What major improvement did Deep Seek introduce with multi-head latent attention?",
        "options": [
          "It reduces the key-value cache size by a factor of 57.",
          "It increases the embedding dimension by 10 times.",
          "It eliminates the need for attention mechanisms.",
          "It adds recurrent connections.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Deep Seek’s multi-head latent attention reduces the key-value cache size by a factor of 57, allowing faster text generation. \nOption explanations:\n• Reduction of key-value cache: Correct – this is exactly the innovation mentioned.\n• Increasing embedding dimension: Incorrect – the change is about cache size, not embedding size.\n• Eliminating attention or adding recurrence: Incorrect – these do not reflect the described innovation."
      },
      {
        "id": "trans-q16",
        "difficulty": "E",
        "text": "How many attention heads per layer does Deep Seek R1 have?",
        "options": [
          "12",
          "64",
          "128",
          "256",
          "I don't know"
        ],
        "correctOptionIndices": [2],
        "explanation": "Deep Seek R1 is described as having 128 attention heads per layer. \nOption explanations:\n• 128: Correct – matches the transcript.\n• 12, 64, 256: Incorrect – these are not the numbers stated."
      },
      {
        "id": "trans-q17",
        "difficulty": "E",
        "text": "If the input text is tokenized into 9 tokens, what is the size of each attention pattern matrix?",
        "options": [
          "9x9",
          "8x8",
          "10x10",
          "Depends on the model",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "The attention pattern matrix is always square with dimensions equal to the number of input tokens, so 9 tokens result in a 9x9 matrix. \nOption explanations:\n• 9x9: Correct – this is how attention matrices are computed.\n• Other sizes: Incorrect – they do not match the token count."
      },
      {
        "id": "trans-q18",
        "difficulty": "E",
        "text": "What do attention patterns in Transformers represent?",
        "options": [
          "The computed dot-product similarities between tokens.",
          "A fixed positional encoding.",
          "Only the output tokens.",
          "The loss values during training.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Attention patterns are matrices computed via dot products between token representations (queries and keys), capturing their similarity. \nOption explanations:\n• Dot-product similarities: Correct – that is the fundamental idea in attention.\n• Positional encoding, outputs, loss values: Incorrect – these are unrelated to the dot product computation in attention."
      },
      {
        "id": "trans-q19",
        "difficulty": "E",
        "text": "How does a Transformer generate a response given a prompt?",
        "options": [
          "It generates one token at a time in an autoregressive manner.",
          "It generates the entire response simultaneously.",
          "It selects a pre-defined response from a list.",
          "It uses recurrence over all tokens.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Transformers generate text autoregressively, producing one token at a time where each token depends on the tokens before it. \nOption explanations:\n• One token at a time: Correct – this describes the autoregressive mechanism.\n• Entire response simultaneously or pre-defined responses: Incorrect – these do not apply.\n• Recurrence: Incorrect – Transformers do not use recurrent connections."
      },
      {
        "id": "trans-q20",
        "difficulty": "E",
        "text": "What is the role of the learned weight matrices (WQ, WK, WV) in attention?",
        "options": [
          "They transform the input token representations into queries, keys, and values.",
          "They store the attention patterns permanently.",
          "They add positional encoding to the tokens.",
          "They compute the loss during training.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Learned weights WQ, WK, and WV are used to transform the input matrix into the query, key, and value matrices. \nOption explanations:\n• Transformation role: Correct – they perform linear transformations on the input.\n• Storing patterns, adding encoding, computing loss: Incorrect – these are not the roles of these matrices."
      },
      {
        "id": "trans-q21",
        "difficulty": "E",
        "text": "Which operation normalizes the computed attention scores in a Transformer?",
        "options": [
          "Division by the square root of the embedding dimension and softmax.",
          "Batch normalization.",
          "Using a ReLU activation.",
          "Multiplication by a constant factor.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "After computing raw attention scores, they are scaled (divided by the square root of the embedding dimension) and then normalized with a softmax. \nOption explanations:\n• Division and softmax: Correct – this is the standard normalization procedure.\n• Batch normalization, ReLU, constant multiplication: Incorrect – these do not apply to attention score normalization."
      },
      {
        "id": "trans-q22",
        "difficulty": "E",
        "text": "What is the purpose of masking in the attention computation during training?",
        "options": [
          "To prevent the model from using future tokens.",
          "To increase the number of parameters.",
          "To speed up training by skipping layers.",
          "To enhance the embedding size.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Masking is applied to ensure that, during autoregressive training, the model cannot attend to future tokens (i.e., tokens that have not yet been generated). \nOption explanations:\n• Prevent future leakage: Correct – this keeps training causal.\n• Other options: Incorrect – they do not describe the purpose of masking."
      },
      {
        "id": "trans-q23",
        "difficulty": "E",
        "text": "What is KV caching in the context of Transformer models?",
        "options": [
          "Storing previously computed key and value matrices for reuse.",
          "Caching the entire output of the network.",
          "Recomputing keys and values for every token from scratch.",
          "Caching only the queries.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "KV caching involves storing the keys and values (but not queries) computed for previous tokens, which avoids redundant calculations during autoregressive inference. \nOption explanations:\n• Storing keys and values: Correct – that is the essence of KV caching.\n• Other options: Incorrect – either misrepresent what is cached or contradict the idea of caching."
      },
      {
        "id": "trans-q24",
        "difficulty": "E",
        "text": "How many total attention patterns are computed in the GPT-2 small model?",
        "options": [
          "144",
          "128",
          "61",
          "7,808",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "GPT-2 small uses 12 attention heads per layer and 12 layers, resulting in 144 attention patterns. \nOption explanations:\n• 144: Correct – calculated as 12 * 12.\n• Other numbers: Incorrect – they refer to figures mentioned for Deep Seek R1 or other dimensions."
      },
      {
        "id": "trans-q25",
        "difficulty": "E",
        "text": "What is the embedding dimension of GPT-2 small as mentioned in the transcript?",
        "options": [
          "768",
          "7168",
          "64",
          "512",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "GPT-2 small uses an embedding dimension of 768. \nOption explanations:\n• 768: Correct – this is the value stated in the transcript.\n• 7168: Incorrect – that is the embedding dimension for Deep Seek R1.\n• Other options: Incorrect."
      },
      {
        "id": "trans-q26",
        "difficulty": "E",
        "text": "What is the dimension of the query and key vectors produced in GPT-2 small?",
        "options": [
          "64",
          "128",
          "768",
          "9",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "In GPT-2 small, after multiplying by the weight matrices, each query and key vector has a dimension of 64. \nOption explanations:\n• 64: Correct – as per the computation details.\n• Other numbers: Incorrect – they represent other model parameters."
      },
      {
        "id": "trans-q27",
        "difficulty": "E",
        "text": "What role do query and key dot products play in Transformer attention?",
        "options": [
          "They measure the similarity between token representations.",
          "They encode positional information.",
          "They determine the model’s loss function.",
          "They control the learning rate.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "The dot product between queries and keys yields a score that indicates how similar or relevant the tokens are to each other. \nOption explanations:\n• Similarity measure: Correct – that is the purpose of the dot product here.\n• Other options: Incorrect – they describe unrelated functions."
      },
      {
        "id": "trans-q28",
        "difficulty": "E",
        "text": "What advantage does Deep Seek R1 have over a traditional Transformer in terms of text generation speed?",
        "options": [
          "It generates text more than six times faster.",
          "It reduces the number of parameters by 90%.",
          "It utilizes a recurrent network for generation.",
          "It processes all tokens simultaneously.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Deep Seek R1 is able to generate text more than six times faster due to its innovative multi-head latent attention and KV caching. \nOption explanations:\n• Six times faster: Correct – this is the improvement claimed.\n• Other options: Incorrect – they do not correspond to the described speed advantage."
      },
      {
        "id": "trans-q29",
        "difficulty": "E",
        "text": "How is the value matrix computed in the attention mechanism?",
        "options": [
          "By multiplying the input matrix X with the learned weight matrix WV.",
          "By adding the key and query matrices.",
          "By transposing the query matrix.",
          "By applying a softmax to the input vectors.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "The value matrix is computed by multiplying the input matrix X with the learned weight matrix WV. \nOption explanations:\n• Multiplication with WV: Correct – that is the defined operation.\n• Other options: Incorrect – they do not describe the correct computation."
      },
      {
        "id": "trans-q30",
        "difficulty": "E",
        "text": "When using KV caching during generation, which aspect is NOT recomputed?",
        "options": [
          "The keys for previous tokens.",
          "The queries for the new token.",
          "The value matrix for previous tokens.",
          "The new token’s query vector.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 2],
        "explanation": "KV caching stores the keys and values for previous tokens so they do not need to be recomputed on each new token generation. \nOption explanations:\n• Keys for previous tokens and previous values: Correct – these are cached.\n• New token’s query and its computation: Not cached and must be computed, hence not correct choices."
      },
      {
        "id": "trans-q31",
        "difficulty": "E",
        "text": "What does a high dot product value between a token’s query and another token’s key suggest?",
        "options": [
          "A strong relevance or relationship between the tokens.",
          "That the tokens are in different sentences.",
          "A failure in the attention mechanism.",
          "That the tokens have been misaligned.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "A high dot product indicates that the tokens are considered highly related or relevant. \nOption explanations:\n• Strong relevance: Correct – that is the intended interpretation.\n• Other options: Incorrect – they describe unrelated outcomes."
      },
      {
        "id": "trans-q32",
        "difficulty": "E",
        "text": "In the attention mechanism, what does each row of the query matrix represent?",
        "options": [
          "A query for an input token.",
          "The final output token.",
          "The positional encoding.",
          "A residual connection.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Each row of the query matrix corresponds to the query vector for a specific input token. \nOption explanations:\n• Query vector: Correct – it represents the current token’s query.\n• Others: Incorrect – they are not descriptions of query matrix rows."
      },
      {
        "id": "trans-q33",
        "difficulty": "E",
        "text": "What computational challenge is associated with the attention mechanism as input length increases?",
        "options": [
          "Quadratic scaling of computations with respect to the number of input tokens.",
          "Linear scaling of memory usage.",
          "Exponential growth in model parameters.",
          "Decreasing accuracy over time.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Since the attention matrix is of size n×n, where n is the number of tokens, the number of computations scales quadratically as the sequence length increases. \nOption explanations:\n• Quadratic scaling: Correct – this is the core challenge in attention computation.\n• Other options: Incorrect – they do not accurately describe the computational complexity."
      },
      {
        "id": "trans-q34",
        "difficulty": "M",
        "text": "Which choice or choices are correct regarding the learned weight matrices involved in computing attention scores?",
        "options": [
          "WQ transforms the input to generate queries.",
          "WK transforms the input to generate keys.",
          "WV computes positional encodings.",
          "They are used to compute the model loss.",
          "They are fixed and not learned.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1],
        "explanation": "WQ and WK are the learned weight matrices that transform the input into queries and keys respectively, which are then used for computing attention scores. \nOption explanations:\n• WQ and WK: Correct – these matrices are essential for generating queries and keys.\n• WV: Incorrect in this context as it is used to generate the value matrix, not positional encodings.\n• Loss computation and fixed weights: Incorrect – all weights in these projections are learned."
      },
      {
        "id": "trans-q35",
        "difficulty": "M",
        "text": "What operations transform the input matrix X into the query and key matrices in a Transformer?",
        "options": [
          "Matrix multiplication with the learned weight matrices WQ and WK.",
          "Element-wise addition with bias vectors.",
          "Concatenation with positional encodings.",
          "Application of a convolutional filter.",
          "Use of recurrent neural networks.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "The input matrix X is transformed into the query and key matrices by multiplying it with the learned weight matrices WQ and WK. \nOption explanations:\n• Matrix multiplication: Correct – that is the method used.\n• Other options: Incorrect – they are not used for this transformation in standard Transformers."
      },
      {
        "id": "trans-q36",
        "difficulty": "M",
        "text": "Which choice or choices are correct regarding the significance of high dot product values between queries and keys?",
        "options": [
          "They indicate a strong relation or similarity between tokens.",
          "They signify that the tokens are from different sentences.",
          "They will always lead to a low softmax output.",
          "They identify tokens that may influence each other during prediction.",
          "They are used to determine the eventual attention weights.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 3, 4],
        "explanation": "High dot product values suggest that tokens are similar or related, causing them to potentially influence each other during prediction when the attention weights are computed. \nOption explanations:\n• High similarity and influence: Correct – these are the intended outcomes of high dot product values.\n• Other options: Incorrect – they either introduce unrelated notions or misinterpret softmax behavior."
      },
      {
        "id": "trans-q37",
        "difficulty": "M",
        "text": "Which choice or choices are correct regarding the sequential steps to compute an attention pattern?",
        "options": [
          "Computing dot products between queries and keys.",
          "Applying a masking operation to prevent future token leakage.",
          "Dividing the result by the square root of the embedding dimension.",
          "Using a softmax to normalize the scores.",
          "Multiplying by the final learned weight matrix Wo immediately.",
          "Using an average pooling operation at the start.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 3],
        "explanation": "The process involves computing dot products, applying a mask to enforce causality, scaling the results, and normalizing with softmax. \nOption explanations:\n• Dot product, masking, scaling, and softmax: Correct – these steps are performed in order.\n• Multiplying by Wo occurs later after processing values, and average pooling is not part of the attention computation."
      },
      {
        "id": "trans-q38",
        "difficulty": "M",
        "text": "What is the purpose of multiplying the attention pattern by the value matrix in the Transformer?",
        "options": [
          "To produce a weighted sum of value vectors based on attention scores.",
          "To update the learned weight matrices dynamically.",
          "To normalize the queries.",
          "To perform element-wise addition with positional encodings.",
          "To compute the loss for backpropagation.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "Multiplying the attention pattern by the value matrix yields a weighted sum that integrates information from relevant tokens based on the computed attention scores. \nOption explanations:\n• Weighted sum: Correct – it combines information according to the attention distribution.\n• Other options: Incorrect – they do not describe this step."
      },
      {
        "id": "trans-q39",
        "difficulty": "M",
        "text": "Which choice or choices correctly explain how Deep Seek achieves a significant speed improvement in text generation?",
        "options": [
          "Reducing the key-value cache size by a factor of 57.",
          "Employing KV caching to reuse computed keys and values.",
          "Increasing the number of attention heads without any change in computation.",
          "Using multi-head latent attention to modify the Transformer core.",
          "Switching to a recurrent architecture.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 3],
        "explanation": "Deep Seek’s speed improvements stem from reducing the key-value cache size, using KV caching, and introducing multi-head latent attention to optimize the core Transformer computation. \nOption explanations:\n• Reduction in cache size, KV caching, and multi-head latent attention: Correct – they are central to the improvement.\n• Increasing heads without optimization and recurrent architecture: Incorrect – these do not contribute to the speedup as described."
      },
      {
        "id": "trans-q40",
        "difficulty": "M",
        "text": "What is the role of the final learned weight matrix Wo in the attention block?",
        "options": [
          "It combines the outputs of all attention heads.",
          "It is used to compute the initial queries.",
          "It applies the masking operation.",
          "It normalizes the value matrix.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "The final learned weight matrix Wo is applied after concatenating the outputs from all attention heads, to transform the combined result. \nOption explanations:\n• Combining head outputs: Correct – that is its role.\n• Other options: Incorrect – they describe operations from earlier in the attention pipeline."
      },
      {
        "id": "trans-q41",
        "difficulty": "M",
        "text": "Which choice or choices correctly describe KV caching techniques in Transformers?",
        "options": [
          "It involves caching the computed keys of previous tokens.",
          "It involves caching the computed value matrix for previous tokens.",
          "It caches the query vectors for faster computation.",
          "It reduces unnecessary recomputation during autoregressive inference.",
          "It eliminates the need for masking.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 3],
        "explanation": "KV caching stores keys and values from prior computations, which reduces computational load during autoregressive generation by avoiding redundant operations. \nOption explanations:\n• Caching keys, values, and reducing recomputation: Correct – these points are central to KV caching.\n• Caching queries or eliminating masking: Incorrect – queries are computed for new tokens and masking remains necessary."
      },
      {
        "id": "trans-q42",
        "difficulty": "M",
        "text": "Why are multiple attention heads used in the Transformer architecture?",
        "options": [
          "They allow the model to attend to different types of relationships in the input.",
          "They enable parallel processing of token interactions.",
          "They replicate the same computation to increase redundancy.",
          "They help in capturing positional information explicitly.",
          "They reduce the overall computational cost.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1],
        "explanation": "Multiple attention heads allow the model to focus on different aspects of the input and process token interactions in parallel. \nOption explanations:\n• Diverse focus and parallel processing: Correct – these are the main benefits of multi-head attention.\n• Replication, explicit positional encoding, and cost reduction: Incorrect – they do not accurately describe the purpose of multiple heads."
      },
      {
        "id": "trans-q43",
        "difficulty": "M",
        "text": "Which choice or choices correctly determine the size of an attention pattern matrix?",
        "options": [
          "The number of input tokens.",
          "The embedding dimension of the model.",
          "The number of attention heads.",
          "The dimension of the value matrix.",
          "The number of layers in the model.",
          "I don't know"
        ],
        "correctOptionIndices": [0],
        "explanation": "The attention pattern matrix is square and its size is determined by the number of input tokens (n×n), independent of embedding dimensions or number of heads. \nOption explanations:\n• Number of input tokens: Correct – that defines the matrix’s dimensions.\n• Other options: Incorrect – they influence other aspects of the model but not the size of the attention matrix."
      },
      {
        "id": "trans-q44",
        "difficulty": "M",
        "text": "What is the embedding dimension used in Deep Seek R1?",
        "options": [
          "768",
          "7168",
          "512",
          "1024",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [1],
        "explanation": "Deep Seek R1 uses an embedding dimension of 7168. \nOption explanations:\n• 7168: Correct – as stated in the transcript.\n• Other options: Incorrect – they correspond to different models or are arbitrary."
      },
      {
        "id": "trans-q45",
        "difficulty": "M",
        "text": "What is the primary role of the masking operation in computing the attention pattern?",
        "options": [
          "It prevents the model from accessing future tokens in the sequence.",
          "It increases the numerical stability of the softmax.",
          "It blends positional encodings with token embeddings.",
          "It determines which tokens are dropped during dropout.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "Masking ensures that, during the autoregressive generation, tokens cannot attend to future tokens, maintaining the causal structure of the sequence. \nOption explanations:\n• Preventing future access: Correct – that is the intended function of masking.\n• Other options: Incorrect – they do not capture the core purpose of masking."
      },
      {
        "id": "trans-q46",
        "difficulty": "M",
        "text": "Why is the result of the dot product in attention divided by the square root of the embedding dimension?",
        "options": [
          "To prevent the softmax function from saturating.",
          "To decrease the computational cost.",
          "To improve the resolution of the key signals.",
          "To ensure the output matrix is square.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "Dividing by the square root of the embedding dimension scales the dot product values, preventing overly large values that would saturate the softmax and hinder the learning process. \nOption explanations:\n• Preventing saturation: Correct – that is the primary reason for the scaling factor.\n• Other options: Incorrect – they misrepresent the purpose of the division."
      },
      {
        "id": "trans-q47",
        "difficulty": "M",
        "text": "When a new token is generated during autoregressive text generation, which part of the attention pattern remains unchanged?",
        "options": [
          "The upper left submatrix corresponding to previous tokens.",
          "The entire attention pattern is recomputed.",
          "The new token’s row and column.",
          "The positional encoding component.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "The upper left part of the attention matrix—representing the interactions between all previously processed tokens—remains unchanged, as only the new token’s interactions need to be computed. \nOption explanations:\n• Upper left submatrix: Correct – this is reused from previous computations.\n• Other options: Incorrect – they do not accurately reflect the behavior of KV caching."
      },
      {
        "id": "trans-q48",
        "difficulty": "M",
        "text": "Which choice or choices are correct regarding what is stored in KV caching to optimize computation?",
        "options": [
          "Previously computed key matrices.",
          "Previously computed value matrices.",
          "Previously computed query matrices.",
          "The final combined matrix after Wo.",
          "The masked attention pattern.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1],
        "explanation": "KV caching stores the keys and values from previous tokens to avoid redundant recomputation during inference. \nOption explanations:\n• Keys and values: Correct – only these matrices are cached.\n• Queries or final matrices: Incorrect – queries must be computed for each new token, and the final matrix is not cached."
      },
      {
        "id": "trans-q49",
        "difficulty": "M",
        "text": "What computational challenge is posed by chat GPT's maximum context length?",
        "options": [
          "The attention pattern computation scales quadratically with token count.",
          "The recurrent network depth increases.",
          "The embedding dimension doubles.",
          "The number of layers is reduced.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "As the context length increases, the attention pattern matrix grows quadratically, which poses a significant computational challenge. \nOption explanations:\n• Quadratic scaling: Correct – this is a key issue in handling long contexts.\n• Other options: Incorrect – they do not address the challenge of increased sequence length."
      },
      {
        "id": "trans-q50",
        "difficulty": "M",
        "text": "How do Transformers prevent 'cheating' by looking ahead at future tokens during training?",
        "options": [
          "By applying a masking operation to the upper right portion of the attention matrix.",
          "By shuffling input tokens randomly.",
          "By using bidirectional attention.",
          "By limiting the number of model layers.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "Masking the upper right portion of the attention matrix prevents tokens from attending to future tokens, which is essential for autoregressive training. \nOption explanations:\n• Masking future tokens: Correct – this is the standard technique used.\n• Other options: Incorrect – they do not prevent future token leakage."
      },
      {
        "id": "trans-q51",
        "difficulty": "M",
        "text": "What effect does the softmax function have on the attention scores?",
        "options": [
          "It normalizes the scores into a probability distribution.",
          "It scales down the gradient magnitudes.",
          "It introduces non-linearity to the positional encodings.",
          "It increases the computational complexity.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0],
        "explanation": "The softmax function converts raw attention scores into a probability distribution, where each row sums up to one. \nOption explanations:\n• Normalization to probabilities: Correct – this is its role in the attention mechanism.\n• Other options: Incorrect – they do not capture the essence of softmax in this context."
      },
      {
        "id": "trans-q52",
        "difficulty": "M",
        "text": "Which choice or choices correctly describe a step that leverages data-dependent weights in processing inputs in attention?",
        "options": [
          "Multiplying the attention pattern by the value matrix.",
          "Computing the dot products between queries and keys.",
          "Using the same weight matrices for all tokens.",
          "Applying a fixed normalization constant.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1],
        "explanation": "Both the dot product computation and the subsequent multiplication with the value matrix directly use data-dependent information to process inputs. \nOption explanations:\n• Dot products and value multiplication: Correct – they integrate data-specific interactions.\n• Other options: Incorrect – they either miss the data dependency or describe fixed operations."
      },
      {
        "id": "trans-q53",
        "difficulty": "M",
        "text": "Which choice or choices correctly capture the concept of avoiding redundant computations in autoregressive models?",
        "options": [
          "Storing and reusing keys and values in KV caching.",
          "Recomputing the entire attention pattern for every new token.",
          "Using a caching mechanism for previous token interactions.",
          "Ignoring earlier token representations.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 2],
        "explanation": "By caching previously computed keys and values, autoregressive models avoid recomputing the entire attention pattern on each new token, thereby optimizing efficiency. \nOption explanations:\n• Caching and reusing previous computations: Correct – these choices describe the effective mechanism.\n• Other options: Incorrect – they either describe the opposite approach or are irrelevant."
      },
      {
        "id": "trans-q54",
        "difficulty": "H",
        "text": "Which choice or choices are integral operations in the Transformer attention mechanism's computation pipeline?",
        "options": [
          "Computing dot-product similarities between queries and keys.",
          "Applying a masking operation to enforce causality.",
          "Dividing by the square root of the embedding dimension.",
          "Normalizing scores using softmax.",
          "Multiplying by the final weight matrix Wo after head concatenation.",
          "Adding positional encodings before the attention computation.",
          "Using dropout after the softmax.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 3, 4],
        "explanation": "The core operations in the attention pipeline include computing dot products, applying a mask to maintain the autoregressive property, scaling (division), normalizing with softmax, and finally combining head outputs with Wo. \nOption explanations:\n• Options 0–4: Correct – they are fundamental to attention.\n• Positional encodings and dropout, while important elsewhere, are not integral to the direct computation of the attention pattern."
      },
      {
        "id": "trans-q55",
        "difficulty": "H",
        "text": "In re-computing the attention pattern for a new token during autoregressive generation, which choice or choices correctly describe the steps taken?",
        "options": [
          "Compute the dot product between the new token's query and all cached keys.",
          "Recompute the entire attention matrix from scratch.",
          "Update only the bottom row corresponding to the new token.",
          "Reuse the top-left submatrix from the previous attention pattern.",
          "Calculate a new column for the new token using cached queries.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 2, 3],
        "explanation": "For a new token, only its interactions (typically the bottom row) are computed by taking the dot product with cached keys while reusing the previously computed submatrix. \nOption explanations:\n• Options 0, 2, and 3: Correct – they accurately describe the efficient update using KV caching.\n• Recomputing the entire matrix or calculating a new column (when not needed) is not performed."
      },
      {
        "id": "trans-q56",
        "difficulty": "H",
        "text": "Which choice or choices best explain the purpose of splitting the attention mechanism into multiple heads?",
        "options": [
          "To allow specialization on different aspects of the input tokens.",
          "To perform parallel computations on token relationships.",
          "To solely increase the overall number of parameters.",
          "To capture diverse semantic and syntactic relationships.",
          "To implement recurrent connections in parallel.",
          "To simplify the masking process.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 3],
        "explanation": "Multiple heads enable the model to attend to different types of relationships and capture diverse features by processing token interactions in parallel. \nOption explanations:\n• Specialization, parallel processing, and capturing diverse relationships: Correct – they denote the benefits of multi-head attention.\n• Increasing parameters, recurrent connections, or simplifying masking: Incorrect – these do not correctly explain why splitting into heads is done."
      },
      {
        "id": "trans-q57",
        "difficulty": "H",
        "text": "Which choice or choices correctly explain the role of scaling (division by the square root of the embedding dimension) in attention computation?",
        "options": [
          "It prevents the softmax function from saturating due to large dot product values.",
          "It stabilizes gradients during training.",
          "It reduces the complexity of the matrix multiplication.",
          "It makes the attention scores invariant to dimensionality.",
          "It is necessary for masking to be effective.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1, 3],
        "explanation": "Scaling is used to prevent the softmax from saturating, stabilize gradients, and maintain consistency regardless of embedding dimension. \nOption explanations:\n• Prevent saturation, stabilize gradients, and invariance: Correct – these describe the benefits of scaling.\n• Matrix multiplication complexity and masking effectiveness: Incorrect – they do not relate to the purpose of scaling."
      },
      {
        "id": "trans-q58",
        "difficulty": "H",
        "text": "During training, why is it critical to apply masking to the dot product matrix in attention computation?",
        "options": [
          "To prevent the model from accessing future token information.",
          "To reduce computational cost by zeroing out half the matrix.",
          "To enforce the autoregressive property for correct next-token prediction.",
          "To allow the softmax to operate on only relevant data.",
          "To balance the dot product values across tokens.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 2, 3],
        "explanation": "Masking is essential to enforce causality by preventing future token access, which in turn ensures that the softmax operates only on the allowed parts of the sequence for accurate prediction. \nOption explanations:\n• Options 0, 2, and 3: Correct – they capture the reasons for using masking.\n• Reducing computational cost or balancing values are not the primary objectives."
      },
      {
        "id": "trans-q59",
        "difficulty": "H",
        "text": "Which choice or choices correctly describe the mathematical properties leading to quadratic scaling in attention mechanisms?",
        "options": [
          "The attention matrix is computed as an n×n matrix, with n being the number of tokens.",
          "Every token's query is compared with every token's key.",
          "The embedding dimension increases exponentially with token count.",
          "Matrix multiplication inherently scales quadratically.",
          "The process involves repeated iterations over each pair of tokens.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1, 4],
        "explanation": "Quadratic scaling arises because each token's query is compared with every token's key, resulting in an n×n matrix and iterating over token pairs. \nOption explanations:\n• Options 0, 1, and 4: Correct – they explain how the computation inherently scales.\n• Exponential embedding dimension and general matrix multiplication ambiguity: Incorrect explanations."
      },
      {
        "id": "trans-q60",
        "difficulty": "H",
        "text": "Which choice or choices correctly indicate the components computed using learned weight matrices in the Transformer’s attention block?",
        "options": [
          "The query matrix from the input.",
          "The key matrix from the input.",
          "The value matrix from the input.",
          "The final output produced after stacking heads.",
          "The masking matrix.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1, 2, 3],
        "explanation": "Learned weight matrices are used to compute the query, key, and value matrices initially and later the final output is computed by multiplying the concatenated head outputs with a learned weight matrix Wo. \nOption explanations:\n• Options 0 through 3: Correct – they cover the computed components.\n• The masking matrix is not computed through a learned weight matrix; it's applied as a fixed operation."
      },
      {
        "id": "trans-q61",
        "difficulty": "H",
        "text": "Which choice or choices correctly describe mechanisms that help Transformers handle very long sequences efficiently?",
        "options": [
          "KV caching to store previously computed keys and values.",
          "Reusing unchanged attention submatrices for previous tokens.",
          "Computing the entire attention matrix anew for each token.",
          "Limiting the context length to avoid quadratic scaling.",
          "Splitting attention into multiple specialized heads.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1, 4],
        "explanation": "KV caching and reusing unchanged submatrices greatly enhance efficiency for long sequences; while specialization via multiple heads can improve representation, it doesn’t directly address recomputation. \nOption explanations:\n• Options 0, 1, and 4: Correct – these help in efficiently processing long sequences.\n• Recomputing the entire matrix and arbitrarily limiting context are not efficient strategies."
      },
      {
        "id": "trans-q62",
        "difficulty": "H",
        "text": "When generating a new token, which choice or choices describe the dependencies for computing its attention pattern?",
        "options": [
          "The new token’s query vector is computed from the new input.",
          "Cached key vectors from previous tokens are reused.",
          "A new value matrix is computed from scratch for all tokens.",
          "Only the cached keys are used, ignoring new queries.",
          "The final output is independent of previous tokens.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1],
        "explanation": "For a new token, its query is computed freshly while the keys (and previously computed values) are reused through caching to compute its attention pattern. \nOption explanations:\n• Options 0 and 1: Correct – they accurately capture the dependency in the update process.\n• Other options: Incorrect – they misrepresent how new token processing occurs."
      },
      {
        "id": "trans-q63",
        "difficulty": "H",
        "text": "Which choice or choices correctly describe Deep Seek R1's design choices that reduce computational bottlenecks compared to standard Transformers?",
        "options": [
          "Implementation of multi-head latent attention to reduce key-value cache size.",
          "Utilization of KV caching to avoid redundant computation.",
          "Increasing the number of layers without any modifications.",
          "Expanding the attention heads while applying efficient computation strategies.",
          "Employing recurrent neural networks to bypass attention.",
          "I don't know",
          "Extra option"
        ],
        "correctOptionIndices": [0, 1, 3],
        "explanation": "Deep Seek R1 uses multi-head latent attention to reduce cache size and KV caching to avoid recomputations along with increasing the number of heads in an efficient manner. \nOption explanations:\n• Options 0, 1, and 3: Correct – these techniques specifically target computational bottlenecks.\n• Options involving unmodified layer increases or recurrent networks: Incorrect – they are not part of the described innovations."
      },
      {
        "id": "trans-q64",
        "difficulty": "H",
        "text": "In the equation computing the attention pattern, why is the result divided by the square root of the embedding dimension, and what can happen if this scaling factor is omitted?",
        "options": [
          "It prevents the values from becoming too large, which would saturate the softmax.",
          "It stabilizes the gradients during backpropagation.",
          "It ensures that the dot products are comparable across different dimensions.",
          "It reduces the overall model size.",
          "It increases the number of training iterations needed.",
          "It adjusts for the variance of the input features.",
          "It is required for the masking operation to work properly.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 5],
        "explanation": "Dividing by the square root of the embedding dimension prevents the dot product values from growing too large, which could cause the softmax to saturate. This scaling also stabilizes the gradients, ensures comparability across dimensions, and adjusts for input variance. \nOption explanations:\n• Options 0, 1, 2, and 5: Correct – these reasons explain the role and consequence of the scaling factor.\n• Options 3, 4, and 6: Incorrect – they do not capture the main mathematical rationale behind the scaling."
      },
      {
        "id": "trans-q65",
        "difficulty": "H",
        "text": "During the computation of the attention pattern, which choice or choices correctly describe the role and effect of the masking operation?",
        "options": [
          "It zeros out the upper right portion of the dot-product matrix.",
          "It prevents the model from accessing future tokens.",
          "It enhances the values in the lower left portion of the matrix.",
          "It ensures that the softmax only considers past tokens.",
          "It scales the attention scores by a fixed factor.",
          "It eliminates noise from the token embeddings.",
          "It standardizes the distribution of the attention weights.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 3],
        "explanation": "Masking zeros out the upper right portion of the matrix, thereby preventing the model from accessing future tokens and ensuring that softmax normalization only accounts for allowed token positions. \nOption explanations:\n• Options 0, 1, and 3: Correct – these clearly describe the masking operation and its effects.\n• Other options: Incorrect – they introduce effects not associated with masking in attention."
      },
      {
        "id": "trans-q66",
        "difficulty": "H",
        "text": "Given an input of n tokens and an embedding dimension d, with WQ and WK of dimensions d × k, what is the shape of the computed attention pattern matrix and what is its computational complexity?",
        "options": [
          "The queries and keys become matrices of shape n × k.",
          "The attention pattern matrix is of shape n × n.",
          "Its computation has complexity O(n² · k).",
          "Its computation has complexity O(n · d).",
          "The attention matrix scales linearly with n.",
          "It has complexity O(n³).",
          "It is independent of n.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2],
        "explanation": "Multiplying the input X (n × d) by WQ and WK yields queries and keys of shape n × k. The dot product between these matrices produces an n × n attention matrix, and since each of the n tokens is compared with every other token (with inner dimension k), the complexity is O(n² · k). \nOption explanations:\n• Options 0, 1, and 2: Correct – they correctly specify the shape and complexity.\n• Other options: Incorrect – they either underestimate or misrepresent the complexity and dimensions."
      },
      {
        "id": "trans-q67",
        "difficulty": "H",
        "text": "How does KV caching mathematically optimize autoregressive inference in Transformer models?",
        "options": [
          "It avoids recomputing dot products for tokens whose key and value representations are already computed.",
          "It reduces the effective computation by only processing the new token's query against cached keys.",
          "It caches the results of the softmax operation.",
          "It eliminates the need for computing positional encodings.",
          "It allows using unaltered parts of the attention matrix from previous steps.",
          "It computes the entire attention matrix in a single matrix multiply.",
          "It simplifies the gradient backpropagation through time.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 4],
        "explanation": "KV caching stores the previously computed keys and values, which means that for each new token only its query needs to be computed against these cached values. This avoids redundant dot product calculations and reuses parts of the previous attention matrix. \nOption explanations:\n• Options 0, 1, and 4: Correct – they capture how caching reduces computations mathematically.\n• Other options: Incorrect – they do not accurately address the optimization achieved via KV caching."
      },
      {
        "id": "trans-q68",
        "difficulty": "H",
        "text": "When stacking outputs from multiple attention heads before multiplying by Wo, why is concatenation preferred over summation?",
        "options": [
          "Concatenation preserves the distinct information from each head.",
          "Summation may lead to loss of specialized features from individual heads.",
          "Concatenation allows Wo to re-weight each head's contribution differently.",
          "Summation quadruples the computational cost.",
          "Concatenation is more memory efficient.",
          "It ensures that each head’s output remains in its own subspace.",
          "It simplifies the gradient flow during backpropagation.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 5],
        "explanation": "Concatenation preserves the unique characteristics of each head, enabling the subsequent matrix Wo to learn individual weights for each contribution. Summing them could blur the distinctions between heads. \nOption explanations:\n• Options 0, 1, 2, and 5: Correct – they explain the advantages of concatenation in maintaining diverse features and flexible re-weighting.\n• Other options: Incorrect – they either misrepresent computational cost or are not central to the rationale."
      },
      {
        "id": "trans-q69",
        "difficulty": "H",
        "text": "How does the multi-head latent attention approach in Deep Seek R1 affect the overall memory footprint during inference compared to standard Transformers?",
        "options": [
          "It reduces the key-value cache size by a factor of 57.",
          "It eliminates the need to store any intermediate attention matrices.",
          "It decreases redundant computation through efficient caching.",
          "It increases the memory footprint by doubling the embedding dimension.",
          "It optimizes memory by caching only the necessary parts of the keys and values.",
          "It stores all query vectors to accelerate computation.",
          "It scales memory linearly with input tokens.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 2, 4],
        "explanation": "The multi-head latent attention approach reduces memory usage by significantly lowering the key-value cache size and by caching only necessary components to avoid redundant computations during inference. \nOption explanations:\n• Options 0, 2, and 4: Correct – they accurately reflect the improvements in memory efficiency.\n• Other options: Incorrect – they either describe contrary effects or include irrelevant details."
      },
      {
        "id": "trans-q70",
        "difficulty": "H",
        "text": "Which choice or choices correctly outline the sequence of mathematical operations performed to compute the final output of an attention block starting from the input matrix X?",
        "options": [
          "Multiply X by WQ to obtain the query matrix.",
          "Multiply X by WK to obtain the key matrix.",
          "Compute dot products between the query and key matrices.",
          "Apply masking and scaling (division by √d) followed by softmax normalization.",
          "Multiply X by WV to compute the value matrix.",
          "Stack the outputs from multiple heads and multiply by Wo.",
          "Add positional encodings to the resulting matrix.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 3, 4, 5],
        "explanation": "The operations include transforming X into queries, keys, and values through multiplication with WQ, WK, and WV, computing dot products between queries and keys, applying masking/scaling/softmax, and then finally combining multiple head outputs with Wo. \nOption explanations:\n• Options 0 to 5: Correct – these accurately represent the complete computation pipeline.\n• Adding positional encodings (option 6) is a separate process and not part of the core attention block computations described here."
      },
      {
        "id": "trans-q71",
        "difficulty": "H",
        "text": "Which choice or choices correctly describe the role and sensitivity of the softmax operation in attention score normalization?",
        "options": [
          "It converts raw scores into a probability distribution over tokens.",
          "It is highly sensitive to the scale of its input values.",
          "Without proper scaling, softmax can lead to near one-hot distributions.",
          "It decreases computational complexity by reducing dimensionality.",
          "It ensures that all output values sum to one.",
          "It can introduce sparsity in the gradients.",
          "It is used to compute the loss during training.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 4],
        "explanation": "The softmax normalizes raw attention scores into probabilities, is sensitive to the scale of its inputs, can create nearly one-hot distributions if not scaled appropriately, and ensures that the output sums to one. \nOption explanations:\n• Options 0, 1, 2, and 4: Correct – they detail the function and sensitivity of the softmax.\n• Options 3, 5, and 6: Incorrect – they either mischaracterize softmax’s role or are unrelated."
      },
      {
        "id": "trans-q72",
        "difficulty": "H",
        "text": "In Deep Seek’s implementation, increasing the number of attention heads and layers leads to which choice or choices regarding trade-offs in attention computation?",
        "options": [
          "Improved capacity to capture complex relationships.",
          "Increased computational and memory demands.",
          "Potential for more specialized attention mechanisms.",
          "A reduction in overall training time due to parallelism.",
          "A higher risk of overfitting without proper regularization.",
          "An increased burden on the key-value caching system.",
          "A simplification of the attention scoring process.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 4, 5],
        "explanation": "Increasing the number of heads and layers generally improves the model’s representational capacity and specialization, but also raises computational/memory costs and can raise overfitting risks while putting more demands on caching mechanisms. \nOption explanations:\n• Options 0, 1, 2, 4, and 5: Correct – they outline the realistic trade-offs.\n• Option 3 (reduction in training time) and 6 (simplification): Incorrect – these do not describe the actual trade-offs encountered."
      },
      {
        "id": "trans-q73",
        "difficulty": "H",
        "text": "Analyzing the dot product between queries and keys, which choice or choices correctly discuss the implications of using identical weight matrices for different tokens on the symmetry of the attention pattern?",
        "options": [
          "It ensures consistent feature extraction for similar tokens.",
          "It results in similar query-key interactions for tokens with related contexts.",
          "It can lead to redundancy if all tokens project to similar vectors.",
          "It guarantees that the attention matrix is symmetric.",
          "It requires masking to break any symmetry for autoregressive tasks.",
          "It has no effect on the attention distribution.",
          "It forces the model to focus solely on positional information.",
          "I don't know"
        ],
        "correctOptionIndices": [0, 1, 2, 4],
        "explanation": "Using identical weight matrices across tokens ensures that similar tokens produce similar query and key representations, which supports consistent feature extraction and can result in redundancy if not diversified. However, masking is essential to break symmetry in autoregressive tasks. \nOption explanations:\n• Options 0, 1, 2, and 4: Correct – they reflect the nuances of applying the same weight matrices to different tokens.\n• Options 3, 5, and 6: Incorrect – the attention matrix is not inherently symmetric due to masking, and these options misinterpret the role of weight matrices."
      },
    ],
  },
];
// Calculate DONT_KNOW_INDEX based on the last option of the first question
// Assumes "I don't know" is consistently the last option in all questions
const firstQuestionOptions = quizData[0]?.questions[0]?.options;
// Use a fallback index if quizData is empty or malformed
export const DONT_KNOW_INDEX = firstQuestionOptions ? firstQuestionOptions.length - 1 : 4;

// Helper function to compare arrays for correctness checking
export function arraysHaveSameElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;

    // Ensure elements are numbers before sorting, handle potential non-numeric selections
    // (e.g., if the selection state somehow stores values other than the indices)
    const cleanArr1 = arr1.filter(el => typeof el === 'number');
    const cleanArr2 = arr2.filter(el => typeof el === 'number');

    // If filtering changed the arrays, they weren't just numbers
    if (cleanArr1.length !== arr1.length || cleanArr2.length !== arr2.length) {
        return false;
    }
    // Check length again after filtering, just in case
    if (cleanArr1.length !== cleanArr2.length) return false;

    // Sort copies of the arrays numerically to compare contents regardless of order
    const sortedArr1 = [...cleanArr1].sort((a, b) => a - b);
    const sortedArr2 = [...cleanArr2].sort((a, b) => a - b);

    // Check if every element in the sorted arrays matches at the same position
    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}

// NEW: Persist new quiz data permanently by updating this file (requires Node.js environment)
export function persistQuizData(newQuiz) {
  try {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'quizData.js');
    let content = fs.readFileSync(filePath, 'utf8');
    // Format the new quiz object (indent nicely)
    const insertion = JSON.stringify(newQuiz, null, 2) + ',\n';
    // Find the quizData array declaration and insert the new quiz at the top.
    const regex = /(export\s+const\s+quizData\s*=\s*\[)(\s*\n?)/;
    if (!regex.test(content)) {
      throw new Error("quizData array declaration not found in file.");
    }
    content = content.replace(regex, `$1\n${insertion}$2`);
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.error("Error persisting quiz data:", error);
  }
}