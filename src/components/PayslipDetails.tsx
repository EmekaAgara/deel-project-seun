import { useParams } from "react-router-dom";
import { payslipslist } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex items-center justify-center h-screen flex-col">
      <CardHeader>
        <CardTitle> Your Pay Slip {payslip.id}</CardTitle>
      </CardHeader>
      <CardDescription className="pb-4">
        You can view, manage and export your payslips here.
      </CardDescription>

      <Card className="w-full max-w-lg p-6 ">
        <CardHeader>
          <CardTitle>Pay Slip ID: {payslip.id}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Name:</div>
            <div>{payslip.name}</div>
            <div className="font-medium">Job Title:</div>
            <div>Software Engineer</div>
            <div className="font-medium">Pay Period:</div>
            <div>{payslip.duration}</div>
          </div>
          <Separator />
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Gross Pay:</div>
            <div>{payslip.Grosspay}</div>
            <div className="font-medium">Taxes:</div>
            <div>{payslip.taxes}</div>
            <div className="font-medium">Net Pay:</div>
            <div>$4,250.00</div>
          </div>
        </CardContent>
      </Card>
      <Button className="mt-4 p-7" onClick={downloadPayslip}>
        Download Payslip
      </Button>
    </div>
  );
};

export default PayslipDetails;
