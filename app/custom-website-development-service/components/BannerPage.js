'use client';
import Image from "next/image"




export default function BannerPage() {
    return (
        <>
            <section
                className="change-image container-fluid  d-md-block mt-3  d-flex flex-column justify-content-center position-relative overflow-hidden px-0"
   
                style={{
                    minHeight: '85vh',
                    backgroundImage: "url('/web/main.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center ',
                    backgroundSize: "cover",
                    // backgroundSize: 'contain',


                }}
                >
                {/* Mobile Image - Visible only on xs/sm */}
                <div className="d-block d-md-none position-relative" style={{ height: "399px" }}>

                    <Image
                        src="/web/cus-mobile.png"
                        fill
                        alt="hero Banner"
                        className="object-fit-cover"
                    />
                    <div
                        className="d-flex position-absolute justify-content-center align-items-center"
                        style={{ top: "20px", left: "30px" }}
                    >
                        <h1 className="fw-bold " style={{ fontWeight: "900" }} >Custom Website That Build Authority and Drive Action.</h1>

                    </div>

                </div>
                <div className="container ">
                    <div className="hero-box">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1 className="fs-1 d-none d-md-block "
                                    style={{ fontWeight: 1000 }}
                                >Custom Website That Build Authority and Drive Action.</h1>

                                <p className="high-per mt-sm-0 fw-bold fs-6 " >
                                    High performance website or Strategic digital platforms engineered for clarity, usability and measurable growth.

                                </p>

                                <div className=" bt-container mt-1 pt-4 d-flex flex-column flex-sm-row  gap-3 mt-2 ms-md-1  me-5 mb-0">
                                    <button className="btn text-dark" style={{ backgroundColor: "yellow", width: "60%" }}>
                                        View Our Portfolio →
                                    </button>

                                    <button className="btn text-dark" style={{ backgroundColor: "yellow", width: "60%" }}>
                                        Work With Us →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rectangle 178 - Yellow Accent Bar */}

            </section>


            <div
                style={{
                    width: "100%",
                    height: "40px",
                    background: "#eff430",
                    borderBottom: "20px solid #000",
                }}
            ></div>

        </>
    );
}
