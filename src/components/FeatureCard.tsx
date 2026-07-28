import "../styles/components/FeatureCard.css";

type FeatureCardProps = {
  num: string;
  title: string;
  body: string;
  mobileOrder: number;
  delay: string;
};

export default function FeatureCard({ num, title, body, mobileOrder, delay }: FeatureCardProps) {
  return (
    <div
      className="feature-card"
      style={{ "--mobile-order": mobileOrder, "--float-delay": delay } as React.CSSProperties}
    >
      <div className="feature-badge">{num}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
