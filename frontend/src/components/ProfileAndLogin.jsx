import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import { LogOut as LogOutIcon, UserCircle as UserCircleIcon } from "lucide-react";

export default function ProfileAndLogin() {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "John Doe",
    picture: "https://i.pravatar.cc/150?img=3",
    isSubscribed: false,
  });

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    setSignupData(null);
    setShowUserDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowUserDropdown((prev) => !prev)}
        className="flex items-center justify-center hover:text-purple-950 transition-colors rounded-full"
        aria-expanded={showUserDropdown}
        aria-label="User menu"
      >
        {signupData ? (
          <img
            src={signupData.picture}
            alt={signupData.name || "User profile"}
            className="w-25 h-25 rounded-full border-2 border-purple-400 object-cover"
            />

        ) : (
          <UserCircleIcon size={30} className="text-purple-700 hover:text-purple-900" />
        )}
      </button>

      {showUserDropdown && (
        <div className="absolute right-0 top-full mt-3 w-48 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-50">
          {signupData ? (
            <>
              {signupData.isSubscribed ? (
                <div className="px-4 py-3 flex items-center gap-3 bg-orange-50 text-orange-700 border-b border-gray-100">
                  <TiStar size={20} />
                  <span className="text-sm font-semibold">Premium User</span>
                </div>
              ) : (
                <Link
                  to="/payment"
                  onClick={() => setShowUserDropdown(false)}
                  className="px-4 py-3 flex items-center gap-3 hover:bg-purple-50 transition-colors text-gray-700 border-b border-gray-100"
                >
                  <TiStar size={20} className="text-orange-500" />
                  <span className="text-sm font-medium">Upgrade to Pro</span>
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 transition-colors text-gray-700"
              >
                <LogOutIcon size={20} className="text-red-500" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </>
          ) : (
            <div className="p-3 text-gray-700 text-sm font-medium">
              {/* <GoogleSignInButton /> */}
              Login with Google
            </div>
          )}
        </div>
      )}
    </div>
  );
}
