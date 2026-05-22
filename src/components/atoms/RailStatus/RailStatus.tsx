import './rail-status.css';

export interface RailStatusProps {
  label?: string;
  value?: string;
}

export function RailStatus({ label = 'Status', value = 'Available' }: RailStatusProps) {
  return (
    <div className="rail-status" aria-label={`${label}: ${value}`}>
      <span className="rail-status__label">{label}</span>
      <span className="rail-status__value">
        <span className="rail-status__dot" aria-hidden="true" />
        {value}
      </span>
    </div>
  );
}
