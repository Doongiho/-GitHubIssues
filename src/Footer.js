import styles from "./Footer.module.css"

const footerItems = [
  {
    title: "Terms",
    link: "https://docs.github.com/site-policy/github-terms/github-terms-of-service",
  },
  {
    title: "Privacy",
    link: "https://docs.github.com/site-policy/privacy-policies/github-privacy-statement",
  },
  { title: "Security", link: "https://github.com/security" },
  { title: "Status", link: "https://www.githubstatus.com/" },
  { title: "Docs", link: "https://docs.github.com/" },
  { title: "Contact", link: "https://support.github.com?tags=dotcom-footer" },
  { title: "Manage cookies", type: "button" },
  { title: "Do not share my personal information", type: "button" },
]

export default function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}
