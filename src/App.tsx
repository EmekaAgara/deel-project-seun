import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payslips from "./components/Payslips";
import PayslipDetails from "./components/PayslipDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/payslip" element={<Payslips />} />
      <Route path="/payslip/:id" element={<PayslipDetails />} />
    </Routes>
  </Router>
);

export default App;
