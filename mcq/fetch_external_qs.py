import json
import urllib.request
import html
import random

# Start with the existing rich questions in the file (or just read them)
# To avoid wiping out our good environmental ones, let's load what's currently in questions.js
try:
    with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "r", encoding="utf-8") as f:
        content = f.read()
        # strip "const allQuestions = " and ";"
        json_data = content.replace("const allQuestions = ", "").strip()
        if json_data.endswith(";"):
            json_data = json_data[:-1]
        questions = json.loads(json_data)
except Exception as e:
    print("Error reading existing questions:", e)
    questions = []

id_counter = len(questions) + 1

def fetch_opentdb(amount=50, category=17):
    url = f"https://opentdb.com/api.php?amount={amount}&category={category}&type=multiple"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return data.get("results", [])
    except Exception as e:
        print("Failed to fetch from OpenTDB:", e)
        return []

print(f"Starting with {len(questions)} existing questions.")
print("Fetching from external APIs...")

# Fetch 10 pages of 50 questions from OpenTDB (Science & Nature)
new_fetched = 0
for i in range(10): # Fetch ~500 questions
    results = fetch_opentdb(50, 17)
    for r in results:
        q_text = html.unescape(r["question"])
        correct = html.unescape(r["correct_answer"])
        incorrects = [html.unescape(i) for i in r["incorrect_answers"]]
        
        opts = incorrects + [correct]
        random.shuffle(opts)
        correct_idx = opts.index(correct)
        
        diff = r["difficulty"]
        
        questions.append({
            "id": id_counter,
            "unit": "Unit VI", # Categorizing fetched general science under Unit VI / Human & Env
            "difficulty": diff,
            "question": q_text,
            "options": opts,
            "correctAnswer": correct_idx,
            "explanation": f"The correct answer is {correct}."
        })
        id_counter += 1
        new_fetched += 1

print(f"Fetched {new_fetched} new questions from external sources.")

# Dump back to questions.js
js_content = "const allQuestions = " + json.dumps(questions, indent=4) + ";\n"
with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Total questions now in database: {len(questions)}")
