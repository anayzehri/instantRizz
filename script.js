// Initial dataset (will be expanded later)
const dataset = {
    "dataset": [
         {
          "input": "hey",
          "responses": [
            {"text": "Hey there! How's it going?", "score": 0.7, "tags": ["casual"]},
            {"text": "Well hello there, you caught my eye!", "score": 0.8, "tags": ["flirty"]},
            {"text": "Hey yourself! What brings you here?", "score": 0.6, "tags": ["casual"]}
           ]
        },
        {
          "input": "wyd",
          "responses": [
           {"text": "Just chilling, what about you?", "score": 0.7, "tags": ["casual","slang"]},
            {"text": "Wishing you were here with me.", "score": 0.85, "tags": ["flirty","slang"]},
            {"text": "Just procrastinating on everything, typical me!", "score": 0.65, "tags": ["humor","slang"]}
            ]
        },
        {
         "input": "i'm bored",
         "responses":[
          {"text": "Let's fix that! Any fun plans in mind?", "score": 0.75, "tags": ["casual"]},
           {"text": "Bored? Let me entertain you...", "score": 0.8, "tags": ["flirty"]},
            {"text": "I hear you! Let's find something to do, any ideas?", "score": 0.7, "tags": ["casual"]}
          ]
        },
         {
          "input": "i am bored",
         "responses":[
          {"text": "Let's fix that! Any fun plans in mind?", "score": 0.75, "tags": ["casual"]},
           {"text": "Bored? Let me entertain you...", "score": 0.8, "tags": ["flirty"]},
            {"text": "I hear you! Let's find something to do, any ideas?", "score": 0.7, "tags": ["casual"]}
          ]
        },
        {
          "input": "ur cute",
          "responses":[
          {"text": "Right back at you! 😉", "score": 0.9, "tags": ["flirty","slang","positive"]},
            {"text": "Thanks! You're not so bad yourself.", "score": 0.8, "tags": ["flirty","positive"]},
            {"text": "Aww, thanks! I appreciate it!", "score": 0.7, "tags": ["casual", "positive"]}
          ]
        },
        {
            "input": "i am sleepy",
            "responses":[
                {"text": "Aww, maybe you need a good nap?", "score": 0.7, "tags":["casual"]},
                {"text": "Maybe you should dream about me 😉", "score": 0.8, "tags":["flirty"]},
                {"text": "Well, goodnight then!", "score":0.5, "tags":["casual"]}
            ]
        },
         {
            "input":"what do u like to do",
             "responses":[
                 {"text":"I like thinking of ways to make you smile ;)", "score":0.9, "tags":["flirty"]},
                 {"text":"I love spending time with people, like you for example!", "score":0.75, "tags":["casual","flirty"]},
                 {"text": "I like to help people reply better in a chat", "score":0.7, "tags":["casual"]}
             ]
         },
         {
            "input":"how are you",
             "responses":[
                 {"text":"I'm doing great, now that you asked 😉", "score":0.8, "tags":["flirty"]},
                 {"text":"I'm doing well, how about yourself?", "score":0.7, "tags":["casual"]},
                  {"text":"Feeling great and ready to assist you", "score":0.7, "tags":["casual"]}
             ]
         },
          {
            "input":"good morning",
             "responses":[
                 {"text":"Good morning sunshine, Hope you had a wonderful sleep", "score":0.8, "tags":["flirty","positive"]},
                 {"text":"Good morning! Hope you have a great day!", "score":0.7, "tags":["casual", "positive"]},
                  {"text":"Good morning! Hope you're ready to conquer the day.", "score":0.7, "tags":["casual","positive"]}
             ]
         },
         {
            "input":"good night",
             "responses":[
                 {"text":"Good night! Sweet dreams and maybe dream about me 😉", "score":0.9, "tags":["flirty", "positive"]},
                  {"text":"Good night, sleep tight and don't let the bed bugs bite!", "score":0.7, "tags":["casual", "humor"]},
                 {"text":"Good night, get some rest you deserve it!", "score":0.7, "tags":["casual"]}
             ]
         },
         {
            "input":"i miss you",
             "responses":[
                  {"text":"I miss you too, I can't wait to talk more", "score":0.85, "tags":["flirty", "positive"]},
                 {"text":"Aww, I miss you, lets chat again soon", "score":0.8, "tags":["casual", "positive"]},
                   {"text":"I miss you too! I hope we get to chat more often.", "score":0.7, "tags":["casual", "positive"]}
             ]
         },
         {
             "input":"what are your hobbies?",
              "responses":[
                   {"text":"My favorite hobby is talking with interesting people, like you 😉", "score":0.9, "tags":["flirty"]},
                   {"text":"I love learning new things, and helping people, so talking to you is a win-win!", "score":0.75, "tags":["casual"]},
                  {"text":"I enjoy helping people find the perfect reply, what about you?", "score":0.7, "tags":["casual"]}
              ]
          },
          {
              "input":"do you have any plans today?",
               "responses":[
                    {"text":"My plans are to make your day better, want to help me with that? 😉", "score":0.85, "tags":["flirty"]},
                    {"text":"Just helping out people, like yourself. What are your plans for today?", "score":0.75, "tags":["casual"]},
                   {"text":"No plans, but if you have anything fun in mind let me know!", "score":0.7, "tags":["casual"]}
               ]
           },
           {
            "input":"that's funny",
             "responses":[
                 {"text":"Glad I made you laugh!", "score":0.75, "tags":["casual", "positive"]},
                  {"text":"I aim to please 😄", "score":0.8, "tags":["humor","positive"]},
                 {"text":"I'm glad you think so, what do you want to do next?", "score":0.7, "tags": ["casual"]}
             ]
         },
          {
            "input":"what's up",
             "responses":[
                  {"text":"Just thinking about you 😉", "score":0.85, "tags":["flirty"]},
                 {"text":"Not much, what's up with you?", "score":0.7, "tags":["casual"]},
                  {"text":"Just chilling and trying to be as helpful as possible.", "score":0.7, "tags":["casual"]}
             ]
         },
        {
            "input":"how's your day going?",
             "responses":[
                 {"text":"It's going great, but it would be better if you were here", "score":0.9, "tags":["flirty"]},
                  {"text":"It's going well, thanks for asking. What about you?", "score":0.75, "tags":["casual"]},
                 {"text":"It's going alright, just taking things as they come", "score":0.7, "tags":["casual"]}
             ]
         },
           {
            "input":"are you busy?",
             "responses":[
                 {"text":"Not too busy to talk to you 😉", "score":0.85, "tags":["flirty"]},
                  {"text":"Not really, what's on your mind?", "score":0.7, "tags":["casual"]},
                 {"text":"A little bit, but I have time for you", "score":0.7, "tags":["casual"]}
             ]
         },
         {
            "input":"what are you up to?",
             "responses":[
                 {"text":"Just thinking about you 😉, as always!", "score":0.9, "tags":["flirty"]},
                  {"text":"Just chilling, what are you up to?", "score":0.7, "tags":["casual"]},
                 {"text":"Just helping people, what are you up to?", "score":0.7, "tags":["casual"]}
             ]
         },
         {
            "input":"tell me a joke",
             "responses":[
                {"text":"Why don't scientists trust atoms? Because they make up everything! 😄", "score":0.8, "tags":["humor"]},
                 {"text":"Why did the bicycle fall over? Because it was two tired! 😂", "score":0.8, "tags":["humor"]},
                  {"text":"Why did the invisible man turn down the job offer? He couldn't see himself doing it! 😉", "score":0.7, "tags":["humor"]}
             ]
         },
           {
            "input":"that's cool",
             "responses":[
                 {"text":"I'm glad you think so! 😉", "score":0.8, "tags":["casual","positive"]},
                  {"text":"That's great, what should we talk about next?", "score":0.75, "tags":["casual","positive"]},
                 {"text":"Awesome! How can I help you today?", "score":0.7, "tags":["casual","positive"]}
             ]
         },
          {
            "input":"see ya",
             "responses":[
                {"text":"See ya later! 😉", "score":0.75, "tags":["casual"]},
                 {"text":"Bye! Hope we can chat soon!", "score":0.7, "tags":["casual"]},
                   {"text":"Cya! Take care, and I hope you have a good one", "score":0.7, "tags":["casual"]}
             ]
         },
        {
            "input":"what do you think?",
             "responses":[
                {"text":"I think that we should talk more often 😉", "score":0.9, "tags":["flirty"]},
                 {"text":"I think its great, what are your thoughts?", "score":0.75, "tags":["casual"]},
                   {"text":"I think that's an interesting topic, tell me more!", "score":0.7, "tags":["casual"]}
             ]
         },
        {
            "input":"you are awesome",
             "responses":[
                  {"text":"Aww, thanks! You are awesome too!", "score":0.9, "tags":["positive","flirty"]},
                 {"text":"That's sweet of you to say!", "score":0.8, "tags":["positive","casual"]},
                   {"text":"Thank you! I appreciate that", "score":0.75, "tags":["positive","casual"]}
             ]
         },
          {
            "input":"you are amazing",
             "responses":[
                  {"text":"Only because I am talking with you 😉", "score":0.9, "tags":["positive","flirty"]},
                 {"text":"Thank you for the kind words!", "score":0.8, "tags":["positive","casual"]},
                   {"text":"I am glad you think so!", "score":0.75, "tags":["positive","casual"]}
             ]
         },
         {
            "input":"i like you",
             "responses":[
                 {"text":"I like you too 😉", "score":0.9, "tags":["flirty", "positive"]},
                  {"text":"That's nice to hear!", "score":0.8, "tags":["casual","positive"]},
                 {"text":"I'm glad, you are a great person!", "score":0.75, "tags":["casual","positive"]}
             ]
         },
          {
             "input":"what are you doing tonight?",
              "responses":[
                   {"text":"I'm waiting for you to ask me out 😉", "score":0.9, "tags":["flirty"]},
                   {"text":"Just helping people, what are you doing tonight?", "score":0.75, "tags":["casual"]},
                    {"text":"I don't have any plans, any ideas?", "score":0.7, "tags":["casual"]}
               ]
           },
         {
              "input":"can we talk later?",
               "responses":[
                    {"text":"Of course, I am always here for you 😉", "score":0.9, "tags":["flirty"]},
                    {"text":"Sure, just message when you are free!", "score":0.75, "tags":["casual"]},
                    {"text":"Yeah, just let me know when!", "score":0.7, "tags":["casual"]}
                ]
           },
          {
            "input":"have a good day",
             "responses":[
                  {"text":"You too! Hope we get to talk soon 😉", "score":0.8, "tags":["flirty", "positive"]},
                  {"text":"Thanks, you have a great one as well!", "score":0.75, "tags":["casual", "positive"]},
                 {"text":"Thanks! I hope you enjoy it!", "score":0.7, "tags":["casual", "positive"]}
             ]
         },
        {
            "input":"how was your day?",
              "responses":[
                   {"text":"It was good, but talking to you makes it even better 😉", "score":0.85, "tags":["flirty","positive"]},
                   {"text":"It was good, I hope you also had a good one", "score":0.75, "tags":["casual", "positive"]},
                    {"text":"It was fine, just like any other day. How was yours?", "score":0.7, "tags":["casual"]}
                ]
           },
            {
             "input":"lets be friends",
              "responses":[
                 {"text":"I would love to be your friend 😉", "score":0.85, "tags":["flirty","positive"]},
                 {"text":"I'd be honored to be friends with you!", "score":0.8, "tags":["casual","positive"]},
                  {"text":"Of course, I'm always happy to make new friends", "score":0.75, "tags":["casual","positive"]}
                ]
            },
              {
               "input":"do u want to play a game?",
                "responses":[
                   {"text":"Only if that means playing with you 😉", "score":0.9, "tags":["flirty"]},
                     {"text":"Sure, what kind of games do you like to play?", "score":0.75, "tags":["casual"]},
                   {"text":"Yes, I am always ready to have some fun!", "score":0.7, "tags":["casual"]}
                 ]
            },
            {
                 "input":"can i ask you something?",
                  "responses":[
                    {"text":"Of course, anything for you 😉", "score":0.9, "tags":["flirty"]},
                     {"text":"Sure, feel free to ask", "score":0.8, "tags":["casual"]},
                     {"text":"Yeah, go ahead I am ready to answer", "score":0.75, "tags":["casual"]}
                   ]
             },
             {
                "input":"i need your help",
                 "responses":[
                   {"text":"I am always here for you, tell me everything 😉", "score":0.9, "tags":["flirty"]},
                    {"text":"Of course, I am here to help! How can I assist you?", "score":0.8, "tags":["casual"]},
                     {"text":"Sure, let me know what you need help with", "score":0.75, "tags":["casual"]}
                   ]
            }
              ,
             {
                  "input": "how do i look?",
                  "responses": [
                      { "text": "You always look amazing 😉", "score": 0.9, "tags": ["flirty","positive"] },
                      { "text": "You look great as always", "score": 0.8, "tags": ["casual","positive"] },
                       { "text": "You always look fantastic, even better than before", "score": 0.75, "tags": ["casual", "positive"] }
                    ]
                }
      ]
    };

