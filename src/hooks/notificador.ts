import { TipoNotificacao } from "@/interfaces/INotificacoes"
import { NOTIFICAR } from "@/store/tipo-mutacoes"
import { store } from '@/store'


type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void
}

export default () : Notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string) : void => {
        store.commit(NOTIFICAR, {
            titulo,
            texto,
            tipo
        })
    }

    return {
        notificar
    }
}