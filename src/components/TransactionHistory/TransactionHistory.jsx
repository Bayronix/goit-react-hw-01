import React from "react";
import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ transaction }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {transaction.map(({ id, type, amount, currency }) => (
          <tr className={styles.trbox} key={id}>
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{amount}</td>
            <td className={styles.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