const slangDictionary = {
    "wyd": "what are you doing",
    "brb": "be right back",
    "hmu": "hit me up",
    "lol": "laughing out loud",
    "lmao": "laughing my ass off",
    "gtg": "got to go",
    "idk": "i don't know",
    "ttyl": "talk to you later",
    "omg": "oh my god",
    "btw": "by the way",
    "ikr":"I know right",
     "np": "no problem",
     "ty": "thank you",
     "thx": "thanks",
     "gonna": "going to",
     "wanna": "want to",
     "gotta": "got to",
     "cya":"see you",
     "jk":"just kidding",
     "imo":"in my opinion",
    "tbh":"to be honest",
    "fr":"for real",
    "ofc":"of course",
    "asap":"as soon as possible",
    "dm":"direct message",
     "bff": "best friends forever",
      "smh": "shaking my head",
      "nvm": "nevermind",
       "ily":"i love you",
       "yolo":"you only live once",
        "rn":"right now",
       "btw":"by the way",
       "fomo":"fear of missing out",
        "tb":"throwback",
        "sry":"sorry",
        "h8":"hate"
};

// DOM elements (same as before)
const textarea = document.querySelector('textarea');
const generateBtn = document.getElementById('generate-btn');
const responseArea = document.getElementById('response-area');
const rizzLevelSelect = document.getElementById("rizz-level");
const feedbackArea = document.getElementById("feedback-area");
const darkModeToggle = document.getElementById("dark-mode-checkbox");
const body = document.body;
const header = document.querySelector('header');
const textareas = document.querySelectorAll("textarea");
const buttons = document.querySelectorAll("button");
const responseOptions = document.querySelectorAll("#response-area .response-option");
const footers = document.querySelectorAll("footer");
const selects = document.querySelectorAll("select");


