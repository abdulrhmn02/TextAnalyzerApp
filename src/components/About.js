import React from "react";

export default function About(props) {
  const { mode } = props;

  const myStyle = {
    backgroundColor: mode === "dark" ? "black" : "white",
    color: mode === "dark" ? "white" : "black",
    border: "2px solid black",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                mode === "dark" ? "dark-mode-button" : "light-mode-button"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse show ${
              mode === "dark" ? "dark-mode" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                <strong>1. Convert to Upper Case:</strong> Instantly convert all
                the text to upper case with a single click, making it perfect
                for headings or shouting out a message.
              </p>
              <p>
                <strong>2. Convert to Lower Case:</strong> Change all text to
                lower case effortlessly, ideal for making text more uniform and
                easier to read.
              </p>
              <p>
                <strong>3. Copy to Clipboard:</strong> Copy your processed text
                to the clipboard with one click, ready to be pasted wherever you
                need it.
              </p>
              <p>
                <strong>4. Remove Extra Spaces:</strong> Eliminate unnecessary
                spaces from your text to ensure clean and professional-looking
                content.
              </p>
              <p>
                <strong>5. Capitalize First Letter:</strong> Automatically
                convert the first letter of each sentence to capital, enhancing
                readability and adherence to grammatical standards.
              </p>
              <p>
                <strong>6. Clear Text:</strong> Quickly clear all the text from
                the input area, allowing you to start fresh with new content.
              </p>
              <p>
                <strong>7. Word, Character, and Sentence Count:</strong> View
                real-time statistics of your text, including the number of
                words, characters, and sentences. This feature is particularly
                useful for writers who need to meet specific length
                requirements.
              </p>
              <p>
                <strong>8. Dark Mode and Light Mode:</strong> Switch between
                dark and light themes to suit your preference and reduce eye
                strain. The dark mode is perfect for low-light environments,
                while the light mode is ideal for well-lit surroundings.
              </p>
              <p>
                <strong>9. Auto Dismissing Alerts:</strong> Receive alerts that
                automatically dismiss themselves, keeping you informed of
                changes like mode switches without interrupting your workflow.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                mode === "dark" ? "dark-mode-button" : "light-mode-button"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Why Use Text Analyzer?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${
              mode === "dark" ? "dark-mode" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                <strong>Efficiency:</strong> <br />
                Save time with quick text transformations and manipulations,
                allowing you to focus on the content rather than formatting.
              </p>
              <p>
                <strong>User-Friendly:</strong> <br />
                The intuitive interface ensures that you can access and utilize
                all features effortlessly, even if you're not tech-savvy.
              </p>
              <p>
                <strong>Productivity:</strong> <br />
                Enhance your productivity by using a single tool for various
                text operations instead of switching between multiple
                applications.
              </p>
              <p>
                <strong>Customization:</strong> <br />
                Tailor the appearance of the app to your liking with the dark
                and light mode options, making it comfortable for extended use.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                mode === "dark" ? "dark-mode-button" : "light-mode-button"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>How to Use</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${
              mode === "dark" ? "dark-mode" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                Simply type or paste your text into the input area and use the
                buttons provided to perform the desired operations. Watch the
                real-time statistics update as you edit your text. Switch
                between dark and light modes using the radio buttons, and
                receive alerts about your actions without any disruption.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              // className="accordion-button collapsed fw-bold"
              className={`accordion-button ${
                mode === "dark" ? "dark-mode-button" : "light-mode-button"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={myStyle}
            >
              <strong>About the Developer</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className={`accordion-collapse collapse ${
              mode === "dark" ? "dark-mode" : ""
            }`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p>
                I created this React app as part of my journey to learn and
                understand React and its concepts. Text Analyzer is my first
                React project, and it has been a tremendous learning experience.
                Through this project, I aimed to grasp the basics of React,
                including component-based architecture, state management, and
                routing. Developing Text Analyzer has not only helped me improve
                my coding skills but also taught me the importance of user
                experience and interface design. I hope this app serves as a
                helpful tool for anyone in need of quick and efficient text
                manipulation and analysis. Thank you for using Text Analyzer.
                Your feedback is valuable to me as I continue to learn and
                improve my skills.
              </p>
              <strong><p>Contact Me  Through email   <a href="mailto:abdulrhmn4137@gmail.com">E-Mail Me</a></p></strong>

              <strong><p>
                Check out the code on{" "}
                <a
                  href="https://github.com/abdulrhmn02/TextAnalyzerApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                
              </p>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
