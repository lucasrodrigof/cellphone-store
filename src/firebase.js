import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCwnDvB_rNB5BP2sOoyR63mVothH9uJjdo",
  authDomain: "cellphone-store-59e76.firebaseapp.com",
  projectId: "cellphone-store-59e76",
  storageBucket: "cellphone-store-59e76.appspot.com",
  messagingSenderId: "73779128492",
  appId: "1:73779128492:web:b8cd8d0c076170f91bd709"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
