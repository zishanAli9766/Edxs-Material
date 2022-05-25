import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "./Fires";
import './Fire.css'

function Fiires() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(true);
    const [emailError, setEmailError] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log("zsiah", error.message,setEmailError(error.message));
        }
        setRegisterEmail('')
        setRegisterPassword('')
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            setLoginEmail("");
            setLoginPassword("");
        } catch (error) {
            console.log('sadfeae', error.message);
        }
    
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="login">
           
            <div className="loginContainer">
                {
                    hasAccount ? (
                        <>
                            <div>
                                <h3>FireBase Login </h3>
                                <br /><br />
                                <input
                                    placeholder="Email..."
                                    onChange={(event) => {
                                        setLoginEmail(event.target.value);
                                    }}
                                />
                                <p></p>
                                <input
                                    placeholder="Password..."
                                    onChange={(event) => {
                                        setLoginPassword(event.target.value);
                                    }}
                                />
                                 <div className="btnContainer">
                                <button  onClick={login}> Login</button>
                                 </div>
                            </div>
                            <p>
                                Don't Have an Account ?
                                <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <div>
                                <h3>FireBase Register User </h3>
                                <br /><br />
                                <input
                                    placeholder="Email..."
                                    onChange={(event) => {
                                        setRegisterEmail(event.target.value);
                                    }}
                                />
                                <input
                                    placeholder="Password..."
                                    onChange={(event) => {
                                        setRegisterPassword(event.target.value);
                                    }}
                                />
                                <div className="btnContainer">

                                    <button onClick={register}> Create User</button>
                                </div>
                            </div>
                            <p>
                                Have an Account ?
                                <span onClick={() => setHasAccount(!hasAccount)}> Sign In</span>
                            </p>
                        </>
                    )
                }
               

                <button onClick={logout}> Sign Out </button>
                <br /><br />
                <h4> User Logged In:  {user?.email}</h4>
               
            </div>
        </div>
    );
}

export default Fiires;