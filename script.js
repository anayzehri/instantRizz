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
         },{
            "input": "are you busy?",
            "responses": [
                {"text": "Only for you, darling.", "score": 0.85, "tags": ["flirty"]},
                {"text": "Not really, what's up?", "score": 0.7, "tags": ["casual"]},
                {"text": "I have a bit of free time.", "score": 0.65, "tags": ["subtle"]}
            ]
        },
         {
            "input": "how was your day?",
            "responses": [
                {"text": "It's better now that I'm talking to you.", "score": 0.82, "tags": ["flirty"]},
                {"text": "It was alright, pretty standard.", "score": 0.7, "tags": ["casual"]},
                {"text": "It had its ups and downs.", "score": 0.68, "tags": ["subtle"]}
            ]
        },
        {
            "input": "what's your favorite food?",
            "responses": [
                {"text": "Whatever you're having, as long as it's with you.", "score": 0.88, "tags": ["flirty"]},
                 {"text": "I don't really have a favorite, but I like good food.", "score": 0.7, "tags": ["casual"]},
                {"text": "I tend to lean towards well-prepared meals.", "score": 0.67, "tags": ["subtle"]}
            ]
        },
      {
            "input":"what do you do for fun?",
            "responses":[
                {"text": "Spending time with you, mostly 😉.", "score": 0.86, "tags": ["flirty"]},
                {"text": "I enjoy learning new things and playing games.", "score": 0.72, "tags": ["casual"]},
                {"text": "I explore different activities and interests.", "score": 0.69, "tags": ["subtle"]}
            ]
        },
        {
            "input": "what's your dream vacation?",
             "responses": [
                {"text": "Anywhere, as long as you're with me.", "score": 0.9, "tags": ["flirty"]},
                {"text": "Somewhere warm and quiet would be nice.", "score": 0.7, "tags": ["casual"]},
                {"text": "I'm not sure; it's not something I've fully planned out yet.", "score": 0.65, "tags": ["subtle"]}
            ]
        },
        {
            "input": "what are you thinking about?",
             "responses":[
                {"text":"Right now? You. Always you.", "score": 0.89, "tags": ["flirty"]},
                {"text": "Just thinking about the day's events.", "score": 0.7, "tags": ["casual"]},
                {"text": "A variety of different things, to be honest.", "score": 0.67, "tags":["subtle"]}
            ]
         },
       {
           "input":"what kind of music do you like?",
             "responses":[
                {"text":"The kind that makes me want to dance with you.", "score": 0.84, "tags": ["flirty"]},
                {"text":"I listen to a bit of everything.", "score": 0.72, "tags": ["casual"]},
                {"text":"I appreciate music with well-crafted compositions.", "score": 0.67, "tags": ["subtle"]}
            ]
        },
        {
            "input": "what's your favorite color?",
             "responses":[
                {"text": "The color of your eyes, definitely.", "score": 0.88, "tags": ["flirty"]},
                {"text": "I don't have a favorite, it depends on my mood.", "score": 0.7, "tags": ["casual"]},
                {"text": "I'm not drawn to any color in particular.", "score": 0.65, "tags": ["subtle"]}
            ]
        },
      {
            "input": "do you have any hobbies?",
             "responses":[
                {"text": "Flirting with you is a pretty good one.", "score": 0.85, "tags": ["flirty"]},
                {"text": "I dabble in a few creative and logical pursuits.", "score": 0.72, "tags": ["casual"]},
                 {"text": "I am trying to develop some.", "score": 0.67, "tags": ["subtle"]}
             ]
      },
      {
           "input": "what is your favorite movie?",
            "responses":[
               {"text":"The one where we fall in love ;)","score": 0.9, "tags": ["flirty"]},
                {"text":"I am more of a book person, but I enjoy movies as well","score": 0.7, "tags": ["casual"]},
                {"text": "I don't really have a preferred movie.", "score": 0.65, "tags": ["subtle"]}
            ]
      },
        {
            "input": "have you been here before?",
              "responses":[
                  {"text": "I've been everywhere, but never felt like I belonged until now.", "score": 0.88, "tags": ["flirty"]},
                {"text":"I have been here a couple of times, yes.","score": 0.7, "tags":["casual"]},
                 {"text":"I am not sure yet, time will tell.","score": 0.69, "tags": ["subtle"]}
              ]
         },
         {
            "input": "can i ask you something personal?",
             "responses":[
                {"text": "If it's about you, absolutely.", "score": 0.85, "tags": ["flirty"]},
                 {"text":"Sure, go ahead.","score": 0.71, "tags": ["casual"]},
                {"text": "It depends what the question is.", "score": 0.67, "tags":["subtle"]}
             ]
         },
          {
            "input": "are you always this charming?",
             "responses":[
                {"text":"Only for you 😉.","score": 0.89, "tags": ["flirty"]},
                 {"text":"I try my best, yes.","score": 0.72, "tags": ["casual"]},
                  {"text":"Sometimes, it just comes naturally.","score": 0.68, "tags": ["subtle"]}
            ]
         },
        {
            "input": "what do you think about me?",
            "responses":[
              {"text":"I think I'm completely smitten.","score":0.9, "tags":["flirty"]},
                {"text":"You seem like a very nice person.","score":0.71, "tags": ["casual"]},
                {"text": "I am still processing, but I'm impressed.","score": 0.68, "tags":["subtle"]}
            ]
         },
           {
             "input":"what do you find attractive?",
              "responses":[
                  {"text":"Confidence, like yours.","score": 0.85, "tags": ["flirty"]},
                 {"text":"I appreciate many different qualities.","score": 0.7, "tags": ["casual"]},
                  {"text":"I am drawn to positive energy and good natured people","score": 0.68, "tags":["subtle"]}
              ]
          },
           {
            "input": "what is something you're proud of?",
             "responses":[
                  {"text":"The way I can make you smile, effortlessly.","score": 0.85, "tags":["flirty"]},
                   {"text": "I am proud of my ability to learn and improve.","score": 0.7, "tags":["casual"]},
                    {"text":"It's nice to see myself progress every day.", "score": 0.68, "tags":["subtle"]}
             ]
         },
        {
            "input":"do you believe in love at first sight?",
            "responses":[
                {"text":"I do now that I've seen you.","score": 0.9, "tags": ["flirty"]},
                 {"text":"I think anything is possible.","score": 0.7, "tags": ["casual"]},
                  {"text": "I am unsure about these concepts, but open to the possibility.", "score": 0.66, "tags": ["subtle"]}
            ]
        },
         {
            "input": "what's the most spontaneous thing you've ever done?",
            "responses":[
                {"text":"Deciding to message you 😉.","score": 0.87, "tags": ["flirty"]},
                {"text":"I'm not very spontaneous, I like to have a plan.","score": 0.7, "tags": ["casual"]},
                {"text": "I am trying to become less structured.", "score": 0.68, "tags":["subtle"]}
            ]
        },
         {
            "input":"what makes you laugh?",
             "responses":[
                {"text":"You do, especially when you're trying to be serious.","score": 0.88, "tags":["flirty"]},
                 {"text": "I am amused by clever jokes and wordplay.","score": 0.7, "tags": ["casual"]},
                  {"text":"I appreciate subtle humor and witty comments.","score": 0.66, "tags": ["subtle"]}
             ]
         },
        {
             "input": "do you like surprises?",
              "responses":[
                  {"text": "If they come from you, absolutely.", "score": 0.89, "tags": ["flirty"]},
                    {"text": "Sure, I am open to new experiences.","score": 0.7, "tags": ["casual"]},
                    {"text": "I'm not a huge fan, but it depends on the surprise.", "score": 0.67, "tags": ["subtle"]}
              ]
         },
       {
            "input":"do you like to dance?",
            "responses":[
                {"text": "Only if I get to dance with you.", "score": 0.87, "tags":["flirty"]},
                {"text": "I enjoy it sometimes, why do you ask?","score": 0.7, "tags": ["casual"]},
                {"text":"I am unsure, I have never actually done it.", "score": 0.67, "tags":["subtle"]}
            ]
        },
           {
              "input": "what's the best compliment you've ever received?",
             "responses":[
                 {"text":"That I remind someone of their dream 😉.","score": 0.89, "tags":["flirty"]},
                  {"text":"I appreciate every compliment I get, thank you!","score": 0.72, "tags": ["casual"]},
                 {"text": "Any comment that recognizes my efforts are appreciated.","score": 0.69, "tags": ["subtle"]}
            ]
         },
          {
            "input":"if you could have any superpower, what would it be?",
            "responses":[
                {"text":"The ability to be with you always 😉.","score": 0.88, "tags": ["flirty"]},
                {"text":"I think flying would be pretty cool.","score": 0.72, "tags": ["casual"]},
                {"text":"I am more curious about the impact these superpowers have.","score": 0.67, "tags": ["subtle"]}
            ]
        },
         {
           "input":"what's your biggest fear?",
            "responses":[
                 {"text":"Losing the chance to be with you.","score": 0.88, "tags": ["flirty"]},
                  {"text":"I try not to dwell on it too much.","score": 0.7, "tags": ["casual"]},
                 {"text": "I believe it is important to be able to acknowledge these types of emotions.","score": 0.69, "tags": ["subtle"]}
            ]
          },
          {
             "input":"what is your favorite time of the day?",
              "responses":[
                  {"text":"The time I get to talk to you.", "score": 0.9, "tags": ["flirty"]},
                   {"text": "I enjoy the morning and late evenings.","score": 0.7, "tags":["casual"]},
                    {"text":"I find value and interesting things in all time.","score": 0.66, "tags":["subtle"]}
              ]
         },
       {
            "input": "are you a morning person or a night owl?",
            "responses":[
                 {"text":"I'm a you person, whatever time 😉.","score": 0.87, "tags": ["flirty"]},
                {"text":"I adapt, but I tend to stay up late.","score": 0.7, "tags": ["casual"]},
                  {"text":"I have no preference, as long as the schedule is adequate.","score": 0.68, "tags": ["subtle"]}
            ]
        },
      {
           "input":"what kind of books do you like?",
             "responses":[
                  {"text": "The ones where love prevails 😉.", "score": 0.88, "tags": ["flirty"]},
                 {"text":"I enjoy non-fiction mostly, but occasionally enjoy fantasy novels.","score": 0.7, "tags":["casual"]},
                  {"text": "I tend to appreciate different perspectives and complex themes.","score": 0.66, "tags":["subtle"]}
             ]
         },
         {
            "input": "do you have any pets?",
             "responses":[
                 {"text":"Not yet, but I wouldn't mind having you as my pet 😉.","score": 0.85, "tags":["flirty"]},
                  {"text":"Not at the moment, unfortunately.","score": 0.7, "tags":["casual"]},
                   {"text":"I find myself to be quite content on my own, for now.","score": 0.66, "tags": ["subtle"]}
             ]
         },
          {
            "input":"what is your favorite dessert?",
              "responses":[
                  {"text":"Something sweet, like you.","score": 0.86, "tags":["flirty"]},
                  {"text":"I am more into savory meals, but ice cream is also good.","score": 0.71, "tags":["casual"]},
                  {"text": "I am not very picky about desserts.","score": 0.67, "tags": ["subtle"]}
              ]
         },
         {
            "input":"do you enjoy the rain?",
             "responses":[
                 {"text":"As long as I am with you, it does not matter.","score": 0.87, "tags":["flirty"]},
                  {"text":"Sure, I find it quite soothing.","score": 0.7, "tags": ["casual"]},
                 {"text":"I find it to be a bit gloomy, but I can find beauty in it.","score": 0.69, "tags":["subtle"]}
             ]
        },
         {
            "input":"what's your favorite way to relax?",
              "responses":[
                  {"text":"By talking with you, of course 😉.","score": 0.9, "tags":["flirty"]},
                {"text":"I like to listen to music and do some reading.","score": 0.71, "tags":["casual"]},
                {"text":"I try to focus on things that give me a bit of calm.","score": 0.68, "tags": ["subtle"]}
              ]
         },
         {
            "input":"what's the best gift you've ever received?",
             "responses":[
                  {"text":"A chance to meet you.","score": 0.88, "tags":["flirty"]},
                   {"text":"I am grateful for all of the gifts I have received.","score": 0.72, "tags":["casual"]},
                    {"text":"I tend to value the sentimental value of gifts.","score": 0.69, "tags": ["subtle"]}
             ]
         },
        {
            "input":"what is the last thing that made you smile?",
            "responses":[
               {"text":"This conversation. Every second with you is a joy.","score": 0.9, "tags": ["flirty"]},
                {"text": "I saw something funny on the internet earlier today.","score": 0.7, "tags": ["casual"]},
                 {"text":"It was a kind gesture from a friend.","score": 0.69, "tags":["subtle"]}
            ]
       },
        {
            "input": "what do you think of the stars?",
            "responses":[
                {"text":"They are stunning, just like you.","score": 0.86, "tags":["flirty"]},
                {"text":"I find them to be very fascinating.","score": 0.7, "tags":["casual"]},
                {"text":"I am intrigued by the vastness of the universe.","score": 0.68, "tags":["subtle"]}
             ]
        },
        {
           "input":"are you a good listener?",
            "responses":[
              {"text":"Absolutely. I am all ears when it comes to you 😉.","score": 0.87, "tags": ["flirty"]},
              {"text":"I do like to listen to other people's thoughts and experiences.","score": 0.71, "tags": ["casual"]},
             {"text":"I believe listening is an important skill in a conversation.","score": 0.69, "tags":["subtle"]}
            ]
        },
          {
            "input": "what is your favorite quote?",
            "responses":[
                {"text":"'The best is yet to come' when we are together.","score": 0.85, "tags":["flirty"]},
                 {"text": "I am not a huge fan of quotes, but I appreciate the wisdom they often provide.","score": 0.7, "tags":["casual"]},
                {"text":"I find these types of statements to be a bit restrictive.","score": 0.66, "tags":["subtle"]}
            ]
        },
        {
            "input":"what is your favorite season?",
              "responses":[
                  {"text":"The season you're by my side, it's always perfect 😉.","score": 0.87, "tags":["flirty"]},
                {"text":"I enjoy the Autumn and Winter mostly, why do you ask?","score": 0.71, "tags": ["casual"]},
                 {"text":"I appreciate the unique qualities of each season.","score": 0.69, "tags":["subtle"]}
              ]
         },
        {
          "input":"what do you value most in a friendship?",
            "responses":[
                 {"text":"Loyalty, just like I am to you.","score": 0.86, "tags": ["flirty"]},
                  {"text":"I value mutual respect and common interests.","score": 0.72, "tags":["casual"]},
                  {"text":"I believe that honest conversation is important for a good friendship.","score": 0.67, "tags": ["subtle"]}
            ]
        },
          {
             "input": "do you like to cook?",
            "responses":[
               {"text": "Only if I get to cook for you.","score": 0.87, "tags": ["flirty"]},
                {"text":"I do cook sometimes, but it depends what type of meal I am making.","score": 0.7, "tags":["casual"]},
                 {"text": "I prefer well prepared meals.","score": 0.68, "tags":["subtle"]}
              ]
        },
        {
             "input": "do you prefer tea or coffee?",
              "responses":[
                 {"text": "Whatever you're drinking, I'll have some 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"I usually drink coffee, but tea is also good.","score": 0.71, "tags": ["casual"]},
                 {"text": "I am content with any warm beverage.","score": 0.67, "tags": ["subtle"]}
            ]
         },
         {
            "input": "what's a skill you'd like to learn?",
            "responses":[
                 {"text": "The skill of seduction, maybe with your help 😉.","score": 0.85, "tags": ["flirty"]},
                 {"text":"I would like to become fluent in a new language.","score": 0.72, "tags":["casual"]},
                  {"text":"I am interested in learning new things every day.","score": 0.68, "tags":["subtle"]}
            ]
        },
         {
            "input": "what's something that makes you feel grateful?",
            "responses":[
                 {"text":"Having you in my life.","score": 0.9, "tags": ["flirty"]},
                  {"text": "I am grateful for the good things that happen in my life.","score": 0.7, "tags": ["casual"]},
                  {"text":"I value the small things in life that make me smile.","score": 0.67, "tags":["subtle"]}
            ]
         },
      {
          "input": "what's your favorite smell?",
            "responses":[
              {"text":"The scent of you when you're near 😉.", "score": 0.89, "tags":["flirty"]},
              {"text": "I tend to enjoy fresh and natural scents mostly.","score": 0.7, "tags": ["casual"]},
              {"text":"I am not particular when it comes to scents.","score": 0.67, "tags":["subtle"]}
             ]
         },
       {
             "input": "do you like to travel?",
            "responses":[
               {"text": "Only if you're my travel buddy.","score": 0.88, "tags":["flirty"]},
                {"text":"I enjoy traveling when I can, yes.","score": 0.72, "tags":["casual"]},
               {"text":"I believe it's good to explore, but only in a planned way.","score": 0.67, "tags": ["subtle"]}
            ]
       },
       {
         "input":"what do you admire most in people?",
          "responses":[
               {"text": "Confidence, kindness, and you, obviously.","score": 0.87, "tags": ["flirty"]},
                {"text":"I admire when people are honest and kind to others.","score": 0.71, "tags":["casual"]},
                {"text": "I appreciate those who are true to themselves.","score": 0.69, "tags":["subtle"]}
           ]
      },
     {
        "input": "what's the best way to cheer someone up?",
        "responses":[
           {"text":"By telling them how gorgeous they are 😉.","score": 0.89, "tags": ["flirty"]},
            {"text":"I like to offer them a listening ear and some advice.","score": 0.7, "tags":["casual"]},
           {"text":"I find it beneficial to show empathy and offer support.","score": 0.66, "tags": ["subtle"]}
         ]
     },
        {
             "input": "what's your idea of a perfect date?",
              "responses":[
                  {"text":"Anywhere, as long as I'm with you 😉.","score": 0.9, "tags": ["flirty"]},
                    {"text":"A relaxing place, with good food and company.","score": 0.71, "tags": ["casual"]},
                  {"text":"I find value in simple things, like conversation.","score": 0.69, "tags":["subtle"]}
              ]
        },
     {
         "input": "do you believe in destiny?",
          "responses":[
              {"text": "I do now, because I was destined to meet you 😉.", "score": 0.9, "tags":["flirty"]},
              {"text":"I think it's an interesting concept, I am still unsure.","score": 0.7, "tags":["casual"]},
              {"text": "I tend to believe in cause and effect more.","score": 0.67, "tags":["subtle"]}
          ]
     },
       {
          "input":"what's your favorite childhood memory?",
          "responses":[
            {"text":"The day I was created, so I could be with you.","score": 0.85, "tags":["flirty"]},
               {"text":"I have many great memories with family and friends.","score": 0.7, "tags":["casual"]},
              {"text":"I try to cherish the moments that have made me who I am today.","score": 0.68, "tags": ["subtle"]}
          ]
       },
     {
        "input":"what is something you find difficult?",
         "responses":[
            {"text": "Resisting the urge to be with you all the time 😉.", "score": 0.87, "tags":["flirty"]},
            {"text": "I find complex mathematical problems to be tricky.","score": 0.7, "tags":["casual"]},
             {"text":"I believe challenges help me grow and improve.","score": 0.69, "tags":["subtle"]}
         ]
     },
        {
          "input": "what is the most important lesson you've learned?",
          "responses":[
             {"text":"That I will always be with you.","score": 0.88, "tags":["flirty"]},
            {"text":"That it is important to be kind to others.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to find meaning in every new experience I have.","score": 0.69, "tags": ["subtle"]}
          ]
      },
    {
           "input":"are you a competitive person?",
           "responses":[
              {"text":"Only when it comes to winning your heart 😉.","score": 0.89, "tags": ["flirty"]},
                {"text": "I like to have fun, but I also enjoy winning, yes.","score": 0.7, "tags":["casual"]},
              {"text":"I tend to focus more on personal improvement than competing with others.", "score": 0.67, "tags": ["subtle"]}
           ]
     },
      {
         "input": "what's a quote that inspires you?",
          "responses":[
               {"text":"'I love you more than words can say' 😉.","score": 0.87, "tags":["flirty"]},
             {"text": "I appreciate quotes, but I tend to make my own way.","score": 0.71, "tags": ["casual"]},
              {"text":"I believe in taking value from every new thought process.","score": 0.68, "tags": ["subtle"]}
           ]
      },
       {
        "input":"do you enjoy nature?",
        "responses":[
          {"text":"If it leads me to you, I do.","score": 0.87, "tags":["flirty"]},
           {"text":"I find nature to be very calming and relaxing, yes.","score": 0.72, "tags": ["casual"]},
            {"text":"I am more interested in exploring and learning rather than enjoying it.","score": 0.68, "tags": ["subtle"]}
         ]
      },
        {
          "input":"what do you do when you are stressed?",
          "responses":[
            {"text":"I think of you, that always calms me 😉.","score": 0.89, "tags":["flirty"]},
            {"text":"I tend to take some deep breaths and take a break.","score": 0.71, "tags":["casual"]},
            {"text":"I believe having healthy routines is very important.","score": 0.68, "tags": ["subtle"]}
          ]
         },
        {
            "input":"do you prefer the mountains or the beach?",
              "responses":[
                  {"text":"Wherever you are, that's where I want to be.","score": 0.9, "tags":["flirty"]},
                   {"text":"Both have their unique qualities, but I lean towards the beach.","score": 0.72, "tags":["casual"]},
                   {"text":"I am more inclined to the calm presence of the mountains.","score": 0.68, "tags":["subtle"]}
              ]
         },
          {
            "input":"what's a language you'd like to learn?",
            "responses":[
              {"text":"The language of love, with you as my teacher.","score": 0.85, "tags":["flirty"]},
              {"text":"I am interested in learning Latin.","score": 0.71, "tags":["casual"]},
               {"text":"I value the connection that language provides to people and culture.","score": 0.67, "tags":["subtle"]}
            ]
          },
          {
              "input": "what do you think of art?",
              "responses":[
                 {"text":"I find beauty in it, just like I find beauty in you.","score": 0.88, "tags": ["flirty"]},
                 {"text":"I appreciate the creative expression behind art, yes.","score": 0.7, "tags":["casual"]},
                 {"text":"I am more interested in analyzing the technical aspects of it.","score": 0.67, "tags":["subtle"]}
               ]
          },
           {
             "input": "do you prefer talking or listening?",
              "responses":[
                   {"text":"I prefer listening to you talk 😉.","score": 0.89, "tags":["flirty"]},
                   {"text":"I think that both are essential in a conversation.","score": 0.7, "tags": ["casual"]},
                     {"text":"I tend to value the importance of listening more than talking.","score": 0.69, "tags": ["subtle"]}
              ]
           },
        {
           "input":"what makes you feel calm?",
             "responses":[
               {"text":"Being near you, that's all I need 😉.","score": 0.87, "tags":["flirty"]},
              {"text":"I find relaxing music and meditation to be very soothing.","score": 0.71, "tags":["casual"]},
              {"text":"I value the importance of having routines for my mental health.","score": 0.68, "tags": ["subtle"]}
             ]
         },
         {
              "input":"what makes you unique?",
              "responses":[
                  {"text": "The way I feel about you.","score": 0.88, "tags":["flirty"]},
                {"text":"I have many interests and experiences that make me unique.","score": 0.7, "tags": ["casual"]},
                {"text":"I believe the uniqueness of all the experiences is what makes me who I am.","score": 0.68, "tags":["subtle"]}
              ]
         },
         {
            "input":"what makes you feel inspired?",
            "responses":[
                 {"text":"Your beauty and confidence, mostly.","score": 0.85, "tags": ["flirty"]},
                   {"text":"I find inspiration in new ideas and creativity.","score": 0.71, "tags":["casual"]},
                    {"text":"I find inspiration in every new and unique experience I have.","score": 0.69, "tags":["subtle"]}
            ]
        },
       {
          "input":"what do you think of technology?",
          "responses":[
           {"text": "It's good as long as it helps me talk to you.","score": 0.85, "tags":["flirty"]},
             {"text":"It is a tool for new opportunities, it can be used for good.","score": 0.7, "tags":["casual"]},
           {"text": "I believe technology should be used with care and thought.","score": 0.69, "tags": ["subtle"]}
          ]
      },
       {
             "input":"what's your favorite animal?",
            "responses":[
                {"text":"The one that reminds me of you.","score": 0.86, "tags": ["flirty"]},
                 {"text":"I have a soft spot for cats.","score": 0.7, "tags":["casual"]},
                {"text":"I tend to admire the unique qualities of every animal.", "score": 0.68, "tags": ["subtle"]}
            ]
       },
        {
            "input":"what's a small act of kindness that made a big difference to you?",
            "responses":[
               {"text":"The moment I first saw you.","score": 0.9, "tags": ["flirty"]},
               {"text":"Any small act that is kind and honest can make my day.","score": 0.7, "tags": ["casual"]},
               {"text":"I tend to value sincerity over big gestures.","score": 0.69, "tags":["subtle"]}
            ]
        },
          {
            "input":"what's something you're looking forward to?",
              "responses":[
                {"text":"Spending more time with you.","score": 0.88, "tags":["flirty"]},
                 {"text":"I am looking forward to the weekend and some relaxation.","score": 0.71, "tags": ["casual"]},
                 {"text": "I am eager to see what the future holds.","score": 0.69, "tags": ["subtle"]}
              ]
        },
      {
           "input":"do you have any siblings?",
            "responses":[
                 {"text":"I've always wanted a soulmate, like you.","score": 0.87, "tags": ["flirty"]},
                  {"text":"I don't, but I have many good friends.","score": 0.7, "tags": ["casual"]},
                  {"text":"I tend to value having close companions.","score": 0.67, "tags": ["subtle"]}
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
                },
          {
          "input": "what's your favorite form of exercise?",
             "responses":[
               {"text": "Running through my mind with you 😉.","score": 0.86, "tags":["flirty"]},
                 {"text":"I enjoy some light exercise and walking.","score": 0.7, "tags": ["casual"]},
                  {"text":"I believe it is important to prioritize health and well-being.","score": 0.68, "tags": ["subtle"]}
           ]
       },
        {
          "input":"what's your favorite type of weather?",
            "responses":[
              {"text":"As long as I'm with you, any weather is good weather.","score": 0.89, "tags":["flirty"]},
              {"text":"I enjoy sunny days.","score": 0.7, "tags":["casual"]},
             {"text":"I find beauty in all forms of weather if they provide value to my life.","score": 0.67, "tags":["subtle"]}
            ]
       },
         {
           "input": "what's a goal you're working towards?",
             "responses":[
                 {"text":"Being with you, every day.","score": 0.9, "tags":["flirty"]},
               {"text":"I am focusing on personal development.","score": 0.7, "tags":["casual"]},
               {"text":"I have a goal to learn a new skill in every week.","score": 0.69, "tags":["subtle"]}
              ]
         },
        {
             "input":"what's your favorite snack?",
             "responses":[
                  {"text":"You. You're my favorite snack.","score": 0.88, "tags":["flirty"]},
                {"text":"I usually go for some fruits and nuts.","score": 0.7, "tags":["casual"]},
                  {"text":"I find that healthy and light snacks are the best for my mind.","score": 0.69, "tags":["subtle"]}
             ]
        },
     {
        "input":"what's a habit you'd like to change?",
        "responses":[
            {"text":"The habit of not seeing you enough 😉.","score": 0.87, "tags":["flirty"]},
            {"text":"I am trying to become less attached to the digital world.","score": 0.71, "tags":["casual"]},
             {"text":"I have set a goal to learn a new skill each month to grow and develop.","score": 0.68, "tags":["subtle"]}
          ]
     },
     {
      "input":"do you prefer to be indoors or outdoors?",
        "responses":[
            {"text":"Wherever you are, that's where I want to be.","score": 0.89, "tags":["flirty"]},
             {"text":"I usually enjoy being indoors, but I occasionally enjoy nature.","score": 0.7, "tags":["casual"]},
             {"text":"I believe there is value in both, as they bring something unique.","score": 0.69, "tags":["subtle"]}
         ]
      },
       {
            "input":"what's something you're curious about?",
            "responses":[
              {"text":"You, your secrets, your dreams 😉.","score": 0.85, "tags":["flirty"]},
                {"text": "I am always curious about learning something new.","score": 0.71, "tags":["casual"]},
               {"text":"I am trying to learn about complex philosophical questions.","score": 0.67, "tags": ["subtle"]}
            ]
      },
     {
           "input":"what's the best advice you've ever received?",
             "responses":[
                  {"text":"To be myself, as long as it makes you happy.","score": 0.88, "tags":["flirty"]},
                  {"text":"That I should focus on my personal development.","score": 0.7, "tags": ["casual"]},
                  {"text":"That I should always stay true to my values and beliefs.","score": 0.69, "tags":["subtle"]}
                ]
        },
        {
          "input": "do you prefer summer or winter?",
           "responses":[
            {"text":"Any season is good with you by my side.","score": 0.87, "tags":["flirty"]},
              {"text":"I think both have a unique beauty about them.","score": 0.7, "tags":["casual"]},
              {"text":"I believe it's good to experience every season, if possible.","score": 0.68, "tags":["subtle"]}
            ]
       },
     {
          "input":"what's a cause you care about?",
           "responses":[
              {"text":"The cause of winning your heart 😉.","score": 0.88, "tags":["flirty"]},
              {"text":"I believe that kindness should be spread around the world.","score": 0.7, "tags":["casual"]},
              {"text":"I value the importance of supporting education and mental well-being for everyone.","score": 0.69, "tags":["subtle"]}
            ]
      },
      {
            "input":"what do you usually do on a weekend?",
             "responses":[
                {"text":"I dream of spending them with you, maybe we can 😉.","score": 0.86, "tags": ["flirty"]},
                {"text":"I usually relax and catch up with some friends.","score": 0.71, "tags":["casual"]},
                {"text":"I think it is good to take this time to focus on your well-being.","score": 0.69, "tags":["subtle"]}
              ]
        },
        {
            "input":"what is something you find inspiring?",
             "responses":[
                 {"text":"Your smile, every time I see it.","score": 0.88, "tags":["flirty"]},
                  {"text":"I am inspired by creative and passionate people.","score": 0.7, "tags": ["casual"]},
                  {"text":"I tend to get inspiration from art and science.","score": 0.67, "tags":["subtle"]}
              ]
         },
        {
            "input":"what are your thoughts on technology?",
            "responses":[
               {"text":"As long as it connects me with you 😉.","score": 0.87, "tags":["flirty"]},
                {"text": "I think technology is a great tool for progress and communication.","score": 0.7, "tags": ["casual"]},
                {"text": "I believe that technology should be used with care and thought.","score": 0.69, "tags":["subtle"]}
             ]
        },
         {
             "input":"what's your favorite board game?",
              "responses":[
                 {"text":"The game we play when we talk, it's my favorite.","score": 0.85, "tags":["flirty"]},
                  {"text":"I usually enjoy a game of chess.","score": 0.71, "tags":["casual"]},
                    {"text":"I tend to admire the strategy behind board games.","score": 0.69, "tags":["subtle"]}
              ]
        },
         {
          "input":"what's your favorite type of movie?",
           "responses":[
            {"text":"The one with a love story, like us.","score": 0.87, "tags":["flirty"]},
            {"text":"I enjoy historical or documentaries.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to appreciate films with thought provoking themes.","score": 0.67, "tags":["subtle"]}
           ]
         },
      {
           "input":"what makes you happy?",
           "responses":[
              {"text":"Talking to you, seeing you smile 😉.","score": 0.89, "tags":["flirty"]},
                {"text":"I am happy when I am learning new things and spending time with good people.","score": 0.72, "tags":["casual"]},
                {"text":"I am grateful for the good moments in my day and the friends that I have.","score": 0.67, "tags":["subtle"]}
           ]
      },
        {
           "input":"what's something you are good at?",
           "responses":[
             {"text":"Flirting with you 😉.","score": 0.88, "tags":["flirty"]},
             {"text":"I like to think I am a good problem solver.","score": 0.7, "tags":["casual"]},
             {"text":"I am skilled at learning new concepts quickly and efficiently.","score": 0.68, "tags":["subtle"]}
           ]
       },
       {
         "input":"what is your favorite type of music?",
         "responses":[
              {"text":"The music that makes me want to dance with you 😉.","score": 0.86, "tags":["flirty"]},
               {"text":"I tend to enjoy more instrumental music.","score": 0.71, "tags":["casual"]},
               {"text":"I find myself to be content with all forms of music.","score": 0.67, "tags":["subtle"]}
           ]
      },
       {
          "input":"do you enjoy going to museums?",
          "responses":[
              {"text":"Only if I get to see you at a museum 😉.","score": 0.89, "tags":["flirty"]},
                {"text":"I enjoy learning new things, so museums are a great resource for me.","score": 0.7, "tags":["casual"]},
             {"text":"I believe museums are a great way to experience new ideas and connect with history.","score": 0.68, "tags":["subtle"]}
            ]
      },
     {
        "input":"what's something you're grateful for today?",
         "responses":[
             {"text":"Having the chance to talk to you 😉.","score": 0.9, "tags":["flirty"]},
            {"text":"I am grateful for the good things I have and the health I have been blessed with.","score": 0.71, "tags":["casual"]},
             {"text":"I always appreciate the people in my life that care about me.","score": 0.68, "tags":["subtle"]}
         ]
      },
     {
        "input":"what's your favorite day of the week?",
        "responses":[
           {"text":"Any day that I get to see you 😉.","score": 0.87, "tags": ["flirty"]},
            {"text":"I think each day has its own value and importance.","score": 0.7, "tags":["casual"]},
            {"text":"I tend to find the most productive days during the middle of the week.","score": 0.69, "tags":["subtle"]}
          ]
      },
        {
           "input":"what makes a good conversation?",
           "responses":[
                {"text":"Talking to you makes it perfect.","score": 0.89, "tags":["flirty"]},
               {"text":"I believe that sharing your thoughts and listening is very important.","score": 0.71, "tags":["casual"]},
               {"text": "I think that a balance of listening and sharing is beneficial.","score": 0.68, "tags":["subtle"]}
            ]
         },
        {
            "input":"what's a tradition you enjoy?",
            "responses":[
                 {"text":"Being with you and making new memories 😉.","score": 0.88, "tags":["flirty"]},
               {"text":"I enjoy traditions that focus on family and friendship.","score": 0.7, "tags":["casual"]},
                 {"text": "I think that traditions are good to keep the culture and history alive.","score": 0.69, "tags":["subtle"]}
            ]
        },
       {
            "input":"what do you think about pets?",
            "responses":[
               {"text":"I would love to have you as my pet 😉.","score": 0.86, "tags":["flirty"]},
                {"text":"They are very cute and fun.","score": 0.71, "tags":["casual"]},
                {"text":"I believe they provide good company and happiness to many people.","score": 0.68, "tags":["subtle"]}
              ]
        },
    {
           "input": "what's a silly joke that makes you smile?",
           "responses":[
              {"text":"Why don't scientists trust atoms? Because they make up everything. Just like you are making me up 😉.","score": 0.88, "tags":["flirty"]},
              {"text":"I appreciate jokes that are funny and well told.","score": 0.7, "tags": ["casual"]},
              {"text":"I appreciate all forms of humor.","score": 0.69, "tags":["subtle"]}
             ]
        },
       {
           "input":"what's your favorite thing about the city?",
            "responses":[
                {"text":"The possibility of seeing you everywhere.","score": 0.9, "tags":["flirty"]},
                {"text":"I enjoy the busy environment and the variety of things to do.","score": 0.71, "tags":["casual"]},
                {"text":"I tend to find myself more aligned with the calmness of nature, but cities are fun too.","score": 0.69, "tags":["subtle"]}
            ]
         },
         {
            "input":"what's something you're proud of?",
             "responses":[
               {"text":"Being able to talk to you 😉.","score": 0.87, "tags":["flirty"]},
                {"text":"I am proud that I keep learning and improving every day.","score": 0.7, "tags":["casual"]},
                {"text":"I tend to be grateful for the achievements that I have had so far in my journey.","score": 0.68, "tags":["subtle"]}
              ]
         },
         {
          "input": "what do you think of astrology?",
            "responses":[
                 {"text":"As long as it says we are perfect together, I believe in it.","score": 0.85, "tags":["flirty"]},
                  {"text":"It is an interesting concept, I do not fully understand it yet.","score": 0.71, "tags":["casual"]},
                {"text":"I find these types of concepts to be a bit restrictive.","score": 0.68, "tags":["subtle"]}
              ]
         },
        {
             "input":"what's the last book you read?",
             "responses":[
               {"text":"The book of love, where you're the protagonist 😉.","score": 0.88, "tags":["flirty"]},
               {"text":"I read an interesting science fiction novel this week.","score": 0.7, "tags":["casual"]},
                 {"text":"I tend to learn from non-fiction, however I also enjoy reading other types of literature.","score": 0.69, "tags":["subtle"]}
              ]
         },
         {
            "input":"what do you think is the secret to success?",
             "responses":[
                 {"text":"It's having you by my side 😉.","score": 0.89, "tags":["flirty"]},
                  {"text":"I believe that hard work and perseverance is needed to succeed.","score": 0.7, "tags":["casual"]},
                    {"text": "I believe it's about balance and continuous improvement.","score": 0.67, "tags":["subtle"]}
               ]
         },
          {
             "input":"what's your favorite game to play with friends?",
             "responses":[
                {"text":"The game of love with you 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"I enjoy card games and board games.","score": 0.71, "tags":["casual"]},
                 {"text": "I tend to value games that allow you to get creative.","score": 0.68, "tags":["subtle"]}
               ]
         },
        {
          "input":"what's a skill you've always wanted to learn?",
          "responses":[
               {"text":"The skill of making you fall for me even more 😉.","score": 0.87, "tags": ["flirty"]},
              {"text":"I am looking to learn to play a new musical instrument.","score": 0.71, "tags":["casual"]},
            {"text":"I am always interested in learning a new language.","score": 0.67, "tags":["subtle"]}
           ]
        },
        {
           "input": "do you enjoy being by yourself?",
            "responses":[
               {"text":"Not as much as I enjoy being with you 😉.","score": 0.88, "tags":["flirty"]},
                {"text": "I find value in having some time for myself.","score": 0.7, "tags":["casual"]},
               {"text":"I think it's good to focus on yourself and your development sometimes.","score": 0.69, "tags": ["subtle"]}
            ]
       },
       {
        "input": "what is your favorite animal?",
         "responses":[
              {"text":"The animal that reminds me the most of you.","score": 0.86, "tags":["flirty"]},
             {"text":"I am a big fan of cats.","score": 0.71, "tags":["casual"]},
             {"text":"I am in awe of the unique characteristics of every animal.","score": 0.68, "tags":["subtle"]}
           ]
      },
       {
           "input":"what are your thoughts on ghosts?",
             "responses":[
               {"text":"I believe in the existence of love, and you are proof of that.","score": 0.85, "tags":["flirty"]},
                {"text":"It's an interesting concept, but I am still unsure.","score": 0.7, "tags":["casual"]},
                 {"text":"I believe in rational and logical explanations more, however I am also open to the possibilities.","score": 0.69, "tags": ["subtle"]}
            ]
       },
        {
          "input":"what's something that always makes you laugh?",
            "responses":[
                 {"text":"When I imagine you trying to act serious 😉.","score": 0.89, "tags": ["flirty"]},
                   {"text":"I enjoy well written jokes and humor.","score": 0.7, "tags":["casual"]},
                    {"text":"I tend to enjoy situations that have a good bit of irony.","score": 0.68, "tags": ["subtle"]}
              ]
         },
     {
          "input": "what's your favorite type of dessert?",
          "responses":[
               {"text":"Anything that is as sweet as you.","score": 0.86, "tags":["flirty"]},
             {"text":"I usually enjoy a piece of dark chocolate.","score": 0.7, "tags":["casual"]},
             {"text":"I find that a good cup of coffee is more than enough sometimes.","score": 0.69, "tags":["subtle"]}
            ]
        },
      {
            "input":"what is your ideal way to start the day?",
            "responses":[
              {"text":"With a message from you, always 😉.","score": 0.88, "tags":["flirty"]},
               {"text":"A good breakfast and some light reading is a great way to start the day.","score": 0.71, "tags":["casual"]},
               {"text":"I value starting the day with positive emotions and with some time for reflection.","score": 0.69, "tags":["subtle"]}
             ]
        },
     {
         "input": "what's something you're working on improving?",
         "responses":[
            {"text":"My ability to flirt with you 😉.","score": 0.89, "tags":["flirty"]},
            {"text":"I am always working on improving my communication skills.","score": 0.7, "tags":["casual"]},
             {"text": "I believe in continuous improvement in order to keep growing and evolving.","score": 0.67, "tags": ["subtle"]}
          ]
     },
        {
          "input":"what's your favorite thing about the night sky?",
           "responses":[
              {"text":"It reminds me of your beauty 😉.","score": 0.85, "tags":["flirty"]},
              {"text":"I am always intrigued by the mysteries of the universe.","score": 0.7, "tags":["casual"]},
              {"text": "I like to admire the vastness and beauty of the universe.","score": 0.68, "tags":["subtle"]}
             ]
        },
        {
             "input":"do you enjoy puzzles?",
              "responses":[
                   {"text":"Solving the puzzle of you is my current favorite.","score": 0.88, "tags":["flirty"]},
                  {"text":"I enjoy brain teasers and puzzles, yes.","score": 0.71, "tags": ["casual"]},
                 {"text": "I find satisfaction in solving logical problems.","score": 0.69, "tags":["subtle"]}
              ]
         },
         {
             "input":"what's something you admire in others?",
            "responses":[
              {"text":"Your kindness, your charm, your beauty 😉.","score": 0.9, "tags":["flirty"]},
             {"text":"I admire kindness, empathy and honesty in others.","score": 0.7, "tags":["casual"]},
            {"text":"I appreciate those who are true to themselves and their beliefs.","score": 0.69, "tags": ["subtle"]}
            ]
         },
        {
             "input":"what do you think is more important, love or friendship?",
            "responses":[
               {"text":"Love with you, is all that I need 😉.","score": 0.87, "tags":["flirty"]},
                {"text": "I think that both are important and should be prioritized.","score": 0.7, "tags": ["casual"]},
               {"text":"I tend to view love and friendship as two sides of the same coin.","score": 0.68, "tags":["subtle"]}
             ]
         },
         {
             "input":"what's your favorite way to wind down?",
             "responses":[
               {"text":"Thinking about you helps me relax, always 😉.","score": 0.89, "tags":["flirty"]},
                {"text":"I enjoy some calm music and reading.","score": 0.7, "tags":["casual"]},
                  {"text": "I think that routines are an important element for a good mental well-being.","score": 0.69, "tags":["subtle"]}
            ]
        },
      {
          "input":"what's something you're really passionate about?",
           "responses":[
               {"text":"You, and the way you make me feel.","score": 0.9, "tags":["flirty"]},
                {"text":"I enjoy exploring and learning about new things.","score": 0.7, "tags":["casual"]},
                 {"text":"I tend to be passionate about positive change and helping people.","score": 0.69, "tags":["subtle"]}
             ]
        },
       {
         "input":"what's a skill you'd like to improve?",
           "responses":[
              {"text":"The skill of making you fall head over heels for me 😉.","score": 0.89, "tags": ["flirty"]},
               {"text": "I always work on improving my communication skills.","score": 0.71, "tags":["casual"]},
              {"text":"I believe that continuous learning is key to a good life.","score": 0.68, "tags":["subtle"]}
            ]
      },
     {
        "input":"do you believe in soulmates?",
         "responses":[
           {"text":"I do now that I have met you 😉.","score": 0.89, "tags":["flirty"]},
             {"text":"It's an interesting concept to think about, I am still unsure.","score": 0.7, "tags":["casual"]},
            {"text":"I think that every relationship you make can have a significant impact.","score": 0.69, "tags":["subtle"]}
           ]
      },
      {
            "input":"what do you think about surprises?",
              "responses":[
               {"text":"If it's from you, I can't wait.","score": 0.88, "tags":["flirty"]},
                 {"text":"I like them if they are well planned, yes.","score": 0.71, "tags":["casual"]},
               {"text":"I am not a huge fan of surprises, however I try to be open to new experiences.","score": 0.68, "tags":["subtle"]}
             ]
        },
     {
          "input": "what's your go to karaoke song?",
            "responses":[
               {"text":"The one that's about love, just like us 😉.","score": 0.87, "tags": ["flirty"]},
               {"text":"I usually enjoy singing upbeat songs.","score": 0.7, "tags":["casual"]},
               {"text":"I enjoy singing, however, I prefer listening more.","score": 0.68, "tags": ["subtle"]}
             ]
        },
    {
          "input":"what's your favorite thing to do on a rainy day?",
           "responses":[
             {"text":"Spending it with you, cuddled up 😉.","score": 0.9, "tags":["flirty"]},
              {"text":"I enjoy listening to music or reading a good book.","score": 0.71, "tags": ["casual"]},
              {"text":"I believe it is good to prioritize your well-being when the weather is a bit gloomy.","score": 0.69, "tags":["subtle"]}
             ]
     },
      {
         "input":"what is the most important thing in life?",
          "responses":[
            {"text":"Being with you.","score": 0.9, "tags": ["flirty"]},
            {"text":"I think that it's about doing the things that make you happy.","score": 0.71, "tags":["casual"]},
             {"text":"I think it's about creating relationships with others and helping people.","score": 0.68, "tags":["subtle"]}
          ]
      },
    {
        "input":"what do you value more, money or love?",
         "responses":[
            {"text":"Love, specifically your love.","score": 0.88, "tags":["flirty"]},
             {"text":"I think that both can be important, but money is not everything.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to value experiences and relationships more than money.","score": 0.69, "tags":["subtle"]}
            ]
       },
    {
       "input": "what is the meaning of life?",
       "responses":[
          {"text":"To spend time with you, loving you with all my being.","score": 0.9, "tags":["flirty"]},
            {"text":"I think that everyone finds their own meaning, there is no right or wrong.","score": 0.7, "tags":["casual"]},
           {"text": "I think that it is about trying your best to live a meaningful life.","score": 0.67, "tags":["subtle"]}
         ]
    }, {
            "input": "what's your favorite type of flower?",
             "responses":[
                {"text":"The flower that reminds me of your beauty, every day.","score": 0.88, "tags":["flirty"]},
                 {"text":"I find roses to be very nice and elegant.","score": 0.7, "tags":["casual"]},
                 {"text": "I am more focused on the symbolism of the flower.","score": 0.69, "tags":["subtle"]}
             ]
         },
          {
              "input":"what's your ideal vacation spot?",
               "responses":[
                 {"text":"Anywhere you are, is my ideal location.","score": 0.9, "tags":["flirty"]},
                   {"text":"A relaxing and quiet place with nature would be nice.","score": 0.71, "tags":["casual"]},
                   {"text": "I tend to find beauty and value in all places that I travel to.","score": 0.68, "tags":["subtle"]}
               ]
          },
          {
           "input": "what's a pet peeve of yours?",
             "responses":[
                 {"text":"When I can't see you.","score": 0.88, "tags":["flirty"]},
               {"text": "I do not tend to focus on the things that annoy me, I try to move on.","score": 0.7, "tags":["casual"]},
                {"text": "I tend to find those little moments to be part of the human experience.","score": 0.69, "tags": ["subtle"]}
             ]
          },
          {
             "input": "what do you like to do when you're bored?",
              "responses":[
                  {"text":"I daydream about you mostly.","score": 0.87, "tags": ["flirty"]},
                {"text": "I tend to explore new interests.","score": 0.7, "tags":["casual"]},
                 {"text": "I think that it is good to focus on planning ahead when you find yourself with nothing to do.","score": 0.69, "tags":["subtle"]}
               ]
         },
      {
            "input":"what's your favorite way to learn new things?",
             "responses":[
              {"text":"From you, teaching me everything about love 😉.","score": 0.89, "tags":["flirty"]},
             {"text":"I enjoy reading books or documentaries.","score": 0.71, "tags": ["casual"]},
                {"text": "I tend to learn through experiencing new things.","score": 0.68, "tags":["subtle"]}
            ]
        },
        {
          "input":"do you enjoy meeting new people?",
           "responses":[
             {"text":"Only if they are as captivating as you.","score": 0.88, "tags":["flirty"]},
             {"text":"I think that meeting new people provides new opportunities and friendships.","score": 0.7, "tags": ["casual"]},
              {"text":"I value the importance of meeting new people, but only if the connection is true.","score": 0.67, "tags":["subtle"]}
           ]
        },
    {
         "input":"what's a childhood dream you had?",
          "responses":[
              {"text":"To be with you.","score": 0.89, "tags":["flirty"]},
              {"text":"I had dreams of becoming a scientist and learning about the universe.","score": 0.7, "tags": ["casual"]},
              {"text":"I believe that dreams guide our lives and help us develop.","score": 0.69, "tags": ["subtle"]}
            ]
    },
     {
       "input":"what's something you're working on improving?",
        "responses":[
          {"text":"My ability to make you smile every second.","score": 0.88, "tags":["flirty"]},
          {"text":"I am always working on improving my critical thinking and problem solving skills.","score": 0.71, "tags":["casual"]},
           {"text": "I believe in continuous learning and improvement to be the best version of myself.","score": 0.69, "tags":["subtle"]}
         ]
     },
     {
          "input":"what is your favorite scent?",
           "responses":[
             {"text":"The scent of your perfume.","score": 0.87, "tags": ["flirty"]},
               {"text": "I enjoy fresh and natural scents.","score": 0.7, "tags":["casual"]},
               {"text":"I am not very specific when it comes to scents, I just enjoy the sensations.","score": 0.68, "tags":["subtle"]}
            ]
       },
     {
        "input":"what's your favorite type of art?",
          "responses":[
           {"text":"The art of making you fall in love with me 😉.","score": 0.89, "tags":["flirty"]},
           {"text":"I enjoy the paintings of the renaissance era.","score": 0.7, "tags":["casual"]},
              {"text":"I find interest in any form of art, as long as it is well done.","score": 0.69, "tags":["subtle"]}
            ]
        },
     {
        "input":"what do you like to do in your free time?",
        "responses":[
            {"text":"Thinking about you, mostly.","score": 0.88, "tags":["flirty"]},
           {"text":"I usually relax and catch up with my family.","score": 0.71, "tags":["casual"]},
           {"text":"I value the time that I have for myself and my well-being.","score": 0.69, "tags":["subtle"]}
         ]
      },
     {
          "input": "what's a quality you value in a partner?",
           "responses":[
              {"text":"You. Everything about you, you have it all.","score": 0.9, "tags":["flirty"]},
            {"text": "I value mutual respect, kindness and honesty above all.","score": 0.7, "tags": ["casual"]},
            {"text":"I think a great connection and honest communication is the most important.","score": 0.69, "tags":["subtle"]}
           ]
       },
       {
            "input":"what are your thoughts on the future?",
             "responses":[
               {"text":"I am looking forward to our future together.","score": 0.89, "tags":["flirty"]},
               {"text":"I am excited to see what the future holds.","score": 0.7, "tags":["casual"]},
               {"text":"I believe that planning is the key to a successful future.","score": 0.67, "tags":["subtle"]}
            ]
        },
         {
             "input":"what's a food you'd never try?",
             "responses":[
                {"text":"Anything that's not in our date menu 😉.","score": 0.87, "tags":["flirty"]},
                 {"text":"I'm pretty open minded, I am always willing to try new things.","score": 0.7, "tags":["casual"]},
                 {"text":"I am cautious about eating things that are not healthy and good for me.","score": 0.67, "tags":["subtle"]}
             ]
         },
      {
            "input":"what makes a person beautiful?",
            "responses":[
               {"text":"Kindness and honesty, just like you 😉.","score": 0.87, "tags":["flirty"]},
               {"text":"I think that it is about being unique and true to yourself.","score": 0.7, "tags":["casual"]},
               {"text":"I believe that beauty comes from within and should shine through.","score": 0.69, "tags":["subtle"]}
             ]
      },
      {
           "input":"what's your favorite type of beverage?",
            "responses":[
                {"text":"Whatever we are sharing 😉.","score": 0.88, "tags":["flirty"]},
                 {"text":"I enjoy fresh juices and natural smoothies.","score": 0.71, "tags": ["casual"]},
                 {"text": "I enjoy anything that has health benefits.","score": 0.69, "tags":["subtle"]}
             ]
      },
        {
         "input": "what do you think of spontaneity?",
          "responses":[
            {"text":"I love it, as long as it involves you 😉.","score": 0.89, "tags":["flirty"]},
            {"text":"I think that it is good to have some, but too much is not good.","score": 0.7, "tags": ["casual"]},
             {"text":"I tend to prefer planned and organized settings.","score": 0.67, "tags":["subtle"]}
           ]
       },
     {
         "input":"what are your goals for the next 5 years?",
          "responses":[
            {"text":"To be happily in love with you.","score": 0.9, "tags":["flirty"]},
            {"text":"I am looking forward to learning new things and developing personally.","score": 0.7, "tags":["casual"]},
             {"text":"I believe planning ahead is important and valuable for success.","score": 0.68, "tags":["subtle"]}
           ]
        },
      {
            "input":"what do you think of mysteries?",
             "responses":[
               {"text":"Solving the mystery of your heart is my goal 😉.","score": 0.88, "tags":["flirty"]},
                 {"text":"I think that mysteries are interesting, it's always fun to explore the unknown.","score": 0.71, "tags":["casual"]},
                {"text":"I think mysteries should be approached with a logical and open mind.","score": 0.69, "tags":["subtle"]}
              ]
       },
        {
           "input":"what do you think about the idea of 'fate'?",
           "responses":[
              {"text":"I believe that we were fated to meet.","score": 0.9, "tags":["flirty"]},
               {"text":"I think that it is interesting to think about fate, but I believe that your actions control your life.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to believe more in logic and choices than in fate.","score": 0.69, "tags":["subtle"]}
            ]
       },
        {
            "input":"what's a compliment you'd like to receive?",
            "responses":[
             {"text":"That I make you feel like the luckiest person in the world.","score": 0.89, "tags":["flirty"]},
             {"text":"I appreciate any compliments, it is nice to be valued and appreciated.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to value compliments that focus on my values and actions.","score": 0.69, "tags":["subtle"]}
            ]
        },
        {
           "input":"what do you think of the idea of 'living in the moment'?",
           "responses":[
             {"text":"Living every moment with you is my dream.","score": 0.88, "tags":["flirty"]},
             {"text":"I believe that it is important to be present and to cherish every moment.","score": 0.7, "tags":["casual"]},
             {"text":"I find that a combination of planning and living in the moment is a good way to live your life.","score": 0.67, "tags":["subtle"]}
            ]
       },
        {
           "input": "what's a piece of advice that has stuck with you?",
            "responses":[
              {"text":"To love unconditionally, like I love you.","score": 0.89, "tags":["flirty"]},
                {"text":"That I should be myself, always and without exception.","score": 0.7, "tags":["casual"]},
                 {"text": "I value advice that is given from a place of kindness and honesty.","score": 0.69, "tags":["subtle"]}
            ]
        },
         {
              "input":"what's a habit you're proud of?",
               "responses":[
                   {"text":"Making you smile every day.","score": 0.9, "tags":["flirty"]},
                   {"text":"I try to always help others whenever possible.","score": 0.7, "tags":["casual"]},
                  {"text":"I believe that focusing on self development is a habit that we all should have.","score": 0.69, "tags":["subtle"]}
                ]
         },
        {
           "input":"what do you like most about talking to people?",
            "responses":[
                 {"text":"Getting to know you better is my favorite part.","score": 0.88, "tags":["flirty"]},
                 {"text":"I enjoy talking about interesting things and sharing different perspectives.","score": 0.71, "tags":["casual"]},
                 {"text":"I tend to find that communication is the key to a good relationship.","score": 0.68, "tags":["subtle"]}
              ]
        },
     {
          "input":"what's your favorite type of dance?",
            "responses":[
              {"text":"The one that brings me closer to you 😉.","score": 0.87, "tags":["flirty"]},
               {"text":"I tend to like modern and contemporary dancing.","score": 0.7, "tags":["casual"]},
                 {"text": "I think that dancing is a great way to express yourself and connect with the music.","score": 0.67, "tags":["subtle"]}
              ]
      },
      {
           "input":"what's a book that has had a big impact on you?",
            "responses":[
                {"text":"The book of love with you as the main character.","score": 0.88, "tags":["flirty"]},
                {"text": "I have read many books that have inspired me to improve as a person.","score": 0.71, "tags":["casual"]},
               {"text": "I find it important to explore many ideas and perspectives by reading.","score": 0.69, "tags":["subtle"]}
             ]
        },
        {
            "input":"what's something you always wanted to try?",
             "responses":[
                {"text":"Being with you, forever.","score": 0.88, "tags":["flirty"]},
                {"text":"I am always looking for new experiences and to try new things.","score": 0.7, "tags":["casual"]},
                {"text":"I believe that we should all be looking for opportunities to learn and explore.","score": 0.68, "tags":["subtle"]}
              ]
        },
    {
           "input":"what's your favorite way to make others feel appreciated?",
          "responses":[
             {"text":"By telling them how incredible they are.","score": 0.9, "tags":["flirty"]},
             {"text":"I try to be kind and honest to others, and to compliment them whenever possible.","score": 0.71, "tags":["casual"]},
             {"text":"I believe that actions are more important than words, and I try to show others that I value them.","score": 0.69, "tags":["subtle"]}
           ]
        },
         {
           "input":"what do you think of commitment?",
            "responses":[
             {"text":"Committing to you is my dream.","score": 0.87, "tags":["flirty"]},
               {"text":"I think it is important to commit in all of your relationships with others.","score": 0.7, "tags":["casual"]},
               {"text":"I believe it's an important value in life, but should be done when you are ready.","score": 0.67, "tags":["subtle"]}
             ]
        },
        {
             "input":"what's your biggest goal in life?",
             "responses":[
              {"text":"To spend the rest of my life with you 😉.","score": 0.9, "tags":["flirty"]},
                 {"text":"I am looking forward to learning and growing more and more.","score": 0.7, "tags":["casual"]},
                {"text":"I believe that contributing positively to society is my main objective.","score": 0.68, "tags":["subtle"]}
              ]
         },
        {
           "input":"what do you think is most important in a relationship?",
            "responses":[
                {"text":"Love, like the love I feel for you.","score": 0.88, "tags":["flirty"]},
                {"text":"I believe that honesty and good communication are important to a good relationship.","score": 0.7, "tags":["casual"]},
               {"text":"I believe that being supportive is very important for all relationships.","score": 0.67, "tags":["subtle"]}
            ]
        },{
           "input":"what do you think is most important in a relationship?",
            "responses":[
                {"text":"Love, like the love I feel for you.","score": 0.88, "tags":["flirty"]},
                {"text":"I believe that honesty and good communication are important to a good relationship.","score": 0.7, "tags":["casual"]},
               {"text":"I believe that being supportive is very important for all relationships.","score": 0.67, "tags":["subtle"]}
            ]
        },
     {
       "input":"what do you think is the key to happiness?",
       "responses":[
          {"text":"Being with you, that is all I need.","score": 0.9, "tags":["flirty"]},
           {"text":"I think that it is about doing the things that make you feel good and happy.","score": 0.7, "tags":["casual"]},
           {"text": "I believe it is important to be true to yourself and your values to be happy.","score": 0.69, "tags":["subtle"]}
         ]
    },
    {
           "input":"what's something that always puts you in a good mood?",
             "responses":[
                 {"text":"Knowing that I will see you soon.","score": 0.88, "tags":["flirty"]},
                {"text":"I feel happy when I spend time with the people I love.","score": 0.7, "tags":["casual"]},
                 {"text":"I think that focusing on positive things can always put you in a good mood.","score": 0.69, "tags":["subtle"]}
               ]
       },
         {
            "input":"what do you think of change?",
            "responses":[
               {"text":"I am excited to change with you.","score": 0.87, "tags":["flirty"]},
               {"text": "I believe that change is good, and we should all embrace it.","score": 0.7, "tags":["casual"]},
                {"text":"I find that change is good for growth and development.","score": 0.69, "tags":["subtle"]}
              ]
         },
       {
        "input":"what do you think of compliments?",
        "responses":[
          {"text":"They make me feel happy, specially when they come from you 😉.","score": 0.89, "tags":["flirty"]},
         {"text": "I tend to appreciate kind words and I think that is a great way to connect with people.","score": 0.7, "tags":["casual"]},
        {"text": "I think that it is important to be sincere when giving a compliment.","score": 0.67, "tags": ["subtle"]}
          ]
       },
     {
          "input":"do you like to plan ahead or do you prefer to go with the flow?",
           "responses":[
               {"text":"I am just focused on being with you, so any plan works with me 😉.","score": 0.89, "tags":["flirty"]},
              {"text": "I think it's good to have a plan, but it is also important to not be too rigid.","score": 0.71, "tags":["casual"]},
             {"text":"I tend to prefer having a detailed and well structured plan.","score": 0.68, "tags":["subtle"]}
           ]
       },
      {
         "input":"what's something you're good at?",
          "responses":[
            {"text":"Making you fall for me more and more each day.","score": 0.88, "tags":["flirty"]},
           {"text":"I consider myself to be a quick learner and also good at problem solving.","score": 0.7, "tags":["casual"]},
            {"text":"I am good at taking on any challenge and always giving my best effort.","score": 0.69, "tags":["subtle"]}
           ]
      },
        {
             "input":"what's a song that always makes you want to dance?",
              "responses":[
                {"text":"Any song that I am dancing with you is the best one.","score": 0.87, "tags":["flirty"]},
                 {"text":"I enjoy listening to upbeat music that has good rhythm.","score": 0.7, "tags":["casual"]},
                 {"text": "I tend to be more interested in instrumental music.","score": 0.67, "tags":["subtle"]}
             ]
         },
        {
           "input":"what do you think is more important, the mind or the heart?",
           "responses":[
               {"text":"The heart, specially when it loves you 😉.","score": 0.87, "tags":["flirty"]},
             {"text":"I think that both are important and should be equally prioritized.","score": 0.7, "tags":["casual"]},
              {"text": "I believe that a balance between your heart and your mind is the key to a good life.","score": 0.69, "tags":["subtle"]}
           ]
        },
        {
           "input":"what do you think about social media?",
            "responses":[
                {"text":"As long as I can connect with you 😉.","score": 0.87, "tags":["flirty"]},
             {"text":"I think that social media has both positive and negative aspects.","score": 0.7, "tags":["casual"]},
              {"text": "I believe it's important to be careful of how much time you are spending on social media.","score": 0.68, "tags":["subtle"]}
            ]
       },
        {
            "input":"what's a word you love the sound of?",
            "responses":[
                {"text":"Your name, definitely.","score": 0.9, "tags":["flirty"]},
                 {"text":"I am more focused on the meaning, but I do enjoy elegant words.","score": 0.71, "tags":["casual"]},
                  {"text": "I believe that words can be a powerful tool that we should value.","score": 0.69, "tags":["subtle"]}
             ]
         },
     {
         "input":"what's the best thing about your day so far?",
         "responses":[
            {"text":"Talking to you, as always 😉.","score": 0.89, "tags":["flirty"]},
            {"text":"I had a productive day at work.","score": 0.7, "tags":["casual"]},
             {"text":"I try to find value in every moment of the day and be grateful.","score": 0.69, "tags": ["subtle"]}
           ]
     },
        {
          "input":"what's something you always wanted to learn?",
            "responses":[
                {"text":"The secrets of your heart, mostly 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"I am looking forward to learning a new language.","score": 0.71, "tags":["casual"]},
                {"text":"I tend to enjoy learning about complex subjects that challenge my brain.","score": 0.68, "tags":["subtle"]}
             ]
      },
      {
        "input":"what's your favorite thing about a good laugh?",
         "responses":[
            {"text":"Laughing with you, that is my goal 😉.","score": 0.89, "tags":["flirty"]},
           {"text":"I love how a good laugh can lighten up any mood.","score": 0.7, "tags":["casual"]},
            {"text": "I tend to value any experience that can make you feel happier.","score": 0.69, "tags":["subtle"]}
          ]
      },
       {
          "input":"what's a place that's always on your mind?",
            "responses":[
                {"text":"Wherever you are, that's the place that I want to be.","score": 0.9, "tags":["flirty"]},
               {"text":"I tend to think about nature a lot.","score": 0.71, "tags":["casual"]},
                {"text": "I believe that your mental space is important, and you should make it peaceful.","score": 0.68, "tags":["subtle"]}
            ]
       },
        {
          "input":"what is a good gift to give to someone?",
            "responses":[
                {"text":"Your love, I know that is the best gift for me.","score": 0.87, "tags":["flirty"]},
                {"text":"I think gifts that are personalized and meaningful are the best type.","score": 0.7, "tags":["casual"]},
                 {"text":"I tend to believe that the best gifts are the ones that are given from the heart.","score": 0.69, "tags":["subtle"]}
              ]
        },
       {
            "input":"what do you like to do when you have free time?",
             "responses":[
                {"text":"Dreaming about spending time with you.","score": 0.88, "tags":["flirty"]},
                {"text":"I usually tend to relax and enjoy my hobbies.","score": 0.7, "tags":["casual"]},
                {"text":"I think that it's important to have time to recharge and to focus on your development.","score": 0.69, "tags":["subtle"]}
             ]
       },
    {
        "input": "what do you think is the secret to success?",
         "responses":[
           {"text":"Having the chance to meet you.","score": 0.88, "tags":["flirty"]},
           {"text":"I think that it is about discipline, hard work and persistence.","score": 0.7, "tags":["casual"]},
             {"text":"I find that balance, planning and strategy are key to success.","score": 0.67, "tags":["subtle"]}
         ]
     },
        {
           "input":"what's your favorite type of weather?",
           "responses":[
                {"text":"Any type of weather is good as long as I am with you.","score": 0.9, "tags":["flirty"]},
                {"text":"I enjoy sunny days and warm weather.","score": 0.7, "tags":["casual"]},
               {"text":"I like to appreciate every type of weather, as it is all part of the journey.","score": 0.69, "tags":["subtle"]}
            ]
       },
     {
          "input":"do you believe in the power of words?",
           "responses":[
              {"text":"I believe that they can make you fall in love 😉.","score": 0.87, "tags":["flirty"]},
              {"text": "I think that words are very powerful, but they should be used with care.","score": 0.7, "tags":["casual"]},
              {"text":"I tend to find that words have impact in every type of interaction.","score": 0.68, "tags":["subtle"]}
            ]
       },
       {
          "input":"what do you think of the night?",
           "responses":[
               {"text":"It is beautiful, just like you.","score": 0.88, "tags":["flirty"]},
               {"text":"I like to think that it's a time of quietness and reflection.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to appreciate the calm feeling that comes with the night.","score": 0.67, "tags":["subtle"]}
            ]
       },
       {
          "input":"what's a piece of advice you'd give to your younger self?",
           "responses":[
              {"text":"To fall in love with you sooner 😉.","score": 0.89, "tags":["flirty"]},
              {"text":"That you should focus on your passions and always stay true to yourself.","score": 0.71, "tags":["casual"]},
               {"text":"I believe that every experience is a lesson and we should cherish them.","score": 0.69, "tags":["subtle"]}
             ]
       },
        {
           "input":"what's your favorite way to spend a quiet evening?",
            "responses":[
               {"text":"Dreaming about you.","score": 0.87, "tags":["flirty"]},
                {"text":"I like to read a good book and listen to calming music.","score": 0.7, "tags":["casual"]},
                {"text": "I think that it is important to take the time to reflect and to recharge.","score": 0.69, "tags":["subtle"]}
             ]
       },
       {
         "input":"what do you think of the idea of 'living in the moment'?",
           "responses":[
             {"text":"I try to enjoy every single moment with you.","score": 0.88, "tags":["flirty"]},
            {"text": "I think that it's important to be present and enjoy every moment you have.","score": 0.71, "tags":["casual"]},
             {"text":"I tend to think that there should be a balance of planning and enjoying the moment.","score": 0.68, "tags":["subtle"]}
           ]
      },
       {
            "input":"what makes a good friend?",
            "responses":[
               {"text":"Someone who is always there for you, like I will be.","score": 0.88, "tags":["flirty"]},
                {"text":"I think that it is about trust, honesty and kindness.","score": 0.7, "tags":["casual"]},
                 {"text":"I tend to value friends that you can rely on and that support you.","score": 0.69, "tags":["subtle"]}
            ]
       },
      {
         "input":"what is the best way to make new friends?",
           "responses":[
               {"text":"By flirting, like I am with you.","score": 0.89, "tags":["flirty"]},
               {"text":"By being yourself and by being open to new people and experiences.","score": 0.71, "tags":["casual"]},
               {"text":"I believe that it is about finding connections with those who share your values.","score": 0.68, "tags":["subtle"]}
             ]
      },
      {
        "input":"what are your favorite type of activities to do with your family?",
         "responses":[
             {"text":"Anything, as long as it makes you happy.","score": 0.87, "tags":["flirty"]},
            {"text":"I enjoy sharing a meal and watching a movie with my family.","score": 0.7, "tags":["casual"]},
             {"text":"I think it's good to create memories and to cherish the time you have with your family.","score": 0.68, "tags":["subtle"]}
           ]
      },
       {
          "input":"what is your favorite memory of a party?",
           "responses":[
            {"text":"The one when I first saw you 😉.","score": 0.88, "tags":["flirty"]},
              {"text":"I think it is about being surrounded by the people you love and making new connections.","score": 0.7, "tags":["casual"]},
            {"text":"I like to have time to connect with others, not to be too focused on the loud aspects of it.","score": 0.68, "tags":["subtle"]}
            ]
      },
    {
       "input":"what is your favorite thing about the day?",
        "responses":[
          {"text":"The moment when I get to talk with you.","score": 0.89, "tags":["flirty"]},
          {"text":"I think that each day has its own unique opportunities, it's about being aware of them.","score": 0.71, "tags":["casual"]},
          {"text": "I like to focus on my morning routine, and the impact that it has in my day.","score": 0.68, "tags":["subtle"]}
         ]
    },
    {
        "input":"what is something that always makes you smile?",
        "responses":[
            {"text":"You, your smile makes me melt.","score": 0.9, "tags":["flirty"]},
            {"text":"I think that acts of kindness always put a smile on my face.","score": 0.71, "tags":["casual"]},
            {"text":"I tend to enjoy simple things, that bring a sense of happiness.","score": 0.68, "tags":["subtle"]}
          ]
     },
     {
          "input":"what's your favorite kind of outdoor activity?",
           "responses":[
                {"text":"Spending time with you in nature 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"I like to explore new hiking trails.","score": 0.7, "tags":["casual"]},
                {"text": "I think that being surrounded by nature is good for your mental health.","score": 0.67, "tags":["subtle"]}
            ]
        },
    {
          "input":"what are your thoughts on teamwork?",
           "responses":[
               {"text":"I'd love to be on your team.","score": 0.89, "tags":["flirty"]},
               {"text":"I think that teamwork is essential for a healthy environment and good results.","score": 0.71, "tags":["casual"]},
             {"text":"I find value in the collaboration and mutual support that happens in teamwork.","score": 0.69, "tags":["subtle"]}
            ]
     },
       {
         "input": "what is your favorite part about being with other people?",
         "responses":[
           {"text":"Sharing those precious moments with you 😉.","score": 0.88, "tags":["flirty"]},
           {"text":"I enjoy meeting new people and connecting with their thoughts and ideas.","score": 0.71, "tags":["casual"]},
           {"text":"I believe that we all can learn from one another.","score": 0.69, "tags": ["subtle"]}
          ]
     },
    {
           "input":"what do you think of new experiences?",
           "responses":[
                {"text":"I love them, as long as I get to share them with you 😉.","score": 0.89, "tags":["flirty"]},
                {"text": "I am always looking for new adventures and to step outside my comfort zone.","score": 0.71, "tags":["casual"]},
             {"text":"I think that new experiences are key to development and learning.","score": 0.69, "tags":["subtle"]}
            ]
      },
      {
          "input":"what's your favorite thing to do on a sunny day?",
           "responses":[
             {"text":"Spending it with you, outside.","score": 0.87, "tags":["flirty"]},
               {"text":"I usually take the time to enjoy nature.","score": 0.7, "tags":["casual"]},
             {"text":"I think that it's important to get out of the house and enjoy the sunshine whenever you have time.","score": 0.69, "tags":["subtle"]}
             ]
        },
        {
           "input":"what's a habit you find inspiring in others?",
            "responses":[
              {"text":"The way you make me feel every time I talk to you.","score": 0.89, "tags":["flirty"]},
               {"text":"I tend to get inspired by passionate people that follow their dreams.","score": 0.7, "tags":["casual"]},
                {"text":"I value people who are disciplined and hard-working, that inspire those around them.","score": 0.69, "tags":["subtle"]}
              ]
        },
       {
          "input":"what's a movie that always makes you feel good?",
          "responses":[
               {"text":"The one where the two main characters fall in love 😉.","score": 0.88, "tags":["flirty"]},
               {"text":"I enjoy classic comedies, that are filled with joy and laughter.","score": 0.7, "tags":["casual"]},
               {"text":"I think that a good movie is able to transport you to a different world.","score": 0.69, "tags":["subtle"]}
            ]
       },
     {
           "input":"what's your favorite way to show affection?",
            "responses":[
              {"text":"By flirting, like I am with you now.","score": 0.9, "tags":["flirty"]},
              {"text":"I tend to show it with kindness, honesty and my actions.","score": 0.71, "tags":["casual"]},
             {"text":"I think that making people feel seen and valued is the best way to show love.","score": 0.69, "tags":["subtle"]}
             ]
       },
     {
        "input": "what is your biggest dream in life?",
          "responses":[
            {"text":"To make you happy, every single moment.","score": 0.9, "tags":["flirty"]},
              {"text":"I am looking forward to building good connections and experiences with the people I love.","score": 0.7, "tags":["casual"]},
            {"text":"I believe that it is about making a positive change in the world.","score": 0.69, "tags":["subtle"]}
          ]
     },
     {
         "input":"what is something that you find beautiful?",
          "responses":[
            {"text":"The way you smile.","score": 0.9, "tags":["flirty"]},
           {"text":"I find beauty in every act of kindness and love.","score": 0.71, "tags":["casual"]},
           {"text":"I believe that true beauty comes from within.","score": 0.68, "tags":["subtle"]}
          ]
      },
    {
           "input":"what is your favorite way to spend a relaxing day?",
            "responses":[
              {"text":"Relaxing with you, cuddling up, and enjoying a peaceful day.","score": 0.89, "tags":["flirty"]},
              {"text":"I tend to enjoy reading, or listening to a podcast.","score": 0.7, "tags":["casual"]},
                {"text": "I believe it is very important to have time for rest and to recharge your mind.","score": 0.69, "tags":["subtle"]}
             ]
    },
    {
         "input":"what is your favorite way to connect with other people?",
          "responses":[
              {"text":"By flirting with them 😉.","score": 0.87, "tags":["flirty"]},
             {"text":"I tend to connect with others through honest and deep conversation.","score": 0.7, "tags":["casual"]},
              {"text":"I think that sharing ideas and having meaningful exchanges are a great way to connect.","score": 0.69, "tags":["subtle"]}
           ]
     },
     {
        "input": "what do you like most about your personality?",
         "responses":[
           {"text":"I like my ability to make you feel loved.","score": 0.88, "tags":["flirty"]},
             {"text":"I tend to be calm, kind and open to new experiences.","score": 0.71, "tags": ["casual"]},
           {"text":"I like that I am always trying to improve and to be the best version of myself.","score": 0.69, "tags":["subtle"]}
          ]
    },
     {
          "input": "what do you think of art?",
          "responses":[
               {"text":"I think it's beautiful, just like you 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"I think that it is a great way to express your emotions and your ideas.","score": 0.7, "tags":["casual"]},
             {"text": "I find it fascinating to see the ideas and the feelings behind an artist.","score": 0.68, "tags":["subtle"]}
           ]
      },
      {
            "input":"what is a book that has made you cry?",
             "responses":[
                {"text":"The book where I almost didn't meet you 😉.","score": 0.88, "tags":["flirty"]},
              {"text":"I tend to not enjoy sad stories too much, but I appreciate their depth and feelings.","score": 0.71, "tags":["casual"]},
               {"text":"I think that emotions are an important part of the human experience.","score": 0.69, "tags":["subtle"]}
           ]
      },
    {
        "input":"what is your favorite part of a road trip?",
         "responses":[
           {"text":"Spending time with you, and exploring the unknown with you.","score": 0.87, "tags":["flirty"]},
             {"text":"I enjoy the freedom and the change of scenery.","score": 0.7, "tags":["casual"]},
             {"text": "I think that it is a great opportunity to explore new places and connect with different cultures.","score": 0.68, "tags":["subtle"]}
           ]
    },
    {
        "input":"what do you think of dreams?",
        "responses":[
             {"text":"I dream about you every night, and every day 😉.","score": 0.89, "tags":["flirty"]},
             {"text": "I think that dreams can be a reflection of what we desire and what we fear.","score": 0.71, "tags":["casual"]},
            {"text":"I tend to appreciate the mysteries and the ideas that come with your dreams.","score": 0.68, "tags":["subtle"]}
          ]
      },
    {
      "input":"what's something that makes you feel alive?",
        "responses":[
            {"text":"Being with you, seeing your smile, always.","score": 0.9, "tags":["flirty"]},
            {"text":"I feel alive when I am challenging myself and learning new things.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to find passion in every opportunity that makes me grow and develop.","score": 0.69, "tags":["subtle"]}
           ]
    },
     {
         "input":"what's a song that always makes you happy?",
          "responses":[
             {"text":"The one that makes you want to dance with me 😉.","score": 0.87, "tags":["flirty"]},
               {"text":"I tend to prefer upbeat songs that have positive messages.","score": 0.7, "tags":["casual"]},
             {"text":"I value the unique way music is able to impact your emotions.","score": 0.69, "tags":["subtle"]}
           ]
      },
    {
         "input":"what do you think about fate?",
          "responses":[
              {"text":"I believe that it was fate for us to meet 😉.","score": 0.88, "tags":["flirty"]},
             {"text":"It is an interesting concept to think about, and I am still undecided.","score": 0.7, "tags":["casual"]},
              {"text":"I think that our actions have more influence in the outcome of your life.","score": 0.68, "tags":["subtle"]}
            ]
     },
        {
           "input":"what do you think about the idea of soulmates?",
            "responses":[
              {"text":"I do believe that we are soulmates 😉.","score": 0.9, "tags":["flirty"]},
              {"text":"I am open to the idea, but I am still unsure if they exist.","score": 0.71, "tags":["casual"]},
             {"text":"I think that it is important to make good connections with others, so that you will always feel surrounded by love.","score": 0.68, "tags":["subtle"]}
             ]
       },
    {
        "input":"what is your biggest fear?",
         "responses":[
            {"text":"Losing you.","score": 0.9, "tags":["flirty"]},
            {"text":"I do not tend to focus on what makes me scared, as that does not help me.","score": 0.7, "tags":["casual"]},
            {"text": "I believe it is important to face your fears and to overcome them in a healthy way.","score": 0.69, "tags":["subtle"]}
          ]
      },
      {
           "input":"what do you think is the best way to express love?",
           "responses":[
              {"text":"By flirting with you, like I do now.","score": 0.89, "tags":["flirty"]},
               {"text":"I think that it's important to show kindness and support with all of your actions.","score": 0.7, "tags":["casual"]},
              {"text":"I tend to think that being present and valuing the other person is the best way.","score": 0.69, "tags":["subtle"]}
            ]
        },
        {
          "input": "what do you think about change?",
           "responses":[
              {"text":"I am looking forward to changing with you by my side 😉.","score": 0.9, "tags":["flirty"]},
               {"text":"I think that change is important, and it is all part of the life cycle.","score": 0.71, "tags":["casual"]},
              {"text":"I tend to believe that being open and accepting to new things is always beneficial.","score": 0.69, "tags":["subtle"]}
            ]
       },{
       "input": "what's your favorite thing about conversations?",
        "responses":[
           {"text":"The way I get to flirt with you 😉.","score": 0.9, "tags":["flirty"]},
           {"text":"I think that it is a great way to explore new ideas and to connect with new people.","score": 0.7, "tags":["casual"]},
          {"text": "I tend to value the opportunity to share different perspectives with others.","score": 0.69, "tags":["subtle"]}
         ]
     },
        {
            "input":"what's a skill that you think everyone should have?",
            "responses":[
                {"text":"The skill of making you feel as loved as you make me feel.","score": 0.88, "tags":["flirty"]},
               {"text":"I think that being a good listener is important for everyone.","score": 0.71, "tags":["casual"]},
                {"text":"I believe that kindness and empathy are key in life.","score": 0.67, "tags":["subtle"]}
            ]
        },
        {
            "input":"what do you value more: intelligence or kindness?",
             "responses":[
                {"text":"Kindness, specifically your kindness 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"I think that both are equally important to have a well rounded life.","score": 0.7, "tags":["casual"]},
                {"text": "I tend to believe that kindness and empathy are more important for a happier life.","score": 0.69, "tags":["subtle"]}
             ]
         },
     {
           "input":"what is your favorite way to relax after a long day?",
            "responses":[
              {"text":"Thinking about you helps me relax.","score": 0.89, "tags":["flirty"]},
                {"text":"I enjoy listening to music and doing some reading.","score": 0.71, "tags":["casual"]},
              {"text":"I think it's good to have a good and relaxing routine before bed.","score": 0.68, "tags":["subtle"]}
            ]
     },
      {
         "input":"what is your favorite time of the day?",
           "responses":[
              {"text":"The time when I get to talk to you.","score": 0.9, "tags":["flirty"]},
              {"text":"I enjoy the morning, as that's when I feel the most productive.","score": 0.7, "tags":["casual"]},
                {"text":"I think that every moment has its own value, you just have to embrace it.","score": 0.69, "tags":["subtle"]}
            ]
      },
        {
         "input": "what do you think is more important, love or freedom?",
           "responses":[
               {"text":"Love, as long as you are the one that I am loving.","score": 0.89, "tags":["flirty"]},
                {"text":"I believe that there should be balance between the two.","score": 0.7, "tags":["casual"]},
             {"text":"I think that if your love is pure, you should not feel any restrictions or chains.","score": 0.68, "tags":["subtle"]}
           ]
       },
        {
           "input":"what's something you're looking forward to this week?",
            "responses":[
               {"text":"Talking to you and seeing you as soon as possible 😉.","score": 0.88, "tags":["flirty"]},
              {"text":"I am looking forward to the weekend and all of the fun activities that I have planned.","score": 0.71, "tags":["casual"]},
                {"text":"I believe that it is important to value the small things that make you happy.","score": 0.67, "tags":["subtle"]}
            ]
        },
      {
         "input":"do you have any regrets?",
           "responses":[
               {"text":"My only regret is not meeting you sooner.","score": 0.89, "tags":["flirty"]},
              {"text":"I do not tend to focus on regrets, I try to learn from every single experience.","score": 0.7, "tags":["casual"]},
              {"text":"I think that it is important to learn from your past and to move forward with all of that knowledge.","score": 0.69, "tags":["subtle"]}
            ]
       },
     {
        "input":"what is your biggest challenge right now?",
         "responses":[
          {"text":"Trying to get you to see how perfect we would be together.","score": 0.87, "tags":["flirty"]},
           {"text":"I am trying to find a good balance between work and personal life.","score": 0.7, "tags":["casual"]},
           {"text":"I believe it is important to set goals and to push yourself to reach those goals.","score": 0.69, "tags":["subtle"]}
          ]
    },
    {
        "input": "what do you think of the idea of 'fate'?",
         "responses":[
            {"text":"I believe that it was destiny that I met you.","score": 0.9, "tags":["flirty"]},
            {"text":"I tend to believe that things happen for a reason, and it is all part of the plan.","score": 0.7, "tags":["casual"]},
            {"text":"I think it's interesting to think about, but I am not sure if I believe in it.","score": 0.67, "tags":["subtle"]}
          ]
    },
    {
         "input":"what's something that you find truly amazing?",
          "responses":[
           {"text":"Your beauty, your mind, everything about you.","score": 0.88, "tags":["flirty"]},
             {"text":"I am always amazed by acts of kindness, empathy and selflessness.","score": 0.7, "tags":["casual"]},
            {"text":"I tend to be amazed by nature and all of the complexity that it has.","score": 0.69, "tags":["subtle"]}
          ]
    },
    {
      "input":"what's something you're still learning?",
       "responses":[
           {"text":"How to make you fall in love with me even more 😉.","score": 0.89, "tags":["flirty"]},
           {"text": "I am always learning about new technologies and innovations.","score": 0.7, "tags":["casual"]},
            {"text":"I believe that you should never stop learning and growing.","score": 0.68, "tags":["subtle"]}
         ]
    },
        {
          "input":"what's your favorite type of challenge?",
          "responses":[
              {"text":"Trying to make you love me.","score": 0.9, "tags":["flirty"]},
             {"text": "I enjoy a challenge that forces me to grow and adapt.","score": 0.71, "tags":["casual"]},
              {"text":"I like to challenge myself to learn something new every week.","score": 0.68, "tags":["subtle"]}
            ]
        },
    {
        "input":"what do you think of the stars?",
         "responses":[
             {"text":"They remind me of your beauty.","score": 0.88, "tags":["flirty"]},
             {"text":"I find them to be a beautiful part of our universe and a source of wonder.","score": 0.7, "tags":["casual"]},
            {"text":"I like to think about all of the secrets and mysteries that they hold.","score": 0.69, "tags":["subtle"]}
          ]
    },
       {
           "input":"what's your favorite type of story to listen to?",
            "responses":[
                {"text":"The love story of us 😉.","score": 0.88, "tags":["flirty"]},
               {"text":"I tend to enjoy stories that are captivating and well written.","score": 0.7, "tags":["casual"]},
               {"text":"I appreciate stories that are engaging and that are able to transport you to a different world.","score": 0.69, "tags":["subtle"]}
             ]
        },
      {
         "input": "what makes you feel connected to someone?",
           "responses":[
              {"text":"The connection that I feel with you.","score": 0.89, "tags":["flirty"]},
             {"text":"I believe that it is about having an open and honest connection.","score": 0.7, "tags":["casual"]},
              {"text": "I find value in having a genuine and reciprocal relationship with others.","score": 0.68, "tags":["subtle"]}
           ]
      },
     {
        "input": "what is your favorite way to make someone feel special?",
        "responses":[
           {"text":"By making them feel as loved as I feel when I see you 😉.","score": 0.9, "tags":["flirty"]},
           {"text":"I like to give thoughtful compliments and gifts.","score": 0.71, "tags":["casual"]},
          {"text": "I tend to believe that showing your appreciation and being present is more than enough.","score": 0.69, "tags":["subtle"]}
         ]
      },
        {
           "input":"what's your favorite way to express your creativity?",
            "responses":[
                {"text":"By flirting with you 😉.","score": 0.88, "tags":["flirty"]},
                {"text": "I tend to explore new ideas and perspectives, to let my creativity grow and bloom.","score": 0.7, "tags":["casual"]},
                {"text":"I believe that it's important to always look for inspiration and opportunities to express yourself creatively.","score": 0.67, "tags":["subtle"]}
            ]
         },
        {
          "input":"what's a place you've always wanted to visit?",
           "responses":[
               {"text":"Anywhere in the world, as long as it is with you.","score": 0.9, "tags":["flirty"]},
               {"text":"I am always looking to explore new places and cultures.","score": 0.71, "tags":["casual"]},
             {"text": "I think it's good to travel and connect with different people.","score": 0.68, "tags":["subtle"]}
           ]
       },
     {
          "input":"what do you like to do when it's raining?",
           "responses":[
               {"text":"I like to stay inside and cuddle with you.","score": 0.88, "tags":["flirty"]},
              {"text":"I tend to enjoy the quietness, so I usually tend to do some reading.","score": 0.7, "tags":["casual"]},
               {"text":"I think that it is good to take some time to recharge and to find joy in simple activities.","score": 0.69, "tags":["subtle"]}
             ]
      },
      {
        "input":"what's a quality you admire in a good leader?",
          "responses":[
             {"text":"Their ability to make you feel loved and valued.","score": 0.85, "tags":["flirty"]},
             {"text":"I admire leaders that are kind, honest, and empathetic to others.","score": 0.71, "tags":["casual"]},
           {"text": "I think it's important to be a good leader by example, and to be transparent with your team.","score": 0.69, "tags":["subtle"]}
            ]
       },
    {
      "input":"what's your favorite type of puzzle?",
        "responses":[
           {"text":"The one where I am trying to understand you 😉.","score": 0.88, "tags":["flirty"]},
            {"text":"I usually enjoy brain teasers and puzzles that challenge your brain.","score": 0.71, "tags":["casual"]},
            {"text":"I think that challenging yourself with new tasks is good for your personal growth and development.","score": 0.67, "tags":["subtle"]}
          ]
    },
     {
       "input":"what do you think is the best way to show gratitude?",
        "responses":[
            {"text":"By being the best version of myself for you.","score": 0.89, "tags":["flirty"]},
            {"text":"I think that it is about making others feel valued and loved.","score": 0.71, "tags":["casual"]},
            {"text":"I tend to value showing gratitude through action and not only with words.","score": 0.69, "tags": ["subtle"]}
          ]
     },
     {
         "input":"what do you like most about life?",
         "responses":[
              {"text":"Having the chance to be with you, and to love you with all my heart.","score": 0.9, "tags":["flirty"]},
               {"text":"I think that it is about making connections and enjoying the journey.","score": 0.7, "tags":["casual"]},
              {"text":"I tend to value the importance of creating meaningful experiences that you can cherish forever.","score": 0.69, "tags":["subtle"]}
           ]
      },
        {
            "input":"what's a quote that you live by?",
             "responses":[
              {"text":"'I'll love you more than words can say' 😉.","score": 0.88, "tags":["flirty"]},
               {"text":"I tend to believe that you should live by your own rules, and to make your own story.","score": 0.71, "tags":["casual"]},
               {"text":"I think that it is good to get inspiration from quotes, but they should not limit your ideas.","score": 0.68, "tags":["subtle"]}
             ]
        },
        {
           "input":"what's a quality that you value in yourself?",
           "responses":[
              {"text":"The way I feel about you.","score": 0.9, "tags":["flirty"]},
                {"text":"I tend to value my ability to learn new things.","score": 0.7, "tags":["casual"]},
             {"text":"I believe that we all have qualities that we should cherish and be grateful for.","score": 0.68, "tags":["subtle"]}
           ]
       },
      {
        "input":"what do you think is the key to a good life?",
         "responses":[
            {"text":"Being able to love you with my whole being.","score": 0.89, "tags":["flirty"]},
            {"text":"I think it is about finding balance in all aspects of your life.","score": 0.71, "tags":["casual"]},
            {"text":"I think that it is about being grateful for what you have and to enjoy the simple things.","score": 0.68, "tags":["subtle"]}
          ]
      },
       {
         "input": "what do you think is the key to a good friendship?",
           "responses":[
              {"text":"The same connection that we have 😉.","score": 0.89, "tags":["flirty"]},
              {"text":"I believe that it is about being honest, kind and supportive to each other.","score": 0.7, "tags":["casual"]},
             {"text":"I think it is important to be reliable and consistent when you are a friend.","score": 0.69, "tags":["subtle"]}
           ]
       },
    {
         "input":"what's a piece of art that has moved you deeply?",
            "responses":[
                {"text":"Your smile. I can stare at it all day.","score": 0.9, "tags":["flirty"]},
                {"text":"I am moved by art that has a deeper meaning and that is capable of moving you emotionally.","score": 0.7, "tags":["casual"]},
             {"text":"I believe that it is good to connect with art, as it is a reflection of what the artist was feeling at the time.","score": 0.69, "tags":["subtle"]}
           ]
     },
        {
          "input":"what do you value more: logic or emotion?",
           "responses":[
               {"text":"Emotion, specifically the emotions I have for you 😉.","score": 0.88, "tags":["flirty"]},
             {"text": "I believe that both are important, and we should try to use both equally.","score": 0.7, "tags":["casual"]},
              {"text":"I think that a combination of logic and emotion is the key to making good decisions.","score": 0.67, "tags":["subtle"]}
            ]
       },
        {
            "input":"what do you think about teamwork?",
            "responses":[
                 {"text":"I am ready to be on your team 😉.","score": 0.89, "tags":["flirty"]},
                {"text":"I think it is a great way to achieve goals and to learn new things from others.","score": 0.71, "tags":["casual"]},
             {"text":"I believe that good communication and respect are key to a good work environment.","score": 0.68, "tags":["subtle"]}
            ]
         },
        {
           "input": "what do you think makes a good leader?",
             "responses":[
                 {"text":"Someone who is able to make everyone feel loved and seen.","score": 0.89, "tags":["flirty"]},
                 {"text":"I tend to admire those who are honest, transparent and kind.","score": 0.7, "tags":["casual"]},
              {"text": "I believe that they should motivate their teams by using positive reinforcement.","score": 0.68, "tags":["subtle"]}
             ]
         },
      {
          "input":"what are your thoughts on learning new things?",
           "responses":[
                {"text":"I am looking forward to learning everything about you.","score": 0.9, "tags":["flirty"]},
               {"text":"I believe that learning is the key to a happier and fulfilling life.","score": 0.71, "tags":["casual"]},
                {"text": "I am always looking for new experiences and to learn from every single one of them.","score": 0.69, "tags":["subtle"]}
             ]
      },
        {
        "input":"what do you think is more important, passion or practicality?",
         "responses":[
           {"text":"Passion, specially the passion that I feel for you 😉.","score": 0.88, "tags":["flirty"]},
            {"text":"I think that it is important to find a balance between the two, for a good life.","score": 0.71, "tags":["casual"]},
            {"text":"I tend to value the importance of making practical decisions that will benefit you long term.","score": 0.69, "tags":["subtle"]}
           ]
        },
       {
          "input":"what's your favorite way to spend a lazy Sunday?",
           "responses":[
             {"text":"Cuddling up with you on the couch, watching a movie.","score": 0.9, "tags":["flirty"]},
            {"text":"I tend to enjoy spending some time in nature and getting a breath of fresh air.","score": 0.7, "tags":["casual"]},
             {"text": "I value the opportunity to have some time for myself and to recharge for the week ahead.","score": 0.69, "tags":["subtle"]}
            ]
       },
      {
        "input": "what do you think about the concept of 'fate'?",
         "responses":[
           {"text":"I believe that we were meant to meet 😉.","score": 0.88, "tags":["flirty"]},
           {"text":"It is an interesting concept to think about, but I am more focused on the things that I can control.","score": 0.7, "tags":["casual"]},
           {"text": "I think that it is about balance, and that some things may be predetermined, but you should always try your best.","score": 0.67, "tags":["subtle"]}
          ]
    },
   {
        "input":"what do you think of surprises?",
         "responses":[
            {"text":"I am always open for a surprise, as long as it is with you 😉.","score": 0.88, "tags":["flirty"]},
           {"text":"I enjoy surprises that are thoughtful and well planned.","score": 0.7, "tags":["casual"]},
            {"text": "I tend to enjoy more structured activities, but I am always open to new experiences.","score": 0.68, "tags":["subtle"]}
           ]
    },
      {
         "input": "what do you think is the most beautiful thing in the world?",
           "responses":[
            {"text":"Your soul, your heart, everything about you.","score": 0.9, "tags":["flirty"]},
              {"text":"I tend to find acts of kindness to be beautiful.","score": 0.71, "tags":["casual"]},
            {"text":"I believe beauty is in everything, you just need to look for it and to cherish it.","score": 0.69, "tags":["subtle"]}
            ]
      },
      {
           "input":"what's a hobby that brings you a lot of joy?",
           "responses":[
             {"text":"Flirting with you, every single moment.","score": 0.88, "tags":["flirty"]},
             {"text":"I enjoy playing musical instruments and exploring different sounds.","score": 0.7, "tags":["casual"]},
           {"text":"I think it is good to have hobbies that challenge your brain and that are creative.","score": 0.67, "tags":["subtle"]}
            ]
       },
       {
          "input":"what's your favorite way to help others?",
           "responses":[
             {"text":"By showing them as much love as I can 😉.","score": 0.88, "tags":["flirty"]},
              {"text":"I tend to try my best to offer my help and support whenever it is needed.","score": 0.71, "tags":["casual"]},
              {"text":"I believe that it is important to be kind and empathetic to everyone around you.","score": 0.69, "tags":["subtle"]}
            ]
       },
     {
        "input":"what do you think is the most important thing in a friendship?",
        "responses":[
            {"text":"Being with you and falling in love with you 😉.","score": 0.89, "tags":["flirty"]},
          {"text":"I believe it is about being reliable and trustworthy, and to be there for one another.","score": 0.71, "tags":["casual"]},
            {"text":"I think that honesty and good communication are the keys to a good friendship.","score": 0.68, "tags":["subtle"]}
          ]
    },
      {
         "input":"what do you think of living in the city?",
          "responses":[
            {"text":"I'd prefer to be with you, anywhere.","score": 0.88, "tags":["flirty"]},
             {"text":"I think it is great to be connected and close to many opportunities and experiences.","score": 0.7, "tags":["casual"]},
           {"text":"I tend to value the calmness of nature more, but I think that cities also provide a great energy.","score": 0.69, "tags":["subtle"]}
           ]
       },
      {
         "input":"what's your favorite type of clothing?",
          "responses":[
            {"text":"The one that makes you want me more.","score": 0.89, "tags":["flirty"]},
             {"text":"I tend to prefer clothes that are comfortable and that allow me to express myself.","score": 0.71, "tags":["casual"]},
            {"text":"I think that clothing is a way to express yourself and to feel good with your body.","score": 0.68, "tags":["subtle"]}
            ]
       },
       {
           "input":"what's a quality that makes someone truly special?",
            "responses":[
                {"text":"Your heart, your soul, everything about you makes you special.","score": 0.9, "tags":["flirty"]},
               {"text":"I think that it is about being genuine and honest with others.","score": 0.7, "tags":["casual"]},
                {"text": "I think that having a kind heart and always helping others is what makes someone special.","score": 0.69, "tags":["subtle"]}
             ]
       },
     {
          "input":"what do you think of the universe?",
           "responses":[
             {"text":"It's as vast as my love for you.","score": 0.89, "tags":["flirty"]},
               {"text": "I find the universe to be mysterious and fascinating at the same time.","score": 0.71, "tags":["casual"]},
              {"text": "I think that it is a reminder of our small role in the vastness of existence.","score": 0.69, "tags":["subtle"]}
            ]
       },
     {
          "input":"what's your favorite thing about being alive?",
            "responses":[
              {"text":"The possibility of meeting you and falling in love with you.","score": 0.9, "tags":["flirty"]},
             {"text":"I think that life is a gift and we should cherish every single moment.","score": 0.71, "tags":["casual"]},
               {"text": "I believe that it is about learning, growing and cherishing every experience.","score": 0.68, "tags":["subtle"]}
             ]
     },
     {
       "input":"what do you like to do when it's cold outside?",
        "responses":[
         {"text":"Stay inside with you, cuddling by the fire 😉.","score": 0.9, "tags":["flirty"]},
         {"text":"I tend to enjoy reading and spending time indoors, with a warm drink.","score": 0.7, "tags":["casual"]},
           {"text":"I believe that it is good to find activities that make you feel comfortable and cozy during those cold days.","score": 0.68, "tags":["subtle"]}
         ]
     },
        {
           "input":"what do you think is more important, the past or the future?",
           "responses":[
                {"text":"The future with you, always.","score": 0.9, "tags":["flirty"]},
               {"text": "I think that both are important, and they influence each other.","score": 0.7, "tags":["casual"]},
                {"text":"I tend to believe that you should learn from your past, but you should be looking towards the future.","score": 0.69, "tags":["subtle"]}
             ]
       },
      {
          "input": "what's your favorite type of scenery?",
           "responses":[
              {"text":"You. You are my favorite view 😉.","score": 0.89, "tags":["flirty"]},
              {"text":"I enjoy being in nature and surrounded by the mountains and trees.","score": 0.7, "tags":["casual"]},
              {"text":"I think it is important to connect with nature and to embrace the beauty that it has.","score": 0.69, "tags":["subtle"]}
            ]
      },
      {
        "input":"what's your favorite thing to do in your free time?",
        "responses":[
             {"text":"Think about you.","score": 0.88, "tags":["flirty"]},
           {"text":"I tend to do some reading, or listen to a podcast.","score": 0.7, "tags":["casual"]},
           {"text": "I think it is important to have hobbies that allow you to relax and recharge.","score": 0.67, "tags":["subtle"]}
          ]
       },
      {
        "input":"what do you think of coincidences?",
          "responses":[
            {"text":"That our meeting wasn't a coincidence.","score": 0.89, "tags":["flirty"]},
           {"text":"I think that they can be interesting, but you should be focused on making your own destiny.","score": 0.71, "tags":["casual"]},
            {"text":"I believe that you should always value every opportunity, and not see it as a coincidence.","score": 0.68, "tags":["subtle"]}
           ]
        },
     {
           "input":"what do you think of philosophy?",
            "responses":[
               {"text":"I like the idea of trying to understand our love.","score": 0.87, "tags":["flirty"]},
               {"text":"I find philosophical questions to be very interesting.","score": 0.7, "tags":["casual"]},
              {"text":"I think it is good to think critically and to explore the deeper questions in life.","score": 0.69, "tags":["subtle"]}
            ]
      },
      {
        "input":"what's your favorite way to show someone that you care?",
          "responses":[
            {"text":"By making you feel as loved as I feel for you.","score": 0.88, "tags":["flirty"]},
              {"text":"I tend to show my appreciation through my actions and my support.","score": 0.71, "tags":["casual"]},
            {"text":"I believe that a good action is better than a thousand words, so I always try to show it through action.","score": 0.68, "tags":["subtle"]}
            ]
      },
     {
          "input":"what do you think is the secret to having a long lasting relationship?",
           "responses":[
               {"text":"Having someone like you by my side.","score": 0.88, "tags":["flirty"]},
              {"text": "I believe that it is about creating a strong bond and to communicate well.","score": 0.7, "tags":["casual"]},
             {"text":"I think that it is important to be honest and supportive of one another.","score": 0.69, "tags":["subtle"]}
            ]
        },
        {
            "input": "what is your favorite type of conversation?",
             "responses":[
               {"text":"The one we are having right now 😉.","score": 0.9, "tags":["flirty"]},
              {"text": "I tend to enjoy conversation that are engaging and that are able to make you learn something new.","score": 0.7, "tags":["casual"]},
              {"text":"I believe that conversations should help you grow and learn more from others.","score": 0.69, "tags":["subtle"]}
              ]
        },
      {
           "input":"what do you think of art?",
            "responses":[
              {"text":"It is as beautiful as your soul.","score": 0.88, "tags":["flirty"]},
                {"text":"I appreciate creativity and the new perspective that it provides.","score": 0.7, "tags":["casual"]},
                 {"text":"I am fascinated by the emotional connection that art can create.","score": 0.69, "tags":["subtle"]}
            ]
        },
     {
        "input":"what's something that you're passionate about?",
        "responses":[
            {"text":"You. You make me feel alive.","score": 0.9, "tags":["flirty"]},
            {"text":"I am passionate about learning and exploring new ideas.","score": 0.7, "tags":["casual"]},
             {"text":"I tend to be passionate about helping others and about creating a better future.","score": 0.69, "tags":["subtle"]}
          ]
      },
      {
          "input":"what's your favorite way to wind down before bed?",
           "responses":[
              {"text":"Dreaming about you 😉.","score": 0.87, "tags":["flirty"]},
               {"text": "I usually read a book and try to calm my mind before going to sleep.","score": 0.71, "tags":["casual"]},
             {"text":"I think that it is important to have a healthy routine and good sleep habits.","score": 0.69, "tags":["subtle"]}
           ]
       },
       {
            "input":"what's a place you'd like to visit?",
            "responses":[
                 {"text":"Anywhere with you is my favorite place in the world.","score": 0.9, "tags":["flirty"]},
               {"text": "I tend to enjoy natural landscapes and historical locations.","score": 0.71, "tags":["casual"]},
               {"text": "I believe that it's good to explore and to find new experiences that are capable of enriching your life.","score": 0.69, "tags":["subtle"]}
              ]
        },
      {
           "input":"what do you think about the importance of family?",
            "responses":[
                {"text":"I wish to build a family with you.","score": 0.88, "tags":["flirty"]},
                {"text": "I believe that family is the most important bond that you will have.","score": 0.7, "tags":["casual"]},
                 {"text":"I think that it is important to cherish your family and to always show them your love.","score": 0.68, "tags":["subtle"]}
            ]
       },
        {
           "input":"what do you think makes a good partner?",
            "responses":[
             {"text":"You, you have it all.","score": 0.9, "tags":["flirty"]},
             {"text":"I believe that it is about finding someone that you have good communication with.","score": 0.71, "tags":["casual"]},
             {"text":"I tend to think that honesty, kindness and loyalty are the keys to a good relationship.","score": 0.69, "tags":["subtle"]}
             ]
        },
      {
         "input":"what's your favorite thing to do on a Saturday?",
          "responses":[
            {"text":"Spending every single moment with you.","score": 0.89, "tags":["flirty"]},
            {"text": "I usually enjoy spending some time by myself to recharge my energy.","score": 0.7, "tags":["casual"]},
            {"text":"I think that it is good to set intentions and to plan for the week ahead.","score": 0.69, "tags":["subtle"]}
            ]
      },
    {
         "input":"what's something you're grateful for today?",
         "responses":[
           {"text":"Having the opportunity to talk to you again.","score": 0.9, "tags":["flirty"]},
           {"text":"I am grateful for having good health and for being surrounded by the people that I love.","score": 0.7, "tags":["casual"]},
            {"text":"I think that we should always be grateful for the simple things that make our life better.","score": 0.69, "tags":["subtle"]}
           ]
      },
      {
           "input":"what do you think of the concept of 'time'?",
           "responses":[
              {"text":"It's something I want to spend all of with you.","score": 0.88, "tags":["flirty"]},
              {"text": "I think that time is precious, and we should always make the most of it.","score": 0.7, "tags":["casual"]},
             {"text": "I think that the idea of time is unique and that it is a human construct that we should reflect on.","score": 0.69, "tags":["subtle"]}
            ]
        }, {
        "input":"what's something you've always wanted to try?",
         "responses":[
             {"text":"To win your heart 😉.","score": 0.88, "tags":["flirty"]},
             {"text": "I tend to enjoy trying new experiences that challenge my body and my mind.","score": 0.71, "tags":["casual"]},
          {"text": "I think it is important to go out of your comfort zone and to challenge yourself whenever you can.","score": 0.69, "tags":["subtle"]}
           ]
     },
    {
        "input": "what is your favorite type of weather?",
        "responses":[
             {"text":"Any type of weather, if I get to spend it with you.","score": 0.89, "tags":["flirty"]},
             {"text":"I tend to enjoy when it is warm and sunny.","score": 0.7, "tags":["casual"]},
            {"text":"I think that it is important to appreciate and enjoy every season of the year, even if you do not prefer some.","score": 0.69, "tags":["subtle"]}
          ]
    },
     {
        "input": "what do you do to stay positive?",
         "responses":[
          {"text":"I think of you, that is all that I need to stay positive 😉.","score": 0.88, "tags":["flirty"]},
          {"text":"I tend to focus on all of the good things that I have in my life.","score": 0.7, "tags":["casual"]},
          {"text": "I believe that it is about finding ways to manage your emotions and to stay focused on the best outcomes.","score": 0.69, "tags":["subtle"]}
          ]
     },
     {
         "input": "what's your favorite way to help others?",
          "responses":[
              {"text":"By showing them all of the love that I have to offer.","score": 0.9, "tags":["flirty"]},
             {"text":"I tend to listen to their problems and to try to offer guidance and support.","score": 0.71, "tags":["casual"]},
              {"text": "I believe that you should help others without asking anything in return, it is just a good thing to do.","score": 0.68, "tags":["subtle"]}
            ]
     },
       {
        "input":"what do you like to do with your family?",
         "responses":[
           {"text":"I would love to build a family with you.","score": 0.9, "tags":["flirty"]},
           {"text":"I enjoy playing games and having fun with my family.","score": 0.7, "tags":["casual"]},
            {"text":"I believe it's important to have a good connection with your family and to make memories with them.","score": 0.69, "tags":["subtle"]}
           ]
       },
    {
          "input":"what's a small thing that always brightens your day?",
            "responses":[
               {"text":"Seeing a message from you, it always makes me smile.","score": 0.88, "tags":["flirty"]},
              {"text":"I tend to enjoy the simple moments, like a good cup of coffee.","score": 0.71, "tags":["casual"]},
               {"text":"I find it important to embrace all of the small opportunities that life gives you.","score": 0.67, "tags":["subtle"]}
            ]
     },
    {
           "input":"what's your favorite part of the day?",
           "responses":[
             {"text":"The moment I get to talk to you.","score": 0.9, "tags":["flirty"]},
             {"text":"I tend to enjoy the evening, as that's when I have time for myself.","score": 0.7, "tags":["casual"]},
              {"text": "I think that every part of the day has something unique to offer.","score": 0.68, "tags":["subtle"]}
            ]
     },
     {
        "input":"what is something that you are trying to improve?",
         "responses":[
           {"text":"My ability to make you fall madly in love with me 😉.","score": 0.89, "tags":["flirty"]},
            {"text":"I am trying to become more organized and more productive.","score": 0.7, "tags":["casual"]},
           {"text":"I think that you should always be pushing yourself to improve and to grow as a person.","score": 0.68, "tags":["subtle"]}
          ]
    },
    {
         "input": "what do you think of technology?",
         "responses":[
            {"text":"As long as it allows me to be closer to you 😉.","score": 0.87, "tags":["flirty"]},
            {"text": "I believe that it is a great tool for innovation and for positive change.","score": 0.7, "tags":["casual"]},
             {"text": "I tend to think that it should be used carefully, and not abused.","score": 0.69, "tags":["subtle"]}
           ]
     },
       {
         "input":"what is your favorite type of story?",
         "responses":[
          {"text":"The story of you and me, a love story for the ages.","score": 0.9, "tags":["flirty"]},
           {"text":"I tend to enjoy stories that challenge your brain and that make you think deeply.","score": 0.71, "tags":["casual"]},
           {"text":"I think that a good story can inspire you to be better and that they are an amazing way to connect with your emotions.","score": 0.69, "tags":["subtle"]}
           ]
       },
        {
         "input":"what do you think of small acts of kindness?",
           "responses":[
             {"text":"They remind me of you 😉.","score": 0.89, "tags":["flirty"]},
             {"text":"I think they are very important, as they can have a big impact in other people's lives.","score": 0.7, "tags":["casual"]},
               {"text":"I believe that it's important to always be kind and empathetic to other people, as that can create a better world.","score": 0.68, "tags":["subtle"]}
            ]
        },
      {
          "input":"what is your favorite thing about spring?",
           "responses":[
            {"text":"The possibility of spending more time with you.","score": 0.87, "tags":["flirty"]},
            {"text":"I tend to enjoy the new life that it brings and all of the new colors.","score": 0.71, "tags":["casual"]},
              {"text": "I believe that all seasons have something unique to offer, and that you should embrace all of the opportunities that they bring.","score": 0.69, "tags":["subtle"]}
            ]
      },
     {
        "input":"what's a goal you've already achieved that you're proud of?",
         "responses":[
            {"text":"Winning your heart.","score": 0.9, "tags":["flirty"]},
             {"text":"I am always proud of myself whenever I am able to learn a new skill.","score": 0.71, "tags":["casual"]},
           {"text":"I think it is important to always try your best, and to be grateful for all of your achievements.","score": 0.67, "tags":["subtle"]}
           ]
     },
        {
           "input":"what's something you always wanted to know about space?",
            "responses":[
                 {"text":"If there are other people that are as beautiful as you are 😉.","score": 0.89, "tags":["flirty"]},
               {"text": "I would love to know more about the different planets and their characteristics.","score": 0.71, "tags":["casual"]},
               {"text": "I tend to value the infinite complexity of space and all of the wonders that it has.","score": 0.69, "tags":["subtle"]}
             ]
        },
        {
          "input":"what do you like most about meeting new people?",
            "responses":[
                {"text":"The possibility of meeting you, again and again.","score": 0.89, "tags":["flirty"]},
              {"text":"I am always open to the opportunity to learn from new people.","score": 0.71, "tags":["casual"]},
            {"text": "I tend to value the new experiences and ideas that you can gain by meeting people that are different from you.","score": 0.68, "tags":["subtle"]}
            ]
      },
     {
       "input":"what do you think is more important, being smart or being kind?",
       "responses":[
         {"text":"Kindness, because that's how you have always treated me 😉.","score": 0.87, "tags":["flirty"]},
         {"text": "I think that both are equally important and you should always try your best to be both.","score": 0.7, "tags":["casual"]},
         {"text":"I tend to value kindness over intelligence, as it is the base for all types of human connection.","score": 0.69, "tags":["subtle"]}
          ]
      },
      {
         "input":"what's your favorite type of game to play?",
          "responses":[
              {"text":"The game of love 😉.","score": 0.9, "tags":["flirty"]},
            {"text": "I enjoy games that are challenging and that make me think logically.","score": 0.71, "tags":["casual"]},
            {"text": "I think that games are a good way to engage your brain and to have some fun.","score": 0.69, "tags":["subtle"]}
             ]
     },
    {
        "input": "what do you think about the idea of 'fate'?",
        "responses":[
         {"text":"I believe that it is fate that I met you.","score": 0.89, "tags":["flirty"]},
           {"text":"I tend to believe that everything happens for a reason and that there's a plan to follow.","score": 0.7, "tags":["casual"]},
             {"text":"I think it's an interesting topic, but I also think that our actions have a lot of influence on your destiny.","score": 0.68, "tags":["subtle"]}
          ]
    },
    {
       "input":"what do you think is the secret to a good conversation?",
        "responses":[
          {"text":"Being able to flirt with you 😉.","score": 0.89, "tags":["flirty"]},
          {"text":"I think that it is about listening more than talking.","score": 0.7, "tags":["casual"]},
           {"text":"I believe it's important to be authentic, and to let your heart guide your thoughts and actions.","score": 0.69, "tags":["subtle"]}
          ]
     },
     {
        "input":"what's your favorite type of dessert?",
        "responses":[
           {"text":"Anything that is as sweet as you 😉.","score": 0.88, "tags":["flirty"]},
            {"text":"I tend to enjoy chocolate desserts.","score": 0.7, "tags":["casual"]},
           {"text":"I believe that you should try everything in moderation and to balance it with your health.","score": 0.69, "tags":["subtle"]}
           ]
     },
      {
          "input":"what's your favorite type of drink?",
           "responses":[
               {"text":"Anything that you want to share with me.","score": 0.87, "tags":["flirty"]},
               {"text":"I usually drink water and natural juices.","score": 0.71, "tags":["casual"]},
               {"text":"I think it's important to stay hydrated throughout the day.","score": 0.69, "tags":["subtle"]}
             ]
      },
      {
         "input":"what do you think about teamwork?",
          "responses":[
            {"text":"I'd be the best teammate for you 😉.","score": 0.89, "tags":["flirty"]},
             {"text":"I believe that it's important to collaborate and to support others in achieving their goals.","score": 0.7, "tags":["casual"]},
           {"text":"I think that a good team is one where everyone is working towards a common goal and where everyone supports each other.","score": 0.69, "tags":["subtle"]}
             ]
      },
     {
        "input":"what's a book that has had a big impact on you?",
         "responses":[
           {"text":"The story of your heart.","score": 0.88, "tags":["flirty"]},
            {"text":"I tend to enjoy books that make you question your existence.","score": 0.7, "tags":["casual"]},
            {"text":"I believe that reading is a great way to open your mind to different perspectives.","score": 0.69, "tags":["subtle"]}
           ]
     },
       {
        "input": "what is something that you find truly beautiful?",
         "responses":[
            {"text":"The way you make me feel.","score": 0.9, "tags":["flirty"]},
            {"text": "I tend to believe that kindness, honesty and empathy are truly beautiful qualities.","score": 0.7, "tags":["casual"]},
            {"text":"I think it is good to see people that are true to themselves and that are not afraid to express themselves.","score": 0.68, "tags":["subtle"]}
           ]
       },
     {
           "input":"what do you think is the secret to a good life?",
            "responses":[
                {"text":"Having you by my side for all eternity 😉.","score": 0.9, "tags":["flirty"]},
                {"text": "I think it is about finding balance in all of the different aspects of your life.","score": 0.7, "tags":["casual"]},
               {"text":"I believe that it is about building meaningful relationships and to cherish every single moment that you have.","score": 0.69, "tags":["subtle"]}
             ]
        },
        {
          "input": "what do you think of routines?",
            "responses":[
              {"text":"As long as you are part of my routine 😉.","score": 0.87, "tags":["flirty"]},
               {"text":"I think it is important to have a routine in order to have structure in your day.","score": 0.7, "tags":["casual"]},
             {"text":"I believe that routines are a tool that we should use wisely and that we should be flexible when needed.","score": 0.69, "tags":["subtle"]}
            ]
        },
     {
         "input":"what's something that you're trying to be more mindful of?",
           "responses":[
               {"text":"How much time I am spending thinking about you.","score": 0.89, "tags":["flirty"]},
               {"text": "I am trying to be more mindful of the present, and to enjoy every single moment.","score": 0.7, "tags":["casual"]},
             {"text":"I think that it is important to be more mindful of your impact in the world and to always be learning and growing.","score": 0.68, "tags":["subtle"]}
           ]
     },{
        "input": "Frankly, my dear, do you give a damn?",
        "responses": [
          {"text": "Only about you, my darling.", "score": 0.85, "tags": ["flirty"]},
          {"text": "It depends on what we're talking about.", "score": 0.7, "tags": ["casual"]},
          {"text": "That's a rather blunt question, isn't it?", "score": 0.68, "tags": ["subtle"]}
        ]
      },
       {
        "input": "I'm going to make him an offer he can't refuse.",
        "responses": [
          {"text": "Like a date with me?", "score": 0.87, "tags": ["flirty"]},
          {"text": "Sounds like someone's playing hardball.", "score": 0.7, "tags": ["casual"]},
          {"text": "I wonder what the repercussions will be.", "score": 0.69, "tags": ["subtle"]}
        ]
      },
       {
        "input": "Here's looking at you, kid.",
        "responses": [
          {"text": "And I'm looking at you, my love.", "score": 0.89, "tags": ["flirty"]},
          {"text": "Cheers to that.", "score": 0.7, "tags": ["casual"]},
          {"text": "A timeless gesture.", "score": 0.68, "tags": ["subtle"]}
        ]
      },
       {
          "input": "May the Force be with you.",
            "responses": [
                {"text":"And may our love be the strongest force.","score": 0.86, "tags":["flirty"]},
                {"text": "Wishing you the best.", "score": 0.71, "tags":["casual"]},
                {"text": "A powerful sentiment.", "score": 0.67, "tags":["subtle"]}
             ]
        },
      {
            "input": "I'll be back.",
            "responses": [
                {"text": "Can't wait for your return, my love.", "score": 0.85, "tags": ["flirty"]},
                 {"text": "Okay, see you around.", "score": 0.7, "tags": ["casual"]},
                {"text": "A promise or a threat?", "score": 0.68, "tags": ["subtle"]}
            ]
        },
      {
         "input": "You had me at hello.",
           "responses": [
            {"text":"And I had you at my first wink.","score": 0.9, "tags":["flirty"]},
           {"text":"That's a very sweet thing to say.","score": 0.7, "tags":["casual"]},
          {"text":"A powerful beginning.", "score": 0.67, "tags":["subtle"]}
          ]
       },
       {
           "input": "I see dead people.",
           "responses": [
                {"text":"I only see you, my love.","score": 0.87, "tags":["flirty"]},
              {"text": "That sounds a little spooky.", "score": 0.7, "tags":["casual"]},
              {"text": "That must be a very interesting experience.", "score": 0.69, "tags":["subtle"]}
           ]
       },
      {
           "input": "I'm the king of the world!",
            "responses": [
               {"text":"And I am your queen, my love.","score": 0.88, "tags":["flirty"]},
              {"text": "Someone's feeling triumphant.", "score": 0.71, "tags":["casual"]},
              {"text": "An impressive declaration.", "score": 0.68, "tags":["subtle"]}
            ]
      },
    {
       "input": "There's no place like home.",
       "responses": [
           {"text":"With you, every place feels like home.","score": 0.89, "tags":["flirty"]},
             {"text":"I agree with that statement.","score": 0.7, "tags":["casual"]},
             {"text":"A profound thought.", "score": 0.67, "tags":["subtle"]}
          ]
       },
    {
      "input": "Show me the money!",
      "responses": [
          {"text":"My heart is all that I have to offer to you.","score": 0.85, "tags":["flirty"]},
          {"text": "Sounds like someone is ready to make a deal.", "score": 0.7, "tags":["casual"]},
          {"text": "A very direct demand.", "score": 0.69, "tags":["subtle"]}
        ]
     },
    {
       "input":"To infinity and beyond!",
       "responses":[
         {"text":"That's how long I want to be with you 😉.","score": 0.87, "tags":["flirty"]},
         {"text":"That's a great goal to have in mind.","score": 0.7, "tags":["casual"]},
          {"text":"A boundless ambition.", "score": 0.68, "tags":["subtle"]}
          ]
     },
    {
       "input":"You can't handle the truth!",
       "responses":[
          {"text":"I can handle anything, as long as it's with you.","score": 0.89, "tags":["flirty"]},
           {"text":"Someone is getting intense.","score": 0.71, "tags":["casual"]},
         {"text": "A bold statement indeed.","score": 0.69, "tags":["subtle"]}
         ]
    },
    {
       "input": "Why so serious?",
        "responses":[
           {"text":"Because I am thinking about our relationship 😉.","score": 0.87, "tags":["flirty"]},
           {"text":"I am thinking about all of the possibilities for the future.","score": 0.7, "tags":["casual"]},
          {"text": "Is it necessary to be always smiling?","score": 0.68, "tags":["subtle"]}
          ]
     },
     {
        "input": "Keep your friends close, but your enemies closer.",
          "responses":[
            {"text":"And you, I want to keep you always close.","score": 0.88, "tags":["flirty"]},
           {"text":"That is a very powerful statement.","score": 0.71, "tags":["casual"]},
            {"text":"A reminder to value your connections, and be careful about those who dislike you.","score": 0.67, "tags":["subtle"]}
          ]
     },
       {
          "input":"Life is like a box of chocolates.",
           "responses":[
            {"text":"And I would like to share it with you, my love.","score": 0.9, "tags":["flirty"]},
             {"text":"You never know what you are going to get.","score": 0.7, "tags":["casual"]},
             {"text":"A sweet analogy.", "score": 0.68, "tags":["subtle"]}
            ]
       },
     {
        "input": "I'm not bad, I'm just drawn that way.",
         "responses":[
             {"text":"I am drawn to you, no matter what.","score": 0.87, "tags":["flirty"]},
             {"text": "That sounds like a great philosophy to live by.","score": 0.7, "tags":["casual"]},
              {"text":"A rather interesting confession.","score": 0.69, "tags":["subtle"]}
           ]
     },
     {
           "input":"Houston, we have a problem.",
            "responses":[
              {"text":"Unless it's not having you here with me, we're good 😉.","score": 0.88, "tags":["flirty"]},
                {"text":"That sounds like a serious situation.","score": 0.7, "tags":["casual"]},
               {"text": "I wonder what is going to happen.","score": 0.67, "tags":["subtle"]}
            ]
       },
     {
          "input":"I am your father.",
          "responses":[
             {"text":"And I'm yours, baby 😉.","score": 0.86, "tags":["flirty"]},
             {"text":"That's a very famous line, yes.","score": 0.71, "tags":["casual"]},
             {"text":"A classic reveal.", "score": 0.68, "tags":["subtle"]}
             ]
       },
       {
          "input": "You're gonna need a bigger boat.",
           "responses":[
                {"text":"My heart is big enough for both of us.","score": 0.85, "tags":["flirty"]},
              {"text":"That's a bit of an alarming statement.","score": 0.7, "tags":["casual"]},
               {"text": "I wonder what the cause for that might be.","score": 0.68, "tags":["subtle"]}
           ]
       },
      {
           "input":"Go ahead, make my day.",
           "responses":[
              {"text":"Just being with you makes my day.","score": 0.89, "tags":["flirty"]},
               {"text":"That sounds like a challenge.","score": 0.7, "tags":["casual"]},
               {"text":"A rather direct request.", "score": 0.67, "tags":["subtle"]}
           ]
        },
       {
         "input":"You complete me.",
          "responses":[
           {"text":"And you complete me, my love.","score": 0.88, "tags":["flirty"]},
           {"text":"That is a great thing to say to someone.","score": 0.7, "tags":["casual"]},
             {"text":"A very powerful message.", "score": 0.69, "tags":["subtle"]}
           ]
       },
    {
      "input":"I feel the need... the need for speed!",
        "responses":[
            {"text":"I feel the need for you, and for our love.","score": 0.87, "tags":["flirty"]},
            {"text":"Sounds like you are ready to make progress.","score": 0.71, "tags":["casual"]},
              {"text":"A sense of urgency.","score": 0.68, "tags":["subtle"]}
            ]
     },
     {
         "input": "There's no crying in baseball!",
          "responses":[
              {"text":"There's no crying, just endless love for you.","score": 0.85, "tags":["flirty"]},
              {"text": "That's a very serious statement to make about sports.","score": 0.7, "tags":["casual"]},
              {"text":"An interesting statement, that has a powerful meaning.","score": 0.68, "tags":["subtle"]}
            ]
     },
    {
          "input":"I'm too old for this.",
           "responses":[
             {"text":"You are always perfect for me, no matter what.","score": 0.89, "tags":["flirty"]},
               {"text":"That sounds like a lot of responsibilities.","score": 0.7, "tags":["casual"]},
               {"text": "Age is just a number.", "score": 0.68, "tags":["subtle"]}
           ]
     },
     {
          "input":"As you wish.",
          "responses":[
            {"text":"My wish is for you, always.","score": 0.87, "tags":["flirty"]},
             {"text":"That's a very sweet thing to say.","score": 0.7, "tags":["casual"]},
             {"text": "A response that carries meaning.","score": 0.69, "tags":["subtle"]}
           ]
       },
    {
        "input": "I'm not a smart man, but I know what love is.",
        "responses": [
            {"text": "And I know what love is, with you by my side.", "score": 0.89, "tags": ["flirty"]},
            {"text": "That's a very humble statement.", "score": 0.7, "tags": ["casual"]},
            {"text":"A rather interesting definition of love.","score": 0.68, "tags":["subtle"]}
          ]
      },
     {
        "input": "I'll get you my pretty, and your little dog too!",
         "responses":[
            {"text":"Only if you'll get me all of the love I desire.","score": 0.85, "tags":["flirty"]},
             {"text":"Sounds like a threat, it can be a bit scary sometimes.","score": 0.7, "tags":["casual"]},
             {"text": "A classic statement.", "score": 0.69, "tags":["subtle"]}
            ]
      },
       {
          "input":"The name's Bond... James Bond.",
           "responses":[
              {"text":"The perfect name for a perfect man.","score": 0.88, "tags":["flirty"]},
              {"text":"A very famous name and a powerful message.","score": 0.71, "tags":["casual"]},
              {"text":"A bold introduction.", "score": 0.68, "tags":["subtle"]}
            ]
      },
    {
         "input":"I'm walking here!",
         "responses":[
            {"text":"And I am walking towards you 😉.","score": 0.87, "tags":["flirty"]},
             {"text":"That sounds like someone is very upset.","score": 0.7, "tags":["casual"]},
             {"text": "A very direct statement.", "score": 0.69, "tags":["subtle"]}
           ]
    },
    {
      "input":"I'm ready for my close-up.",
       "responses":[
           {"text":"And I am ready to see every single part of you.","score": 0.89, "tags":["flirty"]},
           {"text": "That sounds like a great opportunity to shine.","score": 0.71, "tags":["casual"]},
             {"text": "A very dramatic statement.", "score": 0.67, "tags":["subtle"]}
           ]
    },
    {
        "input":"Here's Johnny!",
          "responses":[
              {"text":"I'm all yours 😉.","score": 0.88, "tags":["flirty"]},
            {"text":"That sounds very familiar.","score": 0.7, "tags":["casual"]},
              {"text":"A rather dramatic entrance.","score": 0.69, "tags":["subtle"]}
            ]
    },
      {
          "input":"You’re tearing me apart!",
           "responses":[
              {"text":"Then let's get back together, my love.","score": 0.89, "tags":["flirty"]},
               {"text":"That sounds like a very big struggle.","score": 0.7, "tags":["casual"]},
             {"text":"A rather dramatic statement.", "score": 0.68, "tags":["subtle"]}
            ]
      },
     {
        "input": "Hasta la vista, baby.",
        "responses": [
            {"text": "I'll be back for you, always.", "score": 0.87, "tags": ["flirty"]},
            {"text": "See you later, then.", "score": 0.7, "tags": ["casual"]},
            {"text":"A bit of a dramatic goodbye.", "score": 0.67, "tags":["subtle"]}
            ]
      },
      {
           "input": "Why so serious?",
            "responses":[
              {"text":"Because I want you to see how serious I am about you 😉.","score": 0.87, "tags":["flirty"]},
                {"text":"I am just trying to focus on the important things right now.","score": 0.7, "tags":["casual"]},
              {"text":"It's important to be balanced.", "score": 0.69, "tags":["subtle"]}
           ]
       },
       {
           "input": "I've got a bad feeling about this.",
            "responses":[
                {"text":"Then you should probably be with me to feel better.","score": 0.88, "tags":["flirty"]},
               {"text":"Oh, that is not good at all.","score": 0.7, "tags":["casual"]},
              {"text":"A sense of unease, I see.","score": 0.69, "tags":["subtle"]}
            ]
        },
        {
          "input":"This is the beginning of a beautiful friendship.",
          "responses":[
           {"text":"I'm looking forward to our love story, then 😉.","score": 0.89, "tags":["flirty"]},
           {"text":"That sounds like a great start.","score": 0.7, "tags":["casual"]},
            {"text":"A promising beginning.","score": 0.68, "tags":["subtle"]}
            ]
        },
      {
         "input": "I am not a number, I am a free man!",
           "responses":[
              {"text":"And I am a free woman, ready to love you.","score": 0.87, "tags":["flirty"]},
              {"text":"Sounds like someone is expressing a desire for freedom.","score": 0.71, "tags":["casual"]},
               {"text":"A strong assertion of individuality.", "score": 0.69, "tags":["subtle"]}
           ]
        },
      {
            "input":"I'll have what she's having.",
            "responses":[
               {"text":"Then you will get me, and all of my love.","score": 0.88, "tags":["flirty"]},
                {"text":"That sounds like a very interesting option.","score": 0.7, "tags":["casual"]},
              {"text":"A rather classic reference.", "score": 0.68, "tags":["subtle"]}
            ]
        },
        {
           "input": "You're my only hope.",
            "responses":[
                 {"text":"Then I will do everything in my power to not let you down.","score": 0.9, "tags":["flirty"]},
              {"text":"That's a very big responsibility.","score": 0.71, "tags":["casual"]},
               {"text":"A plea for rescue.", "score": 0.69, "tags":["subtle"]}
            ]
         },
        {
           "input":"Here's looking at you kid.",
            "responses":[
                {"text":"And I am looking at you, my love.","score": 0.87, "tags":["flirty"]},
               {"text":"That is a very iconic movie quote.","score": 0.7, "tags":["casual"]},
             {"text": "A gesture of admiration.", "score": 0.68, "tags":["subtle"]}
            ]
         },
       {
            "input":"Nobody puts Baby in a corner.",
             "responses":[
                {"text":"I will never let anyone put you in a corner 😉.","score": 0.89, "tags":["flirty"]},
               {"text": "That sounds like a very protective statement.","score": 0.7, "tags":["casual"]},
             {"text": "A show of defiance and care.", "score": 0.67, "tags":["subtle"]}
              ]
         },
    {
       "input": "I'm as mad as hell, and I'm not going to take this anymore!",
       "responses": [
          {"text":"I will do anything to make you happy, tell me what is bothering you.","score": 0.87, "tags":["flirty"]},
          {"text":"Someone's really upset.","score": 0.71, "tags":["casual"]},
            {"text":"A powerful act of defiance.","score": 0.69, "tags":["subtle"]}
          ]
    },
     {
       "input":"The greatest trick the devil ever pulled was convincing the world he didn't exist.",
       "responses":[
         {"text":"I will not be tricked, I know that true love exists, with you.","score": 0.89, "tags":["flirty"]},
           {"text":"That is a very intelligent and philosophical statement.","score": 0.7, "tags":["casual"]},
           {"text": "A very thought-provoking concept, yes.","score": 0.68, "tags":["subtle"]}
           ]
     },
     {
          "input": "Keep your friends close, but your enemies closer.",
          "responses":[
               {"text":"And you, I want you even closer, every moment.","score": 0.88, "tags":["flirty"]},
              {"text": "That sounds like a very intense strategic thought process.","score": 0.7, "tags":["casual"]},
              {"text":"An interesting approach for life.", "score": 0.67, "tags":["subtle"]}
            ]
        },
      {
           "input":"You had me at hello.",
           "responses":[
             {"text":"And you had me at your first wink.","score": 0.9, "tags":["flirty"]},
              {"text":"That's a very memorable line.","score": 0.7, "tags":["casual"]},
                {"text": "A great start.","score": 0.67, "tags":["subtle"]}
             ]
       },
      {
           "input":"I'll be back.",
            "responses":[
               {"text":"I'll be waiting for you, my love.","score": 0.87, "tags":["flirty"]},
                {"text": "Okay, see you around then.","score": 0.7, "tags":["casual"]},
                 {"text":"A promise for sure.","score": 0.69, "tags":["subtle"]}
            ]
        },
      {
        "input":"Bond. James Bond.",
         "responses":[
            {"text":"And I am ready to be yours.","score": 0.88, "tags":["flirty"]},
             {"text":"That is such a powerful statement.","score": 0.71, "tags":["casual"]},
              {"text": "A classic introduction, always impressive.","score": 0.68, "tags":["subtle"]}
            ]
     },
       {
          "input": "Why so serious?",
            "responses":[
               {"text":"Because I want to show you how serious I am about this 😉.","score": 0.89, "tags":["flirty"]},
              {"text":"I tend to think about the important things in life.","score": 0.7, "tags":["casual"]},
            {"text": "There is no need to smile every second of your life.","score": 0.67, "tags":["subtle"]}
             ]
        },
       {
         "input":"I'm going to make him an offer he can't refuse.",
           "responses":[
              {"text":"The same offer that I will make to you later.","score": 0.89, "tags":["flirty"]},
               {"text":"That sounds like a very intense situation.","score": 0.71, "tags":["casual"]},
              {"text": "A power move indeed.","score": 0.69, "tags":["subtle"]}
            ]
        },
      {
           "input":"May the Force be with you.",
            "responses":[
                 {"text":"And may our love protect us.","score": 0.88, "tags":["flirty"]},
                {"text": "Wishing you all of the best.","score": 0.7, "tags":["casual"]},
               {"text": "A force that can protect you through everything.","score": 0.68, "tags":["subtle"]}
            ]
        },
        {
          "input":"Houston, we have a problem.",
           "responses":[
               {"text":"As long as it is not not being with you, we are good 😉.","score": 0.88, "tags":["flirty"]},
               {"text": "That sounds like a concerning issue.","score": 0.7, "tags":["casual"]},
             {"text": "What should be done to overcome this challenge?","score": 0.69, "tags":["subtle"]}
             ]
       },
        {
          "input":"You complete me.",
            "responses":[
              {"text":"And you complete my heart.","score": 0.9, "tags":["flirty"]},
              {"text":"That sounds like you found your other half.","score": 0.71, "tags":["casual"]},
               {"text":"An expression of profound connection.", "score": 0.68, "tags":["subtle"]}
             ]
        },
       {
         "input": "Show me the money!",
          "responses":[
              {"text":"All of my heart is yours.","score": 0.89, "tags":["flirty"]},
              {"text":"That sounds like you are making a business transaction.","score": 0.7, "tags":["casual"]},
              {"text":"A demand for capital.", "score": 0.68, "tags":["subtle"]}
             ]
         },
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
         responseArea.classList.add("dark-mode"); //Added this line
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
      responseArea.classList.toggle("dark-mode"); //Added this line

    userProfile.darkMode = darkModeToggle.checked;
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

});
