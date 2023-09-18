import CriaTabuleiro from "@/components/CriaTabuleiro"
import styles from '@/styles/tabuleiro.module.css'

export default function TabuleiroDama() {
    return (
        <>
            <div className={styles.quadradoPreto}></div>
            <div><CriaTabuleiro css = "quadradoPreto"/></div>
        </>
    )
}