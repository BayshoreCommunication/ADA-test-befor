export type Toast = {
    id: string
    title?: string
    description?: string
    action?: React.ReactNode
    variant?: "default" | "destructive"
}

import { useCallback, useMemo, useState } from "react"

let listeners: Array<(toasts: Toast[]) => void> = []
let toastsStore: Toast[] = []

function notify() {
    for (const l of listeners) l(toastsStore)
}

export function useToast() {
    const [, setVersion] = useState(0)

    const subscribe = useCallback((cb: (toasts: Toast[]) => void) => {
        listeners.push(cb)
        cb(toastsStore)
        return () => {
            listeners = listeners.filter((l) => l !== cb)
        }
    }, [])

    useMemo(() => {
        return subscribe(() => setVersion((v) => v + 1))
    }, [subscribe])

    const toast = useCallback((t: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).slice(2)
        toastsStore = [...toastsStore, { id, ...t }]
        notify()
        return id
    }, [])

    const dismiss = useCallback((id: string) => {
        toastsStore = toastsStore.filter((t) => t.id !== id)
        notify()
    }, [])

    return {
        toasts: toastsStore,
        toast,
        dismiss,
    }
}