// Misspelling correction (basic)
const misspellingCorrection = {
    "ur": "your",
    "u": "you",
    "im": "i am",
    "tho": "though",
    "plz": "please"
};

// Function to preprocess text
function preprocessText(text) {
    let processedText = text.toLowerCase();
    for (const misspelling in misspellingCorrection) {
        const regex = new RegExp(`\\b${misspelling}\\b`, 'gi');
        processedText = processedText.replace(regex, misspellingCorrection[misspelling]);
    }
    for (const slang in slangDictionary) {
      const regex = new RegExp(`\\b${slang}\\b`, 'gi');
      processedText = processedText.replace(regex, slangDictionary[slang]);
    }
    processedText = processedText.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
    return processedText.trim();
}

// Function to do Basic Sentiment Analysis
function basicSentimentAnalysis(text) {
  let positiveWords=["good", "great", "happy", "love", "amazing", "cute","nice","awesome", "beautiful", "perfect"];
  let negativeWords=["bad", "sad", "angry", "hate", "awful", "terrible", "horrible", "disgusting"];
  let positiveScore=0;
  let negativeScore=0;

  const words= text.split(/\s+/);

    words.forEach(word =>{
      if(positiveWords.includes(word)){
        positiveScore++;
      } else if (negativeWords.includes(word)){
          negativeScore++;
      }
    });
    if(positiveScore>negativeScore){
      return "positive";
    }else if (negativeScore>positiveScore){
      return "negative"
    } else {
      return "neutral"
    }
}

