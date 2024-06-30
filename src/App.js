export default function App() {
  return (
    <div className="container">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="left">
      <div className="header">
        <h2>Mortgage Calculator</h2>
        <button>Clear All</button>
      </div>
      <div className="Form">
        <form>
          <div>
            <label>Mortgage Amount</label>
            <input type="text" placeholder="£" />
          </div>
          <div>
            <div>
              <label>Mortgage Term</label>
              <input type="text" placeholder="Years" />
            </div>
            <div>
              <label>Interest Rate</label>
              <input type="text" placeholder="%" />
            </div>
          </div>
          <div>
            <label>Mortgage Type</label>
          </div>

          <button>📱Calculate Repayment</button>
        </form>
      </div>
    </div>
  );
}

function RightSection() {
  return (
    <div>
      <div>
        <img src="/public/images" alt="" />
        <h3>Results shown here</h3>
        <p>
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
      <div>
        <h3>Your results</h3>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div>
          <p>Your monthly repayments</p>
          <h1></h1>

          <hr />
          <p>Total you'll repay over the term </p>
          <h4></h4>
        </div>
      </div>
    </div>
  );
}
