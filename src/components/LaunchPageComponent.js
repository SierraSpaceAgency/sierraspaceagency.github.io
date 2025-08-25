import React, { Component } from "react";
import "./LaunchPageComponent.css";

class LaunchPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
    };
  }

  handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("launch@sierraspaceagency.com");
      this.setState({ showTooltip: true });
      setTimeout(() => {
        this.setState({ showTooltip: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "launch@sierraspaceagency.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      this.setState({ showTooltip: true });
      setTimeout(() => {
        this.setState({ showTooltip: false });
      }, 2000);
    }
  };

  render() {
    return (
      <section className="LaunchPage">
        <main className="LaunchPageMainContent">
          <img
            className="LaunchPageGradientImage"
            src="black-gradient.png"
            alt=""
          />
          <p className="LaunchPageMainContentTitle">Ready to launch?</p>
          <p className="LaunchPageMainContentText TitleText">Make it happen</p>
          <div
            className="ContentScroller"
            onClick={() => this.props.onLaunchClick()}
          >
            <p className="ContentScrollerTitle">{"LAUNCH"}</p>
            <img
              className="ContentScrollerImage"
              src="arrow-launch.png"
              alt="Scroll down"
            />
          </div>
          {this.props.launched ? (
            <div className="LaunchedEmail">
              <p>
                You can also email us at{" "}
                <a
                  href="mailto:launch@sierraspaceagency.com"
                  className="LaunchedEmailLink"
                >
                  launch@sierraspaceagency.com
                </a>
                <button
                  className="CopyButton"
                  onClick={this.handleEmailClick}
                  title="Copy email to clipboard"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    fill="currentColor"
                  >
                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
                    <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                  </svg>
                  {this.state.showTooltip && (
                    <div className="CopyTooltip">Copied to clipboard!</div>
                  )}
                </button>
              </p>
            </div>
          ) : null}
        </main>
        <img
          className="LaunchPageMountainRange"
          src="mountain-range.png"
          alt=""
        />
      </section>
    );
  }
}

export default LaunchPageComponent;
