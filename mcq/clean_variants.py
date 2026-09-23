import json
import re

print("Reading questions.js...")
with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "r", encoding="utf-8") as f:
    content = f.read()
    json_data = content.replace("const allQuestions = ", "").strip()
    if json_data.endswith(";"):
        json_data = json_data[:-1]
    questions = json.loads(json_data)

print(f"Original question count: {len(questions)}")

unique_questions = []

# Filter out variants
for q in questions:
    text = q["question"]
    # If it contains "(Variant", it's a programmatic duplicate
    if "(Variant" not in text:
        unique_questions.append(q)

# reassign IDs
for idx, q in enumerate(unique_questions):
    q["id"] = idx + 1

print(f"Cleaned question count: {len(unique_questions)}")

js_content = "const allQuestions = " + json.dumps(unique_questions, indent=4) + ";\n"
with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)
