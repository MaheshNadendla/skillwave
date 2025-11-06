// import React, { useEffect, useRef, useState } from "react";
// import ProfileAndLogin from "./ProfileAndLogin";
// import { TiStar } from "react-icons/ti";


// import { LogOut as LogOutIcon, UserCircle as UserCircleIcon } from "lucide-react";

// export default function Navbar() {


//   const [signupData, setSignupData] = useState({
//     name: "John Doe",
//     picture: "https://i.pravatar.cc/150?img=3",
//     isSubscribed: false,
//   });

//   const [signupDropDownVisible, setSignupDropDownVisible] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setSignupDropDownVisible(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);




  

//   return (
//     <nav    className="shadow-md"
//   style={{
//     background: "linear-gradient(90deg, #8e2de2 0%, #4a00e0 100%)",
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "1.2rem",
//     padding: "0.75rem 1.5rem",
//     borderRadius: "0.5rem"
//   }}
// >
//   {/* Navbar content */}
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
//         <h1 className="text-2xl font-bold ">Skillwave</h1>
//         <div className="space-x-6">
//           <a href="/" className="nav-link-custom   text-dark p-3 text-decoration-none fw-bold hover">
//             Home
//           </a>
//           <a href="/courses" className=" text-dark text-decoration-none p-3  fw-bold">
//             Courses
//           </a>


//           {/* <a href="/login" className= " text-dark p-3 text-decoration-none fw-bold">
//             Login
//           </a> */} 


//            <div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>
//               <button
//                 type="button"
//                 className="position-relative bg-transparent border-0 p-0"
//                 onClick={() => setSignupDropDownVisible(!signupDropDownVisible)}
//               >
//                 <img
//                   src={signupData.picture}
//                   alt={signupData.name || "User profile"}
//                   className="rounded-circle border-2 object-fit-cover"
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderColor: "#a855f7",
//                     objectFit: "cover",
//                   }}
//                 />
//               </button>

//                 {signupDropDownVisible && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       right: 0,
//                       top: "100%",
//                       marginTop: "0.75rem",
//                       width: "15rem",
//                       backgroundColor: "white",
//                       borderRadius: "0.5rem",
//                       boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//                       border: "1px solid #e5e7eb",
//                       overflow: "hidden",
//                       zIndex: 50,
//                       padding: "10px",
//                     }}
//                   >
//                       {true ? (
                        
//                         <>
//                           {signupData.isSubscribed ? (
//                             <div
//                               style={{
//                                 padding: "0.75rem 1rem",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "0.75rem",
//                                 backgroundColor: "#fff7ed", // light orange bg
//                                 color: "#c2410c", // text-orange-700
//                                 border: "1px solid black",
//                                 marginBottom : "0.5rem"

//                               }}
//                             >
//                               <TiStar size={20} />
//                               <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>Premium User</span>
//                             </div>
//                           ) : (
//                             <button
//                               onClick={() => setSignupDropDownVisible(false)}
//                               style={{
//                                 width: "100%",
//                                 padding: "0.75rem 1rem",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "0.75rem",
//                                 backgroundColor: "transparent",
//                                 border: "1px solid black",
//                                 color: "#374151",
//                                 cursor: "pointer",
//                                 transition: "background-color 0.2s ease-in-out",
//                                 marginBottom : "0.5rem"
//                               }}
//                               onMouseEnter={(e) => {
//                                 e.currentTarget.style.backgroundColor = "#faf5ff"; // purple hover
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.currentTarget.style.backgroundColor = "transparent";
//                               }}
//                             >
//                               <TiStar size={20} color="#f97316" /> {/* orange-500 */}
//                               <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Upgrade to Pro</span>
//                             </button>
//                           )}

//                           <button
//                             onClick={() => {
//                               console.log("handle logout");
//                             }}
//                             style={{
//                               width: "100%",
//                               padding: "0.75rem 1rem",
//                               display: "flex",
//                               alignItems: "center",
//                               gap: "0.75rem",
//                               backgroundColor: "transparent",
//                               border: "1px solid black",
//                               color: "#374151",
//                               cursor: "pointer",
//                               transition: "background-color 0.2s ease-in-out",
//                             }}
//                             onMouseEnter={(e) => {
//                               e.currentTarget.style.backgroundColor = "#fef2f2"; // red-50
//                             }}
//                             onMouseLeave={(e) => {
//                               e.currentTarget.style.backgroundColor = "transparent";
//                             }}
//                           >
//                             <LogOutIcon size={20} color="#ef4444" /> {/* red-500 */}
//                             <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Logout</span>
//                           </button>
//                         </>


//                         ): 
//                         (<div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             gap: "10px",
//                             padding: "0.6rem 1rem",
//                             color: "#3c4043",
//                             fontSize: "0.9rem",
//                             fontWeight: 500,
//                             backgroundColor: "#fff",
//                             border: "1px solid #dadce0",
//                             borderRadius: "8px",
//                             cursor: "pointer",
//                             boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
//                             transition: "all 0.2s ease-in-out",
//                           }}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
//                             e.currentTarget.style.backgroundColor = "#f8f9fa";
//                           }}
//                           onMouseLeave={(e) => {
//                             e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";
//                             e.currentTarget.style.backgroundColor = "#fff";
//                           }}
//                         >
//                           <img
//                             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//                             alt="Google logo"
//                             style={{
//                               width: "18px",
//                               height: "18px",
//                             }}
//                           />
//                           <span>Continue with Google</span>
//                         </div>

