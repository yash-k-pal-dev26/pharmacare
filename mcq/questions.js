const allQuestions = [
    {
        "id": 1,
        "unit": "Unit I",
        "difficulty": "hard",
        "question": "Which international treaty was signed to phase out the production of numerous substances that are responsible for ozone depletion?",
        "options": [
            "Kyoto Protocol",
            "Montreal Protocol",
            "Paris Agreement",
            "Cartagena Protocol"
        ],
        "correctAnswer": 1,
        "explanation": "The Montreal Protocol (1987) is an international treaty designed to protect the ozone layer by phasing out the production of ozone-depleting substances."
    },
    {
        "id": 2,
        "unit": "Unit IV",
        "difficulty": "hard",
        "question": "The Kyoto Protocol primarily aims to reduce the emission of:",
        "options": [
            "Ozone-depleting substances",
            "Greenhouse gases",
            "Heavy metals",
            "Persistent Organic Pollutants"
        ],
        "correctAnswer": 1,
        "explanation": "The Kyoto Protocol is an international treaty that commits state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring."
    },
    {
        "id": 3,
        "unit": "Unit IV",
        "difficulty": "medium",
        "question": "The Minamata Convention is a global treaty to protect human health and the environment from the adverse effects of:",
        "options": [
            "Lead",
            "Asbestos",
            "Mercury",
            "Cadmium"
        ],
        "correctAnswer": 2,
        "explanation": "The Minamata Convention focuses on phasing out the use and emission of Mercury."
    },
    {
        "id": 4,
        "unit": "Unit III",
        "difficulty": "hard",
        "question": "The Cartagena Protocol deals with:",
        "options": [
            "Biosafety of living modified organisms",
            "Protection of wetlands",
            "Ozone layer protection",
            "Trade in endangered species"
        ],
        "correctAnswer": 0,
        "explanation": "The Cartagena Protocol on Biosafety to the Convention on Biological Diversity is an international agreement on biosafety as a supplement to the CBD."
    },
    {
        "id": 5,
        "unit": "Unit III",
        "difficulty": "medium",
        "question": "CITES is an international agreement aimed at regulating:",
        "options": [
            "Greenhouse gas emissions",
            "International trade in endangered species of wild fauna and flora",
            "Transboundary movements of hazardous wastes",
            "Whaling"
        ],
        "correctAnswer": 1,
        "explanation": "CITES stands for the Convention on International Trade in Endangered Species of Wild Fauna and Flora."
    },
    {
        "id": 6,
        "unit": "Unit III",
        "difficulty": "easy",
        "question": "The Ramsar Convention is associated with the conservation of:",
        "options": [
            "Forests",
            "Wetlands",
            "Deserts",
            "Mountains"
        ],
        "correctAnswer": 1,
        "explanation": "The Ramsar Convention (1971) is an international treaty for the conservation and sustainable use of wetlands."
    },
    {
        "id": 7,
        "unit": "Unit IV",
        "difficulty": "hard",
        "question": "The Basel Convention controls the transboundary movements of:",
        "options": [
            "Hazardous wastes and their disposal",
            "Endangered species",
            "Living modified organisms",
            "Ozone-depleting substances"
        ],
        "correctAnswer": 0,
        "explanation": "The Basel Convention is designed to reduce the movements of hazardous waste between nations."
    },
    {
        "id": 8,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "Which of the following is a sedimentary biogeochemical cycle?",
        "options": [
            "Carbon cycle",
            "Nitrogen cycle",
            "Phosphorus cycle",
            "Oxygen cycle"
        ],
        "correctAnswer": 2,
        "explanation": "The phosphorus cycle is a sedimentary cycle because the main reservoir of phosphorus is the earth's crust, not the atmosphere."
    },
    {
        "id": 9,
        "unit": "Unit II",
        "difficulty": "hard",
        "question": "In the nitrogen cycle, the process of converting ammonia into nitrites and then into nitrates is called:",
        "options": [
            "Nitrogen fixation",
            "Ammonification",
            "Nitrification",
            "Denitrification"
        ],
        "correctAnswer": 2,
        "explanation": "Nitrification is the biological oxidation of ammonia to nitrite followed by the oxidation of the nitrite to nitrate."
    },
    {
        "id": 10,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "Denitrification is carried out by which type of bacteria?",
        "options": [
            "Rhizobium",
            "Nitrosomonas",
            "Pseudomonas",
            "Azotobacter"
        ],
        "correctAnswer": 2,
        "explanation": "Pseudomonas and Thiobacillus are examples of denitrifying bacteria that convert nitrates back to nitrogen gas."
    },
    {
        "id": 11,
        "unit": "Unit II",
        "difficulty": "easy",
        "question": "The term 'Ecology' was coined by:",
        "options": [
            "Charles Darwin",
            "Ernst Haeckel",
            "Arthur Tansley",
            "Eugene Odum"
        ],
        "correctAnswer": 1,
        "explanation": "Ernst Haeckel coined the term 'ecology' (Oekologie) in 1866."
    },
    {
        "id": 12,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "An ecotone is:",
        "options": [
            "A polluted area",
            "A transition zone between two ecosystems",
            "An area of high altitude",
            "A specific type of biome"
        ],
        "correctAnswer": 1,
        "explanation": "An ecotone is a transition area between two biological communities, where two communities meet and integrate (e.g., an estuary)."
    },
    {
        "id": 13,
        "unit": "Unit II",
        "difficulty": "hard",
        "question": "The '10% Rule' of energy transfer in food chains was proposed by:",
        "options": [
            "Raymond Lindeman",
            "Arthur Tansley",
            "Charles Elton",
            "Eugene Odum"
        ],
        "correctAnswer": 0,
        "explanation": "Raymond Lindeman (1942) proposed the 10% rule, stating that during the transfer of energy from one trophic level to the next, only about 10% of the energy is stored as biomass."
    },
    {
        "id": 14,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "The concept of 'Ecological Niche' was first developed by:",
        "options": [
            "Joseph Grinnell",
            "Arthur Tansley",
            "Charles Darwin",
            "Ernst Haeckel"
        ],
        "correctAnswer": 0,
        "explanation": "Joseph Grinnell first used the term niche in 1917 to describe the habitat and requirements of a species."
    },
    {
        "id": 15,
        "unit": "Unit II",
        "difficulty": "hard",
        "question": "Which type of ecological succession occurs on a newly cooled lava field?",
        "options": [
            "Primary succession",
            "Secondary succession",
            "Allogenic succession",
            "Autogenic succession"
        ],
        "correctAnswer": 0,
        "explanation": "Primary succession occurs in essentially lifeless areas\u2014regions in which the soil is incapable of sustaining life as a result of such factors as lava flows."
    },
    {
        "id": 16,
        "unit": "Unit IV",
        "difficulty": "easy",
        "question": "The Bhopal Gas Tragedy in 1984 was caused by the leakage of which gas?",
        "options": [
            "Methyl Isocyanate",
            "Hydrogen Sulfide",
            "Carbon Monoxide",
            "Sulfur Dioxide"
        ],
        "correctAnswer": 0,
        "explanation": "The Bhopal disaster was a chemical leak of methyl isocyanate (MIC) gas at the Union Carbide India Limited pesticide plant."
    },
    {
        "id": 17,
        "unit": "Unit IV",
        "difficulty": "medium",
        "question": "Minamata disease in Japan was caused by the consumption of fish contaminated with:",
        "options": [
            "Lead",
            "Mercury",
            "Cadmium",
            "Arsenic"
        ],
        "correctAnswer": 1,
        "explanation": "Minamata disease is a neurological syndrome caused by severe mercury poisoning."
    },
    {
        "id": 18,
        "unit": "Unit IV",
        "difficulty": "hard",
        "question": "Itai-itai disease was first recognized in Japan due to poisoning by:",
        "options": [
            "Mercury",
            "Lead",
            "Cadmium",
            "Arsenic"
        ],
        "correctAnswer": 2,
        "explanation": "Itai-itai disease was caused by cadmium poisoning due to mining activities in Toyama Prefecture."
    },
    {
        "id": 19,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "The Chernobyl disaster (1986) was a catastrophic:",
        "options": [
            "Chemical spill",
            "Nuclear accident",
            "Oil spill",
            "Coal mine explosion"
        ],
        "correctAnswer": 1,
        "explanation": "Chernobyl was a catastrophic nuclear accident that occurred in the No. 4 nuclear reactor in Ukraine."
    },
    {
        "id": 20,
        "unit": "Unit III",
        "difficulty": "medium",
        "question": "The state animal of Rajasthan, which is heavily protected by the Bishnoi community, is the:",
        "options": [
            "Tiger",
            "Lion",
            "Blackbuck",
            "Elephant"
        ],
        "correctAnswer": 2,
        "explanation": "The Blackbuck is native to India and is considered sacred and protected by the Bishnoi community."
    },
    {
        "id": 21,
        "unit": "Unit III",
        "difficulty": "hard",
        "question": "The Sangai, a rare and endangered subspecies of brow-antlered deer, is found only in which Indian state?",
        "options": [
            "Assam",
            "Manipur",
            "Mizoram",
            "Nagaland"
        ],
        "correctAnswer": 1,
        "explanation": "The Sangai is endemic to the floating phumdis of Keibul Lamjao National Park in Manipur."
    },
    {
        "id": 22,
        "unit": "Unit III",
        "difficulty": "medium",
        "question": "The Nilgiri Tahr is an ungulate endemic to the:",
        "options": [
            "Himalayas",
            "Western Ghats",
            "Eastern Ghats",
            "Aravalli Range"
        ],
        "correctAnswer": 1,
        "explanation": "The Nilgiri Tahr is endemic to the Nilgiri Hills and the southern portion of the Western Ghats in Tamil Nadu and Kerala."
    },
    {
        "id": 23,
        "unit": "Unit IV",
        "difficulty": "easy",
        "question": "The ozone layer is primarily found in which layer of the atmosphere?",
        "options": [
            "Troposphere",
            "Stratosphere",
            "Mesosphere",
            "Thermosphere"
        ],
        "correctAnswer": 1,
        "explanation": "About 90% of the ozone in the Earth's atmosphere is found in the stratosphere."
    },
    {
        "id": 24,
        "unit": "Unit IV",
        "difficulty": "medium",
        "question": "Which of the following is NOT a greenhouse gas?",
        "options": [
            "Carbon dioxide",
            "Methane",
            "Nitrogen",
            "Water vapor"
        ],
        "correctAnswer": 2,
        "explanation": "Nitrogen makes up about 78% of the atmosphere and is not a greenhouse gas. Greenhouse gases include CO2, Methane, and Water vapor."
    },
    {
        "id": 25,
        "unit": "Unit IV",
        "difficulty": "hard",
        "question": "Albedo refers to:",
        "options": [
            "The measure of water pollution",
            "The reflectivity of a surface",
            "The rate of ozone depletion",
            "The amount of carbon stored in forests"
        ],
        "correctAnswer": 1,
        "explanation": "Albedo is the measure of the diffuse reflection of solar radiation out of the total solar radiation and measured on a scale from 0 to 1."
    },
    {
        "id": 26,
        "unit": "Unit I",
        "difficulty": "medium",
        "question": "The term 'Sustainable Development' was officially defined in 1987 by the:",
        "options": [
            "Brundtland Commission",
            "Brandt Commission",
            "Mandal Commission",
            "Kothari Commission"
        ],
        "correctAnswer": 0,
        "explanation": "The World Commission on Environment and Development, known as the Brundtland Commission, defined sustainable development in 'Our Common Future'."
    },
    {
        "id": 27,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "Which country is currently the world's largest producer of solar energy?",
        "options": [
            "USA",
            "India",
            "China",
            "Germany"
        ],
        "correctAnswer": 2,
        "explanation": "China leads the world in both installed solar capacity and solar panel manufacturing."
    },
    {
        "id": 28,
        "unit": "Unit II",
        "difficulty": "easy",
        "question": "Photovoltaic cells convert sunlight directly into:",
        "options": [
            "Heat",
            "Electricity",
            "Chemical energy",
            "Mechanical energy"
        ],
        "correctAnswer": 1,
        "explanation": "Photovoltaic cells convert light (photons) directly into electricity (voltage) using the photovoltaic effect."
    },
    {
        "id": 29,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "Biogas primarily consists of:",
        "options": [
            "Methane and Carbon dioxide",
            "Propane and Butane",
            "Nitrogen and Oxygen",
            "Hydrogen and Helium"
        ],
        "correctAnswer": 0,
        "explanation": "Biogas is primarily methane (CH4) and carbon dioxide (CO2) and may have small amounts of hydrogen sulfide, moisture and siloxanes."
    },
    {
        "id": 30,
        "unit": "Unit IV",
        "difficulty": "medium",
        "question": "In solid waste management, 'Composting' is an example of:",
        "options": [
            "Biological treatment",
            "Thermal treatment",
            "Landfilling",
            "Chemical treatment"
        ],
        "correctAnswer": 0,
        "explanation": "Composting is the biological decomposition of organic waste by bacteria, fungi, worms, and other organisms under controlled aerobic conditions."
    },
    {
        "id": 31,
        "unit": "Unit IV",
        "difficulty": "hard",
        "question": "Leachate is a major environmental concern associated with:",
        "options": [
            "Incineration",
            "Landfills",
            "Composting",
            "Recycling"
        ],
        "correctAnswer": 1,
        "explanation": "Leachate is the liquid that drains or 'leaches' from a landfill, containing dissolved and suspended toxic materials."
    },
    {
        "id": 32,
        "unit": "Unit IV",
        "difficulty": "easy",
        "question": "What do the '3 Rs' of waste management stand for?",
        "options": [
            "Reduce, Reuse, Recycle",
            "Refuse, Repurpose, Rebuild",
            "Restore, Renew, Replenish",
            "Retrieve, Recover, Return"
        ],
        "correctAnswer": 0,
        "explanation": "The standard waste hierarchy is Reduce, Reuse, and Recycle."
    },
    {
        "id": 33,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Under which category of natural disasters does a Tsunami fall?",
        "options": [
            "Water related",
            "Air related",
            "Earth related",
            "Manmade"
        ],
        "correctAnswer": 0,
        "explanation": "A Tsunami is fundamentally classified as a Water related disaster."
    },
    {
        "id": 34,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "What is the primary natural trigger for a Tsunami?",
        "options": [
            "Underwater earthquakes or volcanic eruptions",
            "Deforestation",
            "Ozone depletion",
            "Greenhouse gas emissions"
        ],
        "correctAnswer": 0,
        "explanation": "A Tsunami is primarily triggered by Underwater earthquakes or volcanic eruptions."
    },
    {
        "id": 35,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Under which category of natural disasters does a Cyclone fall?",
        "options": [
            "Water related",
            "Air related",
            "Biological",
            "Earth related"
        ],
        "correctAnswer": 1,
        "explanation": "A Cyclone is fundamentally classified as a Air related disaster."
    },
    {
        "id": 36,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "What is the primary natural trigger for a Cyclone?",
        "options": [
            "Ozone depletion",
            "Deforestation",
            "Solar flares",
            "Low-pressure atmospheric systems over warm oceans"
        ],
        "correctAnswer": 3,
        "explanation": "A Cyclone is primarily triggered by Low-pressure atmospheric systems over warm oceans."
    },
    {
        "id": 37,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Under which category of natural disasters does a Earthquake fall?",
        "options": [
            "Water related",
            "Earth related",
            "Manmade",
            "Biological"
        ],
        "correctAnswer": 1,
        "explanation": "A Earthquake is fundamentally classified as a Earth related disaster."
    },
    {
        "id": 38,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "What is the primary natural trigger for a Earthquake?",
        "options": [
            "Tectonic plate movements",
            "Ozone depletion",
            "Solar flares",
            "Greenhouse gas emissions"
        ],
        "correctAnswer": 0,
        "explanation": "A Earthquake is primarily triggered by Tectonic plate movements."
    },
    {
        "id": 39,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Under which category of natural disasters does a Avalanche fall?",
        "options": [
            "Manmade",
            "Earth related",
            "Water related",
            "Air related"
        ],
        "correctAnswer": 1,
        "explanation": "A Avalanche is fundamentally classified as a Earth related disaster."
    },
    {
        "id": 40,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "What is the primary natural trigger for a Avalanche?",
        "options": [
            "Solar flares",
            "Greenhouse gas emissions",
            "Snowpack instability on slopes",
            "Deforestation"
        ],
        "correctAnswer": 2,
        "explanation": "A Avalanche is primarily triggered by Snowpack instability on slopes."
    },
    {
        "id": 41,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Under which category of natural disasters does a Drought fall?",
        "options": [
            "Biological",
            "Manmade",
            "Water related",
            "Air related"
        ],
        "correctAnswer": 2,
        "explanation": "A Drought is fundamentally classified as a Water related disaster."
    },
    {
        "id": 42,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "What is the primary natural trigger for a Drought?",
        "options": [
            "Greenhouse gas emissions",
            "Solar flares",
            "Deforestation",
            "Prolonged shortage in water supply"
        ],
        "correctAnswer": 3,
        "explanation": "A Drought is primarily triggered by Prolonged shortage in water supply."
    },
    {
        "id": 43,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Under which category of natural disasters does a Landslide fall?",
        "options": [
            "Biological",
            "Manmade",
            "Water related",
            "Earth related"
        ],
        "correctAnswer": 3,
        "explanation": "A Landslide is fundamentally classified as a Earth related disaster."
    },
    {
        "id": 44,
        "unit": "Unit V",
        "difficulty": "medium",
        "question": "What is the primary natural trigger for a Landslide?",
        "options": [
            "Deforestation",
            "Ozone depletion",
            "Solar flares",
            "Gravity moving rock, earth, or debris down a slope"
        ],
        "correctAnswer": 3,
        "explanation": "A Landslide is primarily triggered by Gravity moving rock, earth, or debris down a slope."
    },
    {
        "id": 45,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Bishnois movement primarily originated or took place in which Indian state/region?",
        "options": [
            "Tamil Nadu",
            "Bihar/Jharkhand",
            "Uttarakhand",
            "Rajasthan"
        ],
        "correctAnswer": 3,
        "explanation": "The Bishnois movement is historically tied to Rajasthan."
    },
    {
        "id": 46,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the primary objective of the Bishnois movement?",
        "options": [
            "Protection of Khejri trees and blackbucks",
            "Banning plastic use",
            "Promoting nuclear energy",
            "Cleaning urban rivers"
        ],
        "correctAnswer": 0,
        "explanation": "The core aim of Bishnois was Protection of Khejri trees and blackbucks."
    },
    {
        "id": 47,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Chipko movement primarily originated or took place in which Indian state/region?",
        "options": [
            "Punjab",
            "Karnataka",
            "Bihar/Jharkhand",
            "Uttarakhand"
        ],
        "correctAnswer": 3,
        "explanation": "The Chipko movement is historically tied to Uttarakhand."
    },
    {
        "id": 48,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the primary objective of the Chipko movement?",
        "options": [
            "Hugging trees to prevent deforestation",
            "Banning plastic use",
            "Promoting nuclear energy",
            "Cleaning urban rivers"
        ],
        "correctAnswer": 0,
        "explanation": "The core aim of Chipko was Hugging trees to prevent deforestation."
    },
    {
        "id": 49,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Appiko movement primarily originated or took place in which Indian state/region?",
        "options": [
            "Tamil Nadu",
            "Karnataka",
            "Assam",
            "Rajasthan"
        ],
        "correctAnswer": 1,
        "explanation": "The Appiko movement is historically tied to Karnataka."
    },
    {
        "id": 50,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the primary objective of the Appiko movement?",
        "options": [
            "Southern equivalent of Chipko to save forests",
            "Banning plastic use",
            "Promoting nuclear energy",
            "Cleaning urban rivers"
        ],
        "correctAnswer": 0,
        "explanation": "The core aim of Appiko was Southern equivalent of Chipko to save forests."
    },
    {
        "id": 51,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Silent Valley movement primarily originated or took place in which Indian state/region?",
        "options": [
            "Gujarat/MP/Maharashtra",
            "West Bengal",
            "Kerala",
            "Rajasthan"
        ],
        "correctAnswer": 2,
        "explanation": "The Silent Valley movement is historically tied to Kerala."
    },
    {
        "id": 52,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the primary objective of the Silent Valley movement?",
        "options": [
            "Preventing a hydroelectric dam in a tropical forest",
            "Banning plastic use",
            "Promoting nuclear energy",
            "Cleaning urban rivers"
        ],
        "correctAnswer": 0,
        "explanation": "The core aim of Silent Valley was Preventing a hydroelectric dam in a tropical forest."
    },
    {
        "id": 53,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Narmada Bachao Andolan movement primarily originated or took place in which Indian state/region?",
        "options": [
            "West Bengal",
            "Uttarakhand",
            "Gujarat/MP/Maharashtra",
            "Rajasthan"
        ],
        "correctAnswer": 2,
        "explanation": "The Narmada Bachao Andolan movement is historically tied to Gujarat/MP/Maharashtra."
    },
    {
        "id": 54,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the primary objective of the Narmada Bachao Andolan movement?",
        "options": [
            "Protesting against large dams on the Narmada river",
            "Banning plastic use",
            "Promoting nuclear energy",
            "Cleaning urban rivers"
        ],
        "correctAnswer": 0,
        "explanation": "The core aim of Narmada Bachao Andolan was Protesting against large dams on the Narmada river."
    },
    {
        "id": 55,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Jungle Bachao Andolan movement primarily originated or took place in which Indian state/region?",
        "options": [
            "Kerala",
            "Tamil Nadu",
            "Bihar/Jharkhand",
            "Punjab"
        ],
        "correctAnswer": 2,
        "explanation": "The Jungle Bachao Andolan movement is historically tied to Bihar/Jharkhand."
    },
    {
        "id": 56,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the primary objective of the Jungle Bachao Andolan movement?",
        "options": [
            "Protesting the replacement of natural sal forests with commercial teak",
            "Banning plastic use",
            "Promoting nuclear energy",
            "Cleaning urban rivers"
        ],
        "correctAnswer": 0,
        "explanation": "The core aim of Jungle Bachao Andolan was Protesting the replacement of natural sal forests with commercial teak."
    },
    {
        "id": 57,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What medication was once commonly used as rat poison?",
        "options": [
            "Tylenol",
            "Eliquis",
            "Coumadin",
            "Aspirin"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Coumadin."
    },
    {
        "id": 58,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
        "options": [
            "Carbon",
            "Nitrogen",
            "Hydrogen",
            "Helium"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Nitrogen."
    },
    {
        "id": 59,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the name of the cognitive bias wherein a person with low ability in a particular skill mistake themselves as being superior?",
        "options": [
            "Dunning-Kruger effect",
            "Meyers-Briggs effect",
            "Freud-Hall effect",
            "M\u00fcller-Lyer effect"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Dunning-Kruger effect."
    },
    {
        "id": 60,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What do you study if you are studying entomology?",
        "options": [
            "Fish",
            "the Brain",
            "Humans",
            "Insects"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Insects."
    },
    {
        "id": 61,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "71% of the Earth's surface is made up of",
        "options": [
            "Continents",
            "Water",
            "Deserts",
            "Forests"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Water."
    },
    {
        "id": 62,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which noble gas has the lowest atomic number?",
        "options": [
            "Helium",
            "Argon",
            "Krypton",
            "Neon"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Helium."
    },
    {
        "id": 63,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
        "options": [
            "2",
            "1",
            "0",
            "5"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 2."
    },
    {
        "id": 64,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many hearts does an octopus have?",
        "options": [
            "One",
            "Four",
            "Two",
            "Three"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Three."
    },
    {
        "id": 65,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the common name of the chemical compound \"dihydrogen monoxide\"?",
        "options": [
            "Water",
            "Methane",
            "Laughing Gas",
            "Ammonia "
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Water."
    },
    {
        "id": 66,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which psychological term refers to the stress of holding contrasting beliefs?",
        "options": [
            "Flip-Flop Syndrome",
            "Split-Brain",
            "Blind Sight",
            "Cognitive Dissonance"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Cognitive Dissonance."
    },
    {
        "id": 67,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which gas forms about 78% of the Earth\u2019s atmosphere?",
        "options": [
            "Nitrogen",
            "Oxygen",
            "Argon",
            "Carbon Dioxide"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Nitrogen."
    },
    {
        "id": 68,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the thin, outermost layer of the Earth?",
        "options": [
            "Mantle",
            "Exosphere",
            "Outer Core",
            "Crust"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Crust."
    },
    {
        "id": 69,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the standard SI unit for mass?",
        "options": [
            "Pound",
            "Gram",
            "Tonne",
            "Kilogram"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Kilogram."
    },
    {
        "id": 70,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What produces the green colour of most plant leaves?",
        "options": [
            "UV radiation",
            "Light refraction",
            "Natural pigments",
            "Chlorophyll"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Chlorophyll."
    },
    {
        "id": 71,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the colour of unoxidized blood?",
        "options": [
            "Green",
            "Blue",
            "Purple",
            "Red"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Red."
    },
    {
        "id": 72,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is radiation measured in?",
        "options": [
            "Decibel",
            "Watt",
            "Gray ",
            "Kelvin"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Gray ."
    },
    {
        "id": 73,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which Landsat Satellite failed to reach orbit?",
        "options": [
            "Landsat 3",
            "Landsat 5",
            "Landsat 4",
            "Landsat 6"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Landsat 6."
    },
    {
        "id": 74,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which color cannot be produced in Roses, even through genetic alteration?",
        "options": [
            "Brown",
            "Orange",
            "Black",
            "Blue"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Blue."
    },
    {
        "id": 75,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which type of rock is created by intense heat AND pressure?",
        "options": [
            "Diamond",
            "Igneous",
            "Sedimentary",
            "Metamorphic"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Metamorphic."
    },
    {
        "id": 76,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these is NOT a bone found in the human arm?",
        "options": [
            "Tibia",
            "Ulna",
            "Radius",
            "Humerus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Tibia."
    },
    {
        "id": 77,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Naturally occuring uranium primarily consists of which isotope?",
        "options": [
            "235",
            "238",
            "233",
            "239"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 238."
    },
    {
        "id": 78,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is Hypernatremia?",
        "options": [
            "Increase in blood glucose",
            "Decrease in blood iron",
            "Decrease in blood potassium",
            "Increase in blood sodium"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Increase in blood sodium."
    },
    {
        "id": 79,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
        "options": [
            "Housemaid's Knee",
            "Shin Splints",
            "Carpal Tunnel",
            "Tennis Elbow"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Shin Splints."
    },
    {
        "id": 80,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The medical term for the belly button is which of the following?",
        "options": [
            "Paxillus",
            "Nares",
            "Umbilicus",
            "Nevus"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Umbilicus."
    },
    {
        "id": 81,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which desert is the only desert in the world where the \"Saguaro\" cactus grows indigenously?",
        "options": [
            "The Arabian Desert",
            "The Sonoran Desert",
            "The Yuma Desert",
            "The Gobi Desert"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is The Sonoran Desert."
    },
    {
        "id": 82,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is \"Stenoma\"?",
        "options": [
            "A combat stimulant from WW2",
            "A genus of moths",
            "A type of seasoning",
            "A port city in the carribean"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is A genus of moths."
    },
    {
        "id": 83,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What term is best associated with Sigmund Freud?",
        "options": [
            "Dialectical Behavior Therapy",
            "Psychoanalysis",
            "Theory of Gravity",
            "Cognitive-Behavioral Therapy"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Psychoanalysis."
    },
    {
        "id": 84,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following bones is not in the leg?",
        "options": [
            "Tibia",
            "Fibula ",
            "Radius",
            "Patella"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Radius."
    },
    {
        "id": 85,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
        "options": [
            "Sputnik 1",
            "Soyuz 7K-OK",
            "Voskhod 3KV",
            "Zenit-2"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Sputnik 1."
    },
    {
        "id": 86,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is a semiconductor amplifying device?",
        "options": [
            "P-N junction",
            "transistor",
            "tube",
            "diode"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is transistor."
    },
    {
        "id": 87,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Who discovered the Law of Gravity?",
        "options": [
            "Sir Isaac Newton",
            "Charles Darwin",
            "Galileo Galilei",
            "Albert Einstein"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Sir Isaac Newton."
    },
    {
        "id": 88,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the name for the auditory illusion of a note that seems to be rising infinitely?",
        "options": [
            "Fransen Effect",
            "Shepard Tone",
            "McGurck Effect",
            "Glissandro Illusion"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Shepard Tone."
    },
    {
        "id": 89,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Where did the Great Storm of 1987 make landfall at, first?",
        "options": [
            "The Midlands",
            "Wales",
            "Cornwall",
            "Surrey"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Cornwall."
    },
    {
        "id": 90,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The human right lung has how many lobes?",
        "options": [
            "1",
            "3",
            "4",
            "2"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 3."
    },
    {
        "id": 91,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "If you planted the seeds of Quercus robur what would grow?",
        "options": [
            "Flowers",
            "Grains",
            "Vegtables",
            "Trees"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Trees."
    },
    {
        "id": 92,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How much radiation does a banana emit?",
        "options": [
            "0.7 Microsievert",
            "0.1 Microsievert",
            "0.5 Microsievert",
            "0.3 Microsievert"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 0.1 Microsievert."
    },
    {
        "id": 93,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Deionized water is water with which of the following removed?",
        "options": [
            "Hydrogen",
            "Oxygen",
            "Iron",
            "Uncharged atoms"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Iron."
    },
    {
        "id": 94,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The asteroid belt is located between which two planets?",
        "options": [
            "Mars and Jupiter",
            "Mercury and Venus",
            "Earth and Mars",
            "Jupiter and Saturn"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Mars and Jupiter."
    },
    {
        "id": 95,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What nucleotide pairs with guanine?",
        "options": [
            "Cytosine",
            "Adenine",
            "Thymine",
            "Uracil"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Cytosine."
    },
    {
        "id": 96,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What mineral has the lowest number on the Mohs scale?",
        "options": [
            "Gypsum",
            "Quartz",
            "Talc",
            "Diamond"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Talc."
    },
    {
        "id": 97,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the chemical symbol for lead?",
        "options": [
            "Pb",
            "Le",
            "Ld",
            "Pm"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Pb."
    },
    {
        "id": 98,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which is the longest bone in the human body? ",
        "options": [
            "Femur",
            "Scapula",
            "Ulna",
            "Fibula"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Femur."
    },
    {
        "id": 99,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the first organic compound to be synthesized from inorganic compounds?",
        "options": [
            "Ethanol",
            "Urea",
            "Propane",
            "Formaldehyde"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Urea."
    },
    {
        "id": 100,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is the term for \"surgical complications resulting from surgical sponges left inside the patient's body?",
        "options": [
            "Jentacular",
            "Gossypiboma",
            "Meupareunia",
            "Gongoozler"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Gossypiboma."
    },
    {
        "id": 101,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
        "options": [
            "Graviton",
            "Tau neutrino",
            "Z boson",
            "Gluon"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Graviton."
    },
    {
        "id": 102,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What name is given to all baby marsupials?",
        "options": [
            "Pup",
            "Calf",
            "Joey",
            "Cub"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Joey."
    },
    {
        "id": 103,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these choices is not one of the phases of mitosis?",
        "options": [
            "Anaphase",
            "Diplophase",
            "Metaphase",
            "Telophase"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Diplophase."
    },
    {
        "id": 104,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these is a type of stretch/deep tendon reflex?",
        "options": [
            "Pupillary light reflex",
            "Scratch reflex",
            "Gag reflex",
            "Ankle jerk reflex"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Ankle jerk reflex."
    },
    {
        "id": 105,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What does LASER stand for?",
        "options": [
            "Light amplification by stimulated emission of radiation",
            "Light amplifier by standby energy of radio",
            "Lite analysing by stereo ecorazer",
            "Life antimatter by standing entry of range"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Light amplification by stimulated emission of radiation."
    },
    {
        "id": 106,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which scientific unit is named after an Italian nobleman?",
        "options": [
            "Ohm",
            "Volt",
            "Hertz",
            "Pascal"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Volt."
    },
    {
        "id": 107,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many chromosomes are in your body cells?",
        "options": [
            "23",
            "22",
            "21",
            "24"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 23."
    },
    {
        "id": 108,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is NOT a word used to describe an earthquake?",
        "options": [
            "Drop-slide",
            "Foreshock",
            "Strike-slip",
            "Temblor"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Drop-slide."
    },
    {
        "id": 109,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What was the first living creature in space?",
        "options": [
            "Fruit Flies ",
            "Monkey",
            "Dog",
            "Mouse"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Fruit Flies ."
    },
    {
        "id": 110,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the half-life of Uranium-235?",
        "options": [
            "1,260,900,000 years",
            "4,300,400,000 years",
            "703,800,000 years",
            "Uranium-235 is a stable isotope"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 703,800,000 years."
    },
    {
        "id": 111,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Alzheimer's disease primarily affects which part of the human body?",
        "options": [
            "Brain",
            "Heart",
            "Skin",
            "Lungs"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Brain."
    },
    {
        "id": 112,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What does the term \"isolation\" refer to in microbiology?",
        "options": [
            "The separation of a strain from a natural, mixed population of living microbes",
            "The nitrogen level in soil",
            "Testing effects of certain microorganisms in an isolated enviroments, such as caves",
            "A lack of nutrition in microenviroments"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is The separation of a strain from a natural, mixed population of living microbes."
    },
    {
        "id": 113,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What organelle aids in synthesis of DNA in cells?",
        "options": [
            "Lysosomes",
            "Nuclei",
            "Mitochondria",
            "Ribosomes"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Ribosomes."
    },
    {
        "id": 114,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the speed of light in a vacuum?",
        "options": [
            "299,792,458 m/s",
            "50,461 m/s",
            "308,215,043 m/s",
            "751,665,014,151 m/s"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 299,792,458 m/s."
    },
    {
        "id": 115,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What does the yellow diamond on the NFPA 704 fire diamond represent?",
        "options": [
            "Reactivity",
            "Radioactivity",
            "Flammability",
            "Health"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Reactivity."
    },
    {
        "id": 116,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The core of the Sun can reach which temperature?",
        "options": [
            "8\u00b0 Billion F (\u00b04.4 Billion C)",
            "938,000\u00b0 F (521093.3\u00b0 C)",
            "Absolute Zero (Both F and C)",
            "27\u00b0 Million F (15\u00b0 Million C)"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 27\u00b0 Million F (15\u00b0 Million C)."
    },
    {
        "id": 117,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Approximately what percentage of Earth's atmosphere is Oxygen?",
        "options": [
            "78%",
            "54%",
            "21%",
            "7%"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 21%."
    },
    {
        "id": 118,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which one of these is scientific term for \"Brain Freeze\"?",
        "options": [
            "Amaranthus Retroflexus",
            "Amblyomma Americanum",
            "Hyacinthoides Italica",
            "Sphenopalatine Ganglioneuralgia"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Sphenopalatine Ganglioneuralgia."
    },
    {
        "id": 119,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the scientific name for the extinct hominin known as \"Lucy\"?",
        "options": [
            "Australopithecus Antaris",
            "Australopithecus Architeuthis",
            "Australopithecus Afarensis",
            "Australopithecus Africanus"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Australopithecus Afarensis."
    },
    {
        "id": 120,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What animal takes part in Schr\u00f6dinger's most famous thought experiment?",
        "options": [
            "Dog",
            "Butterfly",
            "Cat",
            "Bat"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Cat."
    },
    {
        "id": 121,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these chemical compounds is NOT found in gastric acid?",
        "options": [
            "Hydrochloric acid",
            "Potassium chloride",
            "Sodium chloride",
            "Sulfuric acid"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Sulfuric acid."
    },
    {
        "id": 122,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which planet in the Solar System is the closest to the Sun?",
        "options": [
            "Mercury",
            "Earth",
            "Mars",
            "Venus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Mercury."
    },
    {
        "id": 123,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is an example of a bacterial pathogen?",
        "options": [
            "Measles ",
            "AIDS",
            "Ringworm",
            "Cholera"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Cholera."
    },
    {
        "id": 124,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "All the following metal elements are liquids at or near room temperature EXCEPT:",
        "options": [
            "Caesium",
            "Mercury",
            "Gallium",
            "Beryllium"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Beryllium."
    },
    {
        "id": 125,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The medial meniscus forms which part of what joint in the human body?",
        "options": [
            "Knee",
            "Ankle",
            "Elbow",
            "Shoulder"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Knee."
    },
    {
        "id": 126,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
        "options": [
            "24",
            "32",
            "16",
            "8"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 24."
    },
    {
        "id": 127,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the standard atomic weight of a Plutonium nucleus?",
        "options": [
            "481",
            "128",
            "244",
            "94"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 244."
    },
    {
        "id": 128,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The element involved in making human blood red is which of the following?",
        "options": [
            "Iridium",
            "Copper",
            "Cobalt",
            "Iron"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Iron."
    },
    {
        "id": 129,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the scientific term for 'taste'?",
        "options": [
            "Olfaction",
            "Somatosensation",
            "Auditory Perception",
            "Gustatory Perception"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Gustatory Perception."
    },
    {
        "id": 130,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": " What is the chemical symbol for Helium?",
        "options": [
            "Hg",
            "H",
            "He",
            "Hs"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is He."
    },
    {
        "id": 131,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which chemical element has the lowest boiling point?",
        "options": [
            "Neon",
            "Helium",
            "Hydrogen",
            "Nitrogen"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Helium."
    },
    {
        "id": 132,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many teeth does the average adult mouth have (except for wisdom teeth)?",
        "options": [
            "28",
            "32",
            "20",
            "36"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 32."
    },
    {
        "id": 133,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "An organism described as \"heliotropic\" has a tendancy to move towards which of these things?",
        "options": [
            "Trees",
            "Light",
            "Water",
            "Pollen"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Light."
    },
    {
        "id": 134,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "When was the first mammal successfully cloned?",
        "options": [
            "1996",
            "2009",
            "1985",
            "1999"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 1996."
    },
    {
        "id": 135,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Stars consist mainly of hydrogen and which other gas?",
        "options": [
            "Argon",
            "Oxygen",
            "Nitrogen",
            "Helium"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Helium."
    },
    {
        "id": 136,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many degrees Fahrenheit is 100 degrees Celsius? ",
        "options": [
            "451",
            "326",
            "212",
            "100"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 212."
    },
    {
        "id": 137,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "A positron is an antiparticle of a what?",
        "options": [
            "Electron",
            "Proton",
            "Neutron",
            "Photon"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Electron."
    },
    {
        "id": 138,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these stars is the largest?",
        "options": [
            "Betelgeuse",
            "VY Canis Majoris",
            "UY Scuti",
            "RW Cephei"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is UY Scuti."
    },
    {
        "id": 139,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?",
        "options": [
            "Yawn",
            "Cough",
            "Hiccup",
            "Sneeze"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Sneeze."
    },
    {
        "id": 140,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which moon is the only satellite in our solar system to possess a dense atmosphere?",
        "options": [
            "Europa",
            "Titan",
            "Miranda",
            "Callisto"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Titan."
    },
    {
        "id": 141,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the atomic mass of Carbon?",
        "options": [
            "12",
            "14",
            "10",
            "16"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 12."
    },
    {
        "id": 142,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following is the male pollen-producing reproductive part of a flower?",
        "options": [
            "Stamen",
            "Petal",
            "Sepal",
            "Pistil"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Stamen."
    },
    {
        "id": 143,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the mathematical formula of Ohm's law?",
        "options": [
            "R = V*I",
            "I = V*R",
            "V = I*R",
            "V = I / R"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is V = I*R."
    },
    {
        "id": 144,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the chemical formula for ammonia?",
        "options": [
            "CH4",
            "CO2",
            "NH3",
            "NO3"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is NH3."
    },
    {
        "id": 145,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
        "options": [
            "Niels Henrik David Bohr",
            "Joseph John Thomson",
            "Archimedes",
            "Ernest Rutherford"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Ernest Rutherford."
    },
    {
        "id": 146,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these animals belongs in class Chondrichthyes?",
        "options": [
            "Killer whale",
            "Great white shark",
            "Octopus",
            "Catfish"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Great white shark."
    },
    {
        "id": 147,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What causes Lyme disease?",
        "options": [
            "A virus",
            "A bacteria",
            "An amoeba",
            "A parasitic worm"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is A bacteria."
    },
    {
        "id": 148,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In Psychology, which need appears highest in the \"Maslow's hierarchy of needs\" pyramid?",
        "options": [
            "Love",
            "Esteem",
            "Safety",
            "Physiological"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Esteem."
    },
    {
        "id": 149,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the chemical makeup of water?",
        "options": [
            "CO2",
            "H20",
            "H",
            "C12H6O2"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is H20."
    },
    {
        "id": 150,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Down Syndrome is usually caused by an extra copy of which chromosome?",
        "options": [
            "15",
            "21",
            "23",
            "24"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 21."
    },
    {
        "id": 151,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which planet did the \"Viking 1\" spacecraft send surface images of, starting in 1976?",
        "options": [
            "Venus",
            "Jupiter",
            "Mars",
            "Saturn"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Mars."
    },
    {
        "id": 152,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many baby/milk teeth does a human child have in total?",
        "options": [
            "25",
            "10",
            "20",
            "15"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 20."
    },
    {
        "id": 153,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What physics principle relates the net electric flux out of a closed surface to the charge enclosed by that surface?",
        "options": [
            "Ampere's Law",
            "Gauss's Law",
            "Faraday's Law",
            "Biot-Savart Law"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Gauss's Law."
    },
    {
        "id": 154,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What genetic disease is caused by having an extra Y chromosome (XYY)?",
        "options": [
            "Turner's Syndrome",
            "Klinefelter's Syndrome",
            "Down Syndrome",
            "Jacob's Syndrome"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Jacob's Syndrome."
    },
    {
        "id": 155,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the molecular formula of Glucose?",
        "options": [
            "K+",
            "C2H4O2",
            "CH4",
            "C6H12O6"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is C6H12O6."
    },
    {
        "id": 156,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
        "options": [
            "Haplogroup T",
            "Haplogroup J",
            "Haplogroup L",
            "Haplogroup U"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Haplogroup U."
    },
    {
        "id": 157,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
        "options": [
            "12 Minutes",
            "2 Minutes",
            "6 Minutes",
            "8 Minutes"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 8 Minutes."
    },
    {
        "id": 158,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In aeronautics, flaps and slats are used to control what on an aircraft?",
        "options": [
            "Drag",
            "Thrust",
            "Weight ",
            "Lift"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Lift."
    },
    {
        "id": 159,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How many legs is it biologically impossible for a centipede to have?",
        "options": [
            "100",
            "26",
            "50",
            "74"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 100."
    },
    {
        "id": 160,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the elemental symbol for mercury?",
        "options": [
            "Me",
            "Hg",
            "Hy",
            "Mc"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Hg."
    },
    {
        "id": 161,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many moons does Pluto have?",
        "options": [
            "Five",
            "Three",
            "One",
            "Two"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Five."
    },
    {
        "id": 162,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What element on the periodic table has 92 electrons?",
        "options": [
            "Hydrogen",
            "Sulfur",
            "Iron",
            "Uranium"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Uranium."
    },
    {
        "id": 163,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
        "options": [
            "Stasis",
            "Prophase",
            "Telophase",
            "Interphase"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Interphase."
    },
    {
        "id": 164,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Human cells typically have how many copies of each gene?",
        "options": [
            "1",
            "3",
            "4",
            "2"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 2."
    },
    {
        "id": 165,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the same in Celsius and Fahrenheit?",
        "options": [
            "-40",
            "32",
            "-42",
            "-39"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is -40."
    },
    {
        "id": 166,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "In physics, conservation of energy and conservation of momentum are both consequences of which of the following?",
        "options": [
            "Wick's Theorem",
            "Bell's Theorem",
            "Noether's Theorem",
            "Carnot's Theorem"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Noether's Theorem."
    },
    {
        "id": 167,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which country first successfully farm-hatched and raised bluefin tuna in 1979?",
        "options": [
            "Japan",
            "USA",
            "Philippines",
            "France"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Japan."
    },
    {
        "id": 168,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The 'Islets of Langerhans' is found in which human organ?",
        "options": [
            "Brain",
            "Pancreas",
            "Liver",
            "Kidney"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Pancreas."
    },
    {
        "id": 169,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which constellation contains the center of the Milky Way?",
        "options": [
            "Scorpius",
            "Sagittarius",
            "Capricornus",
            "Ophiuchus"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Sagittarius."
    },
    {
        "id": 170,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is used to show that Earth spins on an axis? ",
        "options": [
            "Tectonic Plates ",
            "Polaris",
            "Foucault Pendulum ",
            "Sundial"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Foucault Pendulum ."
    },
    {
        "id": 171,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What does the scientific name of the Cambrian-Period sea creature Anomalocaris mean?",
        "options": [
            "Strange Crab",
            "Anomalous Clam",
            "Deformed Fish",
            "Abnormal Shrimp"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Abnormal Shrimp."
    },
    {
        "id": 172,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What are human nails made of?",
        "options": [
            "Bone",
            "Chitin",
            "Calcium",
            "Keratin"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Keratin."
    },
    {
        "id": 173,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the first element on the periodic table?",
        "options": [
            "Hydrogen",
            "Helium",
            "Oxygen",
            "Lithium"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Hydrogen."
    },
    {
        "id": 174,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the unit of electrical capacitance?",
        "options": [
            "Watt",
            "Farad",
            "Gauss",
            "Henry"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Farad."
    },
    {
        "id": 175,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
        "options": [
            "6",
            "4",
            "5",
            "3"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 4."
    },
    {
        "id": 176,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the standard SI unit for temperature?",
        "options": [
            "Rankine",
            "Fahrenheit",
            "Kelvin",
            "Celsius"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Kelvin."
    },
    {
        "id": 177,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How long is a light-year?",
        "options": [
            "1 AU",
            "501.2 Million Miles",
            "9.461 Trillion Kilometres",
            "105.40 Earth-years"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 9.461 Trillion Kilometres."
    },
    {
        "id": 178,
        "unit": "Unit I",
        "difficulty": "easy",
        "question": "Which of the following is considered a core element of the Biosphere concept?",
        "options": [
            "Genetic mutation",
            "Noise generation",
            "Zone of life on Earth",
            "Weather manipulation"
        ],
        "correctAnswer": 2,
        "explanation": "The concept of Biosphere heavily relies on Zone of life on Earth."
    },
    {
        "id": 179,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "In the context of ecosystems, what role does a Decomposer play?",
        "options": [
            "Space exploration",
            "Recycler of nutrients",
            "Short-term economic gain",
            "Irrelevant technological advancement"
        ],
        "correctAnswer": 1,
        "explanation": "A Decomposer typically functions as a Recycler of nutrients in an ecosystem."
    },
    {
        "id": 180,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Which type of disaster is a Tsunami classified as?",
        "options": [
            "Short-term economic gain",
            "Infinite resource extraction",
            "Water-related natural",
            "Noise generation"
        ],
        "correctAnswer": 2,
        "explanation": "A Tsunami is fundamentally categorized as a Water-related natural disaster."
    },
    {
        "id": 181,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Which type of disaster is a Industrial Chemical Spill classified as?",
        "options": [
            "Manmade technological",
            "Weather manipulation",
            "Infinite resource extraction",
            "Irrelevant technological advancement"
        ],
        "correctAnswer": 0,
        "explanation": "A Industrial Chemical Spill is fundamentally categorized as a Manmade technological disaster."
    },
    {
        "id": 182,
        "unit": "Unit I",
        "difficulty": "easy",
        "question": "Which of the following is considered a core element of the Carrying Capacity concept?",
        "options": [
            "Noise generation",
            "Maximum population sustainment",
            "Radiation emission",
            "Space exploration"
        ],
        "correctAnswer": 1,
        "explanation": "The concept of Carrying Capacity heavily relies on Maximum population sustainment."
    },
    {
        "id": 183,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "In the context of ecosystems, what role does a Primary Producer play?",
        "options": [
            "Short-term economic gain",
            "Synthesizer of organic matter",
            "Infinite resource extraction",
            "Genetic mutation"
        ],
        "correctAnswer": 1,
        "explanation": "A Primary Producer typically functions as a Synthesizer of organic matter in an ecosystem."
    },
    {
        "id": 184,
        "unit": "Unit II",
        "difficulty": "medium",
        "question": "In the context of ecosystems, what role does a Apex Predator play?",
        "options": [
            "Irrelevant technological advancement",
            "Top-level consumer",
            "Short-term economic gain",
            "Noise generation"
        ],
        "correctAnswer": 1,
        "explanation": "A Apex Predator typically functions as a Top-level consumer in an ecosystem."
    },
    {
        "id": 185,
        "unit": "Unit V",
        "difficulty": "easy",
        "question": "Which type of disaster is a Earthquake classified as?",
        "options": [
            "Radiation emission",
            "Earth-related natural",
            "Short-term economic gain",
            "Space exploration"
        ],
        "correctAnswer": 1,
        "explanation": "A Earthquake is fundamentally categorized as a Earth-related natural disaster."
    },
    {
        "id": 186,
        "unit": "Unit I",
        "difficulty": "easy",
        "question": "Which of the following is considered a core element of the Sustainable Development concept?",
        "options": [
            "Genetic mutation",
            "Space exploration",
            "Radiation emission",
            "Long-term ecological balance"
        ],
        "correctAnswer": 3,
        "explanation": "The concept of Sustainable Development heavily relies on Long-term ecological balance."
    },
    {
        "id": 187,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What fast food chain has the most locations globally?",
        "options": [
            "Subway",
            "Starbucks",
            "KFC",
            "McDonalds"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Subway."
    },
    {
        "id": 188,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the airspeed velocity of an unladen swallow?",
        "options": [
            "200 MPH",
            "15 MPH",
            "24 MPH",
            "20 MPH"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 24 MPH."
    },
    {
        "id": 189,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which one of these is not a typical European sword design?",
        "options": [
            "Falchion",
            "Ulfberht",
            "Flamberge",
            "Scimitar"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Scimitar."
    },
    {
        "id": 190,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these words refers to something made, distributed, or sold illegally?",
        "options": [
            "Bootblack",
            "Bootleg",
            "Bootstrap",
            "Bootlace"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Bootleg."
    },
    {
        "id": 191,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the Swedish word for \"window\"?",
        "options": [
            "Ruta",
            "Sk\u00e4rm",
            "H\u00e5l",
            "F\u00f6nster"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is F\u00f6nster."
    },
    {
        "id": 192,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Electronic music producer Kygo's popularity skyrocketed after a certain remix. Which song did he remix?",
        "options": [
            "Coldplay - Midnight",
            "Marvin Gaye - Sexual Healing",
            "Ed Sheeran - I See Fire",
            "a-ha - Take On Me"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Ed Sheeran - I See Fire."
    },
    {
        "id": 193,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Apple co-founder Steve Jobs died from complications of which form of cancer?",
        "options": [
            "Bone",
            "Stomach",
            "Liver",
            "Pancreatic"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Pancreatic."
    },
    {
        "id": 194,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The word \"astasia\" means which of the following?",
        "options": [
            "The inability to stand up",
            "The inability to make decisions",
            "The inability to concentrate on anything",
            "A feverish desire to rip one's clothes off"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is The inability to stand up."
    },
    {
        "id": 195,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the largest rapid transit system in the world by number of stations, with 472 stations in operation?",
        "options": [
            "London Underground",
            "Berlin U-Bahn",
            "New York City Subway",
            "Shanghai Metro"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is New York City Subway."
    },
    {
        "id": 196,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What country has had prime ministers named Eden, Major, Peel, Law, Brown and Heath?",
        "options": [
            "Australia",
            "New Zealand",
            "Canada",
            "United Kingdom"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is United Kingdom."
    },
    {
        "id": 197,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the real name of viral internet meme Grumpy Cat?",
        "options": [
            "Colonel Meow",
            "Maru",
            "Lil Bub",
            "Tardar Sauce"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Tardar Sauce."
    },
    {
        "id": 198,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the romanized Arabic word for \"moon\"?",
        "options": [
            "Qamar",
            "Najma",
            "Kawkab",
            "Shams"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Qamar."
    },
    {
        "id": 199,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What element has the chemical symbol Kr?",
        "options": [
            "Krypton",
            "Kineticium",
            "Curium",
            "Kerosine"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Krypton."
    },
    {
        "id": 200,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Macintosh has named six of its operating systems after big cats. What big cat did Macintosh name their 2007 release after?",
        "options": [
            "Leopard",
            "Panther",
            "Tiger",
            "Puma"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Leopard."
    },
    {
        "id": 201,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
        "options": [
            "Iron",
            "Copper",
            "Nickel",
            "Silver"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Copper."
    },
    {
        "id": 202,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many cards are there in a standard deck of playing cards?",
        "options": [
            "64",
            "40",
            "32",
            "52"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 52."
    },
    {
        "id": 203,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What nuts are used in the production of marzipan?",
        "options": [
            "Almonds",
            "Peanuts",
            "Walnuts",
            "Pistachios"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Almonds."
    },
    {
        "id": 204,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What alcoholic drink is made from molasses?",
        "options": [
            "Vodka",
            "Gin",
            "Rum",
            "Whisky"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Rum."
    },
    {
        "id": 205,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which country developed the AK-47 assault rifle?",
        "options": [
            "Poland",
            "Soviet Union",
            "Iran",
            "Israel"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Soviet Union."
    },
    {
        "id": 206,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which country, not including Japan, has the most people of Japanese descent?",
        "options": [
            "Brazil",
            "South Korea",
            "China",
            "United States of America"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Brazil."
    },
    {
        "id": 207,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is not another name for the eggplant?",
        "options": [
            "Melongene",
            "Guinea Squash",
            "Brinjal",
            "Potimarron"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Potimarron."
    },
    {
        "id": 208,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the romanized Japanese word for \"university\"?",
        "options": [
            "Toshokan",
            "Jimusho",
            "Shokudou",
            "Daigaku"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Daigaku."
    },
    {
        "id": 209,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the weight of a Gold Bar in Fallout: New Vegas?",
        "options": [
            "35 Pounds",
            "40 Pounds",
            "32.50 Pounds",
            "30 Pounds"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 35 Pounds."
    },
    {
        "id": 210,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Who is the founder of \"The Lego Group\"?",
        "options": [
            "Ole Kirk Christiansen",
            " Jens Niels Christiansen",
            "Kirstine Christiansen",
            " Gerhardt Kirk Christiansen"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Ole Kirk Christiansen."
    },
    {
        "id": 211,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What do the letters in the GMT time zone stand for?",
        "options": [
            "Global Meridian Time",
            "Glasgow Man Time",
            "General Median Time",
            "Greenwich Mean Time"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Greenwich Mean Time."
    },
    {
        "id": 212,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The buried remains of which English explorer of Australia were found in London  in January 2019?",
        "options": [
            "Matthew Flinders",
            "Abel Tasman",
            "Dirk Hartog",
            "William Bourke"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Matthew Flinders."
    },
    {
        "id": 213,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The word \"abulia\" means which of the following?",
        "options": [
            "The inability to make decisions",
            "The inability to concentrate on anything",
            "The inability to stand up",
            "A feverish desire to rip one's clothes off"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is The inability to make decisions."
    },
    {
        "id": 214,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the third country to have a McDonald's restaurant?",
        "options": [
            "Costa Rica",
            "France",
            "Japan",
            "Australia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Costa Rica."
    },
    {
        "id": 215,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the most frequently used letter in the english alphabet?",
        "options": [
            "A",
            "I",
            "O",
            "E"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is E."
    },
    {
        "id": 216,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the full meaning of RAM?",
        "options": [
            "Random Assist Memory",
            "Rand Assist Mandate",
            "Ram",
            "Random Access Memory"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Random Access Memory."
    },
    {
        "id": 217,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the name of the alcoholic beverage made from potatoes or grains that originates from Poland and Russia?",
        "options": [
            "Rum",
            "Vodka",
            "Absinthe",
            "Sake"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Vodka."
    },
    {
        "id": 218,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the average life span of a garden ant?",
        "options": [
            "24 hours",
            "3 years",
            "15 years",
            "1 week"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 15 years."
    },
    {
        "id": 219,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The Canadian $1 coin is colloquially known as a what?",
        "options": [
            "Boolie",
            "Foolie",
            "Moodie",
            "Loonie"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Loonie."
    },
    {
        "id": 220,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the name of the antagonist group in Danganronpa Another Episode: Ultra Despair Girls?",
        "options": [
            "Warriors of Hope",
            "Warriors of Despair",
            "The Monokubs",
            "The Ultimate Despair"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Warriors of Hope."
    },
    {
        "id": 221,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Scotch whisky and Drambuie make up which cocktail?",
        "options": [
            "Sex on the Beach",
            "Rusty Nail",
            "Screwdriver",
            "Manhattan"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Rusty Nail."
    },
    {
        "id": 222,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following card games revolves around numbers and basic math?",
        "options": [
            "Uno",
            "Go Fish",
            "Munchkin",
            "Twister"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Uno."
    },
    {
        "id": 223,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the most commonly used noun in the English language?",
        "options": [
            "Time",
            "Home",
            "Water",
            "Man"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Time."
    },
    {
        "id": 224,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The Flag of the European Union has how many stars on it?",
        "options": [
            "14",
            "10",
            "16",
            "12"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 12."
    },
    {
        "id": 225,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Before the 19th Century, the \"Living Room\" was originally called the...",
        "options": [
            "Loft",
            "Open Room",
            "Parlor",
            "Sitting Room"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Parlor."
    },
    {
        "id": 226,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the currency of India and Pakistan as well as a few other Asian countries?",
        "options": [
            "Rupee",
            "Dinar",
            "Riyal",
            "Peso"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Rupee."
    },
    {
        "id": 227,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the official language in Barcelona beside Spanish?",
        "options": [
            "Basque",
            " Galician",
            "Catalan",
            "French"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Catalan."
    },
    {
        "id": 228,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Who is the youngest person to receive a Nobel Prize?",
        "options": [
            "Lawrence Bragg",
            "Werner Heisenberg",
            "Yasser Arafat",
            "Malala Yousafzai"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Malala Yousafzai."
    },
    {
        "id": 229,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What machine element is located in the center of fidget spinners?",
        "options": [
            "Belts",
            "Gears",
            "Axles",
            "Bearings"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Bearings."
    },
    {
        "id": 230,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the three astronauts of the Apollo 11 spaceflight did NOT walk on the moon?",
        "options": [
            "None of them",
            "Buzz Aldrin",
            "Michael Collins",
            "Neil Armstrong"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Michael Collins."
    },
    {
        "id": 231,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which one of the following rhythm games was made by Harmonix?",
        "options": [
            "Meat Beat Mania",
            "Rock Band",
            "Dance Dance Revolution",
            "Guitar Hero Live"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Rock Band."
    },
    {
        "id": 232,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following presidents is not on Mount Rushmore?",
        "options": [
            "Thomas Jefferson",
            "John F. Kennedy",
            "Abraham Lincoln",
            "Theodore Roosevelt"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is John F. Kennedy."
    },
    {
        "id": 233,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the shape of the toy invented by Hungarian professor Ern\u0151 Rubik?",
        "options": [
            "Cylinder",
            "Cube",
            "Sphere",
            "Pyramid"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Cube."
    },
    {
        "id": 234,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
        "options": [
            "Dress",
            "Skirt",
            "Kilt",
            "Rhobes"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Kilt."
    },
    {
        "id": 235,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Chartreuse is a color between yellow and what?",
        "options": [
            "Red",
            "Black",
            "Green",
            "Purple"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Green."
    },
    {
        "id": 236,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following is not an Ivy League University?",
        "options": [
            "University of Pennsylvania",
            "Princeton",
            "Harvard",
            "Stanford"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Stanford."
    },
    {
        "id": 237,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Who was the 1st President of Mexico?",
        "options": [
            "Benito Ju\u00e1rez",
            "Vicente Guerrero",
            "Miguel Hidalgo Y Costilla",
            "Guadalupe Victoria"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Guadalupe Victoria."
    },
    {
        "id": 238,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Bob and Mike Bryan were well known brothers in which sport?",
        "options": [
            "Baseball",
            "Tennis",
            "Football",
            "Basketball"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Tennis."
    },
    {
        "id": 239,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What English word means to \"think deeply\"?",
        "options": [
            "Confiscate",
            "Condensate",
            "Contemplate",
            "Constipate"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Contemplate."
    },
    {
        "id": 240,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "De Eemhof, Port Zelande and Het Heijderbos are holiday villas owned by what company?",
        "options": [
            "Yelloh Village",
            "Center Parcs",
            "Keycamp",
            "Villa Plus"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Center Parcs."
    },
    {
        "id": 241,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Originally another word for poppy, coquelicot is a shade of what?",
        "options": [
            "Green",
            "Red",
            "Pink",
            "Blue"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Red."
    },
    {
        "id": 242,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "In which year did Ghana gain independence?",
        "options": [
            "1958",
            "1957",
            "1947",
            "1960"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 1957."
    },
    {
        "id": 243,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where in La Coru\u00f1a (Spain) is the headquarters of \"Inditex\", the biggest fashion group in the world?",
        "options": [
            "\u00d3rdenes",
            "Mug\u00eda",
            "Sanjenjo",
            "Arteijo"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Arteijo."
    },
    {
        "id": 244,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Out of these four buildings, which one is the tallest, with a height of 1,250 ft (381 m)?",
        "options": [
            "Federation Tower, Russia",
            "Empire State Building, United States",
            "Gevora Hotal, United Arab Emirates",
            "Bank of China Tower, Hong Kong"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Empire State Building, United States."
    },
    {
        "id": 245,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What are Panama hats made out of?",
        "options": [
            "Hemp",
            "Flax",
            "Silk",
            "Straw"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Straw."
    },
    {
        "id": 246,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Sciophobia is the fear of what?",
        "options": [
            "Eating",
            "Transportation",
            "Shadows",
            "Bright lights"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Shadows."
    },
    {
        "id": 247,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The website \"Shut Up & Sit Down\" reviews which form of media?",
        "options": [
            "Video Games",
            "Board Games",
            "Television Shows",
            "Films"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Board Games."
    },
    {
        "id": 248,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What was the name given to Japanese military dictators who ruled the country through the 12th and 19th Century?",
        "options": [
            "Ninja",
            "Samurai",
            "Shogun",
            "Shinobi"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Shogun."
    },
    {
        "id": 249,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these colours is NOT featured in the logo for Google?",
        "options": [
            "Green",
            "Yellow",
            "Pink",
            "Blue"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Pink."
    },
    {
        "id": 250,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Death Valley's Badwater Basin is North America's point of lowest elevation at how many feet below sea level?",
        "options": [
            "1,640 feet",
            "12,092 feet",
            "282 feet",
            "79 feet"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 282 feet."
    },
    {
        "id": 251,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which mountain has the highest peak in South America?",
        "options": [
            "Aconcagua, Argentina",
            "Huascar\u00e1n, Peru",
            "Ojos del Salado, Argentina/Chile border",
            "Monte Pissis, Argentina"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Aconcagua, Argentina."
    },
    {
        "id": 252,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which slogan did the fast food company, McDonald's, use before their \"I'm Lovin' It\" slogan?",
        "options": [
            "Why Pay More!?",
            "Making People Happy Through Food",
            "We Love to See You Smile",
            "Have It Your Way"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is We Love to See You Smile."
    },
    {
        "id": 253,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "In which fast food chain can you order a Jamocha Shake?",
        "options": [
            "Burger King",
            "McDonald's",
            "Arby's",
            "Wendy's"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Arby's."
    },
    {
        "id": 254,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
        "options": [
            "Fat Man",
            "Noah's Ark",
            "Trojan Horse",
            "Spruce Goose"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Spruce Goose."
    },
    {
        "id": 255,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many furlongs are there in a mile?",
        "options": [
            "Six",
            "Two",
            "Four",
            "Eight"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Eight."
    },
    {
        "id": 256,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which sign of the zodiac is represented by the Crab?",
        "options": [
            "Libra",
            "Sagittarius",
            "Cancer",
            "Virgo"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Cancer."
    },
    {
        "id": 257,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which church's interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?",
        "options": [
            "Catania Cathedral",
            "The Duomo of Florence",
            "St. Peter's Basilica",
            "St. Mark\u2019s Basilica"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is St. Peter's Basilica."
    },
    {
        "id": 258,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What was the height of Kingda Ka, the tallest roller coaster in the world from 2005 to 2024?",
        "options": [
            "456 ft",
            "396 ft",
            "429 ft",
            "500 ft"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 456 ft."
    },
    {
        "id": 259,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the name of the popular animatronic singing fish prop, singing such hits such as \"Don't Worry, Be Happy\"?",
        "options": [
            "Big Mouth Billy Bass",
            "Singing Fish",
            "Sardeen",
            "Big Billy Bass"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Big Mouth Billy Bass."
    },
    {
        "id": 260,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Coleslaw originated from which European country?",
        "options": [
            "Denmark",
            "The Netherlands",
            "United Kingdom",
            "Germany"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is The Netherlands."
    },
    {
        "id": 261,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "This field is sometimes known as \u201cThe Dismal Science.\u201d",
        "options": [
            "Politics",
            "Philosophy",
            "Physics",
            "Economics"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Economics."
    },
    {
        "id": 262,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Earth is located in which galaxy?",
        "options": [
            "The Milky Way Galaxy",
            "The Galaxy Note",
            "The Mars Galaxy",
            "The Black Hole"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is The Milky Way Galaxy."
    },
    {
        "id": 263,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many fingers does a single human hand have?",
        "options": [
            "Ten",
            "Four",
            "Five",
            "Eight"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Four."
    },
    {
        "id": 264,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The Quran is the holy book of which Abrahamic religion?",
        "options": [
            "Judaism",
            "Islam",
            "Rastafarianism",
            "Christianity"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Islam."
    },
    {
        "id": 265,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What organ of the body produces bile?",
        "options": [
            "Stomach",
            "Liver",
            "Gallbladder",
            "Pancreas"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Liver."
    },
    {
        "id": 266,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "When was Nintendo founded?",
        "options": [
            "March 4th, 1887",
            "December 27th, 1894",
            "October 19th, 1891",
            "September 23rd, 1889"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is September 23rd, 1889."
    },
    {
        "id": 267,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What year was the RoboSapien toy robot released?",
        "options": [
            "2001",
            "2000",
            "2006",
            "2004"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 2004."
    },
    {
        "id": 268,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following is the IATA code for Manchester Airport?",
        "options": [
            "LHR",
            "EGCC",
            "EGLL",
            "MAN"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is MAN."
    },
    {
        "id": 269,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following correctly describes Japanese word order?",
        "options": [
            "Subject Object Verb",
            "Subject Verb Object",
            "Verb Object Subject",
            "Verb Subject Object"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Subject Object Verb."
    },
    {
        "id": 270,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "When someone is cowardly, they are said to have what color belly?",
        "options": [
            "Blue",
            "Red",
            "Green",
            "Yellow"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Yellow."
    },
    {
        "id": 271,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "\"A3\", \"B1\", and \"Legal\" are typical names of sizes for what object?",
        "options": [
            "Phone screens",
            "Airplanes",
            "Law books",
            "Paper"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Paper."
    },
    {
        "id": 272,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "According to Sherlock Holmes, \"If you eliminate the impossible, whatever remains, however improbable, must be the...\"",
        "options": [
            "Answer",
            "Source",
            "Truth",
            "Cause"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Truth."
    },
    {
        "id": 273,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Foie gras is a French delicacy typically made from what part of a duck or goose?",
        "options": [
            "Liver",
            "Stomach",
            "Intestines",
            "Heart"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Liver."
    },
    {
        "id": 274,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
        "options": [
            "Pen",
            "Sword",
            "Key",
            "Cellphone"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Key."
    },
    {
        "id": 275,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In ancient Greece, if your job were a \"hippeus\" which of these would you own?",
        "options": [
            "Guitar",
            "Weave",
            "Horse",
            "Boat"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Horse."
    },
    {
        "id": 276,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which musician has collaborated with American producer Porter Robinson and released the 2016 song \"Shelter\"?",
        "options": [
            "Madeon",
            "Mat Zo",
            "Zedd",
            "deadmau5"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Madeon."
    },
    {
        "id": 277,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which mountain has the highest peak in North America?",
        "options": [
            "Denali, USA",
            "Mount Saint Elias, US/Canada border",
            "Mount Logan, Canada",
            "Pico de Orizaba, Mexico"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Denali, USA."
    },
    {
        "id": 278,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these companies does NOT manufacture automobiles?",
        "options": [
            "Nissan",
            "Ducati",
            "GMC",
            "Fiat"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Ducati."
    },
    {
        "id": 279,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
        "options": [
            "Harvard University",
            "Princeton University",
            "Yale University",
            "Columbia University"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Yale University."
    },
    {
        "id": 280,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "When did the website \"Facebook\" launch?",
        "options": [
            "2005",
            "2004",
            "2006",
            "2003"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 2004."
    },
    {
        "id": 281,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the Portuguese word for \"Brazil\"?",
        "options": [
            "Bras\u00edl",
            "Brasil",
            "Brazil",
            "Brasilia"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Brasil."
    },
    {
        "id": 282,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many syllables make up a haiku?",
        "options": [
            "17",
            "15",
            "10",
            "21"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 17."
    },
    {
        "id": 283,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is NOT a real element?",
        "options": [
            "Hassium",
            "Lutetium",
            "Vitrainium",
            "Praseodymium"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Vitrainium."
    },
    {
        "id": 284,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "An organic compound is considered an alcohol if it has what functional group?",
        "options": [
            "Hydroxyl",
            "Carbonyl",
            "Aldehyde",
            "Alkyl"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Hydroxyl."
    },
    {
        "id": 285,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is considered classical conditioning?",
        "options": [
            "Harlow\u2019s monkey experiments",
            "Schr\u00f6dinger's cat experiment",
            "Pavlov's dog experiments",
            "Skinner box experiment"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Pavlov's dog experiments."
    },
    {
        "id": 286,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Who is the chemical element Curium named after?",
        "options": [
            "Marie & Pierre Curie",
            "Curious George",
            "The Curiosity Rover",
            "Stephen Curry"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Marie & Pierre Curie."
    },
    {
        "id": 287,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Botanically speaking, which of these fruits is NOT a berry?",
        "options": [
            "Banana",
            "Blueberry",
            "Strawberry",
            "Concord Grape"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Strawberry."
    },
    {
        "id": 288,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The \"Tibia\" is found in which part of the body?",
        "options": [
            "Hand",
            "Leg",
            "Head",
            "Arm"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Leg."
    },
    {
        "id": 289,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the standard SI unit for electric current?",
        "options": [
            "Volt",
            "Ohm",
            "Ampere",
            "Watt"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Ampere."
    },
    {
        "id": 290,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the most potent toxin known?",
        "options": [
            "Ricin",
            "Asbestos",
            "Botulinum toxin",
            "Cyanide"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Botulinum toxin."
    },
    {
        "id": 291,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these two plates are best know for forming earthquakes and tsunami's?",
        "options": [
            "Divergent Plate Boundaries/Convergent/Oceanic Crust",
            "Oceanic & Continental Crust/Transform Plate Boundaries",
            "Convergent Plate Boundaries/Oceanic Crust",
            "Transform Plate Boundaries/Divergent Plate Boundaries"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Convergent Plate Boundaries/Oceanic Crust."
    },
    {
        "id": 292,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Gannymede is the largest moon of which planet?",
        "options": [
            "Jupiter",
            "Mars",
            "Neptune",
            "Uranus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Jupiter."
    },
    {
        "id": 293,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "At what temperature does water boil?",
        "options": [
            "181\u00b0F",
            "212\u00b0F",
            "178\u00b0F",
            "200\u00b0F"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 212\u00b0F."
    },
    {
        "id": 294,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which Swiss psychologist is synonymous with the concepts of introvert and extrovert personalities?",
        "options": [
            "Carl Jung",
            "Alice Miller",
            "Jean Piaget",
            "Hermann Rorschach"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Carl Jung."
    },
    {
        "id": 295,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Coulrophobia is the irrational fear of what?",
        "options": [
            "Clowns",
            "Needles",
            "Cemeteries",
            "Tunnels"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Clowns."
    },
    {
        "id": 296,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
        "options": [
            "Venus",
            "Jupiter",
            "Uranus",
            "Neptune"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Uranus."
    },
    {
        "id": 297,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the chemical symbol for Helium?",
        "options": [
            "He",
            "Hg",
            "H",
            "Hs"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is He."
    },
    {
        "id": 298,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the Linnean name of the domestic apple tree?",
        "options": [
            "Malus pumila",
            "Appelus delectica",
            "Malus americana",
            "Pomus domestica"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Malus pumila."
    },
    {
        "id": 299,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What part of the body produces insulin?",
        "options": [
            "Kidney",
            "Pancreas",
            "Liver",
            "Stomach"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Pancreas."
    },
    {
        "id": 300,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the standard SI unit for distance?",
        "options": [
            "Fathom",
            "Metre",
            "Angstrom",
            "Foot"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Metre."
    },
    {
        "id": 301,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the official name of the star located closest to the North Celestial Pole?",
        "options": [
            "Polaris",
            "Iota Cephei",
            "Gamma Cephei",
            "Eridanus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Polaris."
    },
    {
        "id": 302,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following blood vessels carries deoxygenated blood?",
        "options": [
            "Aorta",
            "Pulmonary Vein",
            "Coronary Artery",
            "Pulmonary Artery"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Pulmonary Artery."
    },
    {
        "id": 303,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The humerus, paired radius, and ulna come together to form what joint?",
        "options": [
            "Knee",
            "Elbow",
            "Sholder",
            "Ankle"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Elbow."
    },
    {
        "id": 304,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
        "options": [
            "high, some",
            "high, all",
            "low, all",
            "low, some"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is low, all."
    },
    {
        "id": 305,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "\"The Big Bang Theory\" was first theorized by a priest of what religious ideology?",
        "options": [
            "Catholic",
            "Christian",
            "Jewish",
            "Islamic"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Catholic."
    },
    {
        "id": 306,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What was the category of the 2005 hurricane, Hurricane Katrina, in the Saffir-Simpson hurricane wind scale?",
        "options": [
            "Category 1",
            "Category 4",
            "Category 2",
            "Category 5"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Category 5."
    },
    {
        "id": 307,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which element has the atomic number of 7?",
        "options": [
            "Neon",
            "Oxygen",
            "Nitrogen",
            "Hydrogen"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Nitrogen."
    },
    {
        "id": 308,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the region conjoining Pakistan, India, and China with unknown leadership called?",
        "options": [
            "Quin",
            "Kashmir",
            "Gibraltar",
            "Andorra"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Kashmir."
    },
    {
        "id": 309,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which UK country features a dragon on their flag?",
        "options": [
            "North Ireland",
            "Wales",
            "England",
            "Scotland"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Wales."
    },
    {
        "id": 310,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which country claims ownership of the disputed state Kosovo?",
        "options": [
            "Serbia",
            "Macedonia",
            "Albania",
            "Croatia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Serbia."
    },
    {
        "id": 311,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these African countries list \"Spanish\" as an official language?",
        "options": [
            "Cameroon",
            "Equatorial Guinea",
            "Guinea",
            "Angola"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Equatorial Guinea."
    },
    {
        "id": 312,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these countries is the smallest by population?",
        "options": [
            "Slovakia",
            "Norway",
            "Hong Kong",
            "Finland"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Norway."
    },
    {
        "id": 313,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Gibraltar, located just south of the Iberian peninsula, is a territory of which West Europe country?",
        "options": [
            "Spain",
            "United Kingdom",
            "Portugal",
            "France"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is United Kingdom."
    },
    {
        "id": 314,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "In 2012 the German-speaking microstate \"Liechtenstein\" in Central Europe had a population of how many inhabitants?",
        "options": [
            "323,400",
            "90,000",
            "2,400",
            "36,600"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 36,600."
    },
    {
        "id": 315,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many timezones does Russia have?",
        "options": [
            "16",
            "11",
            "24",
            "6"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 11."
    },
    {
        "id": 316,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many countries does the United States share a land border with?",
        "options": [
            "4",
            "3",
            "2",
            "1"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 2."
    },
    {
        "id": 317,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which US state is also known as the \"Lone Star State\"?",
        "options": [
            "Tennessee",
            "Kentucky",
            "Texas",
            "Alabama"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Texas."
    },
    {
        "id": 318,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Harvard University is located in which city?",
        "options": [
            "Providence",
            "Cambridge",
            "New York",
            "Washington D.C."
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Cambridge."
    },
    {
        "id": 319,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following landlocked countries is entirely contained within another country?",
        "options": [
            "Mongolia",
            "Lesotho",
            "Luxembourg",
            "Burkina Faso"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Lesotho."
    },
    {
        "id": 320,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Bir Tawil, an uninhabited track of land claimed by no country, is located along the border of which two countries?",
        "options": [
            "Israel and Jordan",
            "Iraq and Saudi Arabia",
            "Chad and Libya",
            "Egypt and Sudan"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Egypt and Sudan."
    },
    {
        "id": 321,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The body of the Egyptian Sphinx was based on which animal?",
        "options": [
            "Horse",
            "Dog",
            "Lion",
            "Bull"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Lion."
    },
    {
        "id": 322,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Pyrenees mountains are located on the border of which two countries?",
        "options": [
            "France and Spain",
            "Russia and Ukraine",
            "Norway and Sweden",
            "Italy and Switzerland"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is France and Spain."
    },
    {
        "id": 323,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is NOT a city in India?",
        "options": [
            "Ahmedabad",
            "Islamabad",
            "Hyderabad",
            "Ghaziabad"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Islamabad."
    },
    {
        "id": 324,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the tallest mountain in Canada?",
        "options": [
            "Mount Logan",
            "Whistler Mountain",
            "Blue Mountain",
            "Mont Tremblant"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Mount Logan."
    },
    {
        "id": 325,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Into which basin does the Jordan River flow into?",
        "options": [
            "Salton Sea",
            "Aral Sea",
            "Dead Sea",
            "Caspian Sea"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Dead Sea."
    },
    {
        "id": 326,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following countries is an island?",
        "options": [
            "Azerbaijan",
            "El Salvador",
            "Cyprus",
            "Djibouti"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Cyprus."
    },
    {
        "id": 327,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of the US state Nevada?",
        "options": [
            "Reno",
            "Las Vegas",
            "Carson City",
            "Henderson"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Carson City."
    },
    {
        "id": 328,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the state capital of South Dakota?",
        "options": [
            "Watertown",
            "Sioux Falls",
            "Rapid City",
            "Pierre"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Pierre."
    },
    {
        "id": 329,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which is the largest city in Morocco?",
        "options": [
            "Rabat",
            "Casablanca",
            "Sale",
            "Fes"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Casablanca."
    },
    {
        "id": 330,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "A lion brandishing a sword is depicted on the national flag of which country?",
        "options": [
            "Albania",
            "Zambia",
            "Sri Lanka",
            "Moldova"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Sri Lanka."
    },
    {
        "id": 331,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which Borough is the farthest in the north of New York City?",
        "options": [
            "Manhattan",
            "Queens",
            "Brooklyn",
            "Bronx"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Bronx."
    },
    {
        "id": 332,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What city is the Terracotta Army located in?",
        "options": [
            "Xi'an",
            "Hong Kong",
            "Shanghai",
            "Beijing"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Xi'an."
    },
    {
        "id": 333,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "If soccer is called football in England, what is American football called in England?",
        "options": [
            "Handball",
            "Touchdown",
            "American football",
            "Combball"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is American football."
    },
    {
        "id": 334,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the highest mountain in the world?",
        "options": [
            "Mt. Everest",
            "Mount Godwin Austen",
            "Kangchenjunga",
            "Annapurna"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Mt. Everest."
    },
    {
        "id": 335,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Where is the area commonly known as the Bermuda Triangle?",
        "options": [
            "North Pacific Ocean, between Japan and the USA",
            "In the Caribbean Sea",
            "North Atlantic Ocean, between Florida and Puerto Rico",
            "South Pacific Ocean, far off Chile"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is North Atlantic Ocean, between Florida and Puerto Rico."
    },
    {
        "id": 336,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the capital of Mauritius?",
        "options": [
            "Port Moresby",
            "Port-au-Prince",
            "Port Vila",
            "Port Louis"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Port Louis."
    },
    {
        "id": 337,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What European country is not a part of the EU?",
        "options": [
            "Lithuania",
            "Czechia",
            "Ireland",
            "Norway"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Norway."
    },
    {
        "id": 338,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the smallest country in the world?",
        "options": [
            "Maldives",
            "Monaco",
            "Malta",
            "Vatican City"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Vatican City."
    },
    {
        "id": 339,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "In which city is the Big Nickel located in Canada?",
        "options": [
            "Victoria, British Columbia",
            "Halifax, Nova Scotia ",
            "Calgary, Alberta",
            "Sudbury, Ontario"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Sudbury, Ontario."
    },
    {
        "id": 340,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of Denmark?",
        "options": [
            "Copenhagen",
            "Aalborg",
            "Odense",
            "Aarhus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Copenhagen."
    },
    {
        "id": 341,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What name was historically used for the Turkish city currently known as Istanbul?",
        "options": [
            "S\u00f6\u011f\u00fct",
            "Adrianople",
            "Constantinople",
            "H\u00fcdavendigar"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Constantinople."
    },
    {
        "id": 342,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The formerly East-Prussian city of K\u00f6nigsberg is known as which Russian City today?",
        "options": [
            "Kursk",
            "Krasnodar",
            "Kaliningrad",
            "Kazan"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Kaliningrad."
    },
    {
        "id": 343,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which European city has the highest mileage of canals in the world?",
        "options": [
            "Venice",
            "Amsterdam",
            "Berlin",
            "Birmingham"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Birmingham."
    },
    {
        "id": 344,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "In which country is the city of Rio de Janeiro?",
        "options": [
            "Peru",
            "Chile",
            "Venezuela",
            "Brazil"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Brazil."
    },
    {
        "id": 345,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the busiest port in Europe?",
        "options": [
            "Port of Hamburg",
            "Port of Rotterdam",
            "Port of Antwerp",
            "Port of Amsterdam"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Port of Rotterdam."
    },
    {
        "id": 346,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The Maluku islands (informally known as the Spice Islands) belong to which country?",
        "options": [
            "Indonesia",
            "New Zealand",
            "Chile",
            "Fiji"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Indonesia."
    },
    {
        "id": 347,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is Canada's smallest province?",
        "options": [
            "Nova Scotia",
            "New Brunswick",
            "Prince Edward Island",
            "Yukon"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Prince Edward Island."
    },
    {
        "id": 348,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Laos?",
        "options": [
            "Vaduz",
            "Tarawa",
            "Tegucigalpa",
            "Vientiane"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Vientiane."
    },
    {
        "id": 349,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the name of rocky region that spans most of eastern Canada?",
        "options": [
            "Rocky Mountains",
            "Appalachian Mountains",
            "Canadian Shield",
            "Himalayas"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Canadian Shield."
    },
    {
        "id": 350,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Lithuania?",
        "options": [
            "Vilnius",
            "Helsinki",
            "Riga",
            "Tallinn"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Vilnius."
    },
    {
        "id": 351,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many provinces are in the Netherlands?",
        "options": [
            "13",
            "12",
            "10",
            "14"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 12."
    },
    {
        "id": 352,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Ouagadougou is the capital of which African country?",
        "options": [
            "Burkina Faso",
            "Senegal",
            "Central African Republic",
            "Zambia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Burkina Faso."
    },
    {
        "id": 353,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the 15th letter of the Greek alphabet?",
        "options": [
            "Omicron (\u039f)",
            "Sigma (\u03a3)",
            "Nu (\u039d)",
            "Pi (\u03a0)"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Omicron (\u039f)."
    },
    {
        "id": 354,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The country of Belize borders which country?",
        "options": [
            "Per\u00fa",
            "Guatemala",
            "Laos",
            "Kenya"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Guatemala."
    },
    {
        "id": 355,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
        "options": [
            "Europe",
            "Asia",
            "Africa",
            "South America"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Africa."
    },
    {
        "id": 356,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these countries is NOT the only country to start with that letter of the alphabet?",
        "options": [
            "Qatar",
            "Yemen",
            "Zambia",
            "Oman"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Zambia."
    },
    {
        "id": 357,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the world's smallest country by population?",
        "options": [
            "Lichtenstein",
            "Nauru",
            "Marshall Islands",
            "Vatican City"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Vatican City."
    },
    {
        "id": 358,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the capital of Burkina Faso?",
        "options": [
            "Ouagadougou",
            "Yamoussoukro",
            "Abidjan",
            "Yaound\u00e9"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Ouagadougou."
    },
    {
        "id": 359,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What colour is the circle on the Japanese flag?",
        "options": [
            "White",
            "Black",
            "Yellow",
            "Red"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Red."
    },
    {
        "id": 360,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Where is the ancient city of Petra located?",
        "options": [
            "Egypt",
            "Italy",
            "Israel",
            "Jordan"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Jordan."
    },
    {
        "id": 361,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the official German name of the Swiss Federal Railways?",
        "options": [
            "Bundesbahnen der Schweiz",
            "Schweizerische Nationalbahnen",
            "Schweizerische Bundesbahnen",
            "Schweizerische Staatsbahnen"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Schweizerische Bundesbahnen."
    },
    {
        "id": 362,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which Canadian province has Charlottetown as its capital?",
        "options": [
            "Prince Edward Island",
            "Saskachewan",
            "Ontario",
            "Northwest Terrirories"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Prince Edward Island."
    },
    {
        "id": 363,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What island in the Canary Islands was the scene of one of the worst air disasters in history with the collision of two jumbo jets?",
        "options": [
            "Fuerteventura",
            "Gran Canaria",
            "Tenerife",
            "Maui"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Tenerife."
    },
    {
        "id": 364,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where is Timbuktu located?",
        "options": [
            "Azerbaijan, Asia",
            "Mauritania, Africa",
            "Bangladesh, Asia",
            "Mali, Africa"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Mali, Africa."
    },
    {
        "id": 365,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these is NOT an Australian state or territory?",
        "options": [
            "New South Wales",
            "Alberta",
            "Queensland",
            "Victoria"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Alberta."
    },
    {
        "id": 366,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Australia?",
        "options": [
            "Sydney",
            "Canberra",
            "Brisbane",
            "Melbourne"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Canberra."
    },
    {
        "id": 367,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which country is the Taedong River in?",
        "options": [
            "North Korea",
            "South Korea",
            "Japan",
            "China"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is North Korea."
    },
    {
        "id": 368,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What event led to Liechenstein adding a crown to its flag?",
        "options": [
            "Coronation of Prince Johann I Joseph in 1805",
            "Signing of the 1862 Constitution of Liechtenstein",
            "The 1936 Olympics",
            "Charles VI's decree in 1719"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is The 1936 Olympics."
    },
    {
        "id": 369,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is special about Lake Titicaca?",
        "options": [
            "Deepest lake in the world",
            "Highest navigable lake",
            "Longest lake in the world",
            "Remains frozen all year round"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Highest navigable lake."
    },
    {
        "id": 370,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the nickname for the US state Delaware?",
        "options": [
            "The Fiftieth State",
            "The Second State",
            "The First State",
            "The Sixteenth State"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is The First State."
    },
    {
        "id": 371,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of Jamaica?",
        "options": [
            "Port-au-Prince",
            "San Juan",
            "Kingston",
            "Bridgetown"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Kingston."
    },
    {
        "id": 372,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many countries does Mexico border?",
        "options": [
            "1",
            "4",
            "2",
            "3"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 3."
    },
    {
        "id": 373,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The derisive acronym \"PIIGS\" refers to which of the following European countries and their economic statuses?",
        "options": [
            "Portugal, Iceland, Ireland, Greece, Serbia",
            "Poland, Iceland, Italy, Greenland, Spain",
            "Portugal, Ireland, Italy, Greece, Spain",
            "Poland, Iceland, Italy, Greece, Serbia"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Portugal, Ireland, Italy, Greece, Spain."
    },
    {
        "id": 374,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the only nation that borders both Uruguay and Venezuela?",
        "options": [
            "Chile",
            "Panama",
            "Brazil",
            "Mexico"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Brazil."
    },
    {
        "id": 375,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the name of the Canadian national anthem?",
        "options": [
            "March of the Puck Drop",
            "Leaf-Spangled Banner",
            "O Red Maple",
            "O Canada"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is O Canada."
    },
    {
        "id": 376,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the administrative centre and largest settlement on the Norwegian archipelago of Svalbard?",
        "options": [
            "Ny-\u00c5lesund",
            "Longyearbyen",
            "Sveagruva",
            "Barentsburg"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Longyearbyen."
    },
    {
        "id": 377,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is a castle?",
        "options": [
            "Richard Castle",
            "Elizabeth Castle",
            "Frank Castle",
            "Olivia Castle"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Elizabeth Castle."
    },
    {
        "id": 378,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Where would you find the \"Spanish Steps\"?",
        "options": [
            "London, England",
            "Berlin, Germany",
            "Barcelona, Spain",
            "Rome, Italy"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Rome, Italy."
    },
    {
        "id": 379,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The historical city Timbuktu is located in which West African country?",
        "options": [
            "Burkina Faso",
            "Senegal",
            "Mali",
            "Niger"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Mali."
    },
    {
        "id": 380,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many independent countries are there within the continent of South America?",
        "options": [
            "12",
            "8",
            "10",
            "9"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 12."
    },
    {
        "id": 381,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of British Columbia, Canada?",
        "options": [
            "Victoria",
            "Vancouver",
            "Hope",
            "Kelowna"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Victoria."
    },
    {
        "id": 382,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the official national language of Pakistan?",
        "options": [
            "Urdu",
            "Indian",
            "Pashto",
            "Punjabi"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Urdu."
    },
    {
        "id": 383,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What country is the second largest in the world by area?",
        "options": [
            "Canada",
            "Russia",
            "United States of America",
            "China"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Canada."
    },
    {
        "id": 384,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following geographic features is a ring-shaped coral reef, island, or series of islets?",
        "options": [
            "Atoll",
            "Delta",
            "Peninsula",
            "Isthmus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Atoll."
    },
    {
        "id": 385,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the area of Vatican City?",
        "options": [
            "0.10km^2",
            "0.86km^2",
            "0.44km^2",
            "12.00km^2"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 0.44km^2."
    },
    {
        "id": 386,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital city of the U.S. state of Texas?",
        "options": [
            "San Antonio",
            "Dallas",
            "Austin",
            "Houston"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Austin."
    },
    {
        "id": 387,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these countries is located the FURTHEST away from the South China Sea?",
        "options": [
            "Bangladesh",
            "Vietnam",
            "Malaysia",
            "Philippines"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Bangladesh."
    },
    {
        "id": 388,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In which English county is Stonehenge?",
        "options": [
            "Cumbria",
            "Somerset",
            "Wiltshire",
            "Herefordshire"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Wiltshire."
    },
    {
        "id": 389,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What year is on the flag of the US state Wisconsin?",
        "options": [
            "1848",
            "1783",
            "1634",
            "1901"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 1848."
    },
    {
        "id": 390,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these Japanese islands is the largest by area?",
        "options": [
            "Okinawa",
            "Iki",
            "Shikoku",
            "Odaiba"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Shikoku."
    },
    {
        "id": 391,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The Svalbard Archipelago is a dependency of which country?",
        "options": [
            "Iceland",
            "Russia",
            "Denmark",
            "Norway"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Norway."
    },
    {
        "id": 392,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Vietnam?",
        "options": [
            "Da Nang",
            "Ho Chi Minh City",
            "Hai Phong",
            "Hanoi"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Hanoi."
    },
    {
        "id": 393,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "On which continent/s is the entire country of Spain specifically located when taking into account all of its territory?",
        "options": [
            "Europe",
            "Europe, Africa and Asia",
            "Europe and Africa",
            "Europe and Asia"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Europe and Africa."
    },
    {
        "id": 394,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Colchester Overpass, otherwise known as \"Bunny Man Bridge\", is located where?",
        "options": [
            "Braxton County, Virgina",
            "Medford, Oregon",
            "Lemon Grove, California",
            "Fairfax County, Virginia"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Fairfax County, Virginia."
    },
    {
        "id": 395,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The Space Needle is located in which city?",
        "options": [
            "Vancouver",
            "Los Angles",
            "Toronto",
            "Seattle"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Seattle."
    },
    {
        "id": 396,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Lake Titicaca is located between which two nations?",
        "options": [
            "Mexico and the United States",
            "Peru and Bolivia",
            "Kenya and Uganda",
            "India and Bangladesh"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Peru and Bolivia."
    },
    {
        "id": 397,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which country inside the United Kingdom does NOT appear on its flag, the Union Jack?",
        "options": [
            "Isle of Wight",
            "Wales",
            "Scotland",
            "Ireland"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Wales."
    },
    {
        "id": 398,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which is the largest of these 4 islands?",
        "options": [
            "Madagascar",
            "Borneo",
            "Cuba",
            "Great Britain"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Borneo."
    },
    {
        "id": 399,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the largest country, by area, that has only one time zone?",
        "options": [
            "Canada",
            "Russia",
            "China",
            "India"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is China."
    },
    {
        "id": 400,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which portion of the Marijuana plant produces the psychoactive substance known as THC?",
        "options": [
            "Leaves",
            "Female Flower",
            "Male Flower",
            "Root Ball"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Female Flower."
    },
    {
        "id": 401,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many laws of thermodynamics are there?",
        "options": [
            "Three",
            "Five",
            "Two",
            "Four"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Four."
    },
    {
        "id": 402,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many moons does the Earth have?",
        "options": [
            "0",
            "2",
            "3",
            "1"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 1."
    },
    {
        "id": 403,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How many objects are equivalent to one mole?",
        "options": [
            "6.022 x 10^22",
            "6.002 x 10^22",
            "6.022 x 10^23",
            "6.002 x 10^23"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 6.022 x 10^23."
    },
    {
        "id": 404,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the unit of electrical inductance?",
        "options": [
            "Henry",
            "Coulomb",
            "Mho",
            "Weber"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Henry."
    },
    {
        "id": 405,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The word \"science\" stems from the word \"scire\" meaning what?",
        "options": [
            "To measure",
            "To live",
            "To count",
            "To know"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is To know."
    },
    {
        "id": 406,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "About what percentage of the Earth's surface is water?",
        "options": [
            "90%",
            "70%",
            "30%",
            "50%"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 70%."
    },
    {
        "id": 407,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the scientific name of the red fox?",
        "options": [
            "Vulpes Redus",
            "Red Fox",
            "Vulpes Vulpes",
            "Vulpes Vulpie"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Vulpes Vulpes."
    },
    {
        "id": 408,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Approximately how long is a year on Uranus?",
        "options": [
            "84 Earth years",
            "109 Earth years",
            "62 Earth years",
            "47 Earth years"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 84 Earth years."
    },
    {
        "id": 409,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "A comet's gaseous envelope (which creates the tail) is called what?",
        "options": [
            "The ablative",
            "The wake",
            "The coma",
            "The backwash"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is The coma."
    },
    {
        "id": 410,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "On the Beaufort Scale of wind force, what wind name is given to number 8?",
        "options": [
            "Storm",
            "Gale",
            "Breeze",
            "Hurricane"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Gale."
    },
    {
        "id": 411,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the molecular formula of the active component of chili peppers(Capsaicin)?",
        "options": [
            "C21H23NO3",
            "C6H4Cl2",
            "C18H27NO3",
            "C13H25NO4"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is C18H27NO3."
    },
    {
        "id": 412,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What causes the sound of a heartbeat?",
        "options": [
            "Contraction of the heart chambers",
            "Blood exiting the heart",
            "Closure of the heart valves",
            "Relaxation of the heart chambers"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Closure of the heart valves."
    },
    {
        "id": 413,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "On which mission did the Space Shuttle Columbia break up upon re-entry?",
        "options": [
            "STS-61-C",
            "STS-107",
            "STS-51-L",
            "STS-109"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is STS-107."
    },
    {
        "id": 414,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which is not a type of neuron?",
        "options": [
            "Motor Neuron",
            "Interneuron",
            "Perceptual Neuron",
            "Sensory Neuron"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Perceptual Neuron."
    },
    {
        "id": 415,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "On the periodic table of elements, what is the symbol for Tin?",
        "options": [
            "Ni",
            "Sn",
            "Ti",
            "Na"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Sn."
    },
    {
        "id": 416,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is a stop codon in DNA?",
        "options": [
            "ACA",
            "TAA",
            "ACT",
            "GTA"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is TAA."
    },
    {
        "id": 417,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "At what depth should you make a decompression stop, or safety stop, on a typical scuba dive?",
        "options": [
            "75 Feet / 23 Meters",
            "50 Feet / 15 Meters",
            "15 Feet / 5 Meters",
            "25 Feet / 7.5 Meters"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 15 Feet / 5 Meters."
    },
    {
        "id": 418,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Tetsuya Fujita was a scientist that developed the scale for which natural disaster?",
        "options": [
            "Earthquakes",
            "Hurricanes",
            "Volcanoes",
            "Tornadoes"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Tornadoes."
    },
    {
        "id": 419,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which Apollo mission was the first one to land on the Moon?",
        "options": [
            "Apollo 11",
            "Apollo 13",
            "Apollo 10",
            "Apollo 9"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Apollo 11."
    },
    {
        "id": 420,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the standard SI unit for luminous intensity?",
        "options": [
            "Faraday",
            "Candela",
            "Lumen",
            "Coulomb"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Candela."
    },
    {
        "id": 421,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the northernmost human settlement with year round inhabitants?",
        "options": [
            "Nagurskoye, Russia",
            "McMurdo Station, Antarctica ",
            "Alert, Canada",
            "Honningsv\u00e5g, Norway"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Alert, Canada."
    },
    {
        "id": 422,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of the American state of Arizona?",
        "options": [
            "Montgomery",
            "Tallahassee",
            "Phoenix",
            "Raleigh"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Phoenix."
    },
    {
        "id": 423,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The World Health Organization headquarters is located in which European country?",
        "options": [
            "Belgium",
            "United Kingdom",
            "France",
            "Switzerland"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Switzerland."
    },
    {
        "id": 424,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Santorini is an island belonging to what European Country?",
        "options": [
            "Spain",
            "Greece",
            "Turkey",
            "Italy"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Greece."
    },
    {
        "id": 425,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In Washington, D.C. what does the \"C\" stand for?",
        "options": [
            "Columbia",
            "City",
            "Caledonia",
            "Corinthia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Columbia."
    },
    {
        "id": 426,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The White Cliffs of Dover is located in which country?",
        "options": [
            "Netherlands",
            "United States",
            "United Kingdom",
            "Sweden"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is United Kingdom."
    },
    {
        "id": 427,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital city of New Zealand?",
        "options": [
            "Melbourne",
            "Auckland",
            "Wellington",
            "Christchurch"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Wellington."
    },
    {
        "id": 428,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which city is the biggest in Canada?",
        "options": [
            "Montreal",
            "Vancouver",
            "Ottawa",
            "Toronto"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Toronto."
    },
    {
        "id": 429,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What country has a horizontal bicolor red and white flag?",
        "options": [
            "Malta",
            "Monaco",
            "Bahrain",
            "Liechenstein"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Monaco."
    },
    {
        "id": 430,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "With which country does France share its largest land border",
        "options": [
            "Germany",
            "Brazil",
            "Spain",
            "Canada"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Brazil."
    },
    {
        "id": 431,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following is not a megadiverse country - one that harbors a high number of the earth's endemic species?",
        "options": [
            "Mexico",
            "Thailand",
            "South Africa",
            "Peru"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Thailand."
    },
    {
        "id": 432,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which Oceanian nation is known in M\u0101ori as Aotearoa?",
        "options": [
            "New Caledonia",
            "Solomon Islands",
            "Australia",
            "New Zealand"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is New Zealand."
    },
    {
        "id": 433,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The land of Gotland is located in which European country?",
        "options": [
            "Norway",
            "Denmark",
            "Sweden",
            "Germany"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Sweden."
    },
    {
        "id": 434,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these countries is not a United Nations member state?",
        "options": [
            "Niue",
            "South Sudan",
            "Montenegro",
            "Tuvalu"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Niue."
    },
    {
        "id": 435,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these African regions does *not* directly border the Democratic Republic of The Congo?",
        "options": [
            "Central African Republic",
            "Zambia",
            "Tanzania",
            "Sudan"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Sudan."
    },
    {
        "id": 436,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Principality of Sealand is an unrecognized micronation off the coast of what country?",
        "options": [
            "Japan",
            "The United Kingdom",
            "Argentina",
            "Austrailia"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is The United Kingdom."
    },
    {
        "id": 437,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the largest country in the world ?",
        "options": [
            "Russian Federation",
            "China",
            "Canada",
            "Brazil"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Russian Federation."
    },
    {
        "id": 438,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of Bangladesh?",
        "options": [
            "Lahore",
            "London",
            "Khulna",
            "Dhaka"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Dhaka."
    },
    {
        "id": 439,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the largest lake in the African continent?",
        "options": [
            "Lake Tanganyika",
            "Lake Victoria",
            "Lake Malawi",
            "Lake Turkana"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Lake Victoria."
    },
    {
        "id": 440,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which ocean borders the west coast of the United States?",
        "options": [
            "Indian",
            "Arctic",
            "Atlantic",
            "Pacific"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Pacific."
    },
    {
        "id": 441,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which city is the capital of the United States of America?",
        "options": [
            "Washington D.C",
            "Los Angeles",
            "Albany",
            "Seattle"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Washington D.C."
    },
    {
        "id": 442,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Kuala Lumpur is the capital of which country?",
        "options": [
            "Thailand",
            "Singapore",
            "Malaysia",
            "Indonesia"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Malaysia."
    },
    {
        "id": 443,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Greenland?",
        "options": [
            "Narsaq",
            "Maniitsoq",
            "Nuuk",
            "Sisimiut"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Nuuk."
    },
    {
        "id": 444,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the name of the capital of Turkey?",
        "options": [
            "Ankara",
            "Izmir",
            "Istanbul",
            "Bursa"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Ankara."
    },
    {
        "id": 445,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these countries is not written in its native language?",
        "options": [
            "Suomi",
            "Ell\u00e1da",
            "Schweiz",
            "Slova\u0161ko"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Slova\u0161ko."
    },
    {
        "id": 446,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many countries share a land border with Luxembourg?",
        "options": [
            "4",
            "2",
            "3",
            "5"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 3."
    },
    {
        "id": 447,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
        "options": [
            "Kuwait",
            "United Arab Emirates",
            "Jordan",
            "Qatar"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Qatar."
    },
    {
        "id": 448,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which country features a maple leaf on its flag?",
        "options": [
            "Brazil",
            "India",
            "Canada",
            "Mexico"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Canada."
    },
    {
        "id": 449,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the capital of Wisconsin, USA?",
        "options": [
            "Wisconsin Dells",
            "Green Bay",
            "Milwaukee",
            "Madison"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Madison."
    },
    {
        "id": 450,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
        "options": [
            "Hudson Bay",
            "Mariana Trench",
            "Great Barrier Reef",
            "Grand Banks"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Grand Banks."
    },
    {
        "id": 451,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these places is a location in Cornwall?",
        "options": [
            "Alicante",
            "Lisbon",
            "Barcelona",
            "Madrid"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Barcelona."
    },
    {
        "id": 452,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these countries is NOT a part of the Asian continent?",
        "options": [
            "Suriname",
            "Singapore",
            "Russia",
            "Georgia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Suriname."
    },
    {
        "id": 453,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "On a London Underground map, what colour is the Circle Line?",
        "options": [
            "Red",
            "Yellow",
            "Blue",
            "Green"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Yellow."
    },
    {
        "id": 454,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which European city is known as the \"City of Light\"?",
        "options": [
            "London",
            "Paris",
            "Madrid",
            "Rome"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Paris."
    },
    {
        "id": 455,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What city is known as the Rose Capital of the World?",
        "options": [
            "Miami, Florida",
            "Anaheim, California",
            "Tyler, Texas",
            "San Diego, California"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Tyler, Texas."
    },
    {
        "id": 456,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following countries does NOT recognize Armenia as an independent country?",
        "options": [
            "Turkey",
            "Azerbaijan",
            "Pakistan",
            "Iran"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Pakistan."
    },
    {
        "id": 457,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which is the most abundant element in the universe?",
        "options": [
            "Helium",
            "Hydrogen",
            "Lithium",
            "Oxygen"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Hydrogen."
    },
    {
        "id": 458,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many bones are in the human body?",
        "options": [
            "209",
            "203",
            "206",
            "200"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 206."
    },
    {
        "id": 459,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these bones is hardest to break?",
        "options": [
            "Femur",
            "Cranium",
            "Tibia",
            "Humerus"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Femur."
    },
    {
        "id": 460,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the hottest planet in the Solar System?",
        "options": [
            "Jupiter",
            "Mars",
            "Mercury",
            "Venus"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Venus."
    },
    {
        "id": 461,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these elements on the Periodic Table is a Noble Gas?",
        "options": [
            "Neon",
            "Colbalt",
            "Iodine",
            "Potassium"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Neon."
    },
    {
        "id": 462,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these Elements is a metalloid?",
        "options": [
            "Tin",
            "Bromine",
            "Antimony",
            "Rubidium"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Antimony."
    },
    {
        "id": 463,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How many protons are in an oxygen atom?",
        "options": [
            "Four",
            "Two",
            "Eight",
            "Six"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Eight."
    },
    {
        "id": 464,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Rhinoplasty is a surgical procedure on what part of the human body?",
        "options": [
            "Neck",
            "Ears",
            "Nose",
            "Chin"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Nose."
    },
    {
        "id": 465,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Burning which of these metals will produce a bright white flame?",
        "options": [
            "Lithium",
            "Copper",
            "Lead",
            "Magnesium"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Magnesium."
    },
    {
        "id": 466,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Au on the Periodic Table refers to which element?",
        "options": [
            "Silver",
            "Oxygen",
            "Gold",
            "Nickel"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Gold."
    },
    {
        "id": 467,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the atomic number of the element Strontium?",
        "options": [
            "38",
            "47",
            "11",
            "73"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 38."
    },
    {
        "id": 468,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many planets are there in the Solar System?",
        "options": [
            "9",
            "11",
            "8",
            "10"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 8."
    },
    {
        "id": 469,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which is the longest bone in the human body?",
        "options": [
            "Femur",
            "Fibula",
            "Scapula",
            "Ulna"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Femur."
    },
    {
        "id": 470,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following is not one of the groups on the periodic table?",
        "options": [
            "Noble Gases",
            "Fluorines",
            "Halogens",
            "Alkali Metals"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Fluorines."
    },
    {
        "id": 471,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The medical condition osteoporosis affects which part of the body?",
        "options": [
            "Brain",
            "Bones",
            "Skin",
            "Heart"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Bones."
    },
    {
        "id": 472,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following are cells of the adaptive immune system?",
        "options": [
            "Natural killer cells",
            "White blood cells",
            "Cytotoxic T cells",
            "Dendritic cells"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Cytotoxic T cells."
    },
    {
        "id": 473,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where in the human body is the Pineal Gland located?",
        "options": [
            "Throat",
            "Chest",
            "Brain",
            "Groin"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Brain."
    },
    {
        "id": 474,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the name of the Supermassive Black Hole in the centre of the Milky Way?",
        "options": [
            "Alpha Centauri",
            "Sagittarius A*",
            "Andromeda",
            "Messier 87"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Sagittarius A*."
    },
    {
        "id": 475,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where is the Gluteus Maximus muscle located?",
        "options": [
            "Butt",
            "Torso",
            "Head",
            "Arm"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Butt."
    },
    {
        "id": 476,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "This element, when overcome with extreme heat and pressure, creates diamonds.",
        "options": [
            "Carbon",
            "Hydrogen",
            "Nitrogen",
            "Oxygen"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Carbon."
    },
    {
        "id": 477,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the molecular formula of Ozone?",
        "options": [
            "N2O",
            "C6H2O6",
            "SO4",
            "O3"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is O3."
    },
    {
        "id": 478,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which horizon in a soil profile consists of bedrock?",
        "options": [
            "R",
            "B",
            "D",
            "O"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is R."
    },
    {
        "id": 479,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the \"powerhouse\" of the Eukaryotic animal cell?",
        "options": [
            "Nucleus",
            "Endoplasmic Reticulum",
            "Chloroplast",
            "Mitochondria"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Mitochondria."
    },
    {
        "id": 480,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the largest planet in the Solar System?",
        "options": [
            "Mars",
            "Saturn",
            "Jupiter",
            "Earth"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Jupiter."
    },
    {
        "id": 481,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which chemical element was originally known as Alabamine?",
        "options": [
            "Astatine",
            "Molybdenum",
            "Selenium",
            "Antimony"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Astatine."
    },
    {
        "id": 482,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "About how old is Earth?",
        "options": [
            "2.5 Billion Years",
            "5.5 Billion Years",
            "3.5 Billion Years",
            "4.5 Billion Years"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 4.5 Billion Years."
    },
    {
        "id": 483,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What does CPR, the emergency procedure to assist someone who has suffered cardiac arrest, stand for?",
        "options": [
            "Cancer pain release",
            "Chronic pain relief",
            "Cardiopulmonary resuscitation",
            "Contraceptive prevalence rate"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Cardiopulmonary resuscitation."
    },
    {
        "id": 484,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which Landsat Satellite currently has had the longest operational life?",
        "options": [
            "Landsat 5",
            "Landsat 7",
            "Landsat 6",
            "Landsat 8"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Landsat 5."
    },
    {
        "id": 485,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What cell organelle is known as \"the powerhouse of the cell?\"",
        "options": [
            "Mitochondria",
            "Golgi apparatus",
            "Nucleus",
            "Endoplasmic reticulum"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Mitochondria."
    },
    {
        "id": 486,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What does the letter 'S' stand for in 'NASA'?",
        "options": [
            "Star",
            "Space",
            "Society",
            "Science"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Space."
    },
    {
        "id": 487,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the lowest layer of the Earth's atmosphere named?",
        "options": [
            "Thermosphere",
            "Mesosphere",
            "Stratosphere",
            "Troposphere"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Troposphere."
    },
    {
        "id": 488,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Where is Hadrian's Wall located?",
        "options": [
            "Carlisle, England",
            "Dublin, Ireland",
            "Alexandria, Egypt",
            "Rome, Italy"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Carlisle, England."
    },
    {
        "id": 489,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these cities has a 4\u00b0 East longitude.",
        "options": [
            "Rio de Janero",
            "Amsterdam",
            "Toronto",
            "Hong Kong"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Amsterdam."
    },
    {
        "id": 490,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the largest Muslim country in the world?",
        "options": [
            "Saudi Arabia",
            "Pakistan",
            "Indonesia",
            "Iran"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Indonesia."
    },
    {
        "id": 491,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which is the only US state located entirely within the Appalachia region?",
        "options": [
            "West Virginia",
            "Kentucky",
            "Alabama",
            "Pennsylvania"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is West Virginia."
    },
    {
        "id": 492,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which US state is nicknamed \"The Golden State\"?",
        "options": [
            "Florida",
            "New Mexico",
            "California",
            "Alaska"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is California."
    },
    {
        "id": 493,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the land connecting North America and South America?",
        "options": [
            "Australasia",
            "Isthmus of Panama",
            "Urals",
            "Isthmus of Suez"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Isthmus of Panama."
    },
    {
        "id": 494,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of the State of Washington, United States?",
        "options": [
            "Seattle",
            "Olympia",
            "Washington D.C.",
            "Yukon"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Olympia."
    },
    {
        "id": 495,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Cyprus?",
        "options": [
            "Larnaca",
            "Nicosia",
            "Limassol",
            "Paphos"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Nicosia."
    },
    {
        "id": 496,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The mountainous Khyber Pass connects which of the two following countries?",
        "options": [
            "India and Nepal",
            "Afghanistan and Pakistan",
            "Tajikistan and Kyrgyzstan",
            "Pakistan and India"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Afghanistan and Pakistan."
    },
    {
        "id": 497,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What national museum will you find in Cooperstown, New York?",
        "options": [
            "Museum of Modern Art",
            "Metropolitan Museum of Art",
            "National Toy Hall of Fame",
            "National Baseball Hall of Fame"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is National Baseball Hall of Fame."
    },
    {
        "id": 498,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the second-largest city in Lithuania?",
        "options": [
            "Panev\u0117\u017eys",
            "Klaip\u0117da",
            "Vilnius",
            "Kaunas"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Kaunas."
    },
    {
        "id": 499,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Ecuador?",
        "options": [
            "Santiago",
            "Bogota",
            "Quito",
            "Santa F\u00e9"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Quito."
    },
    {
        "id": 500,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where is Fort Marlborough located?",
        "options": [
            "Singapore",
            "Dover",
            "Bengkulu",
            "London"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Bengkulu."
    },
    {
        "id": 501,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which state of the United States is the smallest?",
        "options": [
            "Massachusetts",
            "Maine",
            "Vermont",
            "Rhode Island "
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Rhode Island ."
    },
    {
        "id": 502,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which country is the home of the largest Japanese population outside of Japan?",
        "options": [
            "The United States",
            "Brazil",
            "Russia",
            "China"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Brazil."
    },
    {
        "id": 503,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Greenland is a part of which kingdom?",
        "options": [
            "United Kingdom",
            "Denmark",
            "Sweden",
            "Norway"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Denmark."
    },
    {
        "id": 504,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Gambia is a nation found on which continent?",
        "options": [
            "Asia",
            "Europe",
            "Africa",
            "South America"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Africa."
    },
    {
        "id": 505,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which country ranks first in the number of historically active volcanoes?",
        "options": [
            "Japan",
            "USA",
            "India",
            "Indonesia"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Indonesia."
    },
    {
        "id": 506,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How many islands does Kuwait have?",
        "options": [
            "2",
            "9",
            "3",
            "6"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 9."
    },
    {
        "id": 507,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many countries are larger than Australia?",
        "options": [
            "3",
            "5",
            "4",
            "6"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 5."
    },
    {
        "id": 508,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which two modern-day countries used to be known as the region of Rhodesia between the 1890s and 1980?",
        "options": [
            "Rwanda & Burundi",
            "Lesotho & Swaziland",
            "Togo & Benin",
            "Zambia & Zimbabwe"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Zambia & Zimbabwe."
    },
    {
        "id": 509,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following language families is the most controversial amongst modern linguists?",
        "options": [
            "Indo-European",
            "Sino-Tibetan",
            "Altaic",
            "Dravidian"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Altaic."
    },
    {
        "id": 510,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the official language of Costa Rica?",
        "options": [
            "Spanish",
            "Creole",
            "English",
            "Portuguese"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Spanish."
    },
    {
        "id": 511,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "In which country is Tallinn located?",
        "options": [
            "Estonia",
            "Poland",
            "Finland",
            "Sweden"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Estonia."
    },
    {
        "id": 512,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the largest hot desert in the world?",
        "options": [
            "Sahara",
            "Mojave",
            "Kalahari",
            "Gobi"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Sahara."
    },
    {
        "id": 513,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of Romania?",
        "options": [
            "Bratislava",
            "Budapest",
            "Belgrade",
            "Bucharest"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Bucharest."
    },
    {
        "id": 514,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
        "options": [
            "Yugoslavia",
            "Czechoslovakia",
            "South Ossetia",
            "Abkhazia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Yugoslavia."
    },
    {
        "id": 515,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which English county will you find the University of East Anglia?",
        "options": [
            "Norfolk",
            "Essex",
            "Cambridgeshire",
            "Suffolk"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Norfolk."
    },
    {
        "id": 516,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is an official currency of the Cook Islands?",
        "options": [
            "Australian Dollar",
            "United States Dollar",
            "New Zealand Dollar",
            "British Pound"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is New Zealand Dollar."
    },
    {
        "id": 517,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What continent is the country Lesotho in?",
        "options": [
            "Africa",
            "Asia",
            "Europe",
            "South America"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Africa."
    },
    {
        "id": 518,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these holidays is NOT usually celebrated in the month of December?",
        "options": [
            "Kwanzaa",
            "Christmas",
            "Hanukkah",
            "Thanksgiving"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Thanksgiving."
    },
    {
        "id": 519,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The Quadrangularis Reversum is best described as which of the following?",
        "options": [
            "A geometric theorem",
            "A building in Oxford University",
            "A chess move",
            "A percussion instrument"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is A percussion instrument."
    },
    {
        "id": 520,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Whose greyscale face is on the kappa emoticon on Twitch?",
        "options": [
            "Jimmy DeSeno",
            "John DeSeno",
            "Justin DeSeno",
            "Josh DeSeno"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Josh DeSeno."
    },
    {
        "id": 521,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the Spanish word for \"donkey\"?",
        "options": [
            "Toro",
            "Burro",
            "Caballo",
            "Perro"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Burro."
    },
    {
        "id": 522,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The term \"scientist\" was coined in which year?",
        "options": [
            "1933",
            "1833",
            "1796",
            "1942"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 1833."
    },
    {
        "id": 523,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Named after the mallow flower, mauve is a shade of what?",
        "options": [
            "Brown",
            "Purple",
            "Pink",
            "Red"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Purple."
    },
    {
        "id": 524,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "After how many years would you celebrate your crystal anniversary?",
        "options": [
            "15",
            "20",
            "25",
            "10"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 15."
    },
    {
        "id": 525,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these Nicktoons were NOT originally a short on Oh Yeah! Cartoons before becoming their own series?",
        "options": [
            "ChalkZone",
            "The Fairly OddParents",
            "Danny Phantom",
            "My Life as a Teenage Robot"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Danny Phantom."
    },
    {
        "id": 526,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In what year did Halley's Comet, which will not appear again until the year 2061, previously approach Earth?",
        "options": [
            "1942",
            "2001",
            "1909",
            "1986"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 1986."
    },
    {
        "id": 527,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "On a dartboard, what number is directly opposite No. 1?",
        "options": [
            "20",
            "12",
            "19",
            "15"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 19."
    },
    {
        "id": 528,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What does the 'S' stand for in the abbreviation SIM, as in SIM card?",
        "options": [
            "Single",
            "Solid",
            "Secure",
            "Subscriber"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Subscriber."
    },
    {
        "id": 529,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which famed architect, who died in 2019 aged 102, designed the glass pyramid at the Louvre museum in Paris?",
        "options": [
            "Wang Shu",
            "Frank Gehry",
            "Pascale Gu\u00e9dot",
            "I. M. Pei"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is I. M. Pei."
    },
    {
        "id": 530,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the name of the Jewish New Year?",
        "options": [
            "Succoss",
            "Elul",
            "Rosh Hashanah",
            "New Year"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Rosh Hashanah."
    },
    {
        "id": 531,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What name represents the letter \"M\" in the NATO phonetic alphabet?",
        "options": [
            "Mike",
            "Mark",
            "Max",
            "Matthew"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Mike."
    },
    {
        "id": 532,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What technology is named after a tenth-century ruler of Denmark and Norway?",
        "options": [
            "Internet",
            "Wi-Fi",
            "Bluetooth",
            "GPS"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Bluetooth."
    },
    {
        "id": 533,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of the following is NOT one of Aesop's fables?",
        "options": [
            "The Tortoise and the Hare",
            "The Fox and the Hound",
            "The Frog and the Ox",
            "The Fox and the Grapes"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is The Fox and the Hound."
    },
    {
        "id": 534,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In the Morse code, which letter is indicated by 3 dots?",
        "options": [
            "S",
            "A",
            "O",
            "C"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is S."
    },
    {
        "id": 535,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these words means \"idle spectator\"?",
        "options": [
            "Gongoozler",
            "Gossypiboma",
            "Jentacular",
            "Meupareunia"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Gongoozler."
    },
    {
        "id": 536,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Nephelococcygia is the practice of doing what?",
        "options": [
            "Finding shapes in clouds",
            "Swimming in freezing water",
            "Sleeping with your eyes open",
            "Breaking glass with your voice"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Finding shapes in clouds."
    },
    {
        "id": 537,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What was the first ever London Underground line to be built?",
        "options": [
            "Bakerloo Line",
            "Circle Line",
            "Victoria Line",
            "Metropolitan Line"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Metropolitan Line."
    },
    {
        "id": 538,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In a standard set of playing cards, which is the only king without a moustache?",
        "options": [
            "Hearts",
            "Clubs",
            "Spades",
            "Diamonds"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Hearts."
    },
    {
        "id": 539,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which company did Valve cooperate with in the creation of the Vive?",
        "options": [
            "Oculus",
            "Google",
            "HTC",
            "Razer"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is HTC."
    },
    {
        "id": 540,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "When was WhatsApp founded?",
        "options": [
            "2010",
            "2007",
            "2009",
            "2012"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 2009."
    },
    {
        "id": 541,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "According to Fair Works Australia, how long do you have to work to get Long Service Leave?",
        "options": [
            "8 years",
            "2 years",
            "6 months",
            "7 years"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 7 years."
    },
    {
        "id": 542,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "If you are traveling at a speed of 80 mph, how long will it take you to drive 80 miles?",
        "options": [
            "90 minutes",
            "50 minutes",
            "60 minutes",
            "30 minutes"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 60 minutes."
    },
    {
        "id": 543,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What was the name of Sqiudward's bad painting in the Spongebob episode \"Artist Unknown?\"",
        "options": [
            "Bold and Brash",
            "Tilted Perspectives",
            "Rippy Bits",
            "Squidward en Repose"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Bold and Brash."
    },
    {
        "id": 544,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Gouda cheese is from which European country?",
        "options": [
            "France",
            "The Netherlands",
            "Germany",
            "Belgium"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is The Netherlands."
    },
    {
        "id": 545,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What word represents the letter 'T' in the NATO phonetic alphabet?",
        "options": [
            "Tango",
            "Taxi",
            "Target",
            "Turkey"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Tango."
    },
    {
        "id": 546,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which logical fallacy means to attack the character of your opponent rather than their arguments?",
        "options": [
            "Ad hominem",
            "Post hoc ergo propter hoc",
            "Tu quoque",
            "Argumentum ad populum"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Ad hominem."
    },
    {
        "id": 547,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which chemical element, number 11 in the Periodic table, has the symbol Na?",
        "options": [
            "Sodium",
            "Nitrogen",
            "Carbon",
            "Lead"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Sodium."
    },
    {
        "id": 548,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What do the letters of the fast food chain KFC stand for?",
        "options": [
            "Kentucky Fresh Cheese",
            "Kentucky Fried Chicken",
            "Kibbled Freaky Cow",
            "Kiwi Food Cut"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Kentucky Fried Chicken."
    },
    {
        "id": 549,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the name of the extra pedal on a manual or standard transmission car?",
        "options": [
            "Booster",
            "Shifter",
            "Clutch",
            "Parking Brake"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Clutch."
    },
    {
        "id": 550,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the German word for \"spoon\"?",
        "options": [
            "Messer",
            "Essst\u00e4bchen",
            "L\u00f6ffel",
            "Gabel"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is L\u00f6ffel."
    },
    {
        "id": 551,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Area 51 is located in which US state?",
        "options": [
            "Arizona",
            "Nevada",
            "Utah",
            "New Mexico"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Nevada."
    },
    {
        "id": 552,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the name of the ocean that Hawaii is located in?",
        "options": [
            "Pacific",
            "Indian",
            "Atlantic",
            "Arctic"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Pacific."
    },
    {
        "id": 553,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What state is the largest state of the United States of America?",
        "options": [
            "Texas",
            "Washington",
            "Alaska",
            "California"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Alaska."
    },
    {
        "id": 554,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "All of the following are classified as Finno-Ugric languages EXCEPT:",
        "options": [
            "Hungarian",
            "Estonian",
            "Finnish",
            "Samoyedic"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Samoyedic."
    },
    {
        "id": 555,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the only state in the United States that does not have a flag in a shape with 4 edges?",
        "options": [
            "Florida",
            "Ohio",
            "New Mexico",
            "Idaho"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Ohio."
    },
    {
        "id": 556,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Bikini Atoll is in which country?",
        "options": [
            "Fiji",
            "Bahamas",
            "Christmas Islands",
            "Marshall Islands"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Marshall Islands."
    },
    {
        "id": 557,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of Indonesia?",
        "options": [
            "Bandung",
            "Palembang",
            "Jakarta",
            "Medan"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Jakarta."
    },
    {
        "id": 558,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
        "options": [
            "Scotland",
            "Bhutan",
            "Kiribati",
            "Sri Lanka"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Sri Lanka."
    },
    {
        "id": 559,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "On which continent does the Andes mountain range lie?",
        "options": [
            "Africa",
            "Asia",
            "Europe",
            "South America"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is South America."
    },
    {
        "id": 560,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which small country is located between the borders of France and Spain?",
        "options": [
            "Andorra",
            "Lichtenstein",
            "Vatican City",
            "San Marino"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Andorra."
    },
    {
        "id": 561,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these island countries is located in the Caribbean?",
        "options": [
            "Fiji",
            "Maldives",
            "Seychelles",
            "Barbados"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Barbados."
    },
    {
        "id": 562,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which Russian oblast forms a border with Poland?",
        "options": [
            "Omsk",
            "Samara",
            "Kaliningrad",
            "Nizhny Novgorod"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Kaliningrad."
    },
    {
        "id": 563,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?",
        "options": [
            "Hulaul\u00e1",
            "Lishana Deni",
            "Chaldean Neo-Aramaic",
            "Lishan Didan"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Lishana Deni."
    },
    {
        "id": 564,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the county seat of King County, Washington?",
        "options": [
            "Skykomish",
            "Bellevue",
            "Enumclaw",
            "Seattle"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Seattle."
    },
    {
        "id": 565,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Where are the Nazca Lines located?",
        "options": [
            "Colombia",
            "Brazil",
            "Ecuador",
            "Peru"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Peru."
    },
    {
        "id": 566,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What tiny principality lies between Spain and France?",
        "options": [
            "Monaco",
            "Liechtenstein",
            "San Marino",
            "Andorra"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Andorra."
    },
    {
        "id": 567,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which one of these archipelagos are NOT a part of the United Kingdom?",
        "options": [
            "Isles of Scilly",
            "Shetland Islands ",
            "The Channel Islands ",
            "Orkney Islands"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is The Channel Islands ."
    },
    {
        "id": 568,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Peru?",
        "options": [
            "Montevideo",
            "Lima",
            "Buenos Aires",
            "Santiago"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Lima."
    },
    {
        "id": 569,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "How many countries border Kyrgyzstan?",
        "options": [
            "1",
            "4",
            "3",
            "6"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 4."
    },
    {
        "id": 570,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "On which continent is the country of Angola located?",
        "options": [
            "Asia",
            "Africa",
            "South America",
            "Europe"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Africa."
    },
    {
        "id": 571,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where is the city of Haarlem located?",
        "options": [
            "Switzerland",
            "Germany",
            "United States",
            "The Netherlands"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is The Netherlands."
    },
    {
        "id": 572,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Where was the ancient city of Pompeii?",
        "options": [
            "Italy",
            "Pompilanus",
            "East Africa",
            "South America"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Italy."
    },
    {
        "id": 573,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is Laos?",
        "options": [
            "City",
            "River",
            "Region",
            "Country"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Country."
    },
    {
        "id": 574,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Broome is a town in which state of Australia?",
        "options": [
            "South Australia",
            "Northern Territory",
            "Tasmania",
            "Western Australia"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Western Australia."
    },
    {
        "id": 575,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What was the original name of Ho Chi Minh City?",
        "options": [
            "Dar Es Salaam",
            "Saigon",
            "Hanoi",
            "Angkor Wat"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Saigon."
    },
    {
        "id": 576,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the largest non-continental island in the world?",
        "options": [
            "Greenland",
            "New Guinea",
            "Madagascar",
            "Borneo"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Greenland."
    },
    {
        "id": 577,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What part of the brain takes its name from the Greek for seahorse?",
        "options": [
            "Hippocampus",
            "Cerebellum",
            "Thalamus",
            "Amygdala"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Hippocampus."
    },
    {
        "id": 578,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the powerhouse of the cell?",
        "options": [
            "Ribosome",
            "Nucleus",
            "Redbull",
            "Mitochondria"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Mitochondria."
    },
    {
        "id": 579,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the hottest planet in the solar system",
        "options": [
            "Venus",
            "Jupiter",
            "Mars",
            "Mercury "
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Venus."
    },
    {
        "id": 580,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "After which Danish city is the 72th element on the periodic table named?",
        "options": [
            "Odense",
            "Copenhagen",
            "Skagen",
            "Herning"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Copenhagen."
    },
    {
        "id": 581,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following plastic is commonly used for window frames, gutters and drain pipes?",
        "options": [
            "Polyvinylchloride (PVC) ",
            "Polystyrene (PS)",
            "Polyethylene (PE)",
            "Polypropylene (PP)"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Polyvinylchloride (PVC) ."
    },
    {
        "id": 582,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following is a major muscle of the back?",
        "options": [
            "Trapezoid",
            "Triquetrum",
            "Trapezium",
            "Trapezius"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Trapezius."
    },
    {
        "id": 583,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What lies at the center of our galaxy?",
        "options": [
            "A quasar",
            "A black hole",
            "A supernova",
            "A wormhole"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is A black hole."
    },
    {
        "id": 584,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Folic acid is the synthetic form of which vitamin?",
        "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin B",
            "Vitamin D"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Vitamin B."
    },
    {
        "id": 585,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the standard SI unit for time?",
        "options": [
            "Second",
            "Day",
            "Hour",
            "Minute"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Second."
    },
    {
        "id": 586,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the unit of electrical resistance?",
        "options": [
            "Ohm",
            "Tesla",
            "Mho",
            "Joule"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Ohm."
    },
    {
        "id": 587,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many planets make up our Solar System?",
        "options": [
            "6",
            "8",
            "7",
            "9"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 8."
    },
    {
        "id": 588,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Deuterium is an isotope of which element?",
        "options": [
            "Neon",
            "Nitrogen",
            "Helium",
            "Hydrogen"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Hydrogen."
    },
    {
        "id": 589,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "The human heart has how many chambers?",
        "options": [
            "6",
            "3",
            "2",
            "4"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is 4."
    },
    {
        "id": 590,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the primary addictive substance found in tobacco?",
        "options": [
            "Glaucine",
            "Cathinone",
            "Nicotine",
            "Ephedrine"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Nicotine."
    },
    {
        "id": 591,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Myopia is the scientific term for which condition?",
        "options": [
            "Clouded Vision",
            "Shortsightedness",
            "Farsightedness",
            "Double Vision"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Shortsightedness."
    },
    {
        "id": 592,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Where did the dog breed \"Chihuahua\" originate?",
        "options": [
            "France",
            "Mexico",
            "Russia",
            "Spain"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Mexico."
    },
    {
        "id": 593,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "The Western Lowland Gorilla is scientifically know as?",
        "options": [
            "Gorilla Gorilla Gorilla",
            "Gorilla Beringei Graueri",
            "Gorilla Gorilla Diehli",
            "Gorilla Beringei Beringei"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Gorilla Gorilla Gorilla."
    },
    {
        "id": 594,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of the following elements is typically used in the doping of the semiconductor silicon?",
        "options": [
            "Oxygen",
            "Boron",
            "Carbon",
            "Iron"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Boron."
    },
    {
        "id": 595,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these country's capitals starts with the letter B?",
        "options": [
            "Lebanon",
            "Jordan",
            "Qatar",
            "Kuwait"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Lebanon."
    },
    {
        "id": 596,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which nation claims ownership of Antarctica?",
        "options": [
            "United Nations",
            "No one, but there are claims.",
            "Australia",
            "United States of America"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is No one, but there are claims.."
    },
    {
        "id": 597,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the capital of Finland?",
        "options": [
            "Jabraltar",
            "Oslo",
            "Helsinki",
            "Macedonia"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Helsinki."
    },
    {
        "id": 598,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is NOT a real tectonic plate?",
        "options": [
            "Eurasian Plate",
            "North American Plate",
            "Nazca Plate",
            "Atlantic Plate"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Atlantic Plate."
    },
    {
        "id": 599,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many counties in the Republic of Ireland.",
        "options": [
            "26",
            "32",
            "30",
            "28"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 26."
    },
    {
        "id": 600,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many states are in Australia?",
        "options": [
            "5",
            "6",
            "8",
            "7"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is 6."
    },
    {
        "id": 601,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The following Spanish provinces are located in the northern area of Spain except:",
        "options": [
            "Murcia",
            "Asturias",
            "Le\u00f3n",
            "Navarre"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Murcia."
    },
    {
        "id": 602,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "How many stars are featured on New Zealand's flag?",
        "options": [
            "2",
            "5",
            "4",
            "0"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is 4."
    },
    {
        "id": 603,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the most populous Muslim-majority nation in 2010?",
        "options": [
            "Iran",
            "Indonesia",
            "Sudan",
            "Saudi Arabia"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Indonesia."
    },
    {
        "id": 604,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the most common climbing route for the second highest mountain in the world, K2?",
        "options": [
            "Polish Line",
            "Abruzzi Spur",
            "Cesen Route",
            "Magic Line"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Abruzzi Spur."
    },
    {
        "id": 605,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "What is the name of New Zealand's indigenous people?",
        "options": [
            "Maori",
            "Vikings",
            "Samoans",
            "Polynesians"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Maori."
    },
    {
        "id": 606,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Brazil?",
        "options": [
            "Brasilia",
            "Sao Paolo",
            "Curitiba",
            "Rio de Janeiro"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Brasilia."
    },
    {
        "id": 607,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the capital city of Bermuda?",
        "options": [
            "Santo Dominigo",
            "Havana",
            "San Juan",
            "Hamilton"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Hamilton."
    },
    {
        "id": 608,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "The Japanese district Akihabara is also known by what nickname?",
        "options": [
            "Moon Walk River",
            "Big Eyes",
            "Otaku Central ",
            "Electric Town"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Electric Town."
    },
    {
        "id": 609,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "In which country is located the municipality of Arteijo?",
        "options": [
            "Spain",
            "Morocco",
            "France",
            "Belgium"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Spain."
    },
    {
        "id": 610,
        "unit": "Unit VI",
        "difficulty": "easy",
        "question": "Which of these is the name of the largest city in the US state Tennessee?",
        "options": [
            "Luxor",
            "Memphis",
            "Alexandria",
            "Thebes"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Memphis."
    },
    {
        "id": 611,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Where is the fast food chain \"Panda Express\" headquartered?",
        "options": [
            "San Diego, California",
            "Rosemead, California",
            "Fresno, California",
            "Sacramento, California"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Rosemead, California."
    },
    {
        "id": 612,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "How many time zones are in Russia?",
        "options": [
            "11",
            "8",
            "5",
            "2"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is 11."
    },
    {
        "id": 613,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of Chile?",
        "options": [
            "Antofagasta",
            "Copiap\u00f3",
            "Santiago",
            "Valpara\u00edso"
        ],
        "correctAnswer": 2,
        "explanation": "The correct answer is Santiago."
    },
    {
        "id": 614,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "What is the largest freshwater lake by volume?",
        "options": [
            "Lake Huron",
            "Lake Superior",
            "Lake Michigan",
            "Lake Baikal"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Lake Baikal."
    },
    {
        "id": 615,
        "unit": "Unit VI",
        "difficulty": "hard",
        "question": "Which of these is NOT a province in China?",
        "options": [
            "Guangdong",
            "Sichuan",
            "Fujian",
            "Yangtze"
        ],
        "correctAnswer": 3,
        "explanation": "The correct answer is Yangtze."
    },
    {
        "id": 616,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "What is the capital of the U.S. state Texas?",
        "options": [
            "Dallas",
            "Austin",
            "Houston",
            "Santa Fe"
        ],
        "correctAnswer": 1,
        "explanation": "The correct answer is Austin."
    },
    {
        "id": 617,
        "unit": "Unit VI",
        "difficulty": "medium",
        "question": "Which of these countries is NOT located in Africa?",
        "options": [
            "Suriname",
            "Burkina Faso",
            "Algeria",
            "Mozambique"
        ],
        "correctAnswer": 0,
        "explanation": "The correct answer is Suriname."
    }
];
