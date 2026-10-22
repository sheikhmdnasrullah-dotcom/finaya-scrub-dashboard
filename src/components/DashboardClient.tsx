"use client";

import { useEffect, useRef } from "react";
import * as DashboardApp from "@/lib/dashboardApp";

export default function DashboardClient() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Smoothly initialize event listeners and interactive canvas after initial paint
    const timer = setTimeout(() => {
      try {
        DashboardApp.init();
      } catch (err) {
        console.error("Finaya Dashboard client init error:", err);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
