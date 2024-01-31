import CardTask from "@/components/cardTask/cardTask";
import { CardHandler } from "@/components/cardHandler/cardHandler";
import { CardsListVariant } from "@/components/cardList/cardList";
import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.main}>
      <CardTask title="Работу выполнила: " description="Макаркина Василина П-31"></CardTask>
      <Typography variant='h3' color='textSecondary' style={{ marginBottom: '12px', textAlign: "center" }}>Задача</Typography>
      <CardHandler />
      <CardsListVariant />
    </div>
  );
}
