const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/jobin724">
        <i className="fa-brands fa-github" aria-hidden="true" title="Jobin Jose' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/jobin-jose-5344b4255">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Jobin Jose' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Jobin Jose' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Jobin Jose' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