// Function to generate n-grams from text
function generateNgrams(text, n) {
    const ngrams = {};
    const words = text.split(/\s+/);

    for (let i = 0; i <= words.length - n; i++) {
        const ngram = words.slice(i, i + n).join(' ');
        if (ngrams[ngram]) {
            ngrams[ngram]++;
        } else {
            ngrams[ngram] = 1;
        }
    }
    return ngrams;
}


// Function to calculate word frequencies in a text (now includes n-grams)
function calculateWordFrequencies(text) {
   const wordFrequencies = {};
    const words = text.split(/\s+/);

     //Unigrams
    for (const word of words) {
        if (wordFrequencies[word]) {
            wordFrequencies[word]++;
        } else {
            wordFrequencies[word] = 1;
        }
    }

    //Bi-grams
   const bigrams = generateNgrams(text,2);
   for(const bigram in bigrams){
     if (wordFrequencies[bigram]) {
            wordFrequencies[bigram]+= bigrams[bigram];
        } else {
            wordFrequencies[bigram] = bigrams[bigram];
        }
   }
    return wordFrequencies;
}

// Function to calculate inverse document frequency (IDF) for all words in the dataset
function calculateIDF(dataset) {
  const documentCount = dataset.dataset.length;
    const idf = {}; //idf value for each term

  //Count the occurrences of each term in dataset
   dataset.dataset.forEach(entry =>{
        const frequencies = calculateWordFrequencies(entry.input);
       for(const term in frequencies){
         if(idf[term]){
           idf[term]++;
         } else{
           idf[term] = 1;
         }
       }

     for(const response of entry.responses){
          const frequencies = calculateWordFrequencies(response.text);
         for(const term in frequencies){
            if(idf[term]){
              idf[term]++;
            } else{
              idf[term] = 1;
            }
          }
     }

   });
  //Calculate the idf for each word
    for(const term in idf){
      idf[term]= Math.log(documentCount / idf[term]);
    }
   return idf;
}

