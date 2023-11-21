export const pageStaticData = {
  tblHeadings: [
    { name: "Sn", sortBy: "", width: "width40" },
    {
      name: "Date",
      sortBy: "date",
      width: "width100",
      search: { type: "date", parameter: "date" },
    },
    {
      name: "B2B Return ID",
      sortBy: "grnId",
      width: "width100",
      search: { type: "text", parameter: "grnId" },
    },
    {
      name: "Reference ID",
      sortBy: "referenceId",
      width: "width100",
      search: { type: "text", parameter: "referenceId" },
    },
    {
      name: "Customer Name",
      sortBy: "customerName",
      width: "width200",
      search: { type: "text", parameter: "customerName" },
    },
    { name: "Customer ID", sortBy: "customerId", width: "width150" },
    { name: "Return GRN Amount", sortBy: "totalAmount", width: "width150" },
    { name: "Status", sortBy: "returnGrnStatus", width: "width100" },
    { name: "Action", sortBy: "", width: "width100" },
  ],
  bodyState: "",
  moduleUrl: "",
  apiUrl: "getAllReturnB2BGrn",
};
