import './App.css';
// import React from 'react'
import  logo from './Assests/logo1.jpeg';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import chat from './Assests/chat.jpeg';
import person from './Assests/person.jpeg';
// import { sendMsgToOpenAi } from './openai';
// import { useState } from 'react';

function App() {  
  return (
    <div className="App"> 
      <div className="sideBar"> 
        <div className="upperSide"> 
          <div className="upperSideTop"> 
           <img class="logo" src={logo} alt="Logo" srcset="" /> 
           <span class="chat-AI">ChatMate</span>
          </div> 
           <button className="midBtn">New Chat</button> 
           <div className="upperSideBottom">
             <span class="Recent">Recent Queries</span> 
             <span className="query"> - What is Programming?</span>
             <span className="query"> - Artificial Intelligence- The Future </span>
             <span className="query"> - C++ vs Python </span>
             <span className="query"> - Flooding In Computer Networks</span>
           </div>
        </div>
        <div className="lowerSide">
          <div className="lowerbox">
           <HelpIcon></HelpIcon>
          {/* <a className="lowerText" href='#'>Help</a> */}
          <a href="http://google.com" className="lowerText">Help</a>
          </div>
          <div className="lowerbox">
          <SettingsIcon></SettingsIcon>
          <a href="http://google.com" className="lowerText">Settings</a>
          </div>
          <div className="lowerbox">
          <AccountCircleIcon></AccountCircleIcon>
          <a href="http://google.com" className="lowerText">Account</a>
          </div>
          <div className="location">
           <span className="locationText">UttaraKhand, India</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chatQues">
           <img className="chatImage"src={person} alt="" srcset="" />
           <span className="Question">What is Artificial Intelligence and discuss few pros and cons of the AI in the modern world ? </span>
          </div>
          <div className="chatAns">
          <img className="chatImage" src={chat} alt="" srcset="" />
          <p className="txt">Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses a wide range of technologies and techniques that enable machines to perform tasks that typically require human intelligence. These tasks include problem-solving, speech recognition, decision-making, language translation, and visual perception, among others. 
          <li className="List">
          Machine Learning (ML): A subset of AI, machine learning involves the use of algorithms and statistical models that enable a system to improve its performance on a specific task over time. Instead of being explicitly programmed for a task, a machine learning system learns from data and experiences.
          </li>
          <li className="List">
          Neural Networks: Inspired by the human brain, neural networks are a type of machine learning model. Deep learning, a subfield of machine learning, often involves neural networks with many layers (deep neural networks) to process information and make decisions.
          </li>
          <li className="List">
          Natural Language Processing (NLP): NLP focuses on the interaction between computers and humans using natural language. It enables machines to understand, interpret, and generate human-like text, enabling applications such as language translation, chatbots, and sentiment analysis.
          </li>
          <li className="List">
          Computer Vision: This involves enabling machines to interpret and make decisions based on visual data. Computer vision is used in facial recognition, object detection, and image and video analysis.
          </li>
          <li className="List">
          Reinforcement Learning: This involves training a machine learning model to make sequences of decisions by providing feedback in the form of rewards or punishments.
          </li>
          <li className="List">
           Automation: AI systems can automate repetitive tasks, leading to increased efficiency and reduced human workload. </li>
          <li className="List">
           Processing Speed: AI processes information much faster than humans, facilitating quicker decision-making.
          </li>
          <li className="List"> 
          Ethical Concerns:
          Ethical considerations arise in the use of AI, particularly in sensitive areas like privacy, surveillance, and the potential development of autonomous weapons.
          </li>
          {/* <li className="List">
           Security Risks:
           AI systems can be vulnerable to adversarial attacks, where malicious actors manipulate input data to deceive the system or compromise its performance.
          </li> */}
          </p>
          </div> 
        </div>
        <div className="chatFooter">
          <input className="input"type="text" placeholder="Enter Your Message"/>
          <button  className="send">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
