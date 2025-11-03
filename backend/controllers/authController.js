import verifyGoogleTokenAndCreateUser  from "../services/authService.js";

// Controller function to handle Google login
const googleAuth = async (req, res) => {
  const { token } = req.body; // Token sent by the frontend


  try {
    // Verify the token and create/get user from Supabase
    const { user, jwtToken } = await verifyGoogleTokenAndCreateUser(token);


    // Respond with user data and JWT token
     res.status(200).json({
      user: {
        id: user._id,
        googleId: user.google_id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        
      },
      token: jwtToken,
    });

    // console.log("User authenticated:", user);
  } catch (error) {
    console.error("Error in Google login:", error.message);
    res.status(400).json({ message: error.message });
  }
};

export default googleAuth;