//                       )}
//                   </div>
//                 )}

//             </div>
          


         
            
        


//         </div>
//       </div>
//     </nav>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import { TiStar } from "react-icons/ti";
import { LogOut as LogOutIcon ,UserCircle as UserCircleIcon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../slices/authSlice.jsx";




import { authenticateWithGoogle } from "../services/authService.jsx";

import { setSignupData, setToken } from "../slices/authSlice.jsx";


import { GoogleLogin } from "@react-oauth/google";
import {useNavigate} from 'react-router-dom'


export default function Navbar() {

  const googleButtonRef = useRef(null);

   const dispatch = useDispatch();
    const { signupData } = useSelector((state) => state.auth);
    const navigate = useNavigate()



   const triggerGoogleLogin = () => {
    const googleBtn = googleButtonRef.current?.querySelector('div[role="button"]');
    if (googleBtn) googleBtn.click();

    console.log("triggered")
  };


   const handleLoginSuccess = async (response) => {
    const token = response.credential;

    try {
      const res = await authenticateWithGoogle(token);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch(setToken(res.data.token));
      dispatch(setSignupData(res.data.user));

      setSignupDropDownVisible(false)

      console.log("res : ",res)

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }

    console.log("you r trying to login");

  };


  const handleLogout = () => {
    dispatch(logout());
    setSignupDropDownVisible(false)
    navigate("/");
  };



  // const [signupData, setSignupData] = useState({
  //   name: "John Doe",
  //   picture: "JohnDoe.jpg",
  //   isSubscribed: false,
  // });

  const [signupDropDownVisible, setSignupDropDownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSignupDropDownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ---------- CSS VARIABLES ----------
  const navStyle = {
    background: "linear-gradient(90deg, #8e2de2 0%, #4a00e0 100%)",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    padding: "0.75rem 1.5rem",
    borderBottomLeftRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
  };

  const dropdownWrapper = {
    position: "relative",
    display: "inline-block",
  };

  const userImageStyle = {
    width: "50px",
    height: "50px",
    borderColor: "#a855f7",
    objectFit: "cover",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    right: 0,
    top: "100%",
    marginTop: "0.75rem",
    width: "15rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    zIndex: 50,
    padding: "10px",
  };

  const premiumBox = {
    padding: "0.75rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "#fff7ed",
    color: "#c2410c",
    border: "1px solid black",
    marginBottom: "0.5rem",
  };

  const upgradeBtn = {
    width: "100%",
    padding: "0.75rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "transparent",
    border: "1px solid black",
    color: "#374151",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
    marginBottom: "0.5rem",
  };

  const logoutBtn = {
    width: "100%",
    padding: "0.75rem 1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    backgroundColor: "transparent",
    border: "1px solid black",
    color: "#374151",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  };

  const googleBtn = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "0.6rem 1rem",
    color: "#3c4043",
    fontSize: "0.9rem",
    fontWeight: 500,
    backgroundColor: "#fff",
    border: "1px solid black",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease-in-out",
  };
  // --------------------------------------

  return (
    <nav className="shadow-md" style={navStyle}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <h1 className="text-2xl font-bold">Skillwave</h1>

        <div className="space-x-6">
          <a href="/" className="nav-link-custom text-dark p-3 text-decoration-none fw-bold">
            Home
          </a>
          <a href="/courses" className="text-dark text-decoration-none p-3 fw-bold">
            Courses
          </a>

          {/* User Dropdown */}
          <div ref={dropdownRef} style={dropdownWrapper}>
            <button
              type="button"
              className="position-relative bg-transparent border-0 p-0"
              onClick={() => setSignupDropDownVisible(!signupDropDownVisible)}
            >
             
              {signupData ? (
                <img
                   src={signupData.picture  }
                    alt={signupData.name || "User profile"}
                    className="rounded-circle border-2 object-fit-cover"
                    style={userImageStyle}
                />

              ) : (
                <UserCircleIcon size={30} className="text-purple-700 hover:text-purple-900" />
              )}


            </button>

            {signupDropDownVisible && (
              <div style={dropdownMenuStyle}>
                {signupData ? (
                  <>
                    {signupData.isSubscribed ? (
                      <div style={premiumBox} >
                        <TiStar size={20} />
                        <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>
                          Premium User
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => {setSignupDropDownVisible(false); console.log("clicked on premimum option")}}
                        style={upgradeBtn}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#faf5ff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <TiStar size={20} color="#f97316" />
                        <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                          Upgrade to Pro
                        </span>
                      </button>
                    )}

                    <button
                      onClick={() => handleLogout()}
                      style={logoutBtn}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#fef2f2";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <LogOutIcon size={20} color="#ef4444" />
                      <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        Logout
                      </span>
                    </button>
                  </>
                ) : (

                  <>
                    <div
                      style={googleBtn}
                      onClick={triggerGoogleLogin}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.1)";
                        e.currentTarget.style.backgroundColor = "#fff";
                      }}
                    >
                      <img
                        src="google.svg"
                        alt="Google logo"
                        style={{ width: "18px", height: "18px" }}
                      />
                      <span>Continue with Google</span>
                    </div>

                      <div ref={googleButtonRef} className="hidden" style={{ position: "absolute", left: "-9999px" } }> 
                        
                        <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log("Login Failed")} />
                        
                      </div>
                  </>

                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