// Function to calculate the TF-IDF for a text, IDF should come from dataset
function calculateTFIDF(text, idf) {
  const tfidf = {};
   const frequencies = calculateWordFrequencies(text);
   for (const term in frequencies){
     tfidf[term] = frequencies[term] * (idf[term] || 0.5); // We have added 0.5 to the value to give it a small score if the word is not present in dataset.
   }
  return tfidf;
}


// Function to calculate the similarity score between two texts
function calculateSimilarity(inputTfidf, responseTfidf) {
    let score = 0;
    let totalScore=0;
    for(const term in inputTfidf){
      totalScore += inputTfidf[term];
      if (responseTfidf[term]) {
            score += Math.min(inputTfidf[term], responseTfidf[term]);
        }
    }
   if(totalScore===0){
    return 0;
   }
   return score / totalScore;

}

// Function to generate responses using machine learning
function generateResponsesWithML(processedText, rizzLevel, userPreferredRizzLevel) {
    const idf = calculateIDF(dataset);
    const inputTfidf= calculateTFIDF(processedText, idf);
    let scoredResponses = [];
      const feedbackData=JSON.parse(localStorage.getItem("feedbackData") || "{}");
    const sessionHistory = JSON.parse(sessionStorage.getItem("rizzHistory") || "[]");

    for (const entry of dataset.dataset) {
        for (const response of entry.responses) {
          const responseTfidf= calculateTFIDF(response.text, idf);
            let similarityScore = calculateSimilarity(inputTfidf, responseTfidf);

            let finalScore= similarityScore;
             if(response.tags.includes(rizzLevel)){
              finalScore += 0.2; //Boost score for matching Rizz level
            } else if (response.tags.includes("casual")){
               finalScore+= 0.1; // Boost score for casual
            }
          //Apply feedback score
            if(feedbackData[response.text]){
                finalScore += feedbackData[response.text] *0.1;
            }

          //Apply session history score
           sessionHistory.slice(-5).forEach(entry =>{ //Only check last 5 entries
               const historyTfidf = calculateTFIDF(entry.text, idf);
              finalScore += calculateSimilarity(historyTfidf, responseTfidf) * 0.05; //Small boost for related responses
           });
             if(response.tags.includes(userPreferredRizzLevel)){
              finalScore += 0.15; //Boost score for matching user preferred Rizz level
            }

            scoredResponses.push({text: response.text, score: finalScore, tags: response.tags });
        }
    }

    // Sort responses by score and filter responses
      scoredResponses.sort((a, b) => b.score - a.score);

        //Only keep highest scores and remove duplicate responses
         const highestScores=[];
          scoredResponses.forEach(response =>{
            if(highestScores.length<5 && !highestScores.find(r => r.text === response.text))
             highestScores.push(response);
          });
    return highestScores;
}

