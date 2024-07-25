import React from "react";
import { useParams } from "react-router-dom";
import { payslipslist } from "@/lib/data";
import { Button } from "@/components/ui/button";

const PayslipDetails = () => {
  const { id } = useParams<{ id: string }>();
  const payslip = payslipslist.find((p) => p.id === id);

  const downloadPayslip = () => {
    if (payslip) {
      const link = document.createElement("a");
      link.href = payslip.file;
      link.download = `payslip-${payslip.id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!payslip) {
    return <div>Payslip not found!</div>;
  }

  return (
    <div>
      <h1>Payslip Details</h1>
      <p>ID: {payslip.id}</p>
      <p>Name: {payslip.name}</p>
      <p>Gross Pay: {payslip.Grosspay}</p>
      <p>Taxes: {payslip.taxes}</p>
      <p>Duration: {payslip.duration}</p>
      <Button onClick={downloadPayslip}>Download Payslip</Button>
    </div>
  );
};

export default PayslipDetails;
