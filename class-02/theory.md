- Top-k (static = fixed) , k = any number

- LLM => sophisticated autonomos system

- Top-p (Dynamic) = based on probability

  - limits choices base don corralative probability

- Top_P (Dynamic) Threshhost : 0/8%

  - combined probability

    - In Top_P we set the threshold
    - When selecting a next word combine probaility from the threshod will be consider

Conservative: Temperature 0.1, Top-P 0.9, Top-k 20

- Temperature (Supreme Controller): Low
- Top-P 90% (Second Preference) = High
- Top-k 20 (least Preference) = Low

Balanced: Temperature 0.2, Top-P 0.95, Top-k 30
Creative: Temperature 0.9, Top-P 0.99, Top-K 40

- Zero-Shot Prompting (shot = example)
