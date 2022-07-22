const speech = require ('@google-cloud/speech')
const fs = require('fs')
//const resources = require('./resources')


async function main(){

const client = new speech.SpeechClient();
const filename = './resources/audio.mpeg';

const file = fs.readFileSync(filename);
const audiobytes = file.toString('base64');

const audio = {
    content : audiobytes
};

const config = {
    encoding : 'LINEAR16',
    sampleRateHertz : 16000,
    languagecode : 'en-US'
}

const request ={

    audio : audio ,
    config : config
}
 const [response] = await client.recognize(request);
 const transcription = response.results.map(result =>
    result.alternatives[0].transcript).join('/n');
    console.log(`transcription : ${transcription}`);
}

main().catch(console.error);