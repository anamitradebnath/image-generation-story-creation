# Generative AI: Generate Image and Story

## Tech stack used:
- React
- Tailwind
- Vite
- Image generation model: stable-diffusion-2 (through HuggingFace)
  - Note: this is free to use
- Text analysis/generation model: GPT-3.5-turbo 
  - Note: gpt-3.5-turbo has a limited number of free calls
- Figma design  

## Steps
1. Clone the repo
2. Put your huggingface api key and open ai api key in .env file
3. Run "npm install" to install dependencies
4. Run "npm run dev" to start the app
5. In Section1, describe a character
6. click on 'Generate Avatar'
    6.1 Image will be generated below
7. Click on the right arrow button to add the character to the table
    7.1 Table will be populated by generating the character name, an appropriate description of the character, a proper personality, and the generated image of the character.
8. You can delete the character from the Table if don't like it
9. In Section2, you provide the prompt involving the character to generate a story (TODO)    
10. In Section3, once the story is generated, some analysis will be provided regarding the roles of the characters

## TODO
1. Section2, given a prompt, generate the story
2. Section3, Analyse the roles of the characters generated in Section1 in the final story