# Chat App with React Native

**Objective:**

To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.


**Key Features**

**User Authentication & Customization:**

Users can enter their name and choose a background color for the chat screen before joining the conversation.

**Chat Interface:**

A real-time chat interface with the ability to send and receive messages.

**Media Sharing:**

Users can share images from their device gallery.

**Location Sharing:**

Users can share their current geographical location with others.

**Offline Support:**

The app stores messages and other data offline, allowing users to interact with the app even without an internet connection.

**Technologies Used**

React Native: Framework for building mobile apps using JavaScript and React.

Expo: A toolchain built around React Native that makes it easier to develop and deploy apps.

Firebase Firestore: A NoSQL cloud database from Google for storing and syncing data in real time.

Firebase Authentication: For user authentication and managing user sessions.

React Navigation: For handling navigation between different screens of the app.

React Native Image Picker: For selecting and uploading images from the device.

React Native Geolocation: For accessing the device's geolocation to share the current location.

**Installation**

**Prerequisites:**

Node.js (>=12.x)
npm or Yarn
Expo CLI (can be installed globally)

**Setup Instructions**
Clone the repository: git clone https://github.com/Bhavanipenugonda/chatapp.git cd chatapp

**Install dependencies:** Make sure to have [Node.js v18.20.4] (https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) installed. Then run this command in a terminal to install the dependencies in the project folder: npm install Then install the Expo CLI as a global dependency (if you haven't already): npm install -g expo-cli

**Configure Firebase:** Go to Firebase Console, create a new project, and add a web app. Then copy your Firebase config credentials. Finally, add them to the "Firebase credentials" section of the "App.js" file: const firebaseConfig = { apiKey: "YOUR_API_KEY", authDomain: "YOUR_AUTH_DOMAIN", projectId: "YOUR_PROJECT_ID", storageBucket: "YOUR_STORAGE_BUCKET", messagingSenderId: "YOUR_MESSAGING_SENDER_ID", appId: "YOUR_APP_ID"}

**Run the app locally:** npm run start




**Screens**

1. Welcome Screen
Users can enter their name and select a background color for the chat screen.

2. Chat Screen
Displays a conversation with messages sent by users in real time.
Features an input field to type messages and a submit button to send them.
Users can share images from their device's gallery and their current location.

3. Offline Functionality
When the user is offline, messages are cached locally and will be sent once the connection is restored.


**GitHub link:**

https://github.com/BhavaniPenugonda/chatapp.git