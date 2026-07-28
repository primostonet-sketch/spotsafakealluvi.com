import { useState } from "react";
import "../styles/components/SerialCheck.css";

export default function SerialCheck() {
  const [seal, setSeal] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // PHASE 2: verification
  }

  return (
    <form className="serial-check" onSubmit={handleSubmit} data-connector="target">
      <label htmlFor="seal-input" className="serial-label">
        Verify your inspection seal number
      </label>
      <div className="serial-field">
        <span className="serial-hash accent" aria-hidden="true">
          #
        </span>
        <input
          id="seal-input"
          className="serial-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
          placeholder="Enter seal number"
          value={seal}
          onChange={(e) => setSeal(e.target.value)}
        />
        <button type="submit" className="btn btn-solid serial-submit">
          Verify
        </button>
      </div>
    </form>
  );
}
