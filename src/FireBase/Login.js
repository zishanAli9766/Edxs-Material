import React from 'react'

function Login({ email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError, handlelogout }) {
    return (
        <>
            <div className='login'>
                <div className='loginContainer'>
                    <label > Username</label>
                    <input type="text" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label > Password</label>
                    <input type="password" required autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className='errorMsg'> {passwordError}</p>

                    <div className="btnContainer">
                        {
                            hasAccount ? (
                                <>
                                    <button onClick={handleLogin}>Sign In</button>
                                    <p>an Account ?
                                        <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p></>
                            ) : (<> <button onClick={handleSignup}>Sign Up</button>
                                <p> Have an Account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                                </p>
                            </>
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login