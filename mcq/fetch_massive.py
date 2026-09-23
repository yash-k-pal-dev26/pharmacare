import json
import urllib.request
import html
import random
import time

try:
    with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "r", encoding="utf-8") as f:
        content = f.read()
        json_data = content.replace("const allQuestions = ", "").strip()
        if json_data.endswith(";"):
            json_data = json_data[:-1]
        questions = json.loads(json_data)
except Exception as e:
    print("Error reading existing questions:", e)
    questions = []

existing_texts = set([q["question"] for q in questions])
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

categories = [17, 22, 9] # Science & Nature, Geography, General Knowledge

new_fetched = 0
# Fetch 15 batches of 50 questions (~750)
for i in range(15):
    cat = random.choice(categories)
    print(f"Fetching batch {i+1}/15 for category {cat}...")
    results = fetch_opentdb(50, cat)
    
    for r in results:
        q_text = html.unescape(r["question"]).strip()
        
        # Deduplicate immediately
        if q_text in existing_texts:
            continue
            
        existing_texts.add(q_text)
        
        correct = html.unescape(r["correct_answer"])
        incorrects = [html.unescape(ans) for ans in r["incorrect_answers"]]
        
        opts = incorrects + [correct]
        random.shuffle(opts)
        correct_idx = opts.index(correct)
        
        diff = r["difficulty"]
        
        questions.append({
            "id": id_counter,
            "unit": "Unit VI",
            "difficulty": diff,
            "question": q_text,
            "options": opts,
            "correctAnswer": correct_idx,
            "explanation": f"The correct answer is {correct}."
        })
        id_counter += 1
        new_fetched += 1

    # Sleep to respect rate limits (1 req / 5 sec)
    print("Sleeping 6 seconds to respect rate limits...")
    time.sleep(6)

print(f"Fetched {new_fetched} perfectly unique new questions from external sources.")

js_content = "const allQuestions = " + json.dumps(questions, indent=4) + ";\n"
with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Total questions now in database: {len(questions)}")