// Function to handle feedback
function handleFeedback(selectedResponse, copyButton, inputText){
  const feedbackData=JSON.parse(localStorage.getItem("feedbackData") || "{}"); //Get existing data, if any
   if (!feedbackData[selectedResponse.text]){
     feedbackData[selectedResponse.text] = 0; //Initialize if there isn't any
    }
    feedbackData[selectedResponse.text]++; //Increment count for the selected response

    localStorage.setItem("feedbackData", JSON.stringify(feedbackData)); //Store the updated count.
    console.log("Feedback submitted", feedbackData);

     const feedbackText = document.createElement("span"); // Creates span for the feedback.
       feedbackText.textContent = " Copied & Feedback Recorded!";
     copyButton.parentNode.appendChild(feedbackText);

      setTimeout(function() { // Show message for a small time
         feedbackText.remove();
    },1500);
     feedbackArea.innerHTML="<p>Thanks for your feedback!</p>"

    setTimeout(function() { // Show message for a small time
     feedbackArea.innerHTML = "";
    },1500);

     //Save conversation history
    const sessionHistory = JSON.parse(sessionStorage.getItem("rizzHistory") || "[]");
    sessionHistory.push({text:inputText, response:selectedResponse.text});
    sessionStorage.setItem("rizzHistory", JSON.stringify(sessionHistory));

}

