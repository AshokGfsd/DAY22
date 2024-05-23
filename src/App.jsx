import "./App.css";
const Card1 = () => {
  return (
    <span className="card">
      <div className="card1">
        <center>
          <h5 className="deactive1">FREE</h5>
          <h1>$0/month</h1>
        </center>
        <h5 className="active">&#9989;  Single User</h5>
        <h5 className="active">&#9989;  50GB Storage</h5>
        <h5 className="active">&#9989;  Unlimited Public Projects</h5>
        <h5 className="active">&#9989;  Community Access</h5>
        <h5 className="deactive">&#10062;  Unlimited Private Projects</h5>
        <h5 className="deactive">&#10062;  Dedicated Phone support</h5>
        <h5 className="deactive">&#10062;  Free Subdomain</h5>
        <h5 className="deactive">&#10062;  Monthly Status Reports</h5>
      <center><button className="btn">BUY</button></center>
      </div>
    </span>
  );
};
const Card2 = () => {
  return (
    <span className="card">
      <div className="card1">
        <center>
          <h5 className="deactive1">PLUS</h5>
          <h1>$9/month</h1>
        </center>
        <h5 className="active">&#9989;  Single User</h5>
        <h5 className="active">&#9989;  50GB Storage</h5>
        <h5 className="active">&#9989;  Unlimited Public Projects</h5>
        <h5 className="active">&#9989;  Community Access</h5>
        <h5 className="active">&#10062;  Unlimited Private Projects</h5>
        <h5 className="active">&#10062;  Dedicated Phone support</h5>
        <h5 className="active">&#10062;  Free Subdomain</h5>
        <h5 className="deactive">&#10062;  Monthly Status Reports</h5>
        <center><button className="btn">BUY</button></center>
      </div>
    </span>
  );
};
const Card3 = () => {
  return (
    <span className="card">
      <div className="card1">
        <center>
          <h5 className="deactive1">PRO</h5>
          <h1>$49/month</h1>
        </center>
        <h5 className="active">&#9989;  Single User</h5>
        <h5 className="active">&#9989;  50GB Storage</h5>
        <h5 className="active">&#9989;  Unlimited Public Projects</h5>
        <h5 className="active">&#9989;  Community Access</h5>
        <h5 className="active">&#10062;  Unlimited Private Projects</h5>
        <h5 className="active">&#10062;  Dedicated Phone support</h5>
        <h5 className="active">&#10062;  Free Subdomain</h5>
        <h5 className="active">&#10062;  Monthly Status Reports</h5>
      <center><button className="btn">BUY</button></center>
      </div>
    </span>
  );
};
function App() {
  return (
    <>
      <span className="container">
        <Card1 />
        <Card2 />
        <Card3 />
      </span>
    </>
  );
}

export default App;
