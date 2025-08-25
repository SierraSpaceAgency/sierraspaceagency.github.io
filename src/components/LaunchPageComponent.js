import React, { Component } from "react";
import "./LaunchPageComponent.css";

class LaunchPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      countdownActive: false,
      countdownNumber: null,
      animationKey: 0,
    };
    this.countdownInterval = null;
  }

  componentWillUnmount() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
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

  handleInitiateClick = () => {
    if (this.state.countdownActive) return; // Prevent multiple countdowns

    this.setState({
      countdownActive: true,
      countdownNumber: 3,
      animationKey: this.state.animationKey + 1,
    });

    // Start countdown: 3, 2, 1 with dramatic timing
    this.countdownInterval = setInterval(() => {
      this.setState((prevState) => {
        const nextNumber = prevState.countdownNumber - 1;
        if (nextNumber === 0) {
          clearInterval(this.countdownInterval);
          this.countdownInterval = null;
          // Launch after brief pause
          setTimeout(() => {
            this.props.onLaunchClick();
            // Reset countdown state
            setTimeout(() => {
              this.setState({
                countdownActive: false,
                countdownNumber: null,
                animationKey: 0,
              });
            }, 1000);
          }, 700);
          return { countdownNumber: null };
        }
        return {
          countdownNumber: nextNumber,
          animationKey: prevState.animationKey + 1,
        };
      });
    }, 1400); // Matches animation duration
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
          <p
            className={`LaunchPageMainContentTitle ${
              this.state.countdownActive
                ? "launch-sequence-hidden"
                : "launch-sequence-visible"
            }`}
          >
            Reach out. We like talking shop on big problems.
          </p>
          <p
            className={`LaunchPageMainContentText TitleText ${
              this.state.countdownActive && this.state.countdownNumber !== null
                ? "countdown-active"
                : ""
            }`}
            key={this.state.animationKey}
          >
            {this.state.countdownActive && this.state.countdownNumber !== null
              ? this.state.countdownNumber
              : this.state.countdownActive
              ? "."
              : "Ready for launch"}
          </p>
          <div
            className={`ContentScroller ${
              this.state.countdownActive
                ? "launch-sequence-hidden"
                : "launch-sequence-visible"
            }`}
            onClick={this.handleInitiateClick}
          >
            <p className="ContentScrollerTitle">{"INITIATE"}</p>
            <img
              className="ContentScrollerImage"
              src="arrow-launch.png"
              alt="Scroll down"
            />
          </div>
          {this.props.launched ? (
            <div
              className={`LaunchedEmail ${
                this.state.countdownActive
                  ? "launch-sequence-hidden"
                  : "launch-sequence-visible"
              }`}
            >
              <p>
                If your browser blocked the email window, you can email us at{" "}
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
          src="night-mountains.png"
          alt=""
        />
      </section>
    );
  }
}

export default LaunchPageComponent;
