import styles from "./navbar.module.scss";
import "../DarkMode/darkmode.scss";

export default function Navbar({ themeHandler, theme }) {
  return (
    <>
      <header className={`${theme} ${styles.main_navbar}`}>
        <div className="background">
          <nav className={`${styles.sub_nav}`}>
            <div className={styles.two_side_logo}>
              <h1 className="text">Where in the world?</h1>
            </div>
            <div className={styles.two_side_darkmode}>
              <div className={styles.icon_darkmode}>
                {theme === "light" ? (
                  <i onClick={themeHandler} className="fa fa-adjust"></i>
                ) : (
                  <i
                    onClick={themeHandler}
                    className={`${styles.moon_icon} fa fa-moon-o`}
                  ></i>
                )}
              </div>
              <p className="text">Dark Mode</p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
