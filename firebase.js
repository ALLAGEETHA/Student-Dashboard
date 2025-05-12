import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUR79mjVr0AHk79CTY69IhA19ryh75koQ",
    authDomain: "student-dashboard-7cd72.firebaseapp.com",
    projectId: "student-dashboard-7cd72",
    appId: "1:146222545272:web:c72ac0728c54e3e6a8f08d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export { auth };
