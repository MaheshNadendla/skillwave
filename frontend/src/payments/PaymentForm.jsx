import { useState } from "react";
import { CreditCard, Lock, X, ShieldCheck, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 
import { apiConnector } from "../services/apiConnectors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const  PaymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const { signupData, token } = useSelector((state) => state.auth);

  const [errors, setErrors] = useState({});
  const [paymentLoader, setPaymentLoader] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!formData.cardName.trim()) {
      newErrors.cardName = "Name on card is required";
    }

    if (
      !formData.expiryMonth ||
      parseInt(formData.expiryMonth) < 1 ||
      parseInt(formData.expiryMonth) > 12
    ) {
      newErrors.expiryMonth = "Invalid month";
    }

    const currentYear = new Date().getFullYear() % 100;
    if (!formData.expiryYear || parseInt(formData.expiryYear) < currentYear) {
      newErrors.expiryYear = "Invalid year";
    }

    if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (validateForm()) {
  //       setPaymentLoader(true); // Start loader when payment processing starts
  //       toast.loading("Processing your payment...", {
  //         duration: 3000, // This will automatically hide the toast after 3 seconds
  //       });

  //       setTimeout(() => {
  //         setPaymentLoader(false); // Stop loader after 3 seconds (simulating payment processing)
  //         console.log("Payment processing...", formData);
  //         navigate("/payment-success");
  //       }, 3000);
  //     }
  //   };

  const handleSubmit = async (e) => {

    console.log(" Trying to Pay : request is sent to backend for payment processing ")
    e.preventDefault();
    if (validateForm()) {
      try {
        setPaymentLoader(true);
        // toast.loading("Processing your payment...", { duration: 3000 });

        const paymentPayload = {
          email: signupData.email, // You'll need to pass the user's email
          cardNumber: formData.cardNumber,
          cardName: formData.cardName,
          expiryMonth: formData.expiryMonth,
          expiryYear: formData.expiryYear,
          cvv: formData.cvv,
          amount: "₹499.00", // The price of the course/subscription
        };

        const response = await apiConnector(
          "POST",
          "/payment/process-payment",
          paymentPayload
        );

        if (response.data?.failed) { 
          toast.error("Already subscribed");
          setPaymentLoader(false);
          navigate("/dashboard");
        } else if (response.data.subscriptionStatus) {
          toast.success("Payment successful! You are now subscribed.");
          setPaymentLoader(false);
          navigate("/payment-success");
        } else {
          toast.error("Payment failed. Please try again.");
          navigate("/payment-failure");
        }
      } catch (error) {
        console.error("Payment error:", error);
        toast.error(
          error.response?.data?.message || "Payment processing failed"
        );
        navigate("/payment-failure");
      } finally {
        setPaymentLoader(false);
      }
    }
  };

  const Modal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
      <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1050,
      // marginTop: "2rem",
    }}
  >
    <div
      className="bg-white rounded-4 p-4 shadow-lg w-100"
      style={{ maxWidth: "400px" }}
    >
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="h5 fw-semibold text-dark mb-0">
          Cancel Transaction
        </h3>
        <button
          onClick={onClose}
          className="btn p-0 border-0 bg-transparent text-secondary"
          style={{ cursor: "pointer" }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Alert icon and text */}
      <div className="text-center mb-4">
        <AlertCircle
          size={48}
          className="text-warning mb-3"
        />
        <p className="text-muted mb-0">
          Are you sure you want to cancel this transaction? This action cannot
          be undone.
        </p>
      </div>

      {/* Buttons */}
      <div className="d-flex gap-3">
        <button
          onClick={onClose}
          className="btn flex-fill border rounded-3 bg-light text-secondary"
          style={{
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e9ecef")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f8f9fa")}
        >
          Keep Payment
        </button>

        <Link
          to="/payment-failure"
          onClick={() => {
            setShowCancelModal(false);
          }}
          className="btn flex-fill text-white rounded-3"
          style={{
            backgroundColor: "#dc3545",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#bb2d3b")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
        >
          Cancel Payment
        </Link>
      </div>
    </div>
  </div>
    );
  };  
  //  if(paymentLoader){
  //     return (
  //         <div>
  //              const toastId = toast.loading('Processing your request...', {
  //       duration: Infinity, // This makes the toast stay visible until explicitly dismissed
  //     });
  //         </div>
  //     )
  //  }
  return (
   <div
  className={`min-vh-100 mt-0 d-flex align-items-center justify-content-center p-3 ${
    paymentLoader ? "opacity-50" : ""
  }`}
  style={{
    background: "linear-gradient(135deg, #eff6ff, #e0e7ff)",
  }}
>
  <div
    className={`w-100 bg-white rounded-4 shadow-lg overflow-hidden ${
      paymentLoader ? "opacity-50" : ""
    }`}
    style={{ maxWidth: "450px" }}
  >
    <div
      className="p-4"
      style={{
        background: "linear-gradient(to right, #7c3aed, #4f46e5)",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <h2 className="h4 fw-bold text-white mb-0">Payment Details</h2>
        <p className=" h5 text-white fw-bold mb-0">Skill Wave</p>
      </div>
      <p className="text-light mt-2 mb-0">
        Complete your payment securely
      </p>
    </div>

    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {/* Card Number */}
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label fw-medium">
            Card Number 
          </label>
          <div className="position-relative">

            <div
              className="input-group rounded-3 py-1"
              style={{
                border: `2px solid ${
                  errors.cardNumber ? "#dc3545" : "#d1d5db" // red-500 or gray-300
                }`,
                borderRadius: "0.5rem",
                overflow: "hidden",
                transition: "all 0.2s ease",
                boxShadow: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#3b82f6"; // blue focus
                e.currentTarget.style.boxShadow = "0 0 0 0.2rem rgba(59,130,246,0.25)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = errors.cardNumber
                  ? "#dc3545"
                  : "#d1d5db";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span
                className="input-group-text bg-white border-0"
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                }}
              >
                <CreditCard className="text-secondary" />
              </span>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="form-control border-0 shadow-none"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
            </div>

            {errors.cardNumber && (
              <div className="text-danger small mt-1 d-flex align-items-center">
                <AlertCircle className="me-1" />
                {errors.cardNumber}
              </div>
            )}

          </div>
        </div>

        {/* Name on Card */}
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label fw-medium">
            Name on Card
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            className={`form-control py-2 border-2 rounded-3 ${
              errors.cardName ? "border-danger" : "border-secondary-subtle"
            }`}
            placeholder="John Doe"
          />
          {errors.cardName && (
            <div className="text-danger small mt-1 d-flex align-items-center">
              <AlertCircle className="me-1" />
              {errors.cardName}
            </div>
          )}
        </div>

        {/* Expiry + CVV */}
        <div className="row g-3">
          <div className="col-4">
            <label htmlFor="expiryMonth" className="form-label fw-medium">
              Month
            </label>
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              value={formData.expiryMonth}
              onChange={handleInputChange}
              className={`form-control py-2 border-2 rounded-3 ${
                errors.expiryMonth ? "border-danger" : "border-secondary-subtle"
              }`}
              placeholder="MM"
              maxLength="2"
            />
          </div>
          <div className="col-4">
            <label htmlFor="expiryYear" className="form-label fw-medium">
              Year
            </label>
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleInputChange}
              className={`form-control py-2 border-2 rounded-3 ${
                errors.expiryYear ? "border-danger" : "border-secondary-subtle"
              }`}
              placeholder="YY"
              maxLength="2"
            />
          </div>
          <div className="col-4">
            <label htmlFor="cvv" className="form-label fw-medium">
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              className={`form-control py-2 border-2 rounded-3 ${
                errors.cvv ? "border-danger" : "border-secondary-subtle"
              }`}
              placeholder="123"
              maxLength="4"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="pt-4">
          <div className="d-flex gap-3">
            <button
              type="button"
              onClick={() => setShowCancelModal(true)}
              className="btn btn-light flex-fill border-secondary-subtle"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn text-white flex-fill d-flex align-items-center justify-content-center border-secondary-subtle "
              style={{
                background: "linear-gradient(to right, #7c3aed, #4f46e5)",
              }}
            >
              <Lock className="me-2" />
              Pay Securely
            </button>
          </div>

          {/* Security Note */}
          <div className="bg-light border mt-4 p-3 rounded-3 d-flex align-items-center">
            <ShieldCheck className="text-primary me-2" />
            <p className="mb-0 small text-primary">
              Your payment information is encrypted and secure
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Modal
    isOpen={showCancelModal}
    onClose={() => setShowCancelModal(false)}
    onConfirm={() => {
      console.log("Transaction cancelled");
      setShowCancelModal(false);
    }}
  />
</div>

  );
};

export default PaymentForm;
