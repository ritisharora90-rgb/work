export default function Hero() {
  return (
    <section className="container-fluid hero">
      <div className="container-fluid px-0 py-5">
        <div className="hero-box">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <h1 className="pt-3"  style={{fontSize:32}}>
                Technology Built for the <br />
                Way People Actually Work
              </h1>

              <p style={{fontSize:16}}>
                We bridge the gap between complex engineering and human<br/>
                intuition to build tech that users actually enjoy using.
              </p>

            <button className="custom-btn me-2">
  View Our Portfolio
</button>

<button className="custom-btn">
  Work With Us
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
