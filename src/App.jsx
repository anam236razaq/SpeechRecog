import '@babel/polyfill';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

function App() {
  const [textToCopy, setTextToCopy]=useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening =()=> SpeechRecognition.startListening({ continuous: true, language: 'en' });
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
 
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div className="container">
         <h2>Speech to Text Converter</h2><br/>
         <p>Empower your voice with cutting-edge technology. Transform spoken 
          words into text effortlessly with our advanced Speech-to-Text converter.</p>
          <div className="main-content" onClick={()=>setTextToCopy(transcript)}>
             {transcript}
          </div>
          <div className="btn-style">
             <button onClick={setCopied}>{isCopied ? "Copied!" : "Copy to clipboard"}</button>
             <button onClick={startListening}>Start Listening</button>
             <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
          </div>
      </div>
    </>
  )
}
export default App;