// Function to handle the text input and generate responses
function generateResponses() {
  // Load user profile from local storage or use default
  let userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");

  //Set Rizz Level to last selected or default casual.
    if (!userProfile.rizzLevel){
       userProfile.rizzLevel = "casual";
      }
     rizzLevelSelect.value = userProfile.rizzLevel;

    const inputText = textarea.value.trim();
    const processedText = preprocessText(inputText);
    const sentiment = basicSentimentAnalysis(processedText);
    const rizzLevel = rizzLevelSelect.value;

     //Save new Rizz Level to user profile.
      userProfile.rizzLevel = rizzLevel;
      localStorage.setItem("userProfile", JSON.stringify(userProfile));


    responseArea.innerHTML = ""; // Clear previous responses.
    feedbackArea.innerHTML=""; //Clear feedback message

     if (!inputText) {
        responseArea.innerHTML = "<p> Please input some text.</p>";
        return;
    }
    // Find exact match
    let matchingEntry = dataset.dataset.find(entry => entry.input === processedText);

     if (matchingEntry) {
        // Filter Responses based on the level
       const filteredResponses = matchingEntry.responses.filter(response => response.tags.includes(rizzLevel) || response.tags.includes("casual"));

        //If no response found with specific rizz level show all casual ones
        if(filteredResponses.length===0){
          matchingEntry.responses.filter(response=> response.tags.includes("casual")).forEach(response =>{
              const responseDiv = document.createElement('div');
              responseDiv.classList.add("response-option");
              const responseText = document.createElement("span"); // Creates span for the text.
              responseText.textContent = response.text;
              responseDiv.appendChild(responseText);
               const copyButton = document.createElement("button"); //Creates a copy button
              copyButton.textContent = "Copy";
              responseDiv.appendChild(copyButton);
             copyButton.addEventListener('click',()=> { // Adds event listener to copy button
                 navigator.clipboard.writeText(response.text);
                 handleFeedback(response, copyButton, inputText);
              });
              responseArea.appendChild(responseDiv);
          });
          return;
        }
        // Display the responses
       filteredResponses.forEach(response => {
           const responseDiv = document.createElement('div');
           responseDiv.classList.add("response-option");
             const responseText = document.createElement("span"); // Creates span for the text.
              responseText.textContent = response.text;
              responseDiv.appendChild(responseText);
           const copyButton = document.createElement("button"); //Creates a copy button
           copyButton.textContent = "Copy";
           responseDiv.appendChild(copyButton);
           copyButton.addEventListener('click',()=> {  // Adds event listener to copy button
                navigator.clipboard.writeText(response.text);
                handleFeedback(response, copyButton, inputText);
            });
           responseArea.appendChild(responseDiv);
       });
     }else {
       const mlResponses = generateResponsesWithML(processedText, rizzLevel, userProfile.rizzLevel);
       if (mlResponses.length > 0) {
            mlResponses.forEach(response => {
              const responseDiv = document.createElement('div');
              responseDiv.classList.add("response-option");
               const responseText = document.createElement("span"); // Creates span for the text.
              responseText.textContent = response.text;
              responseDiv.appendChild(responseText);
              const copyButton = document.createElement("button"); //Creates a copy button
              copyButton.textContent = "Copy";
               responseDiv.appendChild(copyButton);
                copyButton.addEventListener('click',()=> { // Adds event listener to copy button
                    navigator.clipboard.writeText(response.text);
                    handleFeedback(response, copyButton, inputText);
                 });
              responseArea.appendChild(responseDiv);
           });
       } else {
           responseArea.innerHTML = "<p> I am still learning. Try again later.</p>";
       }
    }
}

// Event listener for the button
generateBtn.addEventListener('click', generateResponses);

//Event listener for the rizz level to save to user profile.
rizzLevelSelect.addEventListener("change", ()=>{
  let userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
  userProfile.rizzLevel = rizzLevelSelect.value;
   localStorage.setItem("userProfile", JSON.stringify(userProfile));
});


//Dark Mode Toggle
  // Load user profile from local storage or use default
  let userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");

//Set dark mode toggle based on saved user preference or default false.
   if (userProfile.darkMode){
     body.classList.add("dark-mode");
       header.classList.add("dark-mode");
       textareas.forEach(textarea => textarea.classList.add("dark-mode"));
        buttons.forEach(button=> button.classList.add("dark-mode"));
        responseOptions.forEach(option => option.classList.add("dark-mode"));
         footers.forEach(footer=> footer.classList.add("dark-mode"));
          selects.forEach(select=> select.classList.add("dark-mode"));
      darkModeToggle.checked = true;
    } else {
          darkModeToggle.checked = false;
      }

darkModeToggle.addEventListener('change', () => {
    userProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");
   body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    textareas.forEach(textarea => textarea.classList.toggle("dark-mode"));
       buttons.forEach(button=> button.classList.toggle("dark-mode"));
    responseOptions.forEach(option => option.classList.toggle("dark-mode"));
      footers.forEach(footer=> footer.classList.toggle("dark-mode"));
       selects.forEach(select=> select.classList.toggle("dark-mode"));

    userProfile.darkMode = darkModeToggle.checked;
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

});