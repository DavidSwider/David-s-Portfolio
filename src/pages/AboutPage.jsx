import profile from "../assets/profilepic.jpg"       // This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <img src= {profile} alt="placeholder" style={{ width: "200px", height: "200px", borderRadius: "20%" }} />
      <p>
      Hi there! I’m David, a passionate Full Stack Engineer with a deep love for coding and problem-solving. My journey in tech started with an eagerness to understand how the web works, and over the years, I’ve honed my skills in both front-end and back-end development. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React and Node.js, I bring the best of both worlds to the table: creating seamless, user-friendly experiences on the front end while ensuring that everything works perfectly behind the scenes.
      </p>
      {/* <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">
                  This theme will look great on any device, no matter the size!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>Bootstrap 5 Ready</h3>
                <p className="lead mb-0">
                  Featuring the latest build of the new Bootstrap 5 framework!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <p>
      I believe that great software is built through collaboration and continuous learning. That’s why I’m always seeking to expand my knowledge and take on new challenges. Whether it’s optimizing performance, building scalable applications, or crafting beautiful user interfaces, I’m all about making sure the technology serves its purpose—solving real problems and creating value for users.
      </p>
    </div>
  );
}
