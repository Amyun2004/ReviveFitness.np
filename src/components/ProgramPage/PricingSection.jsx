// src/components/ProgramPage/PricingSection.jsx
import styles from './PricingSection.module.css'; // Import the new module CSS

export default function ProgramPricingSection() {
  return (
    <section id="programs" className={styles.programsSection}>
      <h2 className="heading">Our <span>Programs</span> & Pricing</h2>
      <div className={styles.programsContainer}>
        {/* Admission Fee */}
        <div className={styles.programBox}>
          <h3>Admission Fee</h3>
          <p>Rs. 1,000</p>
        </div>

        {/* Regular Membership */}
        <div className={styles.programBox}>
          <h3>Regular Membership</h3>
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
                <th>1 Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GYM</td>
                <td>4,000</td>
                <td>10,500</td>
                <td>18,000</td>
                <td>30,000</td>
              </tr>
              <tr>
                <td>GYM & Cardio</td>
                <td>5,000</td>
                <td>12,000</td>
                <td>21,000</td>
                <td>36,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Daytime Membership */}
        <div className={styles.programBox}>
          <h3>Daytime Membership (10AM - 4PM)</h3>
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>1 Month</th>
                <th>3 Months</th>
                <th>6 Months</th>
                <th>1 Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GYM & Cardio</td>
                <td>4,000</td>
                <td>10,500</td>
                <td>18,000</td>
                <td>30,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Personal Training */}
        <div className={styles.programBox}>
          <h3>Personal Training</h3>
          <table>
            <thead>
              <tr>
                <th>Sessions</th>
                <th>Price (Rs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Session</td>
                <td>2,500</td>
              </tr>
              <tr>
                <td>12 Sessions</td>
                <td>15,000</td>
              </tr>
              <tr>
                <td>16 Sessions</td>
                <td>20,000</td>
              </tr>
              <tr>
                <td>20 Sessions</td>
                <td>25,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Locker Charge */}
        <div className={styles.programBox}>
          <h3>Locker Charges</h3>
          <table>
            <thead>
              <tr>
                <th>Duration</th>
                <th>Price (Rs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Month</td>
                <td>500</td>
              </tr>
              <tr>
                <td>3 Months</td>
                <td>1,200</td>
              </tr>
              <tr>
                <td>6 Months</td>
                <td>1,800</td>
              </tr>
              <tr>
                <td>1 Year</td>
                <td>2,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* One Day Pass */}
        <div className={styles.programBox}>
          <h3>One Day Pass</h3>
          <p>Rs. 500</p>
        </div>
      </div>
    </section>
  );
}