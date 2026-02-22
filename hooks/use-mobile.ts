"use client"

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const query = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

        const update = () => setIsMobile(query.matches)
        update()

        if (typeof query.addEventListener === "function") {
            query.addEventListener("change", update)
            return () => query.removeEventListener("change", update)
        } else if (typeof (query as any).addListener === "function") {
            ; (query as any).addListener(update)
            return () => (query as any).removeListener(update)
        }

        const onResize = () => update()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [breakpoint])

    return isMobile
}


