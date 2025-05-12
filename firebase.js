import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTGEZqOhDSzK-wBJLicia2dkMcoW4_UhU",
  authDomain: "pokedex-registerandlogin.firebaseapp.com",
  projectId: "pokedex-registerandlogin",
  storageBucket: "pokedex-registerandlogin.appspot.com",
  messagingSenderId: "969354609962",
  appId: "1:969354609962:web:18abe6eb2d7ba6f49aca53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
