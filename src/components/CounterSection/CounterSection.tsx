import CounterBlock from "./CounterBlock";

const CounterSection = () => {
    return (
      <div className="section-full p-t0 p-b0 site-bg-white twm-counter-page-5-wrap">
        <div className="container">
          <div className="twm-company-approch5-outer">
            <div
              className="twm-company-approch5"
              style={{ backgroundImage: 'url(images/home-5/ctr-bg.jpg)' }}
            >
              <div className="row">
                {/* Block 1 */}
                <CounterBlock count="25" label="Completed Cases" />
                {/* Block 2 */}
                <CounterBlock count="17" label="Our Office" />
                {/* Block 3 */}
                <CounterBlock count="86" label="Skilled People" />
                {/* Block 4 */}
                <CounterBlock count="28" label="Happy Client" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CounterSection;