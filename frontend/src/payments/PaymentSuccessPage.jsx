import React from "react";
import { TiStar } from "react-icons/ti";
import { CheckCircle2, Download } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { Link } from "react-router-dom";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2563EB",
    textTransform: "uppercase",
    borderBottom: "2px solid #2563EB", // Adding a border below the header
    paddingBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottom: "1px solid #e0e0e0", // Add borders to rows
    paddingVertical: 8,
  },
  cell: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
  },
  value: {
    fontSize: 12,
    color: "#111827",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    color: "#9CA3AF",
  },
  contactInfo: {
    marginTop: 20,
    fontSize: 12,
    textAlign: "center",
    color: "#6B7280",
  },
});

// Receipt PDF Component
const ReceiptPDF = ({ transactionDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>SkillWave Receipt</Text>

      {/* Address and Contact Information */}
      <Text style={styles.contactInfo}>
        SkillWave , 123 St., Some City, 12345
        {"\n"}Phone: (123) 456-7890 | Email: info@skillwave.com
      </Text>

      {/* Transaction Details */}
      <View style={styles.section}>
        <View style={[styles.row, { borderTop: "1px solid #e0e0e0" }]}>
          <Text style={[styles.label, styles.cell]}>Name</Text>
          <Text style={[styles.value, styles.cell]}>
            {transactionDetails.name}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.cell]}>Transaction ID</Text>
          <Text style={[styles.value, styles.cell]}>
            {transactionDetails.transactionId}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.cell]}>Receipt Number</Text>
          <Text style={[styles.value, styles.cell]}>
            {transactionDetails.receiptNo}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.cell]}>Amount Paid</Text>
          <Text style={[styles.value, styles.cell]}>
            {transactionDetails.amount}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.label, styles.cell]}>Date</Text>
          <Text style={[styles.value, styles.cell]}>
            {transactionDetails.date}
          </Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        © 2025 SkillWave. All Rights Reserved.
      </Text>
    </Page>
  </Document>
);

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();
  const { signupData, token } = useSelector((state) => state.auth);
  // Dummy transaction data
  const transactionDetails = {
    name: "abc " || signupData.name,
    transactionId: "AIPA-2024-0532",
    receiptNo: "RCP-8765-4321",
    amount: "Rs : 49,999.00",
    date: new Date().toLocaleDateString(),
  };

  // Function to generate and open the PDF in a new tab
  const handleDownload = async (transactionDetails) => {
    const pdfBlob = await pdf(
      <ReceiptPDF transactionDetails={transactionDetails} />
    ).toBlob();
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center p-4"
      style={{
        background: "linear-gradient(135deg, #ecfdf5, #d1fae5)", // from-green-50 to-emerald-50
        marginTop: "0", // Tailwind's mt-14
      }}
    >
      <div
        className="bg-white rounded-4 shadow-lg text-center w-100"
        style={{ maxWidth: "450px", padding: "2rem" }}
      >
        {/* Success Icon */}
        <CheckCircle2
          size={80}
          className="text-success mb-4"
          style={{ margin: "0 auto", display: "block" }}
        />

        {/* Title and Subtitle */}
        <h1 className="h3 fw-bold text-dark mb-3">Payment Successful!</h1>
        <p className="text-muted mb-4">Welcome to SkillWave Premimum Members</p> 

        {/* <TiStar size={15} /> */}

        {/* Transaction Details */}
        <div
          className="bg-light rounded-3 p-3 mb-4"
          style={{ textAlign: "left" }}
        >
          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Name</span>
            <span className="fw-semibold">{transactionDetails.name}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Transaction ID</span>
            <span className="fw-semibold">{transactionDetails.transactionId}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Receipt Number</span>
            <span className="fw-semibold">{transactionDetails.receiptNo}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">Amount Paid</span>
            <span className="fw-semibold">{transactionDetails.amount}</span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="text-secondary">Date</span>
            <span className="fw-semibold">{transactionDetails.date}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-3">
          {/* Download Receipt */}
          <button
            onClick={() => handleDownload(transactionDetails)}
            className="btn flex-fill d-flex align-items-center justify-content-center text-white fw-semibold"
            style={{
              backgroundColor: "#198754", // Bootstrap green
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.75rem 0",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#157347")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#198754")}
          >
            <Download size={18} className="me-2" />
            <span>Download Receipt</span>
          </button>

          {/* Continue to Dashboard */}
          <Link
            to="/"
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

export default PaymentSuccessPage;
