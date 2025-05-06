import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import styles from "./ListItem.module.css"
import ListItemLayout from "./ListItemLayout"
import Badge from "../components/Badge"
dayjs.extend(relativeTime)

export default function ListItem({
  checked,
  onChangeCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels
  const state = data.state === "open" ? "opend" : "closed"
  const date = data.state === "open" ? data.created_at : data.closed_at

  return (
    <ListItemLayout onChangeCheckBox={onChangeCheckBox} checked={checked}>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((props, idx) => <Badge {...props} key={`${idx}`} />)}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  )
}
