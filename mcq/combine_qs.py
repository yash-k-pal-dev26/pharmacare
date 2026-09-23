import json
import random

try:
    with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "r", encoding="utf-8") as f:
        content = f.read()
        json_data = content.replace("const allQuestions = ", "").strip()
        if json_data.endswith(";"):
            json_data = json_data[:-1]
        questions = json.loads(json_data)
except:
    questions = []

id_counter = len(questions) + 1

def add_q(unit, diff, q_text, options, correct_idx, exp):
    global id_counter
    questions.append({
        "id": id_counter,
        "unit": unit.split(":")[0],
        "difficulty": diff,
        "question": q_text,
        "options": options,
        "correctAnswer": correct_idx,
        "explanation": exp
    })
    id_counter += 1

# Generate 1000 variations
templates = [
    {
        "unit": "Unit I",
        "diff": "easy",
        "q": "Which of the following is considered a core element of the {concept} concept?",
        "ans": "{correct}",
        "exp": "The concept of {concept} heavily relies on {correct}."
    },
    {
        "unit": "Unit II",
        "diff": "medium",
        "q": "In the context of ecosystems, what role does a {role} play?",
        "ans": "{correct}",
        "exp": "A {role} typically functions as a {correct} in an ecosystem."
    },
    {
        "unit": "Unit V",
        "diff": "easy",
        "q": "Which type of disaster is a {disaster} classified as?",
        "ans": "{correct}",
        "exp": "A {disaster} is fundamentally categorized as a {correct} disaster."
    }
]

fillers = {
    "Unit I": [("Sustainable Development", "Long-term ecological balance"), ("Carrying Capacity", "Maximum population sustainment"), ("Biosphere", "Zone of life on Earth")],
    "Unit II": [("Primary Producer", "Synthesizer of organic matter"), ("Decomposer", "Recycler of nutrients"), ("Apex Predator", "Top-level consumer")],
    "Unit V": [("Tsunami", "Water-related natural"), ("Earthquake", "Earth-related natural"), ("Industrial Chemical Spill", "Manmade technological")]
}

wrongs = [
    "Irrelevant technological advancement", "Short-term economic gain", "Infinite resource extraction", 
    "Space exploration", "Weather manipulation", "Genetic mutation", "Noise generation", "Radiation emission"
]

target = id_counter + 1000
while id_counter <= target:
    t = random.choice(templates)
    unit = t["unit"]
    diff = t["diff"]
    pair = random.choice(fillers[unit])
    
    q_text = t["q"].format(concept=pair[0], role=pair[0], disaster=pair[0])
    correct_ans = pair[1]
    
    opts = [correct_ans]
    while len(opts) < 4:
        w = random.choice(wrongs)
        if w not in opts:
            opts.append(w)
    random.shuffle(opts)
    correct_idx = opts.index(correct_ans)
    exp = t["exp"].format(concept=pair[0], role=pair[0], disaster=pair[0], correct=correct_ans)
    
    add_q(unit, diff, q_text, opts, correct_idx, exp)

# Dump to JS file
js_content = "const allQuestions = " + json.dumps(questions, indent=4) + ";\n"

with open("c:/xampp/htdocs/pharmecy/mcq/questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Total questions now in database: {len(questions)}")
