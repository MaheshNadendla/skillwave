// middlewares/checkAuth.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { supabase } from "../configs/database.js";

dotenv.config();

const checkAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const token = authHeader.split(" ")[1];

    console.log("token : ",token)

    // Verify the JWT 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decoded : ",decoded)

    // Verify the user still exists in Supabase
    const { data: user, error } = await supabase
      .from("users") 
      .select("*")
      .eq("google_id", decoded.googleId)
      .maybeSingle();

    if (error) {
      console.error("Supabase error:", error.message);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (!user) {
      return res.status(401).json({ message: "User not found in database" });
    }

    // Attach user info to the request
    req.user = user;

    next(); // Continue to the next middleware or controller
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default checkAuth;
