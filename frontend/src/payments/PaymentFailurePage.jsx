import { AlertCircle, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentFailurePage = () => {
  // Dummy error details
  const errorDetails = {
    reason: "Network Error",
    cardLastFour: "1234",
    timestamp: new Date().toLocaleString(),
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-4"
      style={{
        background: "linear-gradient(135deg, #fef2f2, #ffe4e6)", // from-red-50 to-rose-50
      }}
    >
      <div
        className="bg-white rounded-4 shadow-lg text-center w-100"
        style={{ maxWidth: "450px", padding: "2rem" }}
      >
        {/* Icon */}
        <AlertCircle
          size={80}
          className="text-danger mb-4"
          style={{ margin: "0 auto", display: "block" }}
        />

        {/* Title and Description */}
        <h1 className="h3 fw-bold text-dark mb-3">Payment Failed</h1>
        <p className="text-muted mb-4">
          We couldn't process your transaction
        </p>

        {/* Error Details */}
        <div
          className="bg-light rounded-3 p-3 mb-4"
          style={{ textAlign: "left" }}
        >
          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Error Reason</span>
            <span className="fw-semibold text-danger">{errorDetails.reason}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Card Used</span>
            <span className="fw-semibold">
              **** **** **** {errorDetails.cardLastFour}
            </span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="text-secondary">Timestamp</span>
            <span className="fw-semibold">{errorDetails.timestamp}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-3">
          {/* Try Again */}
          <Link
            to="/payment"
            className="btn flex-fill d-flex align-items-center justify-content-center text-white fw-semibold"
            style={{
              backgroundColor: "#dc3545",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.75rem 0",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#bb2d3b")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
          >
            <RefreshCcw size={18} className="me-2" />
            Try Again
          </Link>

          {/* Continue to Dashboard */}
          <Link
            to="/dashboard"
            className="btn flex-fill text-white fw-semibold"
            style={{
              backgroundColor: "#6c757d",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.75rem 0",
              transition: "background-color 0.2s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5c636a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c757d")}
          >
            Continue to Dashboard
          </Link>
        </div>
      </div>
    </div>

  );
};

export default PaymentFailurePage;
