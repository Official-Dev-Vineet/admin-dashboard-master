import "./monthlyChanges.css";
import Card from "./Card";

const MonthlyChanges = () => {
  return (
    <div className="monthly-changes">
      <div className="up">
        <Card
          title="Total Subscription"
          number={Math.floor((Math.random() + 1) * 999) + 3999}
          description="From Last 24 Hours"
        />
        <Card
          title="Order status"
          number={Math.floor((Math.random() + 1) * 999) + 3999}
          description="From Last 6 Months"
        />
      </div>
      <div className="down">
        <div className="comments">
          <div className="comment-info">
            <h3>{Math.floor(Math.random() * 900)}</h3>
            <p>Total Comment</p>
            <span className="percent">{Math.floor(Math.random() * 99)}%</span>
          </div>
        </div>
        <div className="comments">
          <div className="comment-info">
            <h3>${Math.floor(Math.random() * 9900)}</h3>
            <p>Income status</p>
            <span className="percent">{Math.floor(Math.random() * 99)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyChanges;
