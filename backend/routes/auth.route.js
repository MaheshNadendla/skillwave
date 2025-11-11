import express from 'express'
import googleAuth from '../controllers/authController.js'
import checkAuth from '../middlewares/userAuthMiddleware.js';

const router = express.Router();

router.post("/google", googleAuth);

router.get("/check", checkAuth, async (req, res) => {
  try {
    res.status(200).json({
      message: "Authenticated",
      user: req.user,
    });
  } catch (error) {
    console.error("Auth check error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


// router.post("/refresh", checkAuth, async (req, res) => {
//   try {
//     const user = req.user;

//     // Create new token
//     const newToken = jwt.sign(
//       {
//         id: user.id,
//         googleId: user.google_id,
//         name: user.name,
//         email: user.email,
//         picture: user.picture,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({
//       message: "Token refreshed successfully ✅",
//       token: newToken,
//     });
//   } catch (error) {
//     console.error("Token refresh error:", error.message);
//     res.status(500).json({ message: "Could not refresh token" });
//   }
// });




export default router;
