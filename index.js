require('dotenv').config();
  
  const _ = require('lodash');
  const speech = require('@google-cloud/speech');
  const fs = require('fs');
  
  // Creates a client
  const speechClient = new speech.SpeechClient();
  
  // The path to the audio file to transcribe
  const filePath = 'C:/Users/Vijay/Documents/GitHub/speech_2_text/WhatsApp Audio 2022-07-19 at 2.36.45 PM (1).wav';
  
  // Reads a local audio file and converts it to base64
  const file = fs.readFileSync(filePath);
  const audioBytes = file.toString('base64');
  const audio = {
    content: audioBytes,
  };
  
  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 44100,
    languageCode: 'en-US',
  };
  
  const request = {
    audio,
    config,
  };
 
  // Detects speech in the audio file
  speechClient
    .recognize(request)
    .then((data) => {
      const results = _.get(data[0], 'results', []);
      const transcription = results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
      console.log(`Transcription: ${transcription}`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });