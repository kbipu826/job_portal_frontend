import React from 'react';

interface CounterBlockProps {
  count: string;
  label: string;
}

const CounterBlock = ({ count, label }: CounterBlockProps) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="counter-outer-two">
        <div className="icon-content">
          <div className="tw-count-number site-text-white">
            <span className="counter">{count}</span>+
          </div>
          <p className="icon-content-info">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBlock;